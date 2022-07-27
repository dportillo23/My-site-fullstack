from flask import Flask, render_template
from views import views
import os
from flask_wtf.csrf import CSRFProtect
from dotenv import load_dotenv

load_dotenv()

# Create Flask App
app = Flask(__name__)
csrf = CSRFProtect(app)
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY

# Add blueprints
app.register_blueprint(views, url_prefix="/")


@app.errorhandler(404)
def page_not_found(e):
    return render_template('errors/404.html'), 404


DEBUG_APP = (True if os.getenv('DEBUG') == "True" else False)

if __name__ == "__main__":
    app.run(debug=DEBUG_APP)
