pipeline {
    agent { dockerfile true }
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
                    sh 'docker run -p 80:3000 -d yt-dw-client'
                }
            }
        }
    }
}