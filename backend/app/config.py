"""Configuration settings for the application."""

import os
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings."""
    
    # Database
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "sqlite:///./test.db"
    )
    
    # API
    API_TITLE: str = "Tools Paradise API"
    API_VERSION: str = "1.0.0"
    
    # Environment
    DEBUG: bool = os.getenv("DEBUG", "False").lower() == "true"
    
    class Config:
        env_file = ".env"


settings = Settings()
