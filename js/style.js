const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', function (event) {
  alert('Element clicked through function!');
});

buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    alert('Element clicked through handleEvent property!');
  }
});