# Wildfire-Web-Service
# Gistda Express API

This repository contains a simple Express API for serving geospatial data from a PostgreSQL database. The API provides endpoints for retrieving data in GeoJSON format.

## Prerequisites

- Node.js installed
- PostgreSQL database with relevant data

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/gistda-express-api.git

## Install dependencies:

cd gistda-express-api
npm install

## Configure PostgreSQL:

Update the database connection details in app.js:
const db = new Pool({
    user: 'your-postgres-username',
    
    host: 'localhost',
    
    database: 'your-database',
    
    password: 'your-postgres-password',
    
    port: 5432 });

# Usage
## API Endpoints
1. Get GeoJSON data in a simplified format:GET /api_format
2. Get GeoJSON data in the standard GeoJSON format:GET /api
3. Get GeoJSON data for a specific feature by ID:GET /api/paridc/:id
4. Get GeoJSON data for hotspots in Thailand:GET /api
5. Get GeoJSON data for a specific hotspot by ID:GET /api/hotpot/:id

# Running the Server
## Start the server on port 80:
# Gistda Express API:

- Start the server on port 80

   ```bash
   npm start
   
- The server will run on http://localhost:80/. Check the console for a confirmation message.

## License

- This project is licensed under the MIT License - see the LICENSE file for details.
  
```sql
Feel free to customize this README.md according to your specific needs and add any additional information about your project.

