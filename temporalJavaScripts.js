
var oregonurl="images/oregontrail.jpg";
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

var oregonDescrip = "Can you make it to the Williamette Valley? Test your survival skills and endurance all while pushing your luck with deadly microbes on our most popular US tour!<br>Groups of up to six will embark on this American epic journey. Individual participants (those joining without a group) will be assigned to a departure group of historic travelers (not necessarily survivors). Should over half of your group perish, you will be merged into a group with similar circumstances."
var pompeiiDescrip = "Experience the incredible last day of the famous ancient city. Basic tour experience includes the opportunity to navigate the city through its disaster in real time. Deluxe tour includes hot-air balloon observation feature. Bury your own souvenir! Excavations times of souvenirs may vary."
var firstflightDescrip = "Airplane enthusiasts rejoice! Travel to windswept 1903 to witness the full day of firsts for human flight. Deluxe package includes meet-and-greet with Wilbur and Orville Wright. Super-deluxe package travelers get to take a ride on the Wright Flyer."
var triassicDescrip = "Who needs a dinosaur theme park when you can experience the real thing? Study the flora and fauna of the triassic period in their natural habitat!"
var olympicsDescrip = "Sports enthusiasts, experience the origin of the modern Olympic Games. Regular package holders provided with costume and directions to the spectator areas. Deluxe package incudes participation in an event of your choice (wrestling, footraces, archery, and discus throwing)! Please note that most games participants do so naked, and women are not permitted on this tour."
var moonDescrip = "Experience one of the biggest moments in space exploration by being in the control room as the first human steps are taken on the moon. Deluxe package holders can accompany the crew of Apollo 11 into space, and super-deluxe package holders can take their own giant leap for themselves!"
var caesarDescrip = "\"Even you, Brutus?\" Witness the controversial moment when Caesar got his comeuppance for crossing the Rhine with his army. Or refuse to stand for tyrrany and be a knife-weilding participant with the deluxe package! Super-deluxe package includes the opportunity to eulogize (or just bury) Caesar."
var spartansDescrip = "Watch Persians clash with Spartans at the Battle of Thermopylae! Regular package holders book passage aboard a specially crafted non-combat ship to spectate the land battle. Deluxe package holders have the opportunity to engage in some hands-on history and see how long their team can hold the hot gates against the invaders."


var oregon = makeSummaryObject("oregon","Oregon Trail Tour", oregonDescrip, 1000, oregonurl);
var pompeii = makeSummaryObject("pompeii","Witness the Destruction of Pompeii", pompeiiDescrip, 2000, pompurl);
var firstflight = makeSummaryObject("firstflight","First in Flight Tour", firstflightDescrip, 3000, firsturl);
var triassic = makeSummaryObject("triassic","Triassic Park", olympicsDescrip, 4000, triurl);
var olympics = makeSummaryObject("olympics","Ancient Greek Olympics Tour", olympicsDescrip, 5000, olympurl);
var moon = makeSummaryObject("moon","The Lunar Landing", moonDescrip, 6000, moonurl);
var caesar = makeSummaryObject("caesar","The Assassination of Julius Caesar", caesarDescrip, 7000, caesarurl);
var spartans = makeSummaryObject("spartans","The Battle of Thermopylae", spartansDescrip, 8000, sparturl);

//pass information into each object (add desc, price, url)
//call function to create each object and store value in a variable
//that then becomes part of the array below

var cardArray=[oregon, pompeii, firstflight, triassic, olympics, moon, caesar, spartans ];
//array to hold objects that contain name, price, etc info above

var stringHTML= "";

function iterateThroughArray(arr) {
for (var i=0; i<cardArray.length; i++) {

	var message = `<div class="tour" id="${cardArray[i].id}">
				<img src="" alt="${cardArray[i].name}">
			  
			  <div class="container">
			   	<h4>${cardArray[i].name}</h4> 
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



