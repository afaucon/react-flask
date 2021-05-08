from flask import Flask
from flask import jsonify
from flask import request

from flask_restful import Resource, Api, reqparse

from flask_cors import CORS

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


app = Flask(__name__)
api = Api(app)
CORS(app)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)

internal_resource = {
  "list": [
    { "id": 1, "item": "bread" },
    { "id": 2, "item": "grapes" }
  ]
}

parser = reqparse.RequestParser()
parser.add_argument('item')

class list(Resource):
    def get(self):
        from time import sleep
        sleep(1)
        return internal_resource['list']
    
    def post(self):
        args = parser.parse_args()
        internal_resource['list'].append({
            'id':len(internal_resource['list'])+1,
            'item':args['item']
        })
        # return task, 201

api.add_resource(list, '/list')



# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@app.route("/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if username != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)


# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


if __name__ == '__main__':
    app.run(debug=True)