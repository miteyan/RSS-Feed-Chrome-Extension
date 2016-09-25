$(document).ready(function(){
$("#feed").PaRSS(
 // (feed url,item count,date format,show descriptions)
"http://miteyan.com/rss.xml",9, true );
window.addEventListener('click',function(e){  // To open injected hyperlinks in new tabs, chrome block them otherwise.
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
});
});