const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

function getRandom() {
    return Math.floor(Math.random() * (84000)) + 1;
}


function makeAboutMe() {
    let aboutMe = document.querySelector("#about");

    let card = document.createElement("div");
    card.classList.add("card-body");
    
    let header = document.createElement("h5");
    header.textContent = "About Delanie";
    header.classList.add("card-title");
    card.appendChild(header);

    let text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = "Hello! My name is Delanie, I am a senior here at PSU. Originally I'm from Mesa, Arizona, but after 13 years here I call PDX home. In my free time I love to ride my bike and watch movies.";
    card.appendChild(text);

    aboutMe.appendChild(card);
};

const fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        createArt(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finally.");
      });
  };

  const createArt = (data) => {
    let art = document.querySelector("#art");
    let div = document.createElement("div");
    div.classList.add("card", "border-0", "rounded", "rounded-4");

    let image = data.primaryImage ? data.primaryImage : "../images/placeholder.jpg";
    let object = data.objectName ? data.objectName : "Unknown. ";
    let title = data.title ? data.title : "n/a";
    let artist = data.artistDisplayName ? data.artistDisplayName : "n/a";
    let date = data.objectDate ? data.objectDate : "n/a";
    

    div.innerHTML = `
    <img src="${image}" class="img-card-top rounded rounded-4" alt="${object}" style="max-width: 540px;">
        <div class="card-body">
            <p class="card-text">${title} by ${artist}, ${date}</p>
        </div>
    `
    art.appendChild(div);
  }


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const text = document.getElementById("text").value;
  
      console.log("======= Form Submission ========");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log(text);
    });
  });
  

  makeAboutMe();

  let randomURL = url + getRandom();
  fetchData(randomURL);