node {

    checkout scm

    // docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

    //     def customImage = docker.build("anmolemailid/my-app-img")
    //     /* Push the container to the custom Registry */
    //     customImage.push()
    // }

    docker.withRegistry('https://gcr.io', 'firstcloudapp-278217') {
        stage('Build Docker Image') {
            sh "docker build -t myapp_img ."
            sh "docker tag myapp_img gcr.io/firstcloudapp-278217/myapp_img:latest"
        }

        stage('Push Image') {
            sh("gcloud docker -- push gcr.io/firstcloudapp-278217/myapp_img:latest")
        }
    }
}