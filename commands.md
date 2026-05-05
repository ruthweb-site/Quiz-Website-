# 💻 Kubernetes & Docker Commands Cheat Sheet

This guide provides exactly what you need to build the Quiz App images, push them to Docker Hub, and deploy the entire system to a Kubernetes cluster from scratch.

---

## 🛑 Step 0: Stop Local Servers
If you are running the backend using `npm start` on your laptop, stop it first by pressing `Ctrl + C` in that terminal. Kubernetes needs port 80 and 3000 to be free!

---

## 🐳 Step 1: Build Docker Images
We need to package the frontend and backend code into containers so Kubernetes can run them anywhere.

*Run these commands from the root folder (`d:\ApexPlanet\Quiz Web App`):*

1. **Build the Backend Image:**
   ```bash
   docker build -t your_dockerhub_username/quiz-backend:latest ./backend
   ```
2. **Build the Frontend Image:**
   ```bash
   docker build -t your_dockerhub_username/quiz-frontend:latest ./frontend
   ```

*(Note: Replace `your_dockerhub_username` with your actual Docker Hub username, e.g., `ruthran1803`)*

---

## ☁️ Step 2: Push Images to Docker Hub
To allow your Kubernetes cluster to download the containers, push them to the internet (Docker Hub).

1. **Log in to Docker:**
   ```bash
   docker login
   ```
2. **Push the Backend Image:**
   ```bash
   docker push your_dockerhub_username/quiz-backend:latest
   ```
3. **Push the Frontend Image:**
   ```bash
   docker push your_dockerhub_username/quiz-frontend:latest
   ```

---

## 🔐 Step 3: Configure Kubernetes Secrets
Before launching the app, Kubernetes needs your API keys and database passwords. **Do not put actual passwords in this file and push to GitHub!**

1. Ensure your real `k8s/secrets.yaml` file looks like this locally:
   ```yaml
   apiVersion: v1
   kind: Secret
   metadata:
     name: quiz-secrets
   type: Opaque
   stringData:
     MONGO_URI: "mongodb://your-actual-connection-string"
     GEMINI_API_KEY: "AIzaSy..."
     JWT_SECRET: "your-jwt-password"
   ```
2. **Apply the Secrets to Kubernetes:**
   ```bash
   kubectl apply -f k8s/secrets.yaml
   ```

---

## 🚀 Step 4: Deploy the Application
Now, we deploy the backend and frontend. The configuration is stored in `k8s/quiz-app.yaml`.

1. **Apply the Deployment File:**
   ```bash
   kubectl apply -f k8s/quiz-app.yaml
   ```
2. **Verify Pods are Running:**
   ```bash
   kubectl get pods
   ```
   *You should see `quiz-frontend-...` and `quiz-backend-...` showing `Running` under STATUS. It might take a minute.*

3. **Verify Services are Running:**
   ```bash
   kubectl get services
   ```
   *You should see `quiz-frontend-service` and `quiz-backend-service`.*

---

## 🌐 Step 5: Access the Website
The application is now running inside Kubernetes! 

Open your web browser and go to:
**`http://localhost:8090`**

*(Note: We use port 8090 because `quiz-frontend-service` maps port 8090 on your machine to port 80 inside the container).*

---

## 🔄 Updating the App (Workflow)
If you make changes to the HTML, CSS, or backend code, here is how you update the live app:

1. **Build & Push the new image:**
   ```bash
   docker build -t your_dockerhub_username/quiz-frontend:latest ./frontend
   docker push your_dockerhub_username/quiz-frontend:latest
   ```
2. **Tell Kubernetes to Restart and Pull the New Image:**
   ```bash
   kubectl rollout restart deployment quiz-frontend
   ```
   *(Change `quiz-frontend` to `quiz-backend` if you updated backend code).*
3. **Hard Refresh your Browser:**
   Press `Ctrl + F5` on the website to see the new changes!

---

## 🧹 Useful Troubleshooting Commands
If things go wrong, use these commands to figure out why:

- **Check logs of the backend (to see database connection errors):**
  ```bash
  kubectl logs -l app=quiz-backend
  ```
- **Check why a pod won't start (CrashLoopBackOff or ErrImagePull):**
  ```bash
  kubectl describe pod -l app=quiz-backend
  ```
- **Delete everything (if you want to start completely fresh):**
  ```bash
  kubectl delete -f k8s/quiz-app.yaml
  ```
