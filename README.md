# Personal Contact Management MERN Application

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application for managing personal contacts. It allows users to register, login, create, view, edit, and delete their personal contacts.

## Features

*   User Authentication: Register and login to manage your personal data.
*   Contact Management: Create, view, edit, and delete your personal contacts.
*   RESTful API: Secure API endpoints for contact management.
*   Database Integration: Stores contacts in a MongoDB database.

## View Live Application

Access the deployed application on Render: [Contact Manager Live](https://contactmanage-1.onrender.com)

## Technologies Used

*   **Frontend:** React
*   **Backend:** Node.js, Express
*   **Database:** MongoDB
*   **Other:**
    *   Mongoose: Object Document Mapper (ODM) for MongoDB interaction.
    *   bcrypt: Password hashing for secure authentication.
    *   JWT (JSON Web Token): For user authentication and authorization.
    *   dotenv: Loads environment variables from a `.env` file.
    *   cors: Enables Cross-Origin Resource Sharing for API access from the frontend.

## Installation

**Prerequisites:**

*   Node.js and npm (or yarn) installed on your system.
*   MongoDB database running locally or on a cloud service (e.g., MongoDB Atlas).

**Steps:**

1.  Clone the repository:

    ```bash
    git clone https://github.com/mrunknown101331/ContactManage.git
    cd ContactManage
    ```

2.  Install dependencies:

    ```bash
    npm install  # or yarn install
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3.  Create a `.env` file in the `backend` directory and add your environment variables:

    ```
    MONGODB_CONNECTION=your_mongodb_connection_string
    ACCESS_TOKEN_SECRET=your_secret_key_for_jwt
    PORT=5000 # Optional: Set a custom port
    ```
    Create a `.env` file in the `frontend` directory and add your environment variables:
    ```
    REACT_APP_API_URL=http://localhost:5000/api # URL to connect to backend
    ```

## Usage

1.  Start the backend server:

    ```bash
    cd backend
    npm run server # if you have "server": "nodemon server.js" in scripts or npm start
    ```

2.  Start the frontend development server:

    ```bash
    cd frontend
    npm start  # or yarn start
    ```

3.  The frontend application should be accessible in your browser at `http://localhost:3000` (or the port specified by your React development setup).

## Contributing

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear messages.
4.  Submit a pull request.
