// XML HTTP request
//create an xml http instance(object)
var request = new XMLHttpRequest();
//initiate a new connection
//http methods consists of get,put,port...
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send  request connection to server
request.send();
//if server responded successfully, we need to retrieve the data
request.onload= function(){
    var data =JSON.parse(this.response);
    for(let i in data)
{
    console.log(data[i])
}
    
}
