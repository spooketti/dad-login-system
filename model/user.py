from init import db, app
import time

class Users(db.Model):
    __tablename__ = "users"
    gmail = db.Column(db.Text, unique=True)
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.Text)
    company = db.Column(db.Text)
    visitTarget = db.Column(db.Text)
    checkInDate = db.Column(db.Text,default=time.time())
    checkOutDate = db.Column(db.Text,default=None)
    
    def update(self, gmail,name,company,visitTarget,checkIn,checkOut):
        
        return "Success"
      
    
def initUserTable():
    with app.app_context():
        db.create_all()