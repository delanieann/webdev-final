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

    div.innerHTML = `
    <img src="${data.primaryImage}" class="img-card-top" alt="${data.objectName}" style="max-width: 540px;">
        <div class="card-body">
            <p class="card-text">${data.title} by ${data.artistDisplayName}, ${data.objectDate}</p>
        </div>
    `
    art.appendChild(div);
  }

  makeAboutMe();

  let randomURL = url + getRandom();
  fetchData(randomURL);