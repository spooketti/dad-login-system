from init import db, app
from datetime import datetime
from flask import jsonify
class Users(db.Model):
    __tablename__ = "users"
    gmail = db.Column(db.Text)
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.Text)
    company = db.Column(db.Text)
    visitTarget = db.Column(db.Text)
    checkInDate = db.Column(db.Text,default=datetime.now())
    checkOutDate = db.Column(db.Text,default="-1")
    
    def signout(self):
        self.checkOutDate = datetime.now()
        return "good"
      
    
def initUserTable():
    with app.app_context():
        db.create_all()