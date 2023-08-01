function show() {
  const x = document.getElementById('menubar');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else if (x.className === 'navbar') {
    x.className += ' active';
  } else {
    x.className = 'navbar';
  }
}

show();
