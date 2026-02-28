# ToolsParadise

ToolsParadise is a modern web platform that provides daily technical utility tools designed to improve productivity and simplify everyday tasks.

Built with a scalable architecture using Flask and Tailwind CSS, this project is structured for long-term growth and production deployment.

## 🚀 Tech Stack

- **Backend:** Python (Flask)
- **Frontend:** Tailwind CSS
- **Production Server:** Gunicorn
- **CSS Build Tooling:** Node.js + PostCSS
- **Deployment Ready:** WSGI compatible

## 📂 Project Structure

```
toolsparadise/
│
├── app/
│   ├── __init__.py        # App factory
│   ├── routes.py          # Main routes
│   ├── templates/         # Jinja2 templates
│   └── static/            # CSS, JS, assets
│
├── wsgi.py                # Production entry point
├── config.py              # Configuration settings
├── requirements.txt       # Python dependencies
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS config
├── package.json           # Node dependencies
└── Procfile               # Deployment config
```

## 🛠 Local Development Setup

### 1️⃣ Create Python Virtual Environment

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

### 2️⃣ Install Node Dependencies & Build Tailwind CSS

```bash
npm install
npm run build:css
```

For automatic rebuild during development:

```bash
npm run watch:css
```

### 3️⃣ Run Development Server

```bash
flask --app wsgi run --reload
```

Open the local URL shown in the terminal.

## 🏭 Production Deployment

Run using Gunicorn:

```bash
gunicorn wsgi:app --workers 3
```

This project is compatible with:

- Render
- Railway
- Heroku-like platforms
- VPS deployments

## 🎨 Tailwind CSS Notes

- **Input file:** `app/static/css/tailwind.css`
- **Compiled output:** `app/static/dist/styles.css`
- **Templates scanned** via `tailwind.config.js` content paths
- **Unused CSS automatically purged** for optimized production builds

## 🧠 Architecture Philosophy

ToolsParadise follows:

- Modular Flask app structure
- App factory pattern
- Blueprint-ready routing
- Separation of configuration
- Production-first mindset

This ensures scalability for:

- Adding multiple tools
- Authentication system
- Database integration
- API endpoints
- SaaS expansion

## 🌍 Vision

ToolsParadise aims to become a comprehensive ecosystem of technical tools that assist developers, students, and professionals in their day-to-day workflows.

## 📜 License

License will be added in a future update.
