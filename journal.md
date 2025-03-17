## Important Links
* [Github Repo](https://github.com/delanieann/webdev-final)
* [URL](https://delanieann.github.io/webdev-final/)

## Tools, Tutorials, Etc
* [Masonry](https://masonry.desandro.com/)
* [Metropolitan Museum of Art Collection API](https://metmuseum.github.io/)
* [Dropdown Docs from Bootstrap](https://getbootstrap.com/docs/5.3/components/dropdowns/)

### 3/10
* Created initial files: index.html, index.js, styles.css
* index.html
    * Head completed with title, links to style.css, bootstrap.css. Script for index.js. 
    * Body started with navbar implementation.

### 3/11
* Added sections for About Me, Previous Work, Projects and Contact Me form.
* Bootstrap.js script added after main. 

### 3/12
* While reviewing Bootstrap documents, I discovered Masonry. Masonry enhances the card experience by creating a tiled layout that replicates a brick wall, fitting items into the grid as needed. 
* Created cards for images and defined sections (About, Previous, Contact, Projects).
* To utilize javascript more, I implemented the "About Me" in javascript.
    * makeAboutMe() in index.js selects the "about" id, creates a card div, adds the appropriate header and text content, then appends this section to the DOM.

### 3/13
* Changed to the bootstrap light theme.
* Removed collapsing nav bar, added dropdown.
* Added cards with pictures that represent me. Included alt and aria-label.
* Added Resume card with past experience. 
* Added Project card.
* Added Contact form with three sections, Name Email and Text Input.
* API call
    * I decided to have a different, random object be called each time the page is loaded.
    * Created getRandom() to generate a random number.
    * fetchData() used to fetch data from the API.
    * createArt() used to create the card which will display the data from the API.
        * Issue with broken images and missing information will need to be fixed.

### 3/14
* Issue with index.css not overriding bootstrap.css. Had to move the link to styles.css after the bootstrap.css.
* To handle the missing fields from the API data, used conditional operator.
* Updated css to fix the style of links on the page.

### 3/16
* Added github links as per instructions
* Created an event listener for the submisson of the form. Currently, form only displays on console.
* Added README.md
* Issues with broken image links once site was deployed. Fixed these problems.
* Ran WAVE Evaluation tool, no errors detected. 