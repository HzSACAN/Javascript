var models = [
  {
    name: "BMW 418d",
    image: "img/bmw.jpg",
    link: "https://www.arabalar.com.tr/bmw/4-serisi/2018/430i-2-0-xdrive-gran-coupe",
  },
  {
    name: "Honda Civic",
    image: "img/honda_civic.jpg",
    link: "https://www.arabalar.com.tr/honda/civic/2018/type-r-2-0-gt",
  },
  {
    name: "Mazda CX3",
    image: "img/mazda_cx_3.jpg",
    link: "https://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-power-sense-at",
  },
  {
    name: "Skoda Superb",
    image: "img/SkodaSuperb.jpg",
    link: "https://www.arabalar.com.tr/skoda/superb/2018/2-0-tsi-prestige-dsg-4x4",
  },
  {
    name: "Volvo S60",
    image: "img/volvo_s60.jpg",
    link: "https://www.arabalar.com.tr/volvo/s60/2018/2-0-d4-advance",
  },
];

var index = 0;
var slaytCount = models.length;
var settings1 = {
  duration: "2000",
  random: false,
};
var interval;

init(settings1);

document.querySelector(".fa-arrow-left").addEventListener("click", function () {
  index--;
  showSlide(index);
});

document
  .querySelector(".fa-arrow-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings1);
  });
});

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      // random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index === prev);

      prev = index;
    } else {
      // artan index
      if (slaytCount === index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }

    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i > slaytCount - 1) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
