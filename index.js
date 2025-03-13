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
}   

makeAboutMe();