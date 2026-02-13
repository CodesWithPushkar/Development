
const form = document.getElementById('register-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    console.log("i am ")
    const username = document.querySelector('#register-username').value;
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;
    console.log(username+" "+email+" "+password);
    const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });
    const data = await response.json();
    if(response.ok){
        alert(data.message);
        window.location.href = "/signin.html"
    }
    else{
        alert(data.message);
    }
    
})