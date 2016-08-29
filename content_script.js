double randomWithRange(double min, double max)
{
   double range = Math.abs(max - min);     
   return (Math.random() * range) + (min <= max ? min : max);
}

//get random line form cloudflear domain list 
//source crimeflare.com [23 August 2016]
$.get('cfdomains/cflist'+randomWithRange(1, 24)+'.txt', function(txt) {
    var lines = txt.responseText.split("\n");
    var randLineNum = Math.floor(Math.random() * lines.length);
    save(lines[randLineNum]); // random line from the text file
});



//tabs opener
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
    chrome.tabs.create({ url: newURL });
});