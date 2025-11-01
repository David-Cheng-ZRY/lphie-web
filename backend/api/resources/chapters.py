from flask_restful import reqparse, fields

# Fields (Data Formating for Marshaling)
chaptersFields = {
    'Order': fields.Integer,
    'Letter': fields.String,
    'University': fields.String
}
chapters_parser = reqparse.RequestParser() # Most likely not going to be used
chapters_parser.add_argument('Order', type=int, required=True, help="Contact Admin")
chapters_parser.add_argument('Letter', type=str, required=True, help="Contact Admin")
chapters_parser.add_argument('University', type=str, required=True, help="Contact Admin")
