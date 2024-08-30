#!/bin/bash
set -e

echo "Python version:"
python --version

echo "Upgrading pip..."
pip install --upgrade pip

echo "Installing dependencies..."
pip install --no-cache-dir -r requirements.txt

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Build process completed."