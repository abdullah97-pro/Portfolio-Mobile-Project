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

const workdata = [
  {
  id:1,
  title:'tonic',
  imageName:'1 Snapshoot Portfolio.png',
  canopy:'canopy',
  counter:'Counter.png',
  subheadlist1:'back end dev',
  subheadlist2:2015,
  des1:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages:['html','css','javascript'],
  liveLink:'',
  sourceLink:''
  },
  {
  id:2,
  title:'multi-post stories',
  imageName:'2 Snapshoot Portfolio.png',
  canopy:'facebook',
  counter:'Counter.png',
  subheadlist1:'full stack dev',
  subheadlist2:2015,
  des1:'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  languages:['html','Ruby on rails','css','javascript'],
  liveLink:'',
  sourceLink:''
  },
  {
  id:3,
  title:'facebook 360',
  imageName:'3 Snapshoot Portfolio.png',
  canopy:'facebook',
  counter:'Counter.png',
  subheadlist1:'full stack dev',
  subheadlist2:2015,
  des1:'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  languages:['html','Ruby on rails','css','javascript'],
  liveLink:'',
  sourceLink:''
  },
  {
  id:4,
  title:'uber navigation',
  imageName:'4 Snapshoot Portfolio.png',
  canopy:'uber',
  counter:'Counter.png',
  subheadlist1:'lead developer',
  subheadlist2:2018,
  des1:'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  languages:['html','Ruby on rails','css','javascript'],
  liveLink:'',
  sourceLink:''
  }
];

const workContainer = document.querySelector('.card-works');
let workHTML = '';
const img1 = document.querySelector('.img')

workdata.forEach((data) => {
  workHTML += `
  <div class="card">
        <div><img class="img" src="./Icons/desktop/${data.imageName}"></div>
        <div class="card-description">
          <h2 class="card-title">${data.title}</h2>
          <div class="subheading">
            <span class="canopy">${data.canopy}</span>
            <img src="./Icons/${data.counter}" alt="" />
            <span class="subheading-list">${data.subheadlist1}</span>
            <img src="./Icons/Counter.png" alt="" />
            <span class="subheading-list">${data.subheadlist2}</span>
          </div>
          <div class="card-content">
            <p>
              ${data.des1}
            </p>
          </div>
          <ul class="web-languages">
            ${data.languages.map(lang => {
              return `<li><a href="/">${lang}</a></li>`
            }).join('')}
          </ul>
          <button class="see-project" data-work-array='${JSON.stringify(data)}'>See project</button>
        </div>
      </div>
      
  `;
});

workContainer.innerHTML = workHTML;

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