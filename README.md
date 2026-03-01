# ToolsParadise

A FastAPI-based web application for managing and showcasing useful tools.

## Features
- FastAPI backend
- Jinja2 templating for HTML pages
- SQLite database with SQLAlchemy ORM
- Dockerized for easy deployment

## Getting Started

### Local Development
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Run the app:
   ```bash
   uvicorn app.main:app --reload
   ```

### With Docker
1. Build and run with Docker Compose:
   ```bash
   docker-compose up --build
   ```

2. Access the app at [http://localhost:8000](http://localhost:8000)

## Project Structure
- `app/` - Application code
  - `main.py` - FastAPI entry point
  - `routes.py` - API routes
  - `models.py` - SQLAlchemy models
  - `schemas.py` - Pydantic schemas
  - `database.py` - Database connection
  - `utils.py` - Utility functions
  - `static/` - Static files (CSS, JS, images)
  - `templates/` - Jinja2 HTML templates
- `requirements.txt` - Python dependencies
- `Dockerfile` - Docker image definition
- `docker-compose.yml` - Multi-container orchestration

---

© 2026 ToolsParadise
