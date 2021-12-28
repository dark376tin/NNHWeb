let password = document.getElementById("password-here")
let stats = document.getElementById("accepted")
let go = document.getElementById("go to admin dashboard")


go.style.display = "none";


function check() {
    if (password.value === "jy9vgk8b") {
        stats.innerText = "accepted"
        go.style.display = "block";
    }
    else {
        stats.innerText = "denay"
        go.style.display = "none";
    }
}