pipeline {
    // agent {
    //     docker {
    //         image 'node:6-alpine' 
    //         args '-p 3000:3000' 
    //     }
    // }
    agent { label 'master' }
    
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy'){
            steps {
                //https://github.com/firebase/firebase-tools/issues/77#issuecomment-149374516
                sh "firebase login --interactive" 
                // sh "firebase login:ci"
                sh "firebase deploy"
            }
        }
    }
}