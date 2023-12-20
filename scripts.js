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
    var spending = data[items]["amount"];
    squareDiv.style.height = parseFloat(spending) * 2.2 + 'px';
    eventHandler(squareDiv, spending);
  }
  const now = new Date();
  var squareDiv = document.getElementById(data[now.getDay() - 1]["day"]);
  squareDiv.style.backgroundColor = 'hsl(186, 34%, 60%)';
}

function eventHandler(squareDiv, spending) {
  squareDiv.addEventListener("mouseover", () => {
    showTooltip(squareDiv, spending);
  });
  squareDiv.addEventListener("mouseout", () => {
    hideTooltip();
  });
}

function showTooltip(squareDiv, spending) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = '$' + spending;
  tooltip.style.color = 'white';
  tooltip.style.padding = '5px';
  tooltip.style.backgroundColor = 'hsl(25, 47%, 15%)';
  squareDiv.insertAdjacentElement('beforebegin', tooltip);
}

function hideTooltip() {
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => tooltip.parentNode.removeChild(tooltip));
}

fetchData('./data.json');
