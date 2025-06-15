const State = {
    HOME: "HOME",
    SIGNUP: "SIGNUP",
}

let menuContent = document.getElementById("MenuContent")

let fsmState = State.HOME;

function getState() {
    return state
}

function setState(state) {
    fsmState = state
}

function loadStateMenu() {
    menuContent.innerHTML = null
    fetch(`static/menu/${fsmState}.html`)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(data => {
            menuContent.innerHTML = data
            menuContent.style.animation = "fadeInUp 1s ease"
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}