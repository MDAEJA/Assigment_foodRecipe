# Recipe Finder App

A **Recipe Finder** application built with **React** that fetches recipes from the **Edamam API**. Users can search for various dishes, view recipes, and explore detailed information about each dish in a pop-up modal.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [API Information](#api-information)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for recipes by dish name using the search bar.
- Displays multiple recipes in a card format with a title, image, and calories.
- Clicking on a recipe card opens detailed information in a modal popup.
- Displays a list of ingredients for each recipe.
- Responsive design for different screen sizes.
- Toast notifications for success and error messages.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MDAEJA/Assigment_foodRecipe.git
Navigate to the project directory:

bash
Copy code
cd recipe-finder-app
Install the required dependencies:

bash
Copy code
npm install
Get your Edamam API credentials by signing up at Edamam.

Create an .env file in the root directory and add the following:

bash
Copy code
REACT_APP_EDAMAM_APP_ID=your_app_id
REACT_APP_EDAMAM_APP_KEY=your_app_key
Start the development server:

bash
Copy code
npm start
Technologies Used
React for building the UI components.
CSS for styling and responsive design.
Toastify for notifications.
Edamam API for fetching recipe data.
Usage
Enter a dish name (e.g., "chicken", "pasta") into the search bar.
Click on the "Search" button.
Browse the displayed recipes.
Click on any recipe card to view detailed information in a pop-up modal.
Close the modal by clicking the close button or outside the modal.
API Information
This project uses the Edamam Recipe Search API to fetch recipes. You will need an APP ID and APP KEY to access the API.

Sign up for API keys at Edamam.
The API returns a variety of recipes for given dish names with nutritional information.
Example API call used in the project:

bash
Copy code
https://api.edamam.com/search?q={dish}&app_id={YOUR_APP_ID}&app_key={YOUR_APP_KEY}
Screenshots
Recipe Search Page

Recipe Details Popup

Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any bugs or feature requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy code

### Notes:
- Replace `your-username` with your actual GitHub username.
- Add your own screenshots and provide the correct paths for them.
- Ensure you have a `LICENSE` file if you mention the license.

This is a comprehensive `README.md` template for your project, and it follows common practices in open-source repositories.





