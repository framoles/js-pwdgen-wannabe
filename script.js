function getUserInput() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const color = document.getElementById("color").value;
    const password = name + surname + color + Math.floor(Math.random() * 100);
    document.getElementById("password").innerHTML = password;
}