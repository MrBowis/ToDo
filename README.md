# ToDoList-Django

This is a simple ToDo List application built with Django.

## Prerequisites

- Python 3.x
- pip (Python package installer)
- virtualenv

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ToDoList-Django.git
cd ToDoList-Django
```

### 2. Create and Activate Virtual Environment

You can use the following command to create a virtual environment:
```bash
python -m venv venv
```
Then you can activate the virtual environment using the following command:

Linux/Mac:
```bash
source venv/bin/activate
```
Windows:
```bash
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

## Database Migrations

### 1. Make Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 2. Create Superuser

```bash
python manage.py createsuperuser
```

## Running the Server

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000` in your browser to see the application.

## Usage
1. Go to the URL `http://localhost:8000/`

## Explanation
This project is a simple CRUD application using Django. It allows you to create, read, update and delete records from a database. The application has a two models called `Task` and `Comments` with the following fields:
- Task
    - Task
    - Completed
    - Group
    - Created Date
    - Updated Date
- Group
    - Name

The application also has a REST API that allows you to perform CRUD operations on the tasks and Group of task. The API has the following endpoints:

- `/api/task/`
    - GET: Get a list of all tasks
    - POST: Create a new task
- `/api/task/{id}/`
    - GET: Get the details of a specific task
    - PUT: Update a specific task
    - DELETE: Delete a specific task
- `/api/group/`
    - GET: Get a list of all comments
    - POST: Create a new comment
- `/api/group/{id}/`
    - GET: Get the details of a specific comment
    - PUT: Update a specific comment
    - DELETE: Delete a specific comment

## License

This project is licensed under the MIT License.


## Author
[Alejandro Andrade](https://github.com/MrBowis)