pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t yt-dw-client .'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'docker run -p 3001:80 -d yt-dw-client'
                }
            }
        }
    }
}