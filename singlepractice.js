"use strict"

function app(people){
    let searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchByTraits(people);
      break;
      default:
    app(people); // restart app
      break;
}

app(people);


  
function searchByName() 
{
  let firstName = prompt("What is the person's first name?");
  let lastName = prompt("What is the person's last name?");

  let foundPerson = people.filter(function(person)
{
    if(person.firstName === firstName && person.lastName === lastName) 

{
    return true;
}
    else 
{
    return false;
}
});

}

function searchByTraits(people){
  let height;
  let weight;
  let age;
  let occupation;
  let eyeColor;
}

