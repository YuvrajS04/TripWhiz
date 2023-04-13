TripWhiz: 
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
<img width="1399" alt="Homepage gallery" src="https://user-images.githubusercontent.com/123492654/231673807-7d4b7fa7-57a8-4ee8-9ea1-48669f3e8ac0.png">

ResultsPage: The results page that displays the selected images from the user's collection. It receives the selected images as props from the App component and displays them in a card gallery format
<img width="1436" alt="Cards" src="https://user-images.githubusercontent.com/123492654/231671880-87c2a55c-72cb-409c-a7fe-1de13a2c1cb4.png">

Header: The header component that displays the logo, search input, and login/sign up buttons. It is included in the App component and is displayed on top of every page.

Footer: The footer component that displays the copyright information. It is included in the App component and is displayed at the bottom of every page.

Tag: A reusable component that displays a tag button. It receives the tag name, selected state, and click event handler as props, and displays the tag name with a different style based on whether it is selected or not.
<img width="1384" alt="Tags" src="https://user-images.githubusercontent.com/123492654/231673040-5153869b-ae0d-4f5c-a95e-5af95601151e.png">

TopDestinationCard: A reusable component that displays a card with an image and location information. It receives the image data as props and displays the image URL, location, and description.

<img width="339" alt="Card" src="https://user-images.githubusercontent.com/123492654/231674170-504acb68-a9c9-47c0-a8e7-a676f7ca4a4e.png">

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




