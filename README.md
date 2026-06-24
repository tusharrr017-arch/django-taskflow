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

* Login Page
<img width="1501" height="883" alt="image" src="https://github.com/user-attachments/assets/377f4ba6-9712-4a74-a1c4-c58357cb0cc3" />

* Dashboard
<img width="1521" height="901" alt="image" src="https://github.com/user-attachments/assets/d8fa34fe-8ae8-4d4b-b57d-412408ee54b3" />

* Admin View
<img width="1521" height="901" alt="image" src="https://github.com/user-attachments/assets/22a1166e-5371-4076-9d12-87985f455d05" />

* Employee View
<img width="1438" height="706" alt="image" src="https://github.com/user-attachments/assets/cb06491f-3db3-4c61-aa34-93f76d9fbdc5" />

* Task Creation
<img width="1377" height="868" alt="image" src="https://github.com/user-attachments/assets/d5b361bc-d767-49cc-9c33-208b041f2624" />

* Task Management
<img width="1458" height="766" alt="image" src="https://github.com/user-attachments/assets/d2b40e0c-285d-4081-81a6-126f3fea643c" />

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
