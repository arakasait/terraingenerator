
//Establish Classes:

/**
 * Created by davidlgunther on 6/02/2016.
 */
function Terrain(type,typeRule,subType,subTypeRule,pageReference,artworkFile) {
    this.type = type;
    this.typeRule = typeRule;
    this.subType = subType;
    this.subTypeRule = subTypeRule;
    this.pageReference = pageReference;
    this.artworkFile = artworkFile;
}


//Types all need to be checked and refined.

//3. STEADFAST SANCTUMS

var grailChapel = new Terrain("Steadfast Sanctum","Building","Grail Chapel",'All units belonging to an army from the Forces of Order within 6" of a Grail Chapel have the Regeneration (6+) special rule. Bretonnian units within 6" of a Grail Chapel also have the Stubborn special rule.',"130, Regeneration: 74, Stubborn: 76", undefined);
var acropolisOfHeroes = new Terrain("Steadfast Sanctum","Impassable Terrain","Acropolis of Heroes",'All units within 6" of an Acropolis of Heroes are Stubborn. A unit garrisoning the Acropolis of Herores gets +1 to hit in close combat.',"130, Stubborn: 76", undefined);
var wizardsTower = new Terrain("Steadfast Sanctum","Impassable Terrain","Wizard's Tower",'A wizard within 3" of a Wizards Tower at the start of the Magic Phase knows all of the spells from his chosen lore(s) for that phase. If more than one wizard is within 3", randomly apply effect to only one of them.',"131", undefined);
var sigmariteShrine = new Terrain("Steadfast Sanctum","Impassable Terrain","Sigmarite Shrine",'Any model belonging to an army from the Forces of Destruction must re-roll successful ward saves if they are within 6" of the Sigmarite Shrine',"131", undefined);
var elvenWaystone = new Terrain("Steadfast Sanctum","Impassable Terrain","Elven Waystone",'Any Wizard within 6" of an Elven Waystone adds +1 to his Channeling attempts',"116", undefined);
var dwarfBrewhouse = new Terrain("Steadfast Sanctum","Building","Dwarf Brewhouse",'All units within 6" of a Dwarf Brewhouse have the Immune to Psychology and Stubborn special rules. Dwarf units within 6" of the Brewhouse are Unbreakable, but must first pass a Leadership test with a -3 modifier if they want to move out of range of the Brewhouse effects.',"130, Immune to Psychology: 71, Stubborn: 76, Unbreakable: 78", undefined);

// SINISTER STRUCTURE

var altarOfKhaine = new Terrain("Magical Mystery","Impassable Terrain","Altar of Khaine",'All units within 6" of an Altar of Khaine are subject to the rules for Frenzy - as soon as a unit moves out of range, the Frenzy is lost',"116, Frenzy: 70", undefined);
var charnelPit = new Terrain("Magical Mystery","Impassable Terrain","Charnel Pit",'All units within 6" of the Charnel Pit suffer a -1 penalty to their Leadership. Undead units within 6" of the Charnel Pit have the Regeneration (6+) special rule.',"116, Regeneration 74", undefined);
var baneStone = new Terrain("Magical Mystery","Impassable Terrain","Bane Stone",'Hits made against units within 6" of a Bane Stone have a +1 bonus To Wound.',undefined, undefined);
var hauntedMansion = new Terrain("Magical  Mystery","Building","Haunted Mansion",'At the end of the shooting phase, all units within 6" of the Haunted Mansion suffer D6 Strength 1 hits. No armour saves are allowed. A unit inside the haunted mansion causes Fear.',"116. Miscast: 508", undefined);
var idolOfGork = new Terrain("Magical Mystery","Impassable Terrain","Idol of Gork (or possibly Mork)",'Units that start the turn within 6" of the Idol can re-roll a failed charge distance roll.',"116", undefined);
var towerOfBlood = new Terrain("Magical Mystery","Building","Tower of Blood",'Units within 6" of a Tower of Blood have the Hatred special rule. Units from the Forces of Destruction within 6" of a Tower of Blood also have the Frenzy special rule. As soon as a unit moves out of range, the Hatred / Frenzy is lost.',"130, Hatred: 71 Frenzy: 70", undefined);


