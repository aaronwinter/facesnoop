/*
 * ##################################
 *       By Aaron (aaronwinter)
 *            December 2014
 *    GNU GENERAL PUBLIC LICENSE V3
 * ##################################
 * */
console.log("Init");
var debug = 0;

chrome.webRequest.onBeforeRequest.addListener(
  function(data) {
    var xmlhttp;
    console.log("INTERCEPTED");
    
    if(debug)
      console.log("data.url:::" + data.url);
      
    if(data.url == "https://www.facebook.com/ajax/mercury/send_messages.php") {//if you send messages, then it shows as seen 
        xmlhttp.open("POST","change_read_status.php",true);
        xmlhttp.send();                                                //and notifications are dismissed this way
    }
    if(data.url == "https://www.facebook.com/ajax/mercury/change_read_status.php") {
      return {cancel: true};
    }

    else
      return null;
  },

  {urls : ["*://*.facebook.com/*"]},
  ["blocking"]);
