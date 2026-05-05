# 🎓 AI Quiz Web Application

Welcome to the AI Quiz Web Application! This project is a complete, modern 3-tier web application built using standard web technologies. It allows users to take quizzes on various topics, view their scores, and dynamically generate custom quizzes using Google's Gemini AI!

## 🏗️ Architecture

This application follows a **3-Tier Architecture**:

1. **Frontend (Presentation Tier):**
   - Built with pure HTML, CSS, and Vanilla JavaScript.
   - Hosted on an Nginx web server inside a Docker container.
   - Features a modern, glassmorphism UI with responsive design.

2. **Backend (Application Tier):**
   - Built with Node.js and Express.js.
   - Handles user authentication (JWT), quiz validation, and API routing.
   - Communicates with the Google Gemini API to generate custom "AI Quizzes" on the fly.

3. **Database (Data Tier):**
   - Uses MongoDB Atlas (Cloud Database) to store user accounts, passwords (hashed securely), and quiz result history.

---

## 🛠️ Prerequisites

Before you start, make sure you have the following installed and set up on your machine:

1. **Docker Desktop**: Required to build and run the containers.
2. **Kubernetes (Minikube / Docker Desktop / Kind)**: Required to deploy the application in a cluster.
3. **MongoDB Atlas Account**: You need a free cloud database cluster from MongoDB.
4. **Google Cloud Account**: You need an API key for Google Gemini to enable the AI Quiz generator.
5. **Git**: To version control your code.

---

## 🚀 How to Run Locally (Without Kubernetes)

If you just want to run the code on your laptop without Docker or Kubernetes:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ruthweb-site/Quiz-Website-.git
   cd "Quiz Website "
   ```

2. **Set up Backend Environment Variables:**
   Create a `.env` file inside the `backend/` folder and add the following:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

3. **Start the Backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```
   *The backend will start running on `http://localhost:3000`.*

4. **Access the Frontend:**
   Since the backend serves the frontend static files automatically, simply open your browser and go to:
   **`http://localhost:3000`**

---

## 🛳️ How to Deploy to Kubernetes

For detailed, step-by-step instructions on how to build the Docker images and deploy this entire application into a Kubernetes cluster manually, please refer to the **[`commands.md`](./commands.md)** file!

---

## ⚙️ CI/CD Pipeline (Jenkins)

This project is configured with a fully automated Jenkins CI/CD pipeline. 

### How it works:
1. **GitHub Webhook**: Whenever you push code to the `main` branch on GitHub, GitHub automatically sends a webhook signal to your Jenkins server.
2. **Jenkinsfile**: Jenkins reads the `Jenkinsfile` in the root of the project.
3. **Automated Build & Push**: Jenkins automatically builds the new Docker images (`quiz-frontend:latest` and `quiz-backend:latest`) and pushes them directly to Docker Hub.
4. **Kubernetes Rollout**: Once Jenkins finishes, simply run `kubectl rollout restart deployment quiz-frontend` locally to pull the newest images and see your changes live!

## 🔐 Security Notes
- Never commit your `backend/.env` or `k8s/secrets.yaml` files to GitHub.
- Ensure your MongoDB network access allows connections from your IP (or `0.0.0.0/0` if deploying to the cloud).
