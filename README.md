# Automate Github Actions Using GitHub REST API
This project is a demonstration of automating a GitHub Actions CI/CD pipeline using the GitHub REST API, integrated into a simple Node.js web application. The application includes a button to trigger the CI/CD pipeline directly from the frontend, providing an interactive way to manage the workflow.

## Features
- **GitHub Actions Integration :** Uses GitHub REST API to trigger a workflow directly from the application.
- **Interactive UI :** A button on the web interface initiates the CI/CD pipeline.
- **REST API Usage :** Demonstrates how to call the GitHub REST API from within a Node.js server.
- **CORS Enabled :** Ensures the frontend can communicate with the backend on the same server.

## Project Structure
```bash
demo-ci-cd-app/
├── .env                 # Environment variables (GitHub token)
├── .github/
│   └── workflows/
│       └── main.yml     # GitHub Actions workflow file
├── public/
│   └── index.html       # Frontend HTML file
├── server.js            # Node.js server file
├── package.json         # Node.js project configuration
└── README.md            # Project documentation
└── node_modules         # Project dependencies
```

## Installation
### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/demo-ci-cd-app.git
cd automate-github-actions-using-rest-api
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variable
Create a .env file in the root directory:

```bash
GITHUB_TOKEN=your_personal_access_token
# Replace your_personal_access_token with your GitHub Personal Access Token (with repo and workflow permissions).
```

### Step 4: Configure GitHub Actions Workflow:

Go to the `.github/workflows/main.yml` file and ensure it has the following setup:

```yaml
name: CI/CD Pipeline

on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v2

      - name: Display Message
        run: echo "CI/CD Pipeline is triggered successfully!"
```

### Step 5: Start the Server:

```bash
node server.js
```

### Access the Application

- Open your browser and go to http://localhost:3000.
- Click on the Trigger CI/CD Pipeline button. This will make a POST request to the GitHub API to start the workflow.