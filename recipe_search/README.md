# Recipe Finder

Recipe Finder is a React-based web application that allows users to search for and explore various recipes. It leverages the [TheMealDB API](https://www.themealdb.com/api.php) to fetch and display recipe details, including images, categories, areas of origin, and instructions. Users can search for recipes, view a selection of results, and load more recipes if available.

## Features

- **Search Recipes:** Users can search for recipes by name.
- **Explore Results:** The application displays a list of matching recipes, showing the meal name, category, area, and a brief instruction snippet.
- **View More:** Users can load more recipes from the search results.
- **View Details:** Users can view the full recipe instructions, source, and a YouTube video link (if available).

## Project Structure

- **RecipeType:** A TypeScript type that defines the structure of a recipe object.
- **Recipe Component:** The main component handling the search, API requests, and rendering of recipe cards.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recipe-finder.git
   ```

   ```bash
    cd recipe-finder
   ```

   ```bash
     npm install
   ```

   ```bash
    yarn install
   ```

   ```bash
    npm run dev
   ```


## Usage

- Type a recipe name into the search bar.
- Click the "Search" button to find recipes.
- Browse through the displayed recipes.
- Click "Show More" to load additional recipes.
- Use the "Source" and "View On Youtube" links to explore more details about the recipes.

  ## Technologies Used

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript.
- Axios: A promise-based HTTP client for the browser.
- Click "Show More" to load additional recipes.
- Tailwind CSS: A utility-first CSS framework for styling.

    ## API
    This project uses TheMealDB API to fetch recipe data. The API allows searching by recipe name and returns an array of matching meals.

  
    ## Acknowledgements
  - TheMealDB for providing the recipe data.
