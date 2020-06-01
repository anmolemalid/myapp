node {

    checkout scm

    // docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

    //     def customImage = docker.build("anmolemailid/my-app-img")
    //     /* Push the container to the custom Registry */
    //     customImage.push()
    // }

    stage('Build image') {
        app = docker.build("firstcloudapp-278217/myapp_img")
    }
    stage('Push image') {
        docker.withRegistry('https://gcr.io', 'gcr:[firstcloudapp-278217]') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    // stage('Build Docker Image') {
    //     sh "docker build -t myapp_img ."
    //     sh "docker tag myapp_img gcr.io/firstcloudapp-278217/myapp_img:latest"
    // }

    // stage('Push Image') {
    //     sh("gcloud docker -- push gcr.io/firstcloudapp-278217/myapp_img:latest")
    // }
}