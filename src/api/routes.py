"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Stock, Product, Client, Buy_order
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity
from werkzeug.security import generate_password_hash,check_password_hash
import bcrypt



api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



# GESTION DE USUARIOS

# ENDPOINT para crear usuarios 

@api.route('/signup', methods=['POST'])
def handle_singup():
    body = request.json
    name = body.get("name")
    email = body.get("email")
    company_name = body.get("company_name")
    rol_company = body.get("rol_company")
    password = body.get("password")
    salt=str(bcrypt.gensalt(14))
    password_hash=generate_password_hash(password + salt)

    if name is None or email is None or company_name is None or rol_company is None or password is None:
        return jsonify({
            "message": "Name, email, company_name, rol_company, password are required"
        }), 400
    
    new_user = User()
    new_user.name = name
    new_user.email = email
    new_user.company_name = company_name
    new_user.rol_company = rol_company
    new_user.password = password
    new_user.password_hash = password_hash
    new_user.salt=salt
    
    
    try:
        db.session.add(new_user)
        db.session.commit()
    
    except Exception as error:
        print({"message": "an internal error occurred",
            "error": error.args})
        db.session.rollback()
        return jsonify({
            "message": "an internal error occurred",
            "error": error.args
        }), 500
    return jsonify({
        "message": "User created"
    }), 201

    
# ENDPOINT para crear token y logear al usuario

@api.route("/login", methods=["POST"])
def login():
    user_data=request.json
    if user_data.get("email") is None or user_data.get("password") is None:
        return jsonify(
            {
                "message":"email an password required"
            }
        ),400
    email=user_data.get("email")
    password = user_data.get("password")
    user = User.query.filter_by(email=email).one_or_none()
    print(user)
    if user is None:
        return jsonify({
            "message":"credenciales invalidas"
        }),400
   
    password_is_valid= check_password_hash(user.password_hash,password + user.salt)
    
    if not password_is_valid:
         return jsonify({
            "message":"credenciales invalidas"
        }),400
    
    access_token = create_access_token(identity=user.id)
 
    return jsonify({

        "token":access_token
    }),201

# RUTA PROTEGIDA POR JWT

@api.route("/user", methods=["GET"])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify(user.serialize()),200  



# GESTION DEL ALMACEN

# ENDPOINT para crear un nuevo almacen

@api.route("/stock", methods=["POST"]) 
@jwt_required()
def create_almacen():
    user_id = get_jwt_identity()

    body = request.json
    name_Stock = body.get("name_Stock")
    address = body.get("address")
    rif = body.get("rif")

    if name_Stock is None or address is None or rif is None:
        return jsonify({
            "message": "All information are required"
        }), 400
    
    stock = Stock(
        user_id = user_id,
        name_Stock = name_Stock,
        address = address,
        rif = rif
    )
    try:
        db.session.add(stock)
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "message": "ocurrió un error interno",
            "error": error.args
        }), 500
    return jsonify({
        "message": "store created successfully"
    }), 201

# ENDPOINT para obtener informacion del almacen

@api.route("/user/store", methods=['GET'])
@jwt_required()
def handle_get_store():

    user_id = get_jwt_identity()
    store = Stock.query.filter_by(user_id=user_id).one_or_none()
    
    if not store:
       return jsonify({
           "message": "you don't have storage"
       }), 404
    
    return jsonify(store.serialize()), 200


# ENDPOINT para actualizar o editar almacen

@api.route("/stock/<int:stock_id>", methods=["PUT"])
def update_stock(stock_id):
    
    existing_stock = Stock.query.get(stock_id)

    if not existing_stock:
        return jsonify({
            "message": "It has no warehouse"
        }), 400
    
    body = request.json

    existing_stock.name_Stock = body["name_Stock"]
    existing_stock.address = body["address"]

    try:
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "message": "the store was not updated",
            "error": error.args
        }), 400
    
    return jsonify({"message": f"Warehouse {stock_id} updated successfully"})


# ENDPOINT para eliminar almacen

@api.route("/delete/stock", methods=['DELETE'])
@jwt_required()
def delete_stock():
    user_id = get_jwt_identity()

    existing_stock = Stock.query.filter_by(user_id=user_id).one_or_none()

    if not existing_stock:
        return jsonify({
            "message": "The warehouse does not exist"
        }), 400
     
    try:
        db.session.delete(existing_stock)
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "message": "could not delete store",
            "error": error.args
        }), 400
    
    return jsonify({"message": "removed store"}), 200


# GESTION DE PRODUCTOS

# ENDPOINT para crear un nuevo producto


@api.route("/product", methods=["POST"]) 
@jwt_required()
def create_product():

    user_id = get_jwt_identity()

    warehouse_user = Stock.query.filter_by(user_id=user_id).one_or_none()

    if warehouse_user is None:
        return jsonify({
            "message": "No store found for this user"
        }), 400
    
    body = request.json

    product_name = body.get("product_name")
    description = body.get("description")
    item = body.get("item")
    price = body.get("price")
    admission_date = body.get("admission_date")
    
    if product_name is None or description is None or item is None or  price is None or admission_date is None:
        return jsonify({
            "message": "All information are required"
        }), 400
    
    product = Product(
        stock_id = warehouse_user.id,
        product_name = product_name,
        description = description,
        item = item,
        price = price,
        admission_date = admission_date
    )
    try:
        db.session.add(product)
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "message": "Could not create product",
            "error": error.args
        }), 500
    return jsonify({
        "message":"product created successfully"
    }), 201


