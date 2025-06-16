function confirmSignup() {
    let payload =
    {
        "name": document.getElementById("formName").value,
        "gmail": document.getElementById("formEmail").value,
        "company": document.getElementById("formCompany").value,
        "target": document.getElementById("formTarget").value,
    }
    fetch("http://192.168.1.241:5000/signup/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Network response failed")
        }).then(data => {
            switch(data["status"])
            {
                case "Success":
                break;

                case "error":
                    console.log(data["details"])
                break;
            }
        })
        .catch(error => {
            console.error("There was a problem with the fetch", error);
        });
}

function signout()
{
    
}