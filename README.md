# Billionaire-Diary

This project is a web-based application that interacts with an API to display and manipulate data about 400 billionaires. The application showcases various functionalities, such as filtering, sorting, calculating total wealth, and displaying detailed data about individuals using modals.

## Features
### Data Fetching and Display:

- The application fetches data from an API containing information about 400 billionaires.
- The data is displayed in individual cards, showcasing key details about each person (such as name, wealth, industry, and state).

### Filtering by State and Industry:

- The application extracts all unique states and industries available in the API data.
- Users can filter the billionaires based on the state or industry they belong to. The filtered data is dynamically displayed in the cards.

### Sorting by Wealth:

- A table is provided that lists the billionaires, sorted by their total wealth in descending order.
- Users can see the richest people at the top, allowing for quick identification of the wealthiest individuals.

### Total Wealth Calculation:

- The application calculates the combined total wealth of all billionaires.
- This figure is displayed on the page for users to view the cumulative wealth of the dataset.

### Detailed Information Modal:

- When users click the "More" button on either a card or a row in the table, a modal is triggered.
- The modal provides more detailed information about the selected billionaire, enhancing the user experience with additional insights.


## Technologies Used

- ### HTML5/CSS3: 
For building the structure and styling of the website.

- ### DaisyUi and tailwind.css:
For styling the website

- ### JavaScript (ES6): 
For the dynamic functionalities, including API calls, filtering, sorting, modal interactions, and total wealth calculations.
ES6 and JavaScript Features

- #### Arrow Functions (=>):
Used for concise function expressions throughout the project, particularly in callbacks for filtering and sorting the data.

- #### Template Literals:

Utilized to dynamically inject data into the DOM when creating the HTML structure for cards, rows in the table, and modals.
Example: `<div>${billionaire.name}</div>`.

- #### Array Methods:
  - map(): Used to generate arrays of unique states and industries from the API data.
  - filter(): Applied to filter billionaires based on a selected state or industry.
  - sort(): The billionaire data is sorted in descending order by wealth.
  - reduce(): Employed to calculate the total wealth of all billionaires.

- #### Destructuring:
Simplified extraction of properties from objects, such as when accessing name, wealth, industry, and state from each billionaire object in the API response.


- #### Promises and async/await:
The project handles asynchronous API calls using fetch() and async/await for cleaner and more readable code.
Example: const response = await fetch('API_URL');


## How to Use

- Clone this repository:
git clone https://github.com/yourusername/billionaires-data-visualization.git

- Navigate to the project folder:
cd billionaires-data-visualization

- Open the index.html file in your browser to view the application.


## Future Enhancements
- Adding pagination or load more button for better handling of large datasets.
- Improving the user interface with more advanced design features.
- Allowing users to save their favorite billionaires or create custom filters.
- Adding searching functionality


### License
This project is open-source. Feel free to contribute or use it in your projects.

