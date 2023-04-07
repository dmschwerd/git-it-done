var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var getUserRepos = function(user) {
    // github api url format
    var apiUrl = "http://api.github.com/users/" + user + "/repos";

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    var username = nameInputEl.value.trim();

    if(username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub Username");
    }
};

userFormEl.addEventListener("submit", formSubmitHandler);

getUserRepos("dmschwerd");