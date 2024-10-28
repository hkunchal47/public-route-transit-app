# Public Transit Route Repository(https://public-route-transit-app-jfgj-kaffhzhg8.vercel.app/)

A web application for creating, viewing, and managing public transit routes in emerging markets. This app allows users to manage transit routes with stops, visualize routes on a map, batch upload stops via CSV. It is designed to support areas with lower digitization by providing a streamlined way to digitize public transit routes.

## Features

- **Create and Delete Routes**: Allows users to create routes with a list of stops.
- **Stop Management**: Add stops with specific coordinates, view stops in a list
- **Map Visualization**: View routes as polylines on an interactive map.
- **Batch Upload **: Upload multiple routes via CSV .
- **Persistent Data**: Uses browser local storage to save route data.

## Technologies

- **Frontend**: React.js, CSS Modules
- **Maps API**: Google Maps API


## Setup and Installation

### Prerequisites
- Node.js and npm installed on your local machine.
- Google Maps API Key (Sign up at [Google Cloud Console](https://console.cloud.google.com/)).

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/public-transit-route-app.git
   cd public-transit-route-app

2. **Install dependencies**:
   ```bash
   npm install

3. **Configure Environment Variables**:
   ```bash
   REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY

4. **Run the Application**:
   ```bash
   npm start

## Usage

### Creating a Route

1. **Enter Route Details**:
   - Provide a **Route Name**.
   - Select **Direction** (UP/DOWN).
   - Choose **Status** (Active/Inactive).

2. **Add Stops**:
   - Fill in each stop’s **name**, **latitude**, and **longitude**.
   - Click **Add Stop** to include it in the list of stops for the route.

3. **Create Route**:
   - Once all stops are added, click **Create Route** to save the route.

### Viewing Routes

- All saved routes will be displayed on the map, with each route's stops connected by a polyline.
- Click on a route name in the list to center the map on that route, making it easier to view and explore.

### Batch Upload

- Use the **File Uploader** to import multiple routes from a CSV file.
- Ensure the CSV file contains columns labeled **Route Name**, **Direction**, **Status**, **Stop Name**, **Latitude**, and **Longitude**.

## Optimizations and Improvements

### SOLID Principles
To keep the codebase clean and maintainable, the **SOLID principles** can be applied. These design principles encourage single-responsibility classes, modularity, and easily extensible code.

### State Management with Context
Currently, state is managed locally in each component. Using **React.Context** or a global state library like **Redux** could simplify data flow, reduce prop drilling, and allow for more complex interactions.

### Enhanced Search and Filtering
Adding a search and filter feature for routes and stops would improve the user experience, especially for larger datasets.

### Lazy Loading and Pagination
Implementing lazy loading or pagination for route and stop lists would reduce the initial load time and improve performance with large datasets.

### Optimize Map Rendering
Using marker clustering or reducing details for closely spaced stops can declutter the map, enhancing both visualization and performance.

### Data Persistence with a Database
Instead of relying solely on local storage, integrating a backend database like **Firebase** or **MongoDB** would allow access to route data from multiple devices and sessions.

### User Authentication
Adding authentication would enable users to save and manage personal route data, adding data security and customization options.


## Project Structure

```plaintext
public-transit-route-repository/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── RouteForm.js
│   │   ├── StopList.js
│   │   ├── FileUploader.js
│   │   └── MapView.js
│   ├── utils/
│   │   └── coordinateValidator.js
│   ├── App.js
│   └── index.js
├── README.md
└── package.json

