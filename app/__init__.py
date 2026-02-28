from flask import Flask
from whitenoise import WhiteNoise
import os


def create_app():
    app = Flask(__name__, static_folder='static', template_folder='templates')
    # prefer config from environment
    from config import ProductionConfig, DevelopmentConfig
    if os.environ.get('FLASK_ENV') == 'development':
        app.config.from_object(DevelopmentConfig)
    else:
        app.config.from_object(ProductionConfig)

    # Register blueprints
    from .routes import bp as main_bp
    app.register_blueprint(main_bp)

    # Serve built static files (app/static/dist) in production via WhiteNoise
    app.wsgi_app = WhiteNoise(app.wsgi_app, root='app/static/dist', prefix='')

    return app
