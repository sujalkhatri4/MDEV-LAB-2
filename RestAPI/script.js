fetch("https://swapi.dev/api/planets/")
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData)
})