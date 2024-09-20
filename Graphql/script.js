fetch("https://swapi-graphql.netlify.app/.netlify/functions/index?query={allPlanets{planets{name}}}")
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData)
})