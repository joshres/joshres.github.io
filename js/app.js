const dropContainer = document.querySelector('.drop-container');
const dropMenuClick = document.querySelector('.drop-menu');
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const mainName = document.querySelector(".name");


////
///////////////////// Dropdown Menu /////////////////////
////

// toggle between hiding and showing the list when the user clicks on button
function dropMenu() {
    document.getElementById("dropdown").classList.toggle("show");
};

// change the hamburger menu icon to an X 
function changeMenu() {
    dropContainer.classList.toggle("change");
  }

// target drop-menu and listen for click
dropMenuClick.onclick = function() {dropMenu(), changeMenu()};

// Close the dropdown menu if the user clicks the X
const dropList = document.querySelector('.dropdown-list');
dropList.addEventListener("click" , e => {
  if (!e.target.matches('.drop-item')) {
    let dropdown = document.getElementById("dropdown"); 
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
    if (dropContainer.classList.contains("change")) {
      dropContainer.classList.remove("change");
    }
  }
  });

////////// Open Modal /////////////

function displayModal() {

  const modalHTML = `
    <img class="modal-image" src="images/josh-river.jpg">
    <div class="mmodal-text-container">
      <h2 class="modal-name">Josh Resnick</h2>
      <div class="modal-p-container">
        <p class="modal-about">Thank you for taking the time to get to know a bit more about me!</p>
        <p>For the past 8 years, I have been working as a full-time cook. I have learned so much and have gained an immense amount of experience growing my skills and abilities. Some of these that I take pride in are my ability to communicate, attention to detail, adaptability, resourcefulness, and ability to work well under pressure. I thoroughly enjoy creating things and watching as they grow and evolve in to something beautiful and engaging.</p>
        <p>My personal hobbies include reading, writing, music, sports, hiking and more. I truly appreciate being able to be a part of something bigger than myself. I look forward to being able to work with a variety of talented and knowledgable individuals who will be able to help me grow as a worker and person as well.</p>
      </div> 
    </div>
  `;

  overlay.classList.remove("hidden");
  modalContainer.innerHTML = modalHTML;
};

mainName.addEventListener('click', e => {

  // make sure the click is not on the gridContainer itself
  if (e.target === mainName) {
    displayModal();
  }
});

///////// Close Modal /////////

modalClose.addEventListener('click', () => {
  overlay.classList.add("hidden");
});
