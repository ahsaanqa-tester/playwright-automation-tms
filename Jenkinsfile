pipeline {
    agent any

    options {
        timestamps()
        timeout(time: 1, unit: 'HOURS')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    stages {
        stage('Checkout') {
            steps {
                echo '🔄 Checking out code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                echo '🌐 Installing Playwright browsers...'
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running Playwright tests...'
                sh 'npx playwright test tests/Home.spec.js'
            }
        }

        stage('Generate Report') {
            steps {
                echo '📊 Generating test report...'
                sh 'npx playwright show-report' || true
            }
        }
    }

    post {
        always {
            echo '📋 Archiving test results...'
            junit testResults: 'test-results/**/*.xml', allowEmptyResults: true
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
        success {
            echo '✅ Tests passed successfully!'
        }
        failure {
            echo '❌ Tests failed. Check the report for details.'
        }
        unstable {
            echo '⚠️ Tests were unstable.'
        }
    }
}
