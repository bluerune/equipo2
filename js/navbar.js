document.addEventListener("DOMContentLoaded", function(){
    let session = sessionStorage.getItem("session");
    // Checkear inicio de sesion
    if (!session){
        //console.log("Checking loggin");
        window.location.href = "./login.html";
    }
    
    // Mostrar username en la navbar
    const dataContainer = document.getElementById("usernameNavbar");
    let userlogged = localStorage.getItem("userlogged");

    dataContainer.innerHTML += `<a class="nav-link" href="my-profile.html">${userlogged}</a>`;
    console.log("Navbar username" + userlogged);
});