from flask import Flask, send_from_directory, request, jsonify
from init import db, app
from model.user import initUserTable, Users

@app.route('/')
def home():
    return send_from_directory("static","index.html")

initUserTable()


@app.route('/signup/',methods=["POST"])
def signup():
    data = request.get_json()
    user = Users(gmail=data["gmail"],name=data["name"],company=data["company"],visitTarget=data["target"]) 
    try:
        db.session.add(user)  
        db.session.commit()
    except Exception as e:
        return jsonify({f"status":"error","details":{str(e)}})
    return jsonify({"status":"Success"})
    

app.run(host='0.0.0.0', port=5000)