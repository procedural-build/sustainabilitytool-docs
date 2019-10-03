pipeline {
  agent {
    dockerfile true
  }
  stages {
    stage('Build && Deploy') {
      steps {
        sh 'cd sphinx && ./make_source.sh && ./all_make.sh'
        script {
            if (env.BRANCH_NAME == 'master') {
                env.S3_BUNDLE_PATH = '/stable/'
            } else {
                env.S3_BUNDLE_PATH = '/latest/'
            }
            env.S3_BUNDLE_PATH = "docs.sustainabilitytool.com${S3_BUNDLE_PATH}"
        }
        echo "Uploading files to ${S3_BUNDLE_PATH}"
        withAWS(region: 'eu-west-2', credentials: 'docker_euwest2') {
          s3Delete(bucket:'procedural-frontend-bundles', path:"${S3_BUNDLE_PATH}")
          s3Upload(file: 'sphinx/build/html/', bucket:'procedural-frontend-bundles', path:"${S3_BUNDLE_PATH}")
        }
      }
    }
  }

environment {
        SLACK = credentials('slack')
    }

  post {
    success {
      slackSend(
      message: "SUCCESS\nJob: ${env.JOB_NAME} \nBuild ${env.BUILD_DISPLAY_NAME} \n URL: ${env.RUN_DISPLAY_URL}",
      color: 'good',
      token: "${SLACK}",
      baseUrl: 'https://traecker.slack.com/services/hooks/jenkins-ci/',
      channel: '#jenkins-ci'
      )
  }

    failure {
      slackSend(
      message: "FAILED\nJob: ${env.JOB_NAME} \nBuild ${env.BUILD_DISPLAY_NAME} \n URL: ${env.RUN_DISPLAY_URL}",
      color: "#fc070b",
      token: "${SLACK}",
      baseUrl: 'https://traecker.slack.com/services/hooks/jenkins-ci/',
      channel: '#jenkins-ci'
      )
    }
  }

}