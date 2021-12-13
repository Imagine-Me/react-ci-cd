module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/Imagine-Me/react-ci-cd",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github",
    ],
};
