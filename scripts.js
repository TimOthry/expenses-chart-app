function fetchData(filePath) {
  fetch(filePath)
    .then(response => response.json())
    .then(data => {
      setSquares(data);
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function setSquares(data) {
  const now = new Date();
  for (items in data) {
    var squareDiv = document.getElementById(data[items]["day"]);
    var spending = data[items]["amount"];
    squareDiv.style.height = parseFloat(spending) * 2.2 + 'px';
    if (data[now.getDay() - 1]["day"] == data[items]["day"]) {
      squareDiv.style.backgroundColor = 'hsl(186, 34%, 60%)';
      eventHandler(squareDiv, spending, true);
    }
    else {
      eventHandler(squareDiv, spending, false);
    }
  }
}

function eventHandler(squareDiv, spending, currentDay) {
  squareDiv.addEventListener("mouseover", () => {
    if (currentDay) {
      squareDiv.style.backgroundColor = 'hsl(186, 34%, 60%, 50%)';
    }
    else {
      squareDiv.style.backgroundColor = 'hsl(10, 79%, 65%, 50%)'
    }
    showTooltip(squareDiv, spending);
  });
  squareDiv.addEventListener("mouseout", () => {
    if (currentDay) {
      squareDiv.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }
    else {
      squareDiv.style.backgroundColor = 'hsl(10, 79%, 65%)'
    }
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
