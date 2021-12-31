function login(){
    const username = document.getElementById("uname");
    const password = document.getElementById("pw");

    if(username.value === "ahmad2017" && password.value === "integrity"){
        alert("Login Sucefull")
        window.location.href = "sukses.html";
    }
    else{
        alert("Username or Password Is Wrong!");
        pw.value = "";
        uname.focus();
    }
}