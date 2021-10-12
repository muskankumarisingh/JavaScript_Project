// Quotes list has the dictionaries of each quote details with the keys as quote, author, link

var quotes = [
	{
		"quote": "Be the change you wish to see.",
		"author": "Mahatma Gandhi",
		"link": "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
	},
	{
		"quote": "Social progress can be measured by the social position of the female sex.",
		"author": "Karl Marx",
		"link": "https://en.wikipedia.org/wiki/Karl_Marx"
	},
	{
		"quote": "I like the religion that teaches liberty, equality and fraternity.",
		"author": "B. R. Ambedkar",
		"link": "https://en.wikipedia.org/wiki/B._R._Ambedkar"
	},
	{
		"quote": "If you tremble with indignation at every injustice then you are a comrade of mine.",
		"author": "Ernesto Che Guevara",
		"link": "https://en.wikipedia.org/wiki/Che_Guevara"
	},
	{
		"quote": "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.",
		"author": "Abdul Kalam",
		"link": "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam"
	}
];

// list of colors to show as background colors
var bgColors = ["#6C3483 ", "#F4D03F ", " #7b241c ", "#2ecc71","darkcyan", "silver", "BlanchedAlmond", " #273746 ","#f5b041","#7f8c8d","#0e6655"];

window.onload=function start() {
	changeQuote()
	
}

function newQuotes() {
  		const indx = Math.floor(Math.random()*quotes.length);
		const quote_=quotes[indx].quote;
		const auth=quotes[indx].author
		const url = quotes[indx].link;

		color=[Math.floor(Math.random()*bgColors.length)];
		document.body.style.backgroundColor=bgColors[color];
        document.getElementById("saidso").innerHTML = quote_;
		document.getElementById("author").innerHTML = "~ "+auth;
		document.getElementById("link").href = url;	
}
newQuotes()