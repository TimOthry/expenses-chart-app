function fetchData(filePath) {
  fetch(filePath)
  .then(response => response.json())
  .then(data => {
    setSquares(data);
  })
  .catch(error => console.error('Error fetching JSON:', error));
}

function setSquares(data) {
  for (items in data) {
    var squareDiv = document.getElementById(data[items]["day"]);
    squareDiv.style.height =  parseFloat(data[items]["amount"]) * 2.2 + 'px';
  }
  const now = new Date();
  var squareDiv = document.getElementById(data[now.getDay() - 1]["day"]);
  squareDiv.style.backgroundColor = 'hsl(186, 34%, 60%)';
}

fetchData('./data.json');
