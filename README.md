TripWhiz
This is a project that uses React and React Router for building a web application that displays images of top vacation destinations. It includes features such as tag filtering and image selection. Users can add images to their collection and view the selected images in a separate results page.

Table of Contents
Installation
Usage
Components
Technologies Used
License
Installation
To run this project locally, follow these steps:

Clone the repository to your local machine.
Install dependencies using npm install or yarn install.
Start the development server using npm start or yarn start.
Open your web browser and go to http://localhost:3000 to view the application.
Usage
The application consists of several components that work together to display images of vacation destinations and provide various functionalities to the users. The main components are:

App: The main component that serves as the entry point of the application. It manages the routing using React Router and includes the HomePage and ResultsPage components as pages.

HomePage: The home page of the application that displays the gallery of images. It allows users to filter images by tags and add images to their collection. It also includes the HomePage2 component that displays the selected tags and allows users to remove tags.

ResultsPage: The results page that displays the selected images from the user's collection. It receives the selected images as props from the App component and displays them in a card gallery format

Header: The header component that displays the logo, search input, and login/sign up buttons. It is included in the App component and is displayed on top of every page.

Footer: The footer component that displays the copyright information. It is included in the App component and is displayed at the bottom of every page.

Tag: A reusable component that displays a tag button. It receives the tag name, selected state, and click event handler as props, and displays the tag name with a different style based on whether it is selected or not.

TopDestinationCard: A reusable component that displays a card with an image and location information. It receives the image data as props and displays the image URL, location, and description.

The application uses React Router for handling routing and Axios for making API requests to fetch image data. It also uses React Toastify for displaying notifications.

Components
The main components in this project are:

App: The main component that manages the routing and includes the HomePage and ResultsPage components.

HomePage: The home page component that displays the gallery of images and provides functionalities for tag filtering, and image selection.

ResultsPage: The results page component that displays the selected images from the user's collection.

Header: The header component that displays the logo, search input, and login/sign up buttons.

Footer: The footer component that displays the copyright information.

Tag: A reusable component that displays a tag button for filtering images by tags.

TopDestinationCard: A reusable component that displays a card with an image and location information.

Technologies Used
React
React Router
Axios
React Toastify
CSS/Sass
License
This project is open source. Feel free to use, modify, and distribute the code as needed.




