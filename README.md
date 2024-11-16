This is a React-based application that allows users to search for cities, view details like country and flag, and paginate through the results. The app interacts with an API to fetch cities data dynamically, showing a loading spinner during data fetching and displaying a responsive table with the results.

Features
Search Functionality: Search for cities by name.
Pagination: Navigate through pages of cities with support for items per page.
Loading Spinner: Display a spinner while data is being fetched.
Responsive Table: View a list of cities with the corresponding country and flag.
Error Handling: Displays a message when no results are found or if there is an error with fetching data.

Installation
Prerequisites
Make sure you have the following software installed on your machine:

Node.js (with npm)
Steps to Install
Clone the repository:

git clone https://github.com/your-username/Solvative_Assignment.git
Navigate to the project directory:

cd Solvative_Assignment

Install dependencies:
Run the following command to install the necessary packages:
npm install

Start the development server:
After installation, run the following command to start the app:
npm start
This will start the React development server, and you can view the application by opening your browser and navigating to http://localhost:3000.

Usage
Search for cities: Use the search box to enter a city name. The results will be displayed below.
Pagination: Navigate between pages using the pagination controls. You can also change the number of items per page.
Loading: While the data is being fetched, a spinner will be shown above the table.
No Results: If there are no results found for the search, a "No results found" message will be displayed.

Components
1. App.js
The main component that handles state management, API calls, and rendering child components (SearchBox, Table, and Pagination).
It manages the query, cities, isLoading, currentPage, totalPages, and limit states.

2. SearchBox.js
A component that provides a search box for entering a city name.
It triggers the search operation and resets the page number to 1 when a search is performed.

3. Table.js
Displays the list of cities in a table format.
Shows data such as city name, country, and country flag.
Displays messages for empty results or no query entered.

4. Pagination.js
Allows the user to navigate between pages of city results.
Takes the current page and total pages as props and handles page changes.

API Integration
The app uses a placeholder API to fetch cities' data based on the query and pagination. The fetchCities function from the api/api.js file interacts with the API.

Styling
The app uses simple CSS for styling, including custom styles for the table, pagination, search box, and the loading spinner.

Project Structure

|-- /public

|   |-- index.html

|-- /src

|   |-- /components

|   |   |-- SearchBox.js

|   |   |-- Table.js

|   |   |-- Pagination.js

|   |-- /api

|   |   |-- api.js

|   |-- App.js

|   |-- index.js

|-- /styles

|   |-- styles.css

|-- package.json

|-- README.md

