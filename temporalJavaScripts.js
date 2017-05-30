
var oregonurl="images/oregon2.jpg";
var pompurl="images/pompeii.jpg"	//look at pompeii one together
var firsturl="images/wrightbrothers.jpg"
var triurl="images/triassicdinos.jpg"
var olympurl="images/olympics.png"
var moonurl="images/moonbuzz.jpg"
var caesarurl="images/caesardeath.jpg"
var sparturl="images/spartanwarriors.jpg"
//make sure to move images that we choose to the 
//images folder and change these variables representing urls as needed

//need print function to insert info into html at the end
function printHTMLToDiv(message) {
	var tourdiv= document.getElementById("basictour1");
	//tourdiv holds a node, or a reference to the basictour1 div on 
	//the html page (pointing to where we want to add text)

	tourdiv.innerHTML = message; 
	//will take on string passed in through message when the function
	//is called below.
}


function makeSummaryObject(id, name, description, price, url){
	var summary = {};
	summary.id = id;
	summary.name = name;
	summary.description = description;
	summary.price = price;
	summary.url=url;

	return summary;
}

// above function with code to create an object- 
//need to assign value to 
//perameters next below and create each object

var oregon = makeSummaryObject("oregon","Oregon Trail Tour", "description", 1000, oregonurl);
var pompeii = makeSummaryObject("pompeii","Witness the Destruction of Pompeii", "description", 2000, pompurl);
var firstflight = makeSummaryObject("firstflight","First in Flight Tour", "description", 3000, firsturl);
var triassic = makeSummaryObject("triassic","Triassic Park", "description", 4000, triurl);
var olympics = makeSummaryObject("olympics","Ancient Greek Olympics Tour", "description", 5000, olympurl );
var moon = makeSummaryObject("moon","The Lunar Landing", "description", 6000, moonurl);
var caesar = makeSummaryObject("caesar","The Assassination of Julius Caesar", "description", 7000, caesarurl);
var spartans = makeSummaryObject("spartans","The Battle of Thermopylae", "description", 8000, sparturl);

//pass information into each object (add desc, price, url)
//call function to create each object and store value in a variable
//that then becomes part of the array below

var cardArray=[oregon, pompeii, firstflight, triassic, olympics, moon, caesar, spartans ];
//array to hold objects that contain name, price, etc info above

var stringHTML= "";

function iterateThroughArray(arr) {
for (var i=0; i<cardArray.length; i++) {

	var message = `<div class="tour" id="${cardArray[i].id}">
				<img src="${cardArray[i].url}" alt="${cardArray[i].name}">
			  
			  <div class="container">
			   	<h4>${cardArray[i].name}</h4> 
			   	<h4>${cardArray[i].price}</h4>
			  </div><!--end of container-->
			  
			  <div class="description">
			 	 	<p>${cardArray[i].description}</p>
			  </div>

			  <a href="guides.html" target="_blank">
			  	 	<button>Guide</button>
			  </a>


			  <a href="contact.html">
			  	<button>Reserve Your Spot Now!</button>
			  </a>

			  
			</div><!--end of class tour id ${cardArray[i].id}-->
`
	
	stringHTML += message;
	
	}

	printHTMLToDiv(stringHTML);
}

//loop to run through each
// object in the array and print to the DOM


iterateThroughArray(cardArray);









//add html to pages using innerHTML



