
function foo(){
    fetch("https://fakerapi.it/api/v1/users?_quantity=1&_gender=male")
    .then(response => response.json())
    .then(result => {
        userData = result.data[0];
        displayUserData(userData);
    })
    .catch(error => console.log('error', error));
} 

function displayUserData(userData) {
    document.getElementById('username').innerHTML = `<b>Username:</b> ${userData.username}`;
    document.getElementById('password').innerHTML= `<b>Password:</b> ${userData.password}`;
    document.getElementById('email').innerHTML = `<b>Email: </b>${userData.email}`;
    document.getElementById('ip').innerHTML = `<b>IP Address:</b> ${userData.ip}`;
    document.getElementById('macAddress').innerHTML = `<b>MAC Address:</b> ${userData.macAddress}`;
}
document.getElementById('generateButton').addEventListener('click', () => {
foo();
});

foo()
