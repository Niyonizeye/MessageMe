const Btn_Submit = document.getElementById('SignupBtn');

Btn_Submit.addEventListener("click",() => {

const FullName = document.getElementById("fullName").value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

    let userData = {
        Email: email, 
        password:password
      }
    
      console.log(_data);
      fetch('https://chartwithme.herokuapp.com/auth/signup', {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err)); 

})

  
 