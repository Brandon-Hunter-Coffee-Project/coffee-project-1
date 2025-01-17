"use strict"
// template for rendering one coffee: create a variable and build a HUGE STRING of how the html is going to look
function renderCoffee(coffee) {

    var html = '<div class="coffee card d-flex">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<div>' + coffee.name + '</div>';
    html += '<div>' + coffee.roast + '</div>';
    html += '</div>';

//     var html = '<div class="coffee col-sm">';
//     html += '<div>' + coffee.id + '</div>';
//     html += '<div>' + coffee.name + '</div>';
//     html += '<div>' + coffee.roast + '</div>';
//     html += '<div>';

    return html;
}

//Okay: I've got a template, but I have X coffees: run all the coffees through another function
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    // What if we could grab what the user was typing?
    // First step: We need to target the input
    // second step, grab the value of it
    // Third step: We need to USE that value to FILTER
    // coffee.name === userInput? [match my coffee.name with the input value]

    var coffeeName = coffeeNameSearch.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(coffeeName.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeBody.innerHTML = renderCoffees(filteredCoffees);
}






// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var allCoffees = ("light", "medium",  "dark");
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var coffeeBody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeNameSearch = document.querySelector('#coffee-name-search');
var coffeeNameSearch1 = document.querySelector("#coffee-name-search1");
//From the first two functions: where's all that HTML we made in javascript? Throw it into tbody (
coffeeBody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);