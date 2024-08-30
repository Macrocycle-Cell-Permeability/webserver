#!/bin/bash
set -e


echo "Upgrading pip..."
pip install --upgrade pip



echo "Installing other dependencies..."
pip install --no-cache-dir -r requirements.txt

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Build process completed."