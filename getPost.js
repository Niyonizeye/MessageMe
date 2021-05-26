const DataDiv = document.getElementById('postData');
console.log(DataDiv);

const state = {
    isAuth: false,
    token: null,
    userId: null
}

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