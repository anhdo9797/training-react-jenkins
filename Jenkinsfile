pipeline {

    agent none

    environment {
        ///
        //login firebase: sudo firebase login:ci --no-localhost --debug
        FIREBASE_TOKEN = "1//0emvlfUV5ufspCgYIARAAGA4SNwF-L9IrWYFNmDhsOqz8JO1EkolzZUjPi-Dhd0SKm4FyI-QKzn7bL3HJ6qHOORRmEun6iNFEOio"
    }
    
    stages {
        stage('Install dependencies and build'){
            agent {
                docker { image 'node:12-alpine' }
            }
            steps {
                echo 'install dependencies'
                sh 'npm install'

                echo 'build bundel'
                sh 'npm run build'
            }  
        }
        stage('Deploy to server') {
            agent {
                docker { image 'andreysenov/firebase-tools:9.18.0-node12-alpine' }
            }
            steps {
                sh 'firebase deploy --only hosting'
            }
        }
    }
    post {
       
        success {
            echo 'Success'
        }   
    }
}

 