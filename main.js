"use strict";

//Selectors
const navToggler = document.querySelector(".nav_toggler");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");
const destImg = document.querySelector(".planet_img");
const destOptions = document.querySelector(".dest_list");
const destName = document.querySelector(".planet_name");
const destText = document.querySelector(".planet_text");
const avgDest = document.querySelector(".avg_distance");
const estDestTime = document.querySelector(".est_time");
const dotContainer = document.querySelector(".dots");
const crewImg = document.querySelector(".crew_img");
const crewName = document.querySelector(".crew_name");
const crewText = document.querySelector(".crew_text");
const crewRole = document.querySelector(".crew_role");
const techDotContainer = document.querySelector(".tech_dots");
const techImg = document.querySelector(".tech_img");
const techImgPortrait = document.querySelector(".tech_img-portrait");
const techName = document.querySelector(".tech_name");
const techText = document.querySelector(".tech_text");

//OnLoad

//Crew
fetch("data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const { crew } = data;

    crew.forEach((person) => {
      const switchCrew = function () {
        crewImg.setAttribute("src", person.images.png);
        crewName.textContent = person.name;
        crewRole.textContent = person.role;
        crewText.textContent = person.bio;
      };

      dotContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("dot")) {
          const crewIndex = e.target.dataset.indicator;

          if (crewIndex == person.index) {
            switch (crewIndex) {
              case "0":
                switchCrew();
                break;
              case "1":
                switchCrew();
                break;
              case "2":
                switchCrew();
                break;
              case "3":
                switchCrew();
                break;
            }
          }
        }
      });
    });
  })
  .catch((err) => console.error(err.message));

//Destinations
fetch("data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const { destinations } = data;

    destinations.forEach((destination) => {
      const switchPlanet = function () {
        destImg.setAttribute("src", destination.images.png);
        destName.textContent = destination.name;
        destText.textContent = destination.description;
        avgDest.textContent = destination.distance;
        estDestTime.textContent = destination.travel;
      };

      destOptions.addEventListener("click", (e) => {
        const planet = e.target.textContent;

        if (planet === destination.name) {
          switch (planet) {
            case "Moon":
              switchPlanet();
              break;
            case "Mars":
              switchPlanet();
              break;
            case "Europa":
              switchPlanet();
              break;
            case "Titan":
              switchPlanet();
              break;
          }
        }
      });
    });
  })
  .catch((err) => console.error(err.message));

//Tecnology
fetch("data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const { technology } = data;

    technology.forEach((tech) => {
      const switchTech = function () {
        techImg.setAttribute("src", tech.images.landscape);
        techImgPortrait.setAttribute("src", tech.images.portrait);
        techName.textContent = tech.name;
        techText.textContent = tech.description;
      };

      techDotContainer.addEventListener("click", (e) => {
        const techIndex = e.target.textContent;

        if (techIndex == tech.index) {
          switch (techIndex) {
            case "1":
              switchTech();
              break;
            case "2":
              switchTech();
              break;
            case "3":
              switchTech();
              break;
          }
        }
      });
    });
  })
  .catch((err) => console.error(err.message));

//Function
const openModal = function () {
  modal.style.transform = "translate(0)";
};

const closeModal = function () {
  modal.style.transform = "translate(100%)";
};

//Event Listeners
navToggler.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
