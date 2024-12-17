"use strict"

const slides = [
    {
        city: "Rostov-on-Don <br> LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        img: "./images/png/01 - Rostov-on-Don, Admiral.png"
    },
    {
        city: "Sochi Thieves",
        area: "105 m2",
        time: "4 months",
        img: "./images/png/02 - Sochi Thieves.png"
    },
    {
        city: "Rostov-on-Don <br> Patriotic",
        area: "93 m2",
        time: "3 months",
        img: "./images/png/03 - Rostov-on-Don Patriotic.png"
    }
]

function initSlider() {

    const cityText = document.querySelector(".city-text");
    const areaText = document.querySelector(".area-text");
    const timeText = document.querySelector(".time-text");
    const imagesSlider = document.querySelector(".images-slider");
    const navDots = document.querySelector(".nav-dots");
    const legendList = document.querySelector(".legend-list");
    const next = document.querySelector(".nav_arrow-next");
    const prev = document.querySelector(".nav_arrow-prev");

    let slideNum = 0;

    slides.forEach((image, index) => {
        let imageDiv = `<img class="image link${index} ${index === 0 ? "active_image" : ""}" src="${slides[index].img}" data-index="${index}">`;
        imagesSlider.innerHTML += imageDiv;

        let dot = `<button class="slider_dot link${index} ${index === 0 ? "active_dot" : ""}" data-index="${index}"></button>`;
        navDots.innerHTML += dot;
    })

    navDots.addEventListener("click", function (event) {
        if (event.target.classList.contains("slider_dot")) {
            moveSlider(event.target.dataset.index);
        }
    });

    legendList.addEventListener("click", function (event) {
        if (event.target.classList.contains("legend__link")) {
            moveSlider(event.target.dataset.index);
        }
    });

    next.addEventListener("click", () => {
        moveSlider((slideNum + 1) % slides.length);
    })

    prev.addEventListener("click", () => {
        moveSlider((slideNum - 1 + slides.length) % slides.length);
    })

    function moveSlider(num) {
        imagesSlider.querySelector(".active_image").classList.remove("active_image");
        imagesSlider.querySelector(".link" + num).classList.add("active_image");

        navDots.querySelector(".active_dot").classList.remove("active_dot");
        navDots.querySelector(".link" + num).classList.add("active_dot");

        legendList.querySelector(".active_legend").classList.remove("active_legend");
        legendList.querySelector(".link" + num).classList.add("active_legend");

        cityText.innerHTML = slides[num].city;
        areaText.innerHTML = slides[num].area;
        timeText.innerHTML = slides[num].time;

        slideNum = +num;
    }
}

document.addEventListener("DOMContentLoaded", initSlider)