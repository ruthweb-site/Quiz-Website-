pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "ruthran1803/quiz-backend:latest"
        FRONTEND_IMAGE = "ruthran1803/quiz-frontend:latest"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/ruthweb-site/Quiz-Website-'
            }
        }

        stage('Build Images') {
            steps {
                sh 'docker build -t ruthran1803/quiz-backend:v1 ./backend'
                sh 'docker build -t ruthran1803/quiz-frontend:v1 ./frontend'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push ruthran1803/quiz-frontend:v1'
                sh 'docker push ruthran1803/quiz-backend:v1'
            }
        }
    }

    post {
        success {
            echo 'Both frontend & backend pushed '
        }
    }
}