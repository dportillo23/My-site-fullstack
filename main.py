from flask import Flask
from views import views
import os
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
csrf = CSRFProtect(app)


SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
app.register_blueprint(views, url_prefix="/")


if __name__ == "__main__":
    app.run(debug=True)
