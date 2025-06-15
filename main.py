from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory("static","index.html")

app.run(host='0.0.0.0', port=5000)