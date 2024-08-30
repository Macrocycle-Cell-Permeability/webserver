#!/bin/bash
set -e

echo "Python version:"
python --version

echo "Upgrading pip..."
pip install --upgrade pip

echo "Installing numpy separately..."
pip install numpy==1.21.0 --no-binary :all:

echo "Installing other dependencies..."
pip install --no-cache-dir -r requirements.txt

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Build process completed."