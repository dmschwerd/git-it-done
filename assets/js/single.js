var issueContainerEl = document.querySelector("#issues-container");
var limitWarningEl = document.querySelector("#limit-warning");

var getReposIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                displayIssues(data);

                if(response.headers.get("Link")) {
                    displayWarning(repo);
                }
            });
        } else {
            alert("There was a problem with your request");
        }
    });
};

var displayIssues = function(issues) {
    if(issues.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues.";
    }
    for(var i = 0; i < issues.length; i++) {
        // link element to github issues page
        var issuesEl = document.createElement("a");
        issuesEl.classList = "list-item flex-row justify-space-between align-center";
        issuesEl.setAttribute("href", issues[i].html_url);
        issuesEl.setAttribute("target", "_blank");

        // span for issue title
        var titleEl = document.createElement("span");
        titleEl.textContent = issues[i].title;

        issuesEl.appendChild(titleEl);

        var typeEl = document.createElement("span");

        if(issues[i].pull_request) {
            typeEl.textContent = "(Pull Request)";
        } else {
            typeEl.textContent = "(Issue)";
        }

        issuesEl.appendChild(typeEl);
        issueContainerEl.appendChild(issuesEl);
    }
};

var displayWarning = function(repo) {
    limitWarningEl.textContent = "Click here to ";
    var linkEl = document.createElement("a");
    linkEl.textContent = "see more Issues on GitHub.com";
    linkEl.setAttribute("href", "https://github.com/" + repo + "/issues");
    linkEl.setAttribute("target", "_blank");

    limitWarningEl.appendChild(linkEl);
};

getReposIssues("facebook/react");