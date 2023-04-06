var getUserRepos = function(user) {
    // github api url format
    var apiUrl = "http://api.github.com/users/" + user + "/repos";

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    });
};

getUserRepos("dmschwerd");