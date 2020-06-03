node {

    checkout scm

    // Pushing image to docker hub
    // docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

    //     def customImage = docker.build("anmolemailid/my-app-img")
    //     /* Push the container to the custom Registry */
    //     customImage.push()
    // }

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

    stage('Stop and remove docker container') {
        try{
            sh "docker stop my-container"
            sh "docker rm my-container"
        }catch(){
            sh "echo 'Container not exist'"
        }
        
    }

    stage('run docker on VM') {
        sh "docker run -d -p 8081:8081 --name my-container myapp-pipeline-img:build-$JOB_BASE_NAME-$BUILD_NUMBER"
    }
}