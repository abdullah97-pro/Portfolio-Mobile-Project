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
    id: 1,
    title: 'tonic',
    imageName: '1 Snapshoot Portfolio.png',
    canopy: 'canopy',
    counter: 'Counter.png',
    subheadlist1: 'back end dev',
    subheadlist2: 2015,
    des1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 2,
    title: 'multi-post stories',
    imageName: '2 Snapshoot Portfolio.png',
    canopy: 'facebook',
    counter: 'Counter.png',
    subheadlist1: 'full stack dev',
    subheadlist2: 2015,
    des1: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 3,
    title: 'facebook 360',
    imageName: '3 Snapshoot Portfolio.png',
    canopy: 'facebook',
    counter: 'Counter.png',
    subheadlist1: 'full stack dev',
    subheadlist2: 2015,
    des1: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    id: 4,
    title: 'uber navigation',
    imageName: '4 Snapshoot Portfolio.png',
    canopy: 'uber',
    counter: 'Counter.png',
    subheadlist1: 'lead developer',
    subheadlist2: 2018,
    des1: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    des2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
  },
];

const workContainer = document.querySelector('.card-works');
let workHTML = '';

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
            <img src="./Icons/${data.counter}" alt="" />
            <span class="subheading-list">${data.subheadlist2}</span>
          </div>
          <div class="card-content">
            <p>
              ${data.des1}
            </p>
          </div>
          <ul class="web-languages">
            ${data.languages.map((lang) => `<li><a href="/">${lang}</a></li>`).join('')
}
          </ul>
          <button class="see-project" type="button" onclick="remove()" data-work-array='${JSON.stringify(data)}'>See project</button>
        </div>
      </div>
      
  `;
});

workContainer.innerHTML = workHTML;

// popup window 

const seeProjectButtons = document.querySelectorAll('[data-work-array]');
if (seeProjectButtons) {
  const modal = document.querySelector('.project-detail');
  seeProjectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const workArray = JSON.parse(button.getAttribute('data-work-array'));
      // console.log(workArray);
      const modalHtml = ` <div class="details">
      <div class="details-header">
      <h1 class="details-title">${workArray.title}</h1>
      <span class="closePopup"><i class="fa fa-close"></i></span>
      </div>
      <div class="subheading">
        <span class="canopy">${workArray.canopy}</span>
        <img src="./Icons/${workArray.counter}" alt="" />
        <span class="subheading-list">${workArray.subheadlist1}</span>
        <img src="./Icons/${workArray.counter}" alt="" />
        <span class="subheading-list">${workArray.subheadlist2}</span>
      </div>
      <img class="detail-img" src="./Icons/desktop/${workArray.imageName}" alt="">
      <div class="details-content">
        <p class="description">
        ${workArray.des2}
        </p>
        <div class="details-right">
          <ul class="web-languages">
          ${workArray.languages.map((lang) => `<li><a href="/">${lang}</a></li>`).join('')
}
          </ul>
          <div class="details-links">
            <a href="${workArray.liveLink}">
              <button>
                <p>See live</p> <img src="./Icons/social/Icon - Export.svg" alt="">
              </button>
            </a>
            <a href="${workArray.sourceLink}">
              <button>
                <p>See source</p> <img src="./Icons/social/Frame.svg" alt="">
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>`;

      modal.classList.remove('hidden');
      modal.innerHTML = modalHtml;

      const closePopup = document.querySelector('.closePopup');
      closePopup.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
    });
  });
}

const showbtn = document.querySelector('.active');
const hidebtn = document.querySelector('.navbar');
const popup = document.querySelector('.project-detail');

const x = document.getElementById('menubar');
const show = () => {
  x.classList = 'active';
};

const hide = () => {
  x.classList = 'navbar';
};

const remove = () => {
  popup.classList.remove('hidden');
};

showbtn.addEventListener('click', show);
hidebtn.addEventListener('click', hide);
popup.addEventListener('click', remove);

// contact form 

