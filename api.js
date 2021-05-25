// https://chartwithme.herokuapp.com/feed/posts for get post
const url = 'https://chartwithme.herokuapp.com/auth/login';
const successMessage = document.querySelector('.success');
const login = async () => {
    const loginButton = document.getElementById('loginBtn');

   loginButton.addEventListener('click', async () => {
        const username = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: username,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then((data) => {
            // window.location.replace("dashboard.html");
            console.log(data);
            successMessage.innerHTML = "Congratulation You're successful Logged in"

        })
        .catch((error) => {
            // successError.innerHTML = "Something went wrong.";
            console.warn('Something went wrong.', error);
        });
        
    })

}

login()

// get posts
// const getpost = fetch('https://chartwithme.herokuapp.com/feed/posts');
// const getPosts = async () => {
//     await fetch(getpost)
//    .then((response) =>{
//        return response.json()
//    })
//    .then((data) =>{
//        console.log(data);
//    }).catch((err) => {
//        console.log(err);
//    })
// }
// getPosts()