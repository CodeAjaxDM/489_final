## Backend Setup Guide

### Prerequisites
- Make sure to install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) before proceeding.

### Installation
1. Open your terminal.
2. Navigate to the root directory of the backend project.

### Steps
1. Run the following command to install the required npm modules: npm install

2. Install the CORS package to support CORS calls: npm install cors

3. Once the installation is complete, start the backend server with: nodemon


## Manual Testing with Insomnia

### Supported URL
- **URL**: `http://localhost:4000/api/user`

### Methods
- **GET Requests**: Simple GET requests to the address are fine.
  
- **POST Requests**: Ensure your body is configured as JSON. Below is an example JSON for the POST request:
  ```json
  {
    "email": "Adam.Wagener@gmail.com",
    "first_name": "Adam",
    "last_name": "wagener",
    "comment": ""
  }


