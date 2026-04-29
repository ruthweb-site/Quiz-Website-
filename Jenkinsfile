pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "ruthran1803/quiz-backend:v2"
        FRONTEND_IMAGE = "ruthran1803/quiz-frontend:v2"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/ruthweb-site/Quiz-Website-'
            }
        }

        stage('Build Images') {
            steps {
                sh "docker build -t ${BACKEND_IMAGE} ./backend"
                sh "docker build -t ${FRONTEND_IMAGE} ./frontend"
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
                sh "docker push ${BACKEND_IMAGE}"
                sh "docker push ${FRONTEND_IMAGE}"
            }
        }
    }

    post {
        success {
            echo "Successfully pushed ${BACKEND_IMAGE} and ${FRONTEND_IMAGE} to Docker Hub!"
        }
    }
}