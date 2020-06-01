node {

    checkout scm

    agent { 
        docker {
            image 'gcr.io/firstcloudapp-278217/myapp_img'
            registryUrl 'https://gcr.io'
            registryCredentialsId 'firstcloudapp-278217'
            args '-v /var/jenkins_home/.m2:/root/.m2'
        }
    }

    // docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

    //     def customImage = docker.build("anmolemailid/my-app-img")
    //     /* Push the container to the custom Registry */
    //     customImage.push()
    // }

    stage('Build Docker Image') {
        sh "docker build -t myapp_img ."
        sh "docker tag myapp_img gcr.io/firstcloudapp-278217/myapp_img:latest"
    }

    stage('Push Image') {
        sh("gcloud docker -- push gcr.io/firstcloudapp-278217/myapp_img:latest")
    }
}