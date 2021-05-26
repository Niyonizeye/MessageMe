 const signupform = document.getElementById('signupForm');
 const signupBtn = document.getElementById('signupBtn');
 const loginform = document.getElementById('loginform');
 const loginBtn = document.getElementById('loginBtn');
 signupBtn.addEventListener('click', (e) => {
     e.preventDefault()
     signupform.style.display = "block";
     loginform.style.display = "none";
 });

//  loginBtn.addEventListener('click', (e) => {
//      e.preventDefault();
//     signupform.style.display = "none";
//     loginform.style.display = "block";
//  })

