from flask_restful import reqparse, fields

# Fields (Data Formating for Marshaling)
crossingFields = {
    'Crossing_Order': fields.Integer,
    'Class': fields.String,
    'Semester': fields.String
}
# Request Parsers
crossing_parser = reqparse.RequestParser()
crossing_parser.add_argument('Crossing_Order', type=int, required=True, help="Hint: Charter Class is 0")
crossing_parser.add_argument('Class', type=str, required=True, help="Missing Name of Class")
crossing_parser.add_argument('Semester', type=str, required=True, help="Missing (Fall/Spring) ##")