pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "ruthran1803/quiz-backend:latest"
        FRONTEND_IMAGE = "ruthran1803/quiz-frontend:latest"
    }

    stages {

        stage('Build Images') {
            steps {
                bat "docker build -t %BACKEND_IMAGE% ./backend"
                bat "docker build -t %FRONTEND_IMAGE% ./frontend"
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat "echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin"
                }
            }
        }

        stage('Push Images') {
            steps {
                bat "docker push %BACKEND_IMAGE%"
                bat "docker push %FRONTEND_IMAGE%"
            }
        }
    }

    post {
        success {
            echo "Successfully pushed images to Docker Hub!"
        }
    }
}