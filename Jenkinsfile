node {

    checkout scm

    // Pushing image to docker hub
    // docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

    //     def customImage = docker.build("anmolemailid/my-app-img")
    //     /* Push the container to the custom Registry */
    //     customImage.push()
    // }

    docker.withRegistry('https://gcr.io', 'gcr:google-container-registry') {

        stage('Build Docker Image') {
            sh "docker build -t myapp-pipeline-img:build-$JOB_BASE_NAME-$BUILD_NUMBER ."
            sh "docker tag myapp_img1 gcr.io/firstcloudapp-278217/myapp-pipeline-img:build-$JOB_BASE_NAME-$BUILD_NUMBER"
        }

        stage('Google cloud authentication') {
            sh "gcloud auth activate-service-account jenkins-my-gcr-account@firstcloudapp-278217.iam.gserviceaccount.com  --key-file=/home/anmol_gupta2889/firstcloudapp-278217-3f36d729b565.json"
            sh "gcloud auth configure-docker"
        }

        stage('Push Image') {
            sh("gcloud docker -- push gcr.io/firstcloudapp-278217/myapp-pipeline-img:build-$JOB_BASE_NAME-$BUILD_NUMBER")
        }

        stage('print success') {
            sh "Docker build and GCR push success"
        }
    }
}