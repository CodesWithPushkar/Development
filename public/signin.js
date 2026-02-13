const form = document.querySelector('#signin-form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const email = document.querySelector('#signin-email').value;
    const password = document.querySelector('#signin-password').value;
    const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();
    console.log(data);
    if(response.ok){
        localStorage.setItem('token', data.token);
        console.log("Saved token:", localStorage.getItem("token"));
        window.location.href = "/todo.html";
    }
    else{
        alert(data.message);
    }
})