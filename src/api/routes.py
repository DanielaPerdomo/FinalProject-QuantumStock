"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

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
    
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "message": "an internal error occurred",
            "error": error.args
        }), 500
    return jsonify({}), 201

    