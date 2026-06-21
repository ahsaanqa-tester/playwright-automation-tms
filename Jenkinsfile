

pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    }

    stages {

        stage('Verify Environment') {
            steps {
                sh 'echo $PATH'
                sh 'which node'
                sh 'which npm'
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }
}

post {

    success {
        emailext(
            subject: 'Playwright Execution Passed',
            body: 'All tests passed'
        )
    }

    failure {
        emailext(
            subject: 'Playwright Execution Failed',
            body: 'Please check Jenkins report'
        )
    }
}