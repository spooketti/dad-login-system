const State = {
    HOME: "HOME",
    SIGNUP: "SIGNUP",
    SIGNOUT:"SIGNOUT"
}

let menuContent = document.getElementById("MenuContent")

let fsmState = State.HOME;

function getState() {
    return state
}

function setAndLoad(state) {
    setState(state)
    loadStateMenu()
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
            menuContent.innerHTML = data;
            menuContent.style.display = "none";
            menuContent.style.animation = "none"; 

            void menuContent.offsetHeight; //dom reflow

            menuContent.style.display = "block";
            menuContent.style.animation = "fadeInUp 1s ease";
            // if(fsmState=="SIGNOUT")
            // {
            //     activateQR()
            // }
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}