const url = 'https://chartwithme.herokuapp.com/auth/login';
const successMessage = document.querySelector('.success');
const Error = document.querySelector('.Error');
const DataDiv = document.getElementById('postData');
console.log(DataDiv);

const state = {
    isAuth: false,
    token: null,
    userId: null
}
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
            state.isAuth = true;
            state.token = data.token
            state.userId = data.userId
            const isAuth = state.token;

            const getpost = 'https://chartwithme.herokuapp.com/feed/posts';
            const getPosts = async () => {
                await fetch(getpost,{ headers: {
                    Authorization: `token ${isAuth}`
                }
            })
            .then((response) => {
            if (response.ok) {
                // response.headers.location = new Uri("dashboard.html");
                // Response.redirect('dashboard.html', 302)
                return response.json();
            }
            return Promise.reject(response);
            })
            .then((data) =>{
                const postData = `
                    <div class="card-header">
                    <h3 class="card-title">
                        ${data.message}
                    </h3>
                    </div>
                    <div class="card-body">
                    
                    </div>`;
                    DataDiv.insertAdjacentHTML('beforeend', postData);
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
            }
            getPosts()
            // window.location.replace("dashboard.html");
            successMessage.innerHTML = "Congratulation You're successful Logged in"

        })
        .catch((error) => {
            Error.innerHTML = "Some Thing Went Wrong";
            console.warn('Something went wrong.', error);
        });
        
    })

}

login()
