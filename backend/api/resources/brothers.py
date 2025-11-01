from flask_restful import reqparse, fields

brothersFields = {
    'Number': fields.Integer,
    'Firstname': fields.String,
    'Nickname': fields.String,
    'Lastname': fields.String,
    'Crossing': fields.Integer,
}

brothers_parser = reqparse.RequestParser()
brothers_parser.add_argument('Number', type=int, required=True)
brothers_parser.add_argument('Firstname', type=str, required=True)
brothers_parser.add_argument('Nickname', type=str, required=True)
brothers_parser.add_argument('Lastname', type=str, required=True)
brothers_parser.add_argument('Crossing', type=int, required=True)
brothers_parser.add_argument('Birthday', type=str, required=False)