//Magical Mystery
var sinisterStatue = new Terrain("Magical Mystery","Impassable Terrain","Sinister Statue",'At the start of each player turn, roll a die for every unit within 6" of a Sinister Statue. On a 4 or more, nothing happens. On a 1-3, the unit suffers D6 Strength 4 hits.',"116", undefined);
var arcaneRuins = new Terrain("Magical  Mystery","Impassable Terrain","Arcane Ruins",'Any wizard with 6" of an Arcane Ruin can choose to roll up to four dice when channeling, rather than one. However, if three or more dice come up as 6s, the wizard must immediately roll on the Miscast table.',"116. Miscast: 508", undefined);
var nehekharanSphynx = new Terrain("Magical  Mystery","Impassable Terrain","Nehekharan Sphynx",'At the start of each player turn, the player whose turn it is can choose one of his characters within 6" of a Nehekharan Sphynx to challenge the spirit to a riddling contest. Take an Initiative test. If failed, model takes a wound with no armour saves allowed. If passed, model gains one random rule of the following: Devastating Charge, Heroic Killing Blow, Loremaster (Death). Only Wizards can use Loremaster (Death) but the Sphynx may still grant it to non-wizard characters. Effects remain until end of the game.',"130, Devastating Charge: 68, Heroic Killing Blow: 72, Loremaster: 72", undefined);
var sorcerousPortal = new Terrain("Magical Mystery","Impassable Terrain","Sorcerous Portal",'At the start of the Magic Phase, after power and dispel dice have been generator but before spells are cast, the Sorcerous Portal belches forth energy in the form of a spell. Roll 2D6 on the table below each time to see what spell is cast. // 2-4: Soulblight (Lore of Death // 5-6: Wyssans Wildform (Lore of Beasts) // 7: Plague of Rust (Lore of Metal) // 8-9: The Speed of Light (Lore of Light) // 10-12: Fireball (Lore of Fire) // The spell does not need line of sight, always targets the closest unit (regardless of range, if the unit is in combat and so on), is automatically cast and cannot be dispelled. If the spell has a choice of casting values, it is assumed to be cast at the lower value.',"116, Spells on 492-499.", undefined);
var wyrdingWell = new Terrain("Magical Mystery","Impassable Terrain","Wyrding Well",'Units not in combat within 3" at end of the Movement phase roll a D6 on following chart: 1. Magical Poisoning - models in the unit cannot make any voluntary action (including shooting, casting spells, using magic items and so on) until the start of the following turn. // 2-4: Ailments Banished - the unit immediately recovers 2D6 wounds worth of models, as described for the Lore of Life Regrowth spell. // 5-6: The Gift of Oblivion - unit is subject to Stupidity and Unbreakable for the remainder of the game.',"116, Unbreakable: 78, Stupidity: 76, Regrowth: 494", undefined);
var magicCircle = new Terrain("Magical Mystery","Impassable Terrain","Magic Circle",'Units within 6" of a Magic Circle have the Magic Resistance (2) special rule.',"116, Magic Resistance: 72", undefined);




//4.

//5. HILLS
var ordinaryHill = new Terrain("Hill", "Open terrain, +1 to combat resolution for units that charged down the hill that turn.","Ordinary Hill","None","118", undefined);
var anvilofVaul = new Terrain("Hill", "Open terrain, +1 to combat resolution for units that charged down the hill that turn.", "Anvil of Vaul",'Any unit within 6" of an Anvil of Vaul has both the Magical Attacks and Flaming Attacks special rule', "118; Flaming Attacks: 69", undefined);
var screeSlope = new Terrain ("Hill", "Open terrain, +1 to combat resolution for units that charged down the hill that turn.", "Scree Slope", "Any unit marching, charging, fleeing or pursuing up, down or across a Scree Slope must take a Dangerous Terrain test", "118, Dangerous Terrain: 117", undefined);
var templeOfSculls = new Terrain ("Hill", "Open terrain, +1 to combat resolution for units that charged down the hill that turn.", "Temple of Skulls",'At the beginning of each player turn, any character or champion on the Temple of Skulls can choose to embrace the favour of the Chaos Gods. If he does, roll a D6. On a roll of 2-6, one randomly chosen characteristic increases by D3 points. On a 1, the Chaos Gods htake his soul (or his purehearted comrades turn on im) - remove the model as a casuality with no saves of any kind allowed.', "118", undefined);


