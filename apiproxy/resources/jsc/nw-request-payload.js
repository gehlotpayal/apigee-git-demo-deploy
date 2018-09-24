var request = JSON.parse(context.getVariable('request.content'));
var latest={
    
};
latest["NumberToWords"]={};
latest["NumberToWords"]["ubiNum"]=request.number;
context.setVariable('request.content', JSON.stringify(latest));