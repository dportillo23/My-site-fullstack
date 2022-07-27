from flask import Blueprint, render_template, redirect, url_for, send_file
from form import MyForm
from functions import auto_respond_email

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


# Download CV
@views.route('/download')
def download_cv():
    path = 'static/files/Daniel_Portillo_CV.pdf'
    return send_file(path, as_attachment=True)


# 404 Page
@views.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


# Internal Server Error
@views.errorhandler(500)
def internal_error(e):
    return render_template('errors/500.html'), 500
