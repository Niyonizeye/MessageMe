// const loginBtn = document.getElementById('loginBtn');

// loginBtn.addEventListener('click',(event)=>{
//      event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const myPost = {
//         email: email, 
//         password: password
//       }
//     fetch('https://chartwithme.herokuapp.com/auth/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(myPost)
//     })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data)
//           window.location.replace('https://niyonizeye.github.io/MessageMe/dashboard.html');
//         })
// })