# ENDPOINT para obtener informacion de productos

@api.route("/products", methods=["GET"])
@jwt_required()
def handle_get_product():
    
    user_id = get_jwt_identity()
    store = Stock.query.filter_by(user_id=user_id).one_or_none()

    if store is None:
        return jsonify({
            "message": "No store found for this user"
        }), 400
    
    products = Product.query.filter_by(stock_id=store.id).all()
    list_of_product = [product.serialize() for product in products]

    return jsonify(list_of_product), 200


# ENDPOINT para actualizar o editar productos

@api.route("/product/<int:product_id>", methods=["PUT"])
def  update_product(product_id):


    existing_product = Product.query.get(product_id)

    if not existing_product:
        return jsonify({
            "message": "the product does not exist"
        }), 400
    
    body = request.json

    existing_product.product_name = body["product_name"]
    existing_product.description = body["description"]
    existing_product.item = body["item"]
    existing_product.price = body["price"]
    existing_product.admission_date = body["admission_date"]
    

    try: 
        db.session.commit()
    except  Exception as error:
        db.session.rollback()
        return jsonify({
            "message": "product not found",
            "error": error.args
            }), 400
        
    return jsonify({"message": f"product {product_id} updated successfully"}), 200


@api.route("/delete/product/<int:product_id>", methods=["DELETE"])
def delete_product(product_id):
    existing_product = Product.query.get(product_id)

    if not existing_product:
        return jsonify({
            "message": "the product does not exist"
        }), 400

    try:
        db.session.delete(existing_product)
        db.session.commit()
    except Exception as error:
        return jsonify({
            "message": "the product cannot be deleted",
            "error": error.args
        }), 400
    
    return jsonify({"message": "removed product"}), 200

    
#  GESTION PARA LOS CLIENTES

# ENDPOINT para crear clientes

@api.route("/client", methods=["POST"])
@jwt_required()
def create_client():
    user_id = get_jwt_identity()
    body = request.json

    name_client = body.get("name_client")
    email_client = body.get("email_client")
    address_client = body.get("address_client")
    phone_client = body.get("phone_client")
    rif_client = body.get("rif_client")

    if name_client is None or email_client is None or address_client is None or phone_client is None or rif_client is None:
        return jsonify({
            "message": "All data is required"
        }), 400
    
    client = Client(
        user_id = user_id,
        name_client = name_client,
        email_client = email_client,
        address_client = address_client,
        phone_client = phone_client,
        rif_client = rif_client
    )

    try:
        db.session.add(client)
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "message": "Could not create client",
            "error": error.args
        }), 400
    
    return jsonify({
        "message": "Client created successfully"
    }), 200

 
# ENDPOINT para traer informacion de los clietnes

@api.route("/clients", methods=["GET"])
@jwt_required()
def get_clients():

    user_id = get_jwt_identity()
    existing_customer = Client.query.filter_by(user_id=user_id).one_or_none()

    if not existing_customer:
        return jsonify({
            "message": "It has no associated clients"
        }), 400
    
    return jsonify(existing_customer.serialize()), 200
    

# ENDPOINT para actualizar clientes

@api.route("/update/client/<int:client_id>", methods=["PUT"])
def update_cliente(client_id):

    existing_customer = Client.query.get(client_id)

    if not existing_customer:
        return jsonify({
            "message": "this client does not exist"
        }), 400
    
    body = request.json

    existing_customer.address_client = body["address_client"]
    existing_customer.email_client = body["email_client"]
    existing_customer.name_client = body["name_client"]
    existing_customer.phone_client = body["phone_client"]

    try:
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "message": "could not update client",
            "error": error.args
        }), 400
    
    return jsonify({
        "message": "updated client"
    }), 200


# ENDPOINT para eliminar clientes

@api.route("/delete/client/<int:client_id>", methods=["DELETE"])
def delete_client(client_id):

    existing_customer = Client.query.get(client_id)

    if not existing_customer:
        return jsonify({
            "message": "this client does not exist"
        }), 400
    
    try:
        db.session.delete(existing_customer)
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "message": "Failed to delete customer",
            "error": error.args
        }), 400
    
    return jsonify({
        "message": "The client has been deleted"
    }), 200

    
""" @api.route("/report/<int:client_id>", methods=["POST"] )
def create_report(client_id): """




# GESTION DE LAS ORDENES DE COMPRA

# ENDPOINT para crear una orden de compra 

@api.route("/purchase/order", methods=["POST"])
@jwt_required()
def create_purchase_order():
    user_id = get_jwt_identity()
    existing_client = Client.query.filter_by(user_id=user_id).one_or_none()

    if not existing_client :
        return jsonify({
            "message": "Engage with an existing customer"
        }), 400

    new_order = Buy_order.query.filter_by(client_id=existing_client)
    body = request.json
        
    return jsonify({
        "message": "purchase order created"
    }), 200 

