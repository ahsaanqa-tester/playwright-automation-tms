


pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
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