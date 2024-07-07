
# My API Project

This project demonstrates how to create a database table and handle API calls using Node.js. It uses SQLite for the database and Express for the API handling.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-api-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd my-api-project
   ```

3. Install the necessary packages:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. The server will start on port 3000. You can test the API endpoints using a tool like Postman or cURL.

## API Endpoints

### Get All Users

- **URL:** `/users`
- **Method:** `GET`
- **Description:** Retrieve a list of all users.
- **Response:**

  ```json
  {
    "message": "success",
    "data": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
      }
    ]
  }
  ```

### Get User by ID

- **URL:** `/user/:id`
- **Method:** `GET`
- **Description:** Retrieve a single user by their ID.
- **Response:**

  ```json
  {
    "message": "success",
    "data": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```

### Create a New User

- **URL:** `/user`
- **Method:** `POST`
- **Description:** Create a new user.
- **Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

- **Response:**

  ```json
  {
    "message": "success",
    "data": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```

### Update a User

- **URL:** `/user/:id`
- **Method:** `PUT`
- **Description:** Update an existing user by their ID.
- **Body:**

  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
  ```

- **Response:**

  ```json
  {
    "message": "success",
    "data": {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
  }
  ```

### Delete a User

- **URL:** `/user/:id`
- **Method:** `DELETE`
- **Description:** Delete a user by their ID.
- **Response:**

  ```json
  {
    "message": "deleted",
    "data": {
      "id": 1
    }
  }
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
