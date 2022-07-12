from flask import Flask
from views import views
import os
from flask_wtf.csrf import CSRFProtect
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
csrf = CSRFProtect(app)

SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
app.register_blueprint(views, url_prefix="/")

DEBUG_APP = (True if os.getenv('DEBUG') == "True" else False)

if __name__ == "__main__":
    app.run(debug=DEBUG_APP)
