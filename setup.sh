#!/bin/bash

echo "Creating ToolsParadise structure..."

mkdir -p ToolsParadise/backend/app
mkdir -p ToolsParadise/frontend/public/icons
mkdir -p ToolsParadise/frontend/src/css
mkdir -p ToolsParadise/frontend/src/js

# Backend files
touch ToolsParadise/backend/app/__init__.py
touch ToolsParadise/backend/app/main.py
touch ToolsParadise/backend/app/database.py
touch ToolsParadise/backend/app/models.py
touch ToolsParadise/backend/app/schemas.py
touch ToolsParadise/backend/app/routes.py
touch ToolsParadise/backend/app/config.py

touch ToolsParadise/backend/tools.db
touch ToolsParadise/backend/requirements.txt
touch ToolsParadise/backend/Dockerfile
touch ToolsParadise/backend/.env

# Frontend files
touch ToolsParadise/frontend/public/index.html
touch ToolsParadise/frontend/public/manifest.json
touch ToolsParadise/frontend/public/service-worker.js
touch ToolsParadise/frontend/public/icons/icon-192.png
touch ToolsParadise/frontend/public/icons/icon-512.png

touch ToolsParadise/frontend/src/css/style.css
touch ToolsParadise/frontend/src/js/app.js
touch ToolsParadise/frontend/src/js/api.js

touch ToolsParadise/frontend/README.md

# Root files
touch ToolsParadise/docker-compose.yml
touch ToolsParadise/.gitignore
touch ToolsParadise/README.md

echo "ToolsParadise structure created successfully 🚀"