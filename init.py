from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask("Dad Server")
cors = CORS(app, supports_credentials=True)
dbURI = 'sqlite:///sqlite.db'
app.config['SQLALCHEMY_DATABASE_URI'] = dbURI
app.config['SECRET_KEY'] = "test" #os.getenv("SECRET_KEY")
db = SQLAlchemy(app)