# Main title

## Server side

Server is built on Python Flask with:

- flask_restful
- flask_cors
- flask_jwt_extended

### Run the server

To run the server: `python api.py`

### Test the server

To test the server, use `httpie`:

```
C:\Users\adrie>http get http://127.0.0.1:5000/list
HTTP/1.0 200 OK
Access-Control-Allow-Origin: *
Content-Length: 112
Content-Type: application/json
Date: Sat, 08 May 2021 09:09:59 GMT
Server: Werkzeug/1.0.1 Python/3.8.0

[
    {
        "id": 1,
        "item": "bread"
    },
    {
        "id": 2,
        "item": "grapes"
    }
]
```

```
C:\Users\adrie>http post http://127.0.0.1:5000/login username=test password=test
HTTP/1.0 200 OK
Access-Control-Allow-Origin: *
Content-Length: 293
Content-Type: application/json
Date: Fri, 07 May 2021 07:47:50 GMT
Server: Werkzeug/1.0.1 Python/3.8.0

{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyMDM3MzY3MCwianRpIjoiZTRmMDIzMjYtYzhmNS00MTI3LThkMTItMjUzMzUwZDY5MTA2IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InRlc3QiLCJuYmYiOjE2MjAzNzM2NzAsImV4cCI6MTYyMDM3NDU3MH0.F8M38rPW6NCjaF4_Z3rfYAmDsJOzkdD7cQ8CVepNTdw"
}
```

## Front end

Front end is built with React.

### Run the front end

To run the front end: `npm start`
