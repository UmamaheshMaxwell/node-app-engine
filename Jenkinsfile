pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the Docker image'
                sh 'docker build -t todo-list-app .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Stopping any existing container'
                // Stop and remove the currently running container if it exists
                sh '''
                if [ $(docker ps -q -f name=todo-list-app) ]; then
                    docker stop todo-list-app
                    docker rm todo-list-app
                fi
                '''

                echo 'Deploying the new Docker container'
                // Run the Docker container with the built image
                sh '''
                docker run -d --name todo-list-app -p 8000:8000 todo-list-app
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
