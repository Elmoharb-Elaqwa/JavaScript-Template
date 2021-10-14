// Selecting Setting Box
let selectIcon = document.querySelector(".iconSettingBox .iconOne ");
selectIcon.onclick = function () {
  // Make Icon Rotate
  this.classList.toggle("fa-spin");
  // Adding Class Open To Show Settinng Main Box
  document.querySelector(".settingBox").classList.toggle("open");
};

// Set Color In Local Storage
let mainColors = localStorage.getItem("colors");
if (mainColors !== null) {
  // console.log(mainColors);
  document.documentElement.style.setProperty("--main-color", mainColors);
}

// Changing Main Color

const colorLi = document.querySelectorAll(".settingOption .colorsList li");
colorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("colors", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// Change Random Background
const randomBackground = document.querySelectorAll(
  ".settingOption .yesNoSpan span"
);
let randomBackgroundOption = true;
let backgroundInterval;

randomBackground.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.background === "yes") {
      randomBackgroundOption = true;
      randomBackgroundFunction();
    } else {
      randomBackgroundOption = false;
      clearInterval(backgroundInterval);
    }
  });
});
// Random Backgroud In Local Storage
if (randomBackgroundOption === true) {
  function randomBackgroundFunction() {
    backgroundInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * picturesArray.length);
      landingPage.style.backgroundImage = `url("../images/${picturesArray[randomNumber]}")`;
      console.log(picturesArray[randomNumber]);
    }, 1000);
  }
}
// Select Landing Page
let landingPage = document.querySelector(".landingPage");
// Array Of Pictures That Will Be Changed
let picturesArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
];
randomBackgroundFunction();

// Transition Our Skills Progress
let ourSkills = document.querySelector(".ourskills");
window.onscroll = function () {
  // OurSkills Offset Top
  let ourSkillsOffsetTop = ourSkills.offsetTop;
  // console.log(ourSkillsOffsetTop);
  // OurSkills Offset Height
  let ourSkillsOffsetHeight = ourSkills.offsetHeight;
  // console.log(ourSkillsOffsetHeight);
  // Window Height
  let windowHeight = this.innerHeight;
  // console.log(windowHeight);
  //Window Scroll
  let windowScroll = this.pageYOffset;
  // console.log(windowScroll);
  if (windowScroll > ourSkillsOffsetHeight) {
    // console.log("This Is Good Man");
    let transitionSpan = document.querySelectorAll(
      ".ourskills .ourskillbox .ourskillprogress span"
    );
    transitionSpan.forEach((element) => {
      element.style.width = element.dataset.progress;
    });
  } else {
    let transitionSpan = document.querySelectorAll(
      ".ourskills .ourskillbox .ourskillprogress span"
    );
    transitionSpan.forEach((element) => {
      element.style.width = 0;
    });
  }
};

// Gallary
let images = document.querySelectorAll(".gallary .imagesBox img");

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Overlay

    let overlayElement = document.createElement("div");

    // Add Overlay Element To Body

    document.body.appendChild(overlayElement);

    // Add Event Click To Overlay
    overlayElement.classList.add("popup");

    // Create Popup Box

    let popupBox = document.createElement("div");

    // Add Class To Popup Box

    popupBox.className = "popupBox";

    if (img.alt !== null) {
      // Create Heading Of PopupBox

      let popupBoxHeading = document.createElement("h3");

      // popupBoxHeading.style.textAlign = "center";
      // popupBoxHeading.style.fontWeight = "bold";
      // popupBoxHeading.style.fontSize = "30px";
      // Create Heading Text
      let headingPopupBoxText = document.createTextNode(img.alt);
      // Put Text In Heading

      popupBoxHeading.appendChild(headingPopupBoxText);

      // Put Heading In PopupBox

      popupBox.appendChild(popupBoxHeading);
    }

    // Create Close Button

    let closeButton = document.createElement("span");

    // Add Class To CloseButton

    closeButton.classList.add("closeButton");

    // Create Text In ClosButton

    let textCloseButton = document.createTextNode("X");

    // Put TextCloseButton In CloseButton

    closeButton.appendChild(textCloseButton);

    // Put Close Button In PopupBox

    popupBox.appendChild(closeButton);

    // Add Popup Box To Body

    document.body.appendChild(popupBox);

    // Create Image In Popup Box

    let imagePopupBox = document.createElement("img");

    // Put Img Source

    imagePopupBox.src = img.src;

    // Add imagePopupBox To Popup Box

    popupBox.appendChild(imagePopupBox);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.className == "closeButton") {
    e.target.parentElement.remove();
    document.querySelector(".popup").remove();
  }
});

// Select All Bullets

let allBullets = document.querySelectorAll(".bullets .circleTransfer");
allBullets.forEach((bulltes) => {
  bulltes.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
