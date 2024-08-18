# prodan.bg
ProdanBg the ultimate platform for posting and viewing advertisements! Whether you are an individual, a small business, or a large corporation, ProdanBg offers you a seamless and effective way to reach your audience. Here's what makes ProdanBg stand out

#prodan.bg 
SoftUni React Course Project
Key Features:
User-Friendly Interface:

Intuitive design for easy navigation.
Simple ad posting process with step-by-step guidance.
Diverse Ad Categories:

Categories include Jobs, Real Estate, Services, Products, Events, and more.
Targeted posting ensures your ad reaches the right audience.
Advanced Search Functionality:

Filter ads by location, category, price range, and more.
Save searches and get notified about new ads matching your criteria.
High Visibility:

Ads are displayed prominently to maximize visibility.
Featured ads and premium placements for increased exposure.
Multimedia Support:

Upload images, videos, and documents to make your ads more engaging.
Interactive elements such as maps and contact forms.
Secure and Trustworthy:

User verification and moderation ensure ad quality and reliability.
Secure messaging system to protect user privacy.
Community Engagement:

User reviews and ratings build trust and credibility.
Discussion forums and Q&A sections for community interaction.
Mobile-Friendly:

Fully responsive design for seamless access on all devices.
Dedicated mobile app for convenient ad posting and browsing on the go.

Development progress
## 1. Initialize Project
- [x] Initialize git repo
- [x] Add softuni practice server
- [x] Add base vite react project as client
- [x] CleanUp client
- [x] Add project resources
- [x] Convert html to jsx
- [x] Separate html into components
## 2. React Router
- [x] Install react-router-dom
- [x] Setup react-router-dom
- [x] Add routes in App.jsx
- [x] Add links in the navigation
## 3. Create Service Layer
- [x] Service layer architecture discursion
- [x] Abstract requester
- [x] Add ads api
- [x] Preseed practice server
## 4. Page Implementations
- [x] Ads list
- [x] Details
  - [x] Details link
  - [x] Details route
  - [x] Api function - getOne
- [x] Home - Latest Ads
## 5. Comments (Advanced)
- [x] Create service for nested resource `comments`
- [x] Post comment to server
- [x] Read comments from server
- [x] Add comments in the component
- [x] Clear form

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 12 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   ```

2. Install dependencies for both server and client:
   ```bash
   cd server
   npm install
   cd ../client
   npm install
   cd ..
   ```

## Running the Application

You can start the server and client separately or together using the scripts defined in `package.json`.

### Start Server

To start the server only:

```bash
npm run start-server
```

This command will:

- Change directory to `server`
- Run `node server.js` to start the server

### Start Client

To start the client only:

```bash
npm run start-client
```

This command will:

- Change directory to `client`
- Run `npm run dev` to start the client in development mode

### Start Both Server and Client

To start both the server and client simultaneously:

```bash
npm start
```

This command will:

- Use `npm-run-all` to run `start-server` and `start-client` in parallel

## Additional Information

- Ensure that the server is properly configured to listen on the appropriate port and that the client is set up to make requests to this server.
- Modify the scripts in `package.json` if your server or client setup changes.

## Troubleshooting

If you encounter issues, ensure that:

- All dependencies are installed by running `npm install` in both the `server` and `client` directories.
- The environment variables required for your server and client are properly set up.
- There are no conflicts with the ports being used by the server and client.

For further assistance, check the logs or refer to the documentation for the tools and libraries used in your project.
```

### Notes:
- Replace `https://github.com/your-repo/your-project.git` with the actual URL of your repository.
- Ensure the instructions for installing dependencies and running the application match the specific structure and requirements of your project.
