var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var reposSearchTerm = document.querySelector("#repo-search-term");


var getUserRepos = function(user) {
    // github api url format
    var apiUrl = "http://api.github.com/users/" + user + "/repos";

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            displayRepos(data, user);
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

var displayRepos = function(repos, searchTerm) {
    repoContainerEl.textContent = "";
    reposSearchTerm.textContent = searchTerm;
};

userFormEl.addEventListener("submit", formSubmitHandler);
