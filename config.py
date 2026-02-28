import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'change-me')


class ProductionConfig(Config):
    ENV = 'production'


class DevelopmentConfig(Config):
    ENV = 'development'
    DEBUG = True
