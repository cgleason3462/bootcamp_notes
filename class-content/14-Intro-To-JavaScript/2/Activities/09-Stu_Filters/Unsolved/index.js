// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

// Roster of player
var roster = [{
   name: "Doug",
   position: "Quarterback",
   madeTeam: true
 },
 {
   name: "Antonio",
   position: "Tight End",
   madeTeam: true
 },
 {
   name: "Nick",
   position: "Kicker",
   madeTeam: false
 },
 {
   name: "Ereck",
   position: "Offensive Live",
   madeTeam: false
 },
 {
   name: "AJ",
   position: "Line Backer",
   madeTeam: true
 }];

// YOUR CODE HERE
function selectYounger(person) {
    return person.age < 30;
  }
  
  // filter() uses the custom function as its argument
  var youngSimpsons = simpsons.filter(selectYounger);
  
  // Test
  console.log(youngSimpsons);