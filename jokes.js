document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const xhr = new XMLHttpRequest();
  var x = 100;
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText); //into object
      console.log(response);
      let output = " ";

      //response.value.forEach(item => (output += `<li>${item.joke}</li>`));

      response.forEach(function (item) {
        output += `<h2>${item.id}</h2><li>${item.joke} </li>`;
      });
      document.querySelector(".jokes").innerHTML = output;
    }
  }; //200 status Successful

  document;
  xhr.send();
  e.preventDefault();
}

// Grab the number from our number text field -and
//use this number with URL in our .open ..you need to bring
//only that number of jokes...
