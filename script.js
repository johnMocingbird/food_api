const url = "https://api.edamam.com/api/recipes/v2?type=public&app_id=8f015481&app_key=04f42a1106f1c5216b12df8b78208f16&diet=balanced"
const veganData = []


function getVeganData() {
    $.ajax( {
        url: url,
        method: 'GET',
    })
    .then(function (response) {
        for(let i = 0; i < 5; i++){
            veganData.push(response.hits[i])
            //(AFTER MVP) IF LINKS TO RECPIE ARE BROKEN DO NOT ADD TO LIST.
        }
        processVeganData()
    })
}

function processVeganData(){
    veganData
    //NAME
    //ADD FOR-LOOP TO RUN THROUGH veganData[] (Do later.)
    console.log(veganData[0].recipe.label)

    // INGREDIENTS 
    console.log(veganData[0].recipe.ingredients)
    // todo add for loop TO RUN THROUGH veganData[0].recipe.[i]ingredients[i]

    // ADD LINK
    // ADDPICTURE

    // PUT ON PAGE BY MODIFYING AN EXISTINGS ELEMENT, OR BY APPENDING NEW ELEMENTS AND MODIFYING THE TEXT OF THOSE ELEMENTS (HINT:TEXT CONTENT)

    // HINT SETUP FOR-LOOP TO PUT ALL OF THEM ON THE PAGE (REMEMBER, TRY AND JUST DO IT ONCE, AND THEN ADD THE FOR-LOOP TO DO EVERYTHING)
}



const buttonEL = document.getElementById("btn").addEventListener("click", getVeganData)