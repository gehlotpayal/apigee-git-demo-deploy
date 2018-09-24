 var request = JSON.parse(context.getVariable('request.content'));
var latest = {
    
};
latest["NumberToDollars"] = {};
latest["NumberToDollars"]["dNum"] = request.dNum; 
context.setVariable('request.content', JSON.stringify(latest)); 