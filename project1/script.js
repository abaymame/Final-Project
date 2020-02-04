var header = document.querySelector('.biohazard-header');
var content = document.querySelector('.content');
var warning = document.querySelector('.leak');

header.addEventListener('click', function() {
  this.classList.add('warning');
  content.classList.add('warning');
  warning.classList.add('warning');
});
