
// -------Responsive Menu-------
const menuButton = document.querySelector('.menu-button');
const body = document.querySelector('body');
const navLinks = document.querySelector('.nav-links');
const closeNav = document.querySelector('.close-nav');


menuButton.addEventListener("click", openMenu);
closeNav.addEventListener("click", openMenu);

function openMenu() {
    navLinks.classList.toggle("open");
    if(body.style.overflow === "hidden") {
        body.style.overflow = "scroll";
    }
    else {
        body.style.overflow = "hidden";
    }
}

// ------Filter by Tag--------
//Array that contains all the cards
const cards = document.querySelectorAll('.card'); 
const sponsoredCard = document.querySelector('.sponsored-card');
const sponsoredCardImg = sponsoredCard.querySelector('img');


// loop through each cards
for( let i = 0; i < cards.length; i++) {
    // an array to hold all tags in a card
    let buttonTags = [];
    // array that contains all the buttons
    let buttons = cards[i].querySelectorAll('button');
    // loop through each buttons
    for(let j = 0; j < buttons.length; j++) {
        // assign tags in each button to an array
        buttonTags[j] = buttons[j].dataset.attr;
    }
    // assign the array that contains the tag to an object array of the current card
    cards[i].tags = buttonTags;
    // each card now has an object of "tags" that contains the array of its tags
}

// interactive chips
// Make clicked chip active
// contains all chips in an array
const chips = document.querySelectorAll('.filter-tags .chip');
// the paragraph that alerts if no items matches the search
const searchAlert = document.querySelector('.search-alert');

let activeTag = "";
let n = 1;
// function with the active tag as parameter
function updateCards(tag) {
    // changing ad image on each refresh
    if(n>4) {
        n = 1;
    }
    console.log(n);
    sponsoredCardImg.src = "assets/img/ad-bg-0"+ (n++) +".jpg";
    // counts for number of displayed cards
    let counter = 0;
    // to display all cards for universal tag
    if(tag === "All") {
        // loop thorugh each card in cards[]
        let c = 0;
        while (c<cards.length) {
            cards[c++].style.display = 'block';
            counter++;
        }
    }
    else {
        // lopp through each card in cards[]
        let c = 0;
        while (c<cards.length) {
            // checks for active tag in card tags
            if (cards[c].tags.includes(tag)) {
                // displays card if card contains active tag
                cards[c].style.display = 'block';
                counter++;
            }
            else {
                // hides card if card doesn'n contain active card
                cards[c].style.display = 'none';
            }
            c++;
        }
    }

    // checks the number of displayed card
    checkNoResults(counter);
}

function checkNoResults(result) {
    if (result == 0) {
        // hide ad card on no displayed cards
        sponsoredCard.style.display = 'none';
        // show empty message on no displayed cards
        searchAlert.style.display="block";
    } else {
        // show ad card on displayed cards
        sponsoredCard.style.display = 'block';
        // hide empty message on displayed cards
        searchAlert.style.display="none";

    }
}

// loop through each chip in chips[]
for(let i = 0; i < chips.length; i++) {
    // listen for click
    chips[i].addEventListener('click', function makeActive() {
        // add a counter
        let c = 0;
        // loop through chips[]
        while(c < chips.length) {
            // remove active class from each chip in chip[]
            chips[c++].classList.remove('chip-active');
        }
        // add active class to clicked chip
        chips[i].classList.add('chip-active');
        // get attribute of active chip
        activeTag = chips[i].dataset.attr;
        // call function to update cards according to active tag(passed parameter)
        updateCards(activeTag);
    });
}

// ----Live Search -----

const searchCheck = document.querySelector("#quick-search");
searchCheck.addEventListener('input', filterList);

function filterList() {
    let counter = 0;
    const searchInput = document.querySelector("#quick-search");
    const filter = searchInput.value.toLowerCase();
    
    cards.forEach((item) => {
        let index = item.textContent.toLowerCase();
        if(index.includes(filter)) {
            item.style.display = "block";
            counter++;
        }
        else {
            item.style.display = "none";
        }
    });


    chips.forEach((item) => {
        item.classList.remove('chip-active');
    });

    checkNoResults(counter);
}

document.addEventListener('keydown', (event) => {
    event = event || window.event;
    if( event.key == 'g' && event.ctrlKey) {
        console.log("hello world!");
        event.preventDefault();
        searchCheck.focus();
    } 
})