"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
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
    return jsonify({}), 201

    
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


@api.route("/demo", methods=["GET"])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify(user.serialize()),200   
