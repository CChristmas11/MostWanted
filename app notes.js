


function searchByTrait(person){
    let trait = prompt("Would you like to search by gender, age, eye color, weight or height? " )
  
    switch(trait){
      case "gender":
      Gender(person);
      case "age"  :
      Age(person);
      case "eye color":
      EyeColor (person);
  
  function Gender(people){
    let trait = prompt("What is their gender?");
        let genderinput = people.filter(function(person){
  
         if (trait === person.gender){
           return true;
         
           }
         })
        }
  
  }}
  