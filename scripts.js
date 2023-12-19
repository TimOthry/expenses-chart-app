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
    console.log(data[items]["amount"]);
    var squareDiv = document.getElementById(data[items]["day"]);
    squareDiv.style.height =  parseInt(data[items]["amount"]) * 2.2 + 'px';
  }
}

fetchData('./data.json');
