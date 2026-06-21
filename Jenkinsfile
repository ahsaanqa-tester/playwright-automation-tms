


// pipeline {

//     agent any

//     stages {

//         stage('Checkout') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Verify Node') {
//             steps {
//                 sh 'node -v'
//                 sh 'npm -v'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }

//         stage('Install Browsers') {
//             steps {
//                 sh 'npx playwright install'
//             }
//         }

//         stage('Run Tests') {
//             steps {
//                 sh 'npx playwright test'
//             }
//         }
//     }
// }

pipeline {
    agent any

    stages {
        stage('Debug') {
            steps {
                sh 'pwd'
                sh 'echo PATH=$PATH'
                sh 'ls -l /usr/local/bin/node || true'
                sh '/usr/local/bin/node -v'
                sh '/usr/local/bin/npm -v'
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