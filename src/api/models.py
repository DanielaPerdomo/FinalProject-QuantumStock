from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    email = db.Column(db.String(250), unique=True, nullable=False)
    company_name = db.Column(db.String(250), unique=False, nullable=False)
    rol_company = db.Column(db.String(250), unique=False, nullable=False)
    password_hash = db.Column(db.String(800), unique=False, nullable=False)
    salt = db.Column(db.String(800), unique=False, nullable=False)

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
