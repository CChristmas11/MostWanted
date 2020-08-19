/*(5 points): As a developer, I want to make consistent commits with good, descriptive messages.
(5 points): As a developer, I want to run validation on any user input, ensuring that a user is re-prompted when they provide invalid input.
(10 points): As a developer, I will send a copy of these user stories to the instructors at the end of each workday, with user stories fully implemented highlighted in green and partially implemented highlighted in yellow. 
(10 points): As a user, I want to be able to search for someone based on a single criterion.  (You should be able to find and return a list of people who match the search)
(20 points): As a user, I want to be able to search for someone based on 2-5 criteria.  (I.e if you search for Gender: male and Eye Color: blue, you should get back a list of people who match the search)
(15 points): As a user, I want to be able to look up someone’s information after I find them with the program (display values for the various traits of the found person).
(25 points): As a user, I want to be able look up someone’s descendants after I find them with the program (display the names of the descendants), USING RECURSION.
(20 points): As a user, I want to be able look up someone’s immediate family members after I find them with the program (display the names of the family members and their relation to the found person.  Parents, spouse, and siblings).
*/
"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/
// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
    break;


    case 'no':
      searchResults = searchByTrait(people);
     searchType;
      break;
     

      default:
    app(people); // restart app
      break;
  }
  mainMenu(searchResults, people);
  
  //   case 'no':
  //     searchResults = searchByTrait(people);
     
  //     break;
  //     default:
  //   app(people); // restart app
  //     break;
  // }
  // mainMenu(searchResults, people);
  }

 

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  let displayResults;
  switch(displayOption){
    case "info":
    displayPerson(person);
    break;
    case "family":
    displayFamily(person);
    break;
    case "gender":
      gender(people);
    case "descendants":
    displayResults = "I don't know what you are talking about."
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
     
    }
    else{
      return false;
    }
  });

  if (foundPerson.length > 1) {

    return undefined;
  }

 return foundPerson[0];


}
   

 


// alerts a list of people
function displayPeople(people){
  
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  
  //alert()
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "DOB: " + person.dob + "\n";
  /////////NEED TO: CONVERT DOB TO AGE - FUNCTION STARTED BELOW
  personInfo += "Height: " + person.height + '"' + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Spouse: " + person.currentSpouse + "\n";

  alert(personInfo);
}
////function that changes spouse ID to spouse name or prints "none" if no spouse ID for this person
///function spouseName(person)

////function that calculates age - NEEDS WORK!
// function getAge(person) {
// var age = Date.now - (personInfo.person.dob)
// let results = people.filter(function(person){{

//   if (person.dob === age){   
//     return true;
//     }
//     else{
//     return false;
//     }
// }})
// }

//display parents, spouse, & siblings
function displayFamily(person){
  
  let personFamily = "Parents: " + person.parents + "\n";
    personFamily += "Spouse: " + person.currentspouse + "\n";
    personFamily+= "Siblings: " + person.currentspouse;
    // need to solve how too get siblings above instead of current spouse on 3rd line
  
  alert("We found:" + "\n" + personFamily);
}

////NEED TO have function get the parent/Spouse IDs and convert to names
function getParents(person){
  return person.parents;
}

function getSpouse(person){
  return person.currentSpouse;
}

 //////NOTICE- PLACEHOLDER ONLY; NEED TO filter through the data set to find people wih same parents to get siblings
 function getSiblings(person){
  return person.currentSpouse;
}


function searchByTrait(person){
  let trait = prompt("Would you like to search by gender, age, eye color, weight or height? " )
  let results = [];
  switch(trait){
    case "gender":
      results = gender(person);
      displayPeople(results);
    case "age"  :
      results = age(person);
      displayPeople(results);
    case "eye color":
      results = eyeColor(person);
      displayPeople(results);
    case "weight":
      results = weight(person);
      displayPeople(results);
      case "height":
      results = height(person);
      displayPeople(results);


}}



// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function gender(people){
  
  
  let genderSearch = prompt("What is their gender? Male or Female?").toLowerCase()

  let results = people.filter(function(person){{

    if (person.gender === genderSearch){   
      return true;
      }
      else{
      return false;
      }
  }})

  displayPeople(results);
}

function age(people){
  
  
  let ageSearch = prompt("What is their age?")

  let results = people.filter(function(person){{

    if (getAge.person === ageSearch){   
      return true;
      }
      else{
      return false;
      }
  }})

  displayPeople(results);
}

function eyeColor(people){
  
  let eyeColorSearch = prompt("What is their eye color?").toLowerCase()

  let results = people.filter(function(person){{

    if (person.eyeColor === eyeColorSearch){   
      return true;
      }
      else{
      return false;
      }
  }})

  displayPeople(results);
}

  function weight(people){
  
    let weightSearch = prompt("What is their weight?");
  
    let results = people.filter(function(person){{
  
      if (person.weight === weightSearch){   
        return true;
        }
        else{
        return false;
        }
    }})
  
    displayPeople(results);
  }

    function height(people){
  
      let heightSearch = prompt("What is their height in inches?");
    
      let results = people.filter(function(person){{
    
        if (person.height === heightSearch){   
          return true;
          }
          else{
          return false;
          }
      }})
    
      displayPeople(results);
    }
  


// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation 
}


