//Marsh Function
function marsh() {
    var marshRoll = (Math.floor((Math.random() * (6 - 1) + 1)));
    var result;
    switch (marshRoll) {
        case 1:
            result = "Earthblood Mere";
            break;
        case 2:
            result = "Earthblood Mere";
            break;
        case 3:
            result = "Khemrian Quicksand";
            break;
        case 4:
            result = "Khemrian Quicksand";
            break;
        case 5:
            result = "Mist-wreathed Swamp";
            break;
        case 6:
            result = "Mist-wreathed Swamp";
            break;
    }
    return result;
}
//Magical Mystery Function
function magicalMystery() {
    var magicalMysteryRoll = (Math.floor((Math.random() * (6 - 1) + 1)));
    var result;
    switch (magicalMysteryRoll) {
        case 1:
            result = "Sinister Statue";
            break;
        case 2:
            result = "Arcane Ruins";
            break;
        case 3:
            result = "Nehekharan Sphynx";
            break;
        case 4:
            result = "Sorcerous Portal";
            break;
        case 5:
            result = "Wyrding Well";
            break;
        case 6:
            result = "Magic Circle";
            break;
    }
    return result;
}



//Hill Function
function hill() {
    var hillRoll = (Math.floor((Math.random() * (6 - 1) + 1)));
    var result;
    switch (hillRoll) {
        case 1:
            result = "Ordinary Hill";
            break;
        case 2:
            result = "Ordinary Hill";
            break;
        case 3:
            result = "Ordinary Hill";
            break;
        case 4:
            result = "Temple of Skulls";
            break;
        case 5:
            result = "Scree Slope";
            break;
        case 6:
            result = "Anvil of Vaul";
            break;
    }
    return result;
}



//Steadfast Sanctum Function
function steadfastSanctum() {
    var steadfastSanctumRoll = (Math.floor((Math.random() * (6 - 1) + 1)));
    var result;
    switch (steadfastSanctumRoll) {
        case 1:
            result = "Grail Chapel";
            break;
        case 2:
            result = "Acropolis of Heroes";
            break;
        case 3:
            result = "Wizard's Tower";
            break;
        case 4:
            result = "Sigmarite Shrine";
            break;
        case 5:
            result = "Elven Waystone";
            break;
        case 6:
            result = "Dwarf Brewhouse";
            break;
    }
    return result;
}

//Hill Function
function obstacles() {
    var obstaclesRoll = (Math.floor((Math.random() * (6 - 1) + 1)));
    var result;
    //console.log("Obstacles" + " " +obstaclesRoll);
    switch (obstaclesRoll) {
        case 1:
            result = "Fence";
            break;
        case 2:
            result = "Wall";
            break;
        case 3:
            result = "Blazing Barricade";
            break;
        case 4:
            result = "Blessed Bulwark";
            break;
        case 5:
            result = "Ghost Fence";
            break;
        case 6:
            result = "Recursion";
            break;
    }
    return result;
}

//Sinister Structure Function
function sinisterStructure() {
    var sinisterStructureRoll = (Math.floor(Math.random() * (6 - 1) + 1));
    var result;
    switch (sinisterStructureRoll) {
        case 1:
            result = "Altar of Khaine";
            break;
        case 2:
            result = "Charnel Pit";
            break;
        case 3:
            result = "Bane Stone";
            break;
        case 4:
            result = "Haunted Mansion";
            break;
        case 5:
            result = "Idol of Gork";
            break;
        case 6:
            result = "Tower of Blood";
            break;
    }
    return result;
}
//Settlement of Order Function
function settlementOfOrder() {
    var buildingsRoll = (Math.floor((Math.random() * (3 - 1) + 1)));
    var obstaclesNumber = (Math.floor((Math.random() * (3 - 1) + 1)));
    var completeSettlement = "A Settlement of Order composed of " + buildingsRoll + " buildings,";
    var obstaclesTestString = "";
    for (var e = 0; e <= obstaclesNumber; e++) {
        obstaclesTestString += obstacles();
    }
    completeSettlement = completeSettlement + " a " + obstaclesNumber + obstaclesTestString + " obstacles" + ",";
    completeSettlement = completeSettlement + " and " + steadfastSanctum();

    return completeSettlement;

}
//Encampment of Destruction Function
function encampmentofDestruction() {
    var buildingsRoll = (Math.floor((Math.random() * (3 - 1) + 1)));
    var obstaclesNumber = (Math.floor((Math.random() * (3 - 1) + 1)));
    var completeEncampment = "An Encampment of Destruction composed of " + buildingsRoll + " buildings,";
    var obstaclesTestString = "";
    for (var o = 0; o <= obstaclesNumber; o++) {
        obstaclesTestString += obstacles();
    }
    completeEncampment = completeEncampment + " a " + obstaclesNumber + obstaclesTestString + " obstacles" + ",";
    completeEncampment = completeEncampment + " and " + sinisterStructure();

    return completeEncampment;

}
//GENERATING THE RESULTS
//For each position in the array, roll two dice and sum the result, then run appropriate terrain type functions)
function selectorFunction() {
    var roll = (Math.floor((Math.random() * (6 - 1) + 1)) + Math.floor((Math.random() * (6 - 1) + 1)));
    var result;
    switch (roll) {
        case 2:
            result = settlementOfOrder();
            break;
        case 3:
            result = steadfastSanctum();
            break;
        case 4:
            result = sinisterStructure();
            break;
        case 5:
            result = hill();
            break;
        case 6:
            result = "Building";
            break;
        case 7:
            result = "Mysterious Forest";
            break;
        case 8:
            result = obstacles();
            break;
        case 9:
            result = "Mysterious River";
            break;
        case 10:
            result = magicalMystery();
            break;
        case 11:
            result = marsh();
            break;
        case 12:
            result = encampmentofDestruction();
            break;
    }
    return result;
}
//GENERATING NUMBER OF RESULTS NEEDED
// Create array for terrain items, determine it's length, commence For loops for all positions in the array.
var finalTerrain = [];
var length = 4 + Math.floor((Math.random() * (6 - 1) + 1));
console.log("There will be" + " " + length +" pieces of terrain");
for (var i = 0; i < length; i++) {
    //console.log("we are up to " + i + "th value in the array")
    finalTerrain[i] = selectorFunction();
}


//Send generated results to the HTML
function insertArray() {

    var theText = "";  // set the theText output to an empty string otherwise it would start with null.
    for (var i = 0; i < finalTerrain.length; i++)
    {
        // create the createTextNode
        var insertText = document.createTextNode(theText);
        insertText.innerHtml = finalTerrain[i];
        // document.getElementById([i]).appendChild(insertText);
        var array = document.querySelectorAll(".cell");
        var rand = array[Math.floor(Math.random() * (array.length - 0))];
        rand.innerHTML = finalTerrain[i];
    }
    //var item = array[Math.random(array.length -1)].appendChild(insertText);
}
/**
 * Created by davidlgunther on 3/02/2016.
 */
