const axios = require('axios');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;

const triggerWorkflow = async () => {
    try {
        const response = await axios.post(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/actions/workflows/ci-cd-pipeline.yml/dispatches`,
            { ref: 'main' },
            {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            }
        );
        console.log('Workflow triggered successfully:', response.data);
    } catch (error) {
        console.error('Error triggering workflow:', error.response.data);
    }
};

const checkWorkflowRuns = async () => {
    try {
        const response = await axios.get(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/actions/runs`,
            {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            }
        );
        console.log('Recent Workflow Runs:', response.data);
    } catch (error) {
        console.error('Error fetching workflow runs:', error.response.data);
    }
};

// Example usage
(async () => {
    await triggerWorkflow();
    await checkWorkflowRuns();
})();
