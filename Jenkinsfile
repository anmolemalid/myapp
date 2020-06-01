node {

    checkout scm

    // docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

    //     def customImage = docker.build("anmolemailid/my-app-img")
    //     /* Push the container to the custom Registry */
    //     customImage.push()
    // }

    docker.withRegistry('https://gcr.io', 'gcr:google-container-registry') {

        stage('Build Docker Image') {
            sh "docker build -t myapp_img4 ."
            sh "docker tag myapp_img1 gcr.io/firstcloudapp-278217/myapp_img4:latest"
        }

        stage('Push Image') {
            sh("gcloud docker -- push gcr.io/firstcloudapp-278217/myapp_img4:latest")
        }
    }

    
    // stage('Build Docker Image') {
    //     sh "docker build -t myapp_img1 ."
    //     sh "docker tag myapp_img1 gcr.io/firstcloudapp-278217/myapp_img1:latest"
    // }

    // stage('Push Image') {
    //     sh("gcloud docker -- push gcr.io/firstcloudapp-278217/myapp_img1:latest")
    // }
}