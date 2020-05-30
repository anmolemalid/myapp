(function (){


  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', '/listUsers', true);
  request.setRequestHeader('content-type', 'application/json');

  request.onload = function() {
    const userlist =  document.querySelector('.userlist');
    let data = this.response;
    data = JSON.parse(data);

    data.forEach(user => {
      const li = document.createElement('li');
      const liContainer = document.createElement('div');
      const name = document.createElement('label');
      const password = document.createElement('label');
      const profession = document.createElement('label');
      name.innerText = user.name+', ';
      password.innerText = user.password+', ';
      profession.innerText = user.profession;
      liContainer.appendChild(name);
      liContainer.appendChild(password);
      liContainer.appendChild(profession);
      li.appendChild(liContainer);
      userlist.appendChild(li);

      console.log('*****SUCCESS*****',"update");
    });
    // Begin accessing JSON data here
  }
  // Send request
  request.send()



})();