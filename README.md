### Car Dealership

This is a basic Node.js application using Express. It is configured using environment variables and connects to a database, supports JWT-based authentication, and is ready for development and production environments.

## Clone the repo

git clone https://github.com/Akorex/Vobb-Assessment.git

## Navigate into the project directory

cd VobbAssessment

## Install dependencies & start application

1. npm install
2. npm run build
3. npm run start

## Create a .env file in the root directory and add the following variables:

1. DATABASE_URL=your_database_connection_string
2. PORT=3000
3. NODE_ENV=development
4. JWT_LIFETIME=1d
5. JWT_SECRET=your_jwt_secret_key
