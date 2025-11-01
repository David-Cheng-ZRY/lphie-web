# Use a slim Python image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Copy only requirements first (to leverage Docker cache)
COPY requirements.txt .

# Upgrade pip and install dependencies
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app code
COPY . .

# Expose port 8000
EXPOSE 8000

# Run Gunicorn, using your factory function
CMD ["gunicorn", "api.app:create_app()", "--bind", "0.0.0.0:8000"]
