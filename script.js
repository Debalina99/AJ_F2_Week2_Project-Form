let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let emailErr = document.getElementById("emailErr");
let passwordErr = document.getElementById("passwordErr");
let btn = document.getElementById("button");
let emailValid = false;
let passwordValid = false;


emailInput.addEventListener("change", function () {
    let email = emailInput.value.trim();

    if (!email) {
        alert("Enter Email fields!");
    } else if (
        !email.includes("@") ||
        !email.includes(".") ||
        email.length <= 3
    ) {
        emailErr.textContent =
            "Make sure email is more than 3 characters and has @ and a .";
        emailErr.style.color = "red";
        emailErr.style.fontSize = "13px";
        emailValid = false;
    } else {
        emailErr.textContent = "All good to go!";
        emailErr.style.color = "green";
        emailErr.style.fontSize = "13px";
        emailValid = true;
    }
});
passwordInput.addEventListener("change", function () {
    let password = passwordInput.value.trim();

    if (!password) {
        alert("Enter Password fields!");
    } else if (password.length <= 8) {
        passwordErr.textContent = "Make sure password is more than 8 characters";
        passwordErr.style.color = "red";
        passwordErr.style.fontSize = "13px";
        passwordValid = false;
    } else {
        passwordErr.textContent = "All good to go!";
        passwordErr.style.color = "green";
        passwordErr.style.fontSize = "13px";
        passwordValid = true;
    }
});
btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (emailValid && passwordValid) {
        let confirmation = confirm("Do you want to submit?");
        if (confirmation) {
            alert("Successful Signup!");
            emailInput.value = "";
            passwordInput.value = "";
            emailErr.textContent = "";
            passwordErr.textContent = "";
            emailValid = false;
            passwordValid = false;
        } else {
            alert("Signup cancelled!");
        }
    }
});