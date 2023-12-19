function fetchData(filePath) {
  fetch(filePath)
  .then(response => response.json())
  .then(data => {
    changeSquares(data);
  })
  .catch(error => console.error('Error fetching JSON:', error));
}

function changeSquares(data) {
  for (items in data) {
    console.log(data[items]["day"]);
  }
}

fetchData('./data.json');
