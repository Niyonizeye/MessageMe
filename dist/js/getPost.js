fetch('https://chartwithme.herokuapp.com/feed/posts',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer abcbhdhhfjdjhgd'
    }
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
