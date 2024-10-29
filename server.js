// server.js
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
console.log('GitHub Token:', process.env.GITHUB_TOKEN);

const app = express();
const PORT = 3000;

app.use(cors());

// Serve static HTML files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to trigger GitHub Actions workflow
app.post('/trigger-workflow', async (req, res) => {
  try {
    const response = await axios.post(
      `https://api.github.com/repos/YOUR_USERNAME/automate-github-actions-using-rest-api/actions/workflows/main.yml/dispatches`,
      { ref: "main" },
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );
    res.json({ message: 'Workflow triggered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to trigger workflow', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
