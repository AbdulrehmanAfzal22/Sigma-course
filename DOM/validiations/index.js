let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let messages = "";
    if (name === "") {
        messages = "Name is required";
    } else if (email === "") {
        messages = "Email is required";
    } else if (password === "") {
        messages = "Password is required";
    }
    if (messages !== "") {
        alert(messages);
    } else {
        alert("Form submitted successfully!");
    }
});





