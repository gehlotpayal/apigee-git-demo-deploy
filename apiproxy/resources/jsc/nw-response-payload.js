 var response = JSON.parse(context.getVariable('response.content'));

var email = context.getVariable('developer.email'); 
var name = context.getVariable('developer.firstname'); 
var latest={
    
};

latest["words"]=response.NumberToWordsResponse.NumberToWordsResult;
latest["email"]=email;
latest["name"]=name;
   
    var msg="{'FromEmail':'nikhil.purohit@neosalpha.com','FromName':'JS Pilot','Subject':'Notification','Html-part':'<h3>Dear "+name+", welcome to Mailjet!</h3><br />May the delivery force be with you!',   'Recipients':[        {            'Email': '"+email+"'        }    ]}";

var headers = {'Content-Type' : 'application/json','Authorization':'Basic NWI2MmJiN2FjNDRmNjE3NDhiZDRjNjYwMWRjNTRkYTk6N2VkY2UyYzUxODY1NjExMTAwN2ZiZDg5YjRhOGM0YzQ=' };
var myRequest = new Request("https://api.mailjet.com/v3/send","POST",headers,msg);
var exchange = httpClient.send(myRequest);

    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "https://api.mailjet.com/v3/send", true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.setRequestHeader("Authorization", "Basic NWI2MmJiN2FjNDRmNjE3NDhiZDRjNjYwMWRjNTRkYTk6N2VkY2UyYzUxODY1NjExMTAwN2ZiZDg5YjRhOGM0YzQ=");
   // var response = JSON.parse(xhttp.responseText);
//    xhttp.send(msg); 
context.setVariable('response.content', JSON.stringify(latest));