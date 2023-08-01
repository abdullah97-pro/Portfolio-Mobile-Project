// function show() {
//   const x = document.getElementById('menubar');
//   if (x.style.display === 'block' & x.className === 'navbar') {
//     x.style.display = 'none';
//     console.log('1');
//   } else if (x.className === 'navbar') {
//     x.className += ' active';
//     console.log('2');

//   } else {
//     x.className = 'navbar';
//     console.log('3');
//   }
// }

const showbtn = document.querySelector('.active');
const hidebtn = document.querySelector('.navbar');

const x = document.getElementById('menubar');
const show = () => {
  x.classList = 'active';
};

const hide = () => {
  x.classList = 'navbar';
};

showbtn.addEventListener('click', show);
hidebtn.addEventListener('click', hide);