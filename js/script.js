async function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const res = await fetch("https://sytu-backend-1.onrender.com/api/auth/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await res.json();

        if(res.ok){

            localStorage.setItem("token",data.token);

            alert("Login Successful");

            window.location.href="dashboard.html";

        }

        else{

            alert(data.message);

        }

    }

    catch(err){

        alert("Server Error");

    }

}