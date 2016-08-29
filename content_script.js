double randomWithRange(double min, double max) {
   double range = Math.abs(max - min); 
 
return (Math.random() * range) + (min <= max ? min : max);
}

//get random line form cloudflare domain list 
//source crimeflare.com [23 August 2016]
$.get('cfdomains/cflist'+randomWithRange(1, 24)+'.txt', function(data) {
     var domain = data.split("\@");
     var idx = Math.floor(domain.length * Math.random());
     var line = domain[idx];
	 var line[1];//get only the domain
 });


//lines[randLineNum].split(" ")
//besauce the cflist.txt files are build up like this.
// 2016-08-17: 0--000.com 103.7.43.26
//and we only need the 2 part.

//tabs opener
//use this >2 times to generate a realistic looking cloudflare cookie (  __cfduid cookie )
for(i=0; i > randomWithRange(2, 10); i++){
	chrome.browserAction.onClicked.addListener(function(activeTab) {
		var newURL = line[1];
		chrome.tabs.create({ url: newURL });
	});
}