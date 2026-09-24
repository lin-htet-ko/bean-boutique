function saveUserinfo(userObj) {
    localStorage.setItem("userInfo", JSON.stringify(userObj));
}

function getUserInfo() {
    let info = localStorage.getItem("userInfo");
    if(info || info != "") {
        return JSON.parse(info);
    }

    return {};
}

function isFirstTimeVisit() {
    return !localStorage.getItem("isFirstTimeVisit");
}

function markAsVisited() {
    localStorage.setItem("isFirstTimeVisit", true);
}