//6. BUILDINGS

//7. MYSTERIOUS FORESTS

// 8. OBSTACLES

var fence = new Terrain("Obstacle","If a cavalry, monstrous cavalry or chariot model marches, charges, flees, pursues or overruns over an obstacle, or charges an enemy on the other side of an obstacle, it must take a Dangerous Terrain test.  // If a firer is shooting at a model that is behind an obstacle and in base contact with it, the target model counts as in cover (of the appropriate type). When firing at a unit, the majority of its models must be behind the obstacle to benefit from this additional protection. // Measure charges to obstacles rather than units. Combat modifiers from defended obstacles apply only when unit charges.","Fence","Hard cover to units behind them (-2 to hit shooting), and a -1 To Hit modifier to charging models in base contact with them.","123, 122, Hard Cover: 41, Dangerous Terrain: 117", undefined);
var wall = new Terrain("Obstacle","If a cavalry, monstrous cavalry or chariot model marches, charges, flees, pursues or overruns over an obstacle, or charges an enemy on the other side of an obstacle, it must take a Dangerous Terrain test.  // If a firer is shooting at a model that is behind an obstacle and in base contact with it, the target model counts as in cover (of the appropriate type). When firing at a unit, the majority of its models must be behind the obstacle to benefit from this additional protection. // Measure charges to obstacles rather than units. Combat modifiers from defended obstacles apply only when unit charges.","Wall","Soft Cover, -1 to hit penalty to charging models in base contact.","123, 122, Soft Cover: 71, Dangerous Terrain: 117", undefined);
var blazingBarricade = new Terrain("Obstacle","If a cavalry, monstrous cavalry or chariot model marches, charges, flees, pursues or overruns over an obstacle, or charges an enemy on the other side of an obstacle, it must take a Dangerous Terrain test.  // If a firer is shooting at a model that is behind an obstacle and in base contact with it, the target model counts as in cover (of the appropriate type). When firing at a unit, the majority of its models must be behind the obstacle to benefit from this additional protection. // Measure charges to obstacles rather than units. Combat modifiers from defended obstacles apply only when unit charges.","Blazing Barricade","Soft Cover (-1 To Hit with BS) to units behind it. If a unit completes a charge against a defended Blazing Barricade, it immediately suffers one Strength 4 hit on each of its models in contact with the obstacle.","123, 122, Soft Cover: 41, Dangerous Terrain: 117", undefined);
var blessedBulwark = new Terrain("Obstacle","If a cavalry, monstrous cavalry or chariot model marches, charges, flees, pursues or overruns over an obstacle, or charges an enemy on the other side of an obstacle, it must take a Dangerous Terrain test.  // If a firer is shooting at a model that is behind an obstacle and in base contact with it, the target model counts as in cover (of the appropriate type). When firing at a unit, the majority of its models must be behind the obstacle to benefit from this additional protection. // Measure charges to obstacles rather than units. Combat modifiers from defended obstacles apply only when unit charges.","Blessed Bulwark","Hard cover to units behind them (-2 to hit shooting), and a -1 To Hit modifier to charging models in base contact with them. In addition, all units from the Forces of Destruction that are in base contact with the obstacle must halve their Initiative.","123, 122, Soft Cover: 71, Dangerous Terrain: 117", undefined);
var ghostFence = new Terrain("Obstacle","If a cavalry, monstrous cavalry or chariot model marches, charges, flees, pursues or overruns over an obstacle, or charges an enemy on the other side of an obstacle, it must take a Dangerous Terrain test.  // If a firer is shooting at a model that is behind an obstacle and in base contact with it, the target model counts as in cover (of the appropriate type). When firing at a unit, the majority of its models must be behind the obstacle to benefit from this additional protection. // Measure charges to obstacles rather than units. Combat modifiers from defended obstacles apply only when unit charges.","Ghost Fence","Soft cover (-1 To Hit with BS) to units behind it. A unit that is defending a Ghost Fence causes Fear in the first round of any close combat.","123, 122, Soft Cover: 71, Fear: 69, Dangerous Terrain: 117", undefined);

