# Personal Website

Welcome to my personal website! I'm Enes Yesil, a passionate software developer specializing in AI applications, machine learning, and web development. This website is built with Svelte to provide a fast and responsive user experience.

## Features

- **Project Showcase**: Explore my projects and other ventures that highlight my skills in AI, machine learning, and web development.
- **Journey**: Discover my journey, read my story, and learn more about my experiences and milestones.
- **Contact**: Get in touch with me for collaborations or inquiries.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Tech Stack

- [Node.js](https://nodejs.org/)
- [Svelte](https://svelte.dev/)

## Deployment

This project is configured to deploy automatically to a self-hosted Dokploy instance using GitHub Actions.

### Prerequisites

1.  **Dokploy Webhook**:
    - Go to your Dokploy dashboard.
    - Navigate to your Project -> Application -> Deployment.
    - Copy the **Webhook URL**.
2.  **GitHub Secret**:
    - Go to this repository's Settings > Secrets and variables > Actions.
    - Add a new repository secret named `DOKPLOY_WEBHOOK_URL` with the value you copied.

Once configured, any push to the `master` branch will build the Docker image, push it to GitHub Container Registry (GHCR), and trigger a deployment on your Dokploy server.
