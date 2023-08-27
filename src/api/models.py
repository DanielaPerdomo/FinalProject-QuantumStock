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
    # Relacion con stock 
    Stock = db.relationship("Stock", back_populates="user")
    # Relacion con Product
    Product = db.relationship("Product", back_populates="user")


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
    __tablename__ = "stock"
    id = db.Column(db.Integer, primary_key=True)
   
    address = db.Column(db.String(250), unique=True, nullable=False)
    rif = db.Column(db.String(250), unique=True, nullable=False)
    # Relacion con el user
    user_id = db.Column(db.ForeignKey("user.id"), nullable=True)
    user = db.relationship("User", back_populates="stock")
    # Relacion con Product
    Product = db.relationship("Product", back_populates="stock")
       
    def __repr__(self):
        return f'<Stock {self.company_name}>'     
                
    def serialize(self):
        return {
            "id": self.id,
            "company_name": self.company_name,
            "address": self.address,
            "rif": self.rif,
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    __tablename__ = "product"
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(100), unique=False, nullable=False)
    description = db.Column(db.String(250), unique=False, nullable=False)
    item = db.Column(db.Integer, unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    admission_date = db.Column(db.String(15), unique=False, nullable=False)
    # relacion con stock
    stock_id = db.Column(db.ForeignKey('stock.id'), nullable=False)
    stock = db.relationship("Stock", back_populates="product")
    # Relacion con user
    user_id = db.Column(db.ForeignKey("user.id"), nullable=True)
    user = db.relationship("User", back_populates="product")


