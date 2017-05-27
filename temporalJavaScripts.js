
var oregonurl="images/oregontrail.jpg";
var pompurl="images/pompeii.jpg"	//look at pompeii one together
var firsturl="images/wrightbrothers.jpg"
var triurl="images/triassicdinos.jpg"
var olympurl="images/olympics.png"
var moonurl="images/moonbuzz.jpg"
var caesarurl="images/caesardeath.jpg"
var sparturl="images/spartanwarriors.jpg"
//make sure to move images that we choose to the 
//images folder and change these variables as needed

function makeSummaryObject(name, description, price, url){
	var summary = {}
	summary.name = name;
	summary.description = description;
	summary.price = price;
	summary.url=url;

	return summary;
}

//function with code to create objects 

var oregon = ("Oregon Trail Tour", "description", 1000, oregonurl);
var pompeii=("Witness the Destruction of Pompeii", "description", 2000, pompurl);
var firstflight=("First in Flight Tour", "description", 3000, firsturl);
var triassic=("Triassic Park", "description", 4000, triurl);
var olympics=("Ancient Greek Olympics Tour" );
var moon=("The Lunar Landing");
var caesar =("The Assassination of Julius Caesar");
var spartans = ("The Battle of Thermopylae");

function printHTML(message) {
	var tourdiv= document.getElementById("basictour1");
	
}

//pass information into each object (add desc, price, url)

var cardArray=[oregon, pompeii, firstflight, triassic, olympics, moon, caesar, spartans ];
//array to hold objects that contain name, price, etc info above

function iterateThroughArray(arr) {
for (var i=0; i<cardArray.length; i++) {

	makeSummaryObject(arr[i]); //call function to create the objects 

	
}

//loop to run through each
// object in the array and print to the DOM

iterateThroughArray(cardArray);







//add html to pages using innerHTML



