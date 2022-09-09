pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Clone') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/master' ]],
                    extensions: scm.extensions,
                    userRemoteConfigs: [[
                        url: 'https://github.com/abdel-77/JenkinsJava.git',
                        credentialsId: '81975299-416b-4648-bec0-8fb90c0b5c4d'
                        ]]
                    ])

                //List all directories
                sh "ls -lart ./*"
         }
      }
    }
}
