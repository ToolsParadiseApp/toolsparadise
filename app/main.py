
import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


# Load environment variables from .env file
load_dotenv()

app = FastAPI()

# Mount static files
app.mount("/static", StaticFiles(directory="app/static"), name="static")

# Set up Jinja2 templates
templates = Jinja2Templates(directory="app/templates")

# Import routes (to be implemented in routes.py)
try:
    from . import routes  # noqa: F401
except ImportError:
    pass

@app.get("/", include_in_schema=False)
def root():
    return {"message": "Welcome to ToolsParadise!"}
