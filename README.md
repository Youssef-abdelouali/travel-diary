# TravelDiary

TravelDiary is a web application that allows users to document their travels, visualize them on an interactive map, and revisit their memories. It provides a clean and user-friendly interface for tracking trips, adding trip details, and exploring locations on the map.

## Features

- **Home Page**:
  - Captivating hero section with background image, tagline, and "Start Your Journey" button.
  - Navigation bar with links to the Dashboard, Add/Edit Trip, Map, and Auth pages.

- **Dashboard Page**:
  - Displays trips in a grid format with trip name, description, dates, and images.
  - Includes search functionality and filter options by trip type (Adventure, Relaxation) and date range.

- **Add/Edit Trip Page**:
  - A form to add or edit trip details such as trip name, destination, dates, description, and photos.
  - Option to upload multiple photos for each trip.

- **Map Page**:
  - Interactive Google Map displaying markers for the trip locations.
  - Clicking a marker shows detailed trip information.

- **Authentication Pages**:
  - Login and Sign-Up pages for user authentication.
  - Form validation for email, password, and username fields.

## Technologies Used

- **React**: Used for building the dynamic user interface.
- **React Router**: Handles navigation between different pages of the app.
- **Google Maps API**: Used to display an interactive map with markers for trip locations.
- **Axios**: Handles HTTP requests, including the authentication process and managing trip data.
- **SCSS**: For styling the app with a modern and responsive design.
- **Webpack**: Bundles the application for both development and production.
- **Babel**: Transpiles modern JavaScript and JSX to browser-compatible code.
- **Node.js**: Serves as the back-end environment for development.

## Setup

### Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Youssef-abdelouali/travel-diary.git
   cd travel-diary
   npm install
   Create a .env file in the root directory to store your environment variables (e.g., Google Maps API key):
   REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key-here
   Start the development server:npm start
   npm run build

### **Explanation of the Sections**:

1. **Project Title and Description**: Describes what your app does.
2. **Features**: Highlights the key functionalities of the app (like the Dashboard, Add/Edit Trip, Map Page, etc.).
3. **Technologies Used**: Lists the core technologies and libraries used in the project (like React, Google Maps API, Axios, etc.).
4. **Setup Instructions**: Provides detailed steps on how to clone, install dependencies, and start the project.
5. **File Structure**: Shows a simplified view of the project's folder structure.
6. **Contributing**: Provides guidelines for anyone who wants to contribute to the project.
7. **License**: Specifies that the project is open-source and under the MIT license (you can adjust if necessary).
8. **Acknowledgments**: Credits tools or libraries used in the project (like React, Google Maps API, Webpack, etc.).

---

### **Next Steps**:

1. **Copy and paste** the above content into your **`README.md`** file in the root directory of your project.
2. **Push the changes** to your GitHub repository:

   ```bash
   git add README.md
   git commit -m "Add README.md"
   git push origin main

###***LicenseThis project is open-source and available under the MIT License.***



  