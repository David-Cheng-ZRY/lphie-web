from flask_restful import reqparse, fields
from .brothers import *



rosterFields = {
    'Crossing_Order': fields.Integer,
    'Class': fields.String,
    'Semester': fields.String,
    'Brothers': fields.Nested(brothersFields)
}

