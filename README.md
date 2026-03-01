# ToolsParadise

A FastAPI-based web application for managing and showcasing useful tools.

## Features
- FastAPI backend
- Jinja2 templating for HTML pages
- SQLite database with SQLAlchemy ORM
- Dockerized for easy deployment


## Environment Variables

This project uses a `.env` file to manage environment variables (such as database URL, secret keys, etc). Copy `.env.example` to `.env` and edit as needed:

```bash
cp .env.example .env
# Then edit .env to set your values
```

The app will automatically load variables from `.env` at startup.

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
1. Install dependencies (after activating the venv):
   ```bash
   pip install -r requirements.txt
   ```
2. Run the app:
   ```bash
   uvicorn app.main:app --reload
   ```
  - `routes.py` - API routes
## Python Virtual Environment
This project uses a Python virtual environment for dependency management. To activate it:

```bash
source .venv/bin/activate
```
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
