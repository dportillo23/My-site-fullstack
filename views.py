from flask import Blueprint, render_template, redirect, url_for
from form import MyForm
from email_function import auto_respond_email

views = Blueprint(__name__, "views")


# Home page
@views.route('/')
def home():
    return render_template('index.html')


# Contact Me page
@views.route('/contact', methods=['GET', 'POST'])
def contact():
    form = MyForm()
    if form.validate_on_submit():
        name = form.name.data
        email = form.email.data
        message = form.message.data
        auto_respond_email(name=name, email=email, message=message)

        return redirect(url_for('views.home'))
    return render_template('contact.html', form=form)
