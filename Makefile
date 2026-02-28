.PHONY: venv install build-css run-dev run-prod

venv:
	python3 -m venv .venv

install: venv
	. .venv/bin/activate && pip install --upgrade pip && pip install -r requirements.txt

build-css:
	npm install
	npm run build:css

run-dev:
	FLASK_ENV=development . .venv/bin/activate && pip install -r requirements.txt && flask --app wsgi run --reload

run-prod:
	gunicorn wsgi:app --workers 3
