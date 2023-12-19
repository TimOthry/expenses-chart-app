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
    var squareDiv = document.getElementById(data[items]["day"]);
    squareDiv.style.height =  parseInt(data[items]["amount"]) * 2.2 + 'px';
  }
  const now = new Date();
  var squareDiv = document.getElementById(data[now.getDay() - 1]["day"]);
  squareDiv.style.backgroundColor = 'hsl(186, 34%, 60%)';
}

fetchData('./data.json');
