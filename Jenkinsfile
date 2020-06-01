node {

    checkout scm

    // docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

    //     def customImage = docker.build("anmolemailid/my-app-img")
    //     /* Push the container to the custom Registry */
    //     customImage.push()
    // }

    stage('Build Docker Image') {
        sh "docker build -t myapp_img ."
        sh "gcloud auth application-default login --quiet"
        sh "docker tag myapp_img gcr.io/firstcloudapp-278217/myapp_img:latest"
    }

    stage('Push Image') {
        sh("gcloud docker -- push gcr.io/firstcloudapp-278217/myapp_img:latest")
    }
}