pipeline {
    // agent {
    //     docker {
    //         image 'node:6-alpine' 
    //         args '-p 3000:3000' 
    //     }
    // }
    agent { label 'master' }

    environment {
        GOOGLE_APPLICATION_CREDENTIALS = '217040994399-3v4b6e98l87ciquo6hobebqidqkm7kma.apps.googleusercontent.com'
        FIREBASE_TOKEN = "1//0emvlfUV5ufspCgYIARAAGA4SNwF-L9IrWYFNmDhsOqz8JO1EkolzZUjPi-Dhd0SKm4FyI-QKzn7bL3HJ6qHOORRmEun6iNFEOio"
    }
    
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy'){
            steps {
                sh "firebase deploy --token ${evn.FIREBASE_TOKEN}"
            }
        }
    }
}