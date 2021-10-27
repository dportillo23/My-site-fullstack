from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email


class MyForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()],
                       render_kw={"placeholder": " "})
    email = StringField('Email', validators=[DataRequired(), Email()],
                        render_kw={"placeholder": " "})
    message = TextAreaField('Message', validators=[DataRequired()],
                            render_kw={"placeholder": " "})
    submit = SubmitField("Contact!")
