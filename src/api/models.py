from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    email = db.Column(db.String(250), unique=True, nullable=False)
    company_name = db.Column(db.String(250), unique=False, nullable=False)
    rol_company = db.Column(db.String(250), unique=False, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    password_hash = db.Column(db.String(800), unique=False, nullable=False)
    salt = db.Column(db.String(800), unique=False, nullable=False)

    # Relacion con Stock

    stock = db.relationship("Stock", back_populates="user")
    #Relación con Cliente

    client = db.relationship("Client", back_populates="user")


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "company_name": self.company_name,
            "rol_company": self.rol_company
            # do not serialize the password, its a security breach
        }

class Stock(db.Model):
    __tablename__ = 'stock'

    id = db.Column(db.Integer, primary_key=True)
    name_Stock = db.Column(db.String(250), unique=False, nullable=False)
    address = db.Column(db.String(250), unique=False, nullable=False)
    rif = db.Column(db.String(250), unique=True, nullable=False)

    # Relacion con User 

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User", back_populates="stock")

    # Relacion Con Product

    product = db.relationship("Product", back_populates="stock")

   


    def __repr__(self):
        return f'<Stock {self.address}>'

    def serialize(self):
        return {
            "id": self.id,
            'name_Stock': self.name_Stock,
            "address": self.address,
            "rif": self.rif,
             "id_user": self.user_id
        }


class Product(db.Model):
    __tablename__ = 'product'

    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(250), unique=False, nullable=False)
    description = db.Column(db.String(250), unique=False, nullable=False)
    item = db.Column(db.String(250), unique=False, nullable=False)
    price = db.Column(db.String(250), unique=False, nullable=False)
    admission_date = db.Column(db.String(250), unique=False, nullable=False)

    
    # Relacion con Stock

    stock_id = db.Column(db.Integer , db.ForeignKey("stock.id"))
    stock = db.relationship("Stock", back_populates="product")
    # Relacion con orden de compra

    buy_order_id = db.Column(db.Integer , db.ForeignKey("buy_order.id"))
    buy_order = db.relationship("Buy_order", back_populates="product")

    def __repr__(self):
        return f'<Product {self.product_name}>'

    def serialize(self):
        return {
            "id": self.id,
            #"user_id": self.stock.user_id,
            "stock_id": self.stock_id,
            "product_name": self.product_name,
            "description": self.description,
            "item": self.item,
            "price": self.price,
            "admission_date": self.admission_date
            #buy_order_id:self.buy_order_id  
        }

class Client(db.Model):
    __tablename__ = 'client'

    id = db.Column(db.Integer, primary_key=True)
    # user_id = db.Column(db.String(250), unique=False, nullable=False)    nose si estas van aqui verificar en las tablas
    # product_id = db.Column(db.String(250), unique=False, nullable=False)
    name_client = db.Column(db.String(250), unique=False, nullable=False)
    email_client = db.Column(db.String(250), unique=True, nullable=False)
    phone_client = db.Column(db.String(250), unique=False, nullable=False)
    address_client = db.Column(db.String(250), unique=False, nullable=False)
    rif_client = db.Column(db.String(250), unique=False, nullable=False)

    
    # Relación con Orden de compra

    buy_order = db.relationship("Buy_order", back_populates="client")

    # Relación con Reporte
    report = db.relationship("Report", back_populates="client")


    #Relación con usuario
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User", back_populates="client")



    def __repr__(self):
        return f'<Client {self.email_client}>'

    def serialize(self):
        return {
            "id": self.id,
            "name_client": self.name_client,
            "email_client": self.email_client,
            "phone_client": self.phone_client,
            "address_client": self.address_client,
            "rif_client": self.rif_client,
            "user_id":self.user_id
        }


class Buy_order (db.Model):
    __tablename__ = 'buy_order'
    id = db.Column(db.Integer, primary_key=True)
    # Relacion con cliente
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"))
    client = db.relationship("Client", back_populates="buy_order")

    # Relacion con orden de compra

    product = db.relationship("Product", back_populates="buy_order")
    
    # Relacion con reporte
    report = db.relationship("Report", back_populates="buy_order")
   

    def __repr__(self):
        return f'<Buy_order {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "client_id":self.client_id
            # do not serialize the password, its a security breach
        }



class Report (db.Model):
    __tablename__ = 'report'
    id = db.Column(db.Integer, primary_key=True)

    # Relación con orden de compra
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"))
    client = db.relationship("Client", back_populates="report")
  
    # Relación con client

    buy_order_id = db.Column(db.Integer, db.ForeignKey("buy_order.id"))
    buy_order = db.relationship("Buy_order", back_populates="report")

    def __repr__(self):
        return f'<Report {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "client_id":self.client_id,
            "buy_order_id":self.buy_order_id
            
            # do not serialize the password, its a security breach
        }