# Search Places App

This project is a responsive and dynamic React-based application to search for places. It uses a simulated API to demonstrate fetching and displaying data, including features like pagination, search, and country flags.

## Features
- **Search Places**: Enter a query in the search box to filter places.
- **Dynamic Pagination**: Navigate through data using a responsive pagination system.
- **Default Data**: Displays default places data when the application loads.
- **Keyboard Shortcut**: Focus on the search box using `CTRL + /` or `CMD + /`.
- **Country Flags**: Fetch and display flags for countries using their country codes.
- **Responsive Design**: Fully functional on devices with a minimum width of 300px.
- **Adjustable Data Limit**: Users can adjust the number of places displayed per page.

---

## Technologies Used
- React (with hooks)
- Vanilla CSS for styling (no frameworks used)
- Mock API for demonstration purposes

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd search-places-app

2. **Install Dependencies**
npm install

3. **Run the Application**
npm start

The application will run on http://localhost:3000.


README.md
markdown
Copy code
# Search Places App

This project is a responsive and dynamic React-based application to search for places. It uses a simulated API to demonstrate fetching and displaying data, including features like pagination, search, and country flags.

## Features
- **Search Places**: Enter a query in the search box to filter places.
- **Dynamic Pagination**: Navigate through data using a responsive pagination system.
- **Default Data**: Displays default places data when the application loads.
- **Keyboard Shortcut**: Focus on the search box using `CTRL + /` or `CMD + /`.
- **Country Flags**: Fetch and display flags for countries using their country codes.
- **Responsive Design**: Fully functional on devices with a minimum width of 300px.
- **Adjustable Data Limit**: Users can adjust the number of places displayed per page.

---

## Technologies Used
- React (with hooks)
- Vanilla CSS for styling (no frameworks used)
- Mock API for demonstration purposes

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd search-places-app
Install Dependencies

bash
Copy code
npm install
Run the Application

bash
Copy code
npm start
The application will run on http://localhost:3000.


## Directory Structure

src/
├── components/
│   ├── SearchBox.js     # Search box component
│   ├── Table.js         # Table to display data
│   ├── Pagination.js    # Pagination component
├── api/
│   ├── api.js           # Simulated API for fetching data
├── App.js               # Main application file
├── index.js             # React entry point

## Usage
Search
Start typing in the search box and press Enter to filter places by name.
Use CTRL + / or CMD + / to focus on the search box quickly.

Pagination
Use the pagination controls to navigate through the results.
Modify the "Items per page" input to adjust how many results are displayed per page (1-5).

Flags
Country flags are fetched dynamically using the Flags API.