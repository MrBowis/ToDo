# ToDoList-Django

This is a porject ToDo List application built with Django for the main microservice and login service, for the client use NextJS.

## Prerequisites

- Python 3.x
- pip (Python package installer)
- virtualenv
- Docker
- NodeJS

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

### 3. Start containers

```bash
docker compose up --build
```

Visit `http://127.0.0.1:8000` in your browser to see the To Do application.
Visit `http://127.0.0.1:8002` in your browser to see the Login application.
Visit `http://127.0.0.1:3000` in your browser to see the Client application.

## Explanation - To Do
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

## Explanation - Login

There are three main routes for this microservice:

- `/login`
    - POST: The body use the json bellow but `id` is optional and respose a token
```json
{
    "id": "",
    "username": "",
    "email": "",
    "password": ""
}
```
- `/register`
    - POST: The body use the json bellow and respose a token
```json
{
    "username": "",
    "password": ""
}
```
- `/profile`
    - GET: use Authentication parameter with token to obtain the data of any user who has registered 

## License

This project is licensed under the MIT License.


## Author
[Alejandro Andrade](https://github.com/MrBowis)