// 9. MYSTERIOUS RIVERS

//10. MAGICAL MYSTERY

//11. MARSH

var ordinaryMarsh = new Terrain("Marsh","Dangerous Terrain for all units, other than Skirmishers. Cavalry, monstrous cavalry and chariots that enter marshland fail their Dangerous Terrain tests on a 1 or 2.","Ordinary Marsh","","121, Dangerous Terrain: 117", undefined);
var earthbloodMere = new Terrain("Marsh","Dangerous Terrain for all units, other than Skirmishers. Cavalry, monstrous cavalry and chariots that enter marshland fail their Dangerous Terrain tests on a 1 or 2.","Earthblood Mere","Any unit with the majority of its models within the mere has Regeneration (6+)","121, Dangerous Terrain: 117, Regeneration: 74" , undefined);
var khemrianQuicksand = new Terrain("Marsh","Dangerous Terrain for all units, other than Skirmishers. Cavalry, monstrous cavalry and chariots that enter marshland fail their Dangerous Terrain tests on a 1 or 2.","Khemrian Quicksand","A monster, monstrous infantry  or monstrous cavalry model that fails its Dangerous Terrain test for Khemrian Quicksand is removed as a casualty with no saves of any kind allowed.","121, Dangerous Terrain: 117", undefined);
var mistWreathedSwamp = new Terrain("Marsh",'Dangerous Terrain for all units, other than Skirmishers. Cavalry, monstrous cavalry and chariots that enter marshland fail their Dangerous Terrain tests on a 1 or 2.',"Mist-wreathed Swamp","If the majority of a unit's models are wholly within a mist-wreathed swamp, the unit counts as being in hard cover. However, at the end of each Movement phase, the unit must pass an Initiative test or have D6 models dragged to their doom (victims are selected in the same manner as the allocation of shooting hits).","121, Dangerous Terrain: 117, Hard Cover: 74", undefined);





//Marsh Function

function marsh() {
    var marshRoll = (Math.floor((Math.random() * (6 - 1) + 1)));
    var result;
    switch (marshRoll) {
        case 1:
            result = earthbloodMere.subType;
            break;
        case 2:
            result = earthbloodMere.subType;
            break;
        case 3:
            result = khemrianQuicksand.subType;
            break;
        case 4:
            result = khemrianQuicksand.subType;
            break;
        case 5:
            result = mistWreathedSwamp.subType;
            break;
        case 6:
            result = mistWreathedSwamp.subType;
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
    completeSettlement = completeSettlement + " " + obstaclesNumber + obstaclesTestString + " obstacles" + ",";
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
var length = 96 + Math.floor((Math.random() * (6 - 1) + 1));
console.log("There will be" + " " + length +" pieces of terrain");
for (var i = 0; i < length; i++) {
    //console.log("we are up to " + i + "th value in the array")
    finalTerrain[i] = selectorFunction();
}


//Send generated results to the HTML
function insertArray() {

    var theText = "";  // set the theText output to an empty string otherwise it would start with null.
    for (var d = 0; d < finalTerrain.length; d++)
    {
        // create the createTextNode
        var dPlusOne = ([d+1])
        var insertText = document.createTextNode(theText);
        insertText.innerHtml = finalTerrain[d];
        // document.getElementById([i]).appendChild(insertText);
        var array = document.querySelectorAll(".cell");
        var rand = array[Math.floor(Math.random() * (array.length - 0))];
        rand.innerHTML = ([d+1]);
        var para = document.createElement("P");                       // Create a <p> element
        var t = document.createTextNode(dPlusOne + ": "+  finalTerrain[d]);      // Create a text node
        para.appendChild(t);                                          // Append the text to <p>
        document.getElementById("report").appendChild(para);
    }
}


//Generate an accordion with the terrain elements.
