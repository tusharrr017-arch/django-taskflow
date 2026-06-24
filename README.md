# TaskFlow

A full-stack task management application built with React, Django REST Framework, JWT Authentication, and PostgreSQL.

##  Live Demo

Frontend: https://django-taskflow.vercel.app

Backend API: https://django-taskflow.onrender.com

## Features

* Secure JWT Authentication
* Role-Based Access Control (Admin & Employee)
* Create, Edit, Delete Tasks
* Assign Tasks to Employees
* Mark Tasks as Completed
* Search and Sort Tasks
* Protected Routes
* Automatic Token Refresh
* Responsive Dashboard UI
* PostgreSQL Database Integration

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Router

### Backend

* Django
* Django REST Framework
* Simple JWT

### Database

* PostgreSQL (Neon)

### Deployment

* Vercel (Frontend)
* Render (Backend)

## Architecture

Frontend (Vercel)
↓
React + Axios
↓
Django REST API (Render)
↓
PostgreSQL (Neon)

## User Roles

### Admin

* Create Tasks
* Edit Tasks
* Delete Tasks
* Assign Tasks
* View All Tasks

### Employee

* View Assigned Tasks
* Mark Tasks as Completed

## Screenshots

Add screenshots for:

* Login Page
* Dashboard
* Admin View
* Employee View
* Task Creation
* Task Management

## Local Setup

### Clone Repository

```bash
git clone https://github.com/tusharrr017-arch/django-taskflow.git
cd django-taskflow
```

### Backend Setup

```bash
python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

### Environment Variables

Backend:

```env
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=your_database_url
```

Frontend:

```env
VITE_API_URL=http://127.0.0.1:8000
```

## Project Highlights

* Built a role-based task management system using React and Django REST Framework.
* Implemented JWT Authentication with automatic token refresh.
* Integrated PostgreSQL using Neon.
* Deployed frontend on Vercel and backend on Render.
* Designed reusable React components and protected routes.
* Implemented task assignment, editing, deletion, and completion workflows.

## Author

Tushar Lakhani

GitHub:
https://github.com/tusharrr017-arch

LinkedIn:
https://www.linkedin.com/in/tushar-lakhani-a254ab3a0/

## Live Project

https://django-taskflow.vercel.app
