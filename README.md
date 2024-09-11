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

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
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

## License

This project is licensed under the MIT License.


## Author
Alejandro Andrade - [GitHub](https://github.com/MrBowis)