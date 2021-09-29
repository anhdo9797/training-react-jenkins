pipeline {
  agent any
  stages {
    stage('install dependencies') {
      steps {
        sh '''sh "npm install"
sh "npm run build"'''
      }
    }

  }
}