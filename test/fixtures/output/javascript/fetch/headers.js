fetch("http://mockbin.com/har", {
  "method": "GET",
  "headers": {
    "accept": "application/json",
    "x-foo": "Bar"
  }
})
.then(response => response.json())
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
