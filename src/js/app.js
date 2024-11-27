var menuElement = document.querySelector('.menu')

window.openMenu = function() {
  menuElement.className = 'menu active';
  setTimeout(function() {
    menuElement.className = 'menu active visible';
  }, 1);
}

window.closeMenu = function() {
  menuElement.className = 'menu active';
  setTimeout(function() {
    menuElement.className = 'menu'
  }, 100);
}