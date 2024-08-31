function login(){
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (!username.value || !password.value){
        alert("Los campos no pueden estar vacíos");
    } else {
        sessionStorage.setItem("session", "loggedin");
        localStorage.setItem("userlogged", username.value);
        window.location.href = "./index.html";
    }
}

const ingresarBtn = document.getElementById("ingresar");
ingresarBtn.addEventListener("click", login);