node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

        def customImage = docker.build("anmolemailid/my-app-img")
        /* Push the container to the custom Registry */
        customImage.push()
    }
}