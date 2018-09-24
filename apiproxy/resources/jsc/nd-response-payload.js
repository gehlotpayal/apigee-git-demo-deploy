var response = JSON.parse(context.getVariable('response.content'));
var latest={
    
};

latest["words"]=response.NumberToDollarsResponse.NumberToDollarsResult;
context.setVariable('response.content', JSON.stringify(latest));  