fetch('https://chartwithme.herokuapp.com/feed//posts',{
    headers: {
        'Content-Type': 'application/json',
        'token':token
    }
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
