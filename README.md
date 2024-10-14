# LEGO Collection Manager

This project is a LEGO collection management web application built with the PERN stack (PostgreSQL, Express, React, Node.js) and TypeScript. Users can authenticate using JWT, manage their LEGO collection and wishlist, and search for LEGO sets using the Rebrickable API.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: JWT-based authentication (login and registration).
- **LEGO Collection Management**: Add, view, and delete LEGO sets from the user's collection.
- **Wishlist**: Manage a wishlist of LEGO sets.
- **Search**: Search for LEGO sets by ID or theme using the Rebrickable API.
- **Responsive Design**: Basic styling using CSS modules.

## Technologies

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL, Sequelize ORM
- **Authentication**: JWT (JSON Web Token)
- **External API**: Rebrickable API
- **Deployment**: Render

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) and npm/yarn installed.
- PostgreSQL installed and running.
- Rebrickable API key (create an account at [Rebrickable](https://rebrickable.com/)).

### Steps

1. Clone the repository:
    * git clone https://github.com/your-username/lego-collection-manager.git

2. Install dependencies:
    * cd lego-collection-manager
    * npm install

3. Set up the PostgreSQL database:
    * npx sequelize db:migrate

4. Seed the database with initial data:
    * npx sequelize db:seed:all

### Environment Variables
  * Create a .env file in the root of your project with the following variables:
     * DB_NAME=lego_collection
     * DB_USER=your_postgres_user
     * DB_PASSWORD=your_postgres_password
     * DB_HOST=localhost
     * DB_PORT=5432
     * JWT_SECRET_KEY=your_jwt_secret_key
     * REBRICKABLE_API_KEY=your_rebrickable_api_key

## Usage

  1. Start the backend server:
      * npm run server
  2. Start the frontend React app:
      * npm run client
  3. The app should now be running locally at http://localhost:3000.

## API Endpoints

  ### Authentication
    * POST /api/signup: Register a new user.
    * POST /api/login: Log in and receive a JWT.
  ### Collection
    * GET /api/collection: Get all LEGO sets in the authenticated user's collection.
    * POST /api/collection: Add a LEGO set to the authenticated user's collection.
    * DELETE /api/collection/: Remove a LEGO set from the authenticated user's collection.
  ### Wishlist
    * GET /api/wishlist: Get all LEGO sets in the authenticated user's wishlist.
    * POST /api/wishlist: Add a LEGO set to the authenticated user's wishlist.
    * DELETE /api/wishlist/: Remove a LEGO set from the authenticated user's wishlist.
  ### Search
    * GET /api/search/: Search for LEGO sets by ID using the Rebrickable API.

## Screenshots
  * Deployed site - https://lego-collection-le1k.onrender.com/login

  ### Landing Page
  <img src="server\src\Assets\screenshots\LandingPage.png" alt="Landing Page" width="500"/>

  ### Login Page
  <img src="server\src\Assets\screenshots\LoginPage.png" alt="Login Page" width="500"/>


## Contributing
  * David McCullough - https://github.com/kvothe1387 - dmccullough488@gmail.com
  * Jesse Underwood - https://github.com/jesseunderwood

## License 
  This project is covered under the MIT license. To learn more about what this means, click the license button at the top.
