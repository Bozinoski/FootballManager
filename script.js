//      DECLARE VARIABLES
var firstNameArr,lastNameArr,positionArr,playerArr;

//      ARRAYS
firstNameArr = ['Luther','Greg','Hal','Augustine','Carmen','Rashad','Ronny','Jerald','Jeffery','Burl','Doug','Domingo','Aaron','Jimmie','Marcelino','Diego','Marcel','German','Freddy','Seymour','Brandon','Carol','Thanh','Michale','Weldon','Mack','Elwood','Carson','Rolando','Coy','Tomas','Vicente','Hoyt','Lamont','Florencio','Demetrius','Jose','Emanuel','Kermit','Warren','Hai','Garret','Damian','Owen','Samuel','Royce','Desmond','Herman','Dominic','Raymond'];
lastNameArr = ['Ladouceur','Keppel','Song','Pelaez','Tabor','Bayer','Stadler','Quinones','Starner','Nugent','Hennen','Lindsey','Hallowell','Bachelder','Loyd','Werner','Stemen','Kilmer','Zahler','Stgermain'];
positionArr = ['GK','LB','CB','CB','RB','LM','CM','CM','RM','ST','ST'];
playerArr = [];

//      RANDOM NUMBER GENERATORS FUNCTIONS

var numberGen = {
    // Names
    randomFirst: function(){
        return Math.floor(Math.random()*50);
    },
    randomLast: function(){
        return Math.floor(Math.random()*20);
    },
    // Position
    randomPosition: function(){
        return Math.floor(Math.random()*11);
    },
    //  Physical
    randomPhysical: function(){
        return Math.floor(Math.random() * (100 - 50) + 50);
    },
    //  GK (Physica and Defense is same as others)
    randomAttackGk: function(){
        return Math.floor(Math.random() * (50 - 10) + 10);
    },
    //  Defense
    randomDefense: function(){
        return Math.floor(Math.random() * (100 - 50) + 50);
    },
    randomDefenseAtt: function(){
        return Math.floor(Math.random() * (70 - 30) + 30);
    },
    //  Attack
    randomAttack: function(){
        return Math.floor(Math.random() * (100 - 50) + 50);
    },
    randomAttackDef: function(){
        return Math.floor(Math.random() * (70 - 30) + 30);
    }
}
//      FUNCTION CONSTRUCTOR - PLAYERS
var Player = function(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    };
//      PROTOTYPES - PLAYERS
    Player.prototype.physical = numberGen.randomPhysical();
    Player.prototype.defense = numberGen.randomDefense();
    Player.prototype.defenseAtt = numberGen.randomDefenseAtt();
    Player.prototype.attack = numberGen.randomAttack();
    Player.prototype.attackDef = numberGen.randomAttackDef();
    Player.prototype.attackGk = numberGen.randomAttackGk();
//      CONNECT TO DOM
var domPlayers = function(){
    for(i = 1; i<=22;i++){
        playerArr[i]={
            firstN: document.querySelector('#p'+ i +'-first-name'),
            lastN: document.querySelector('#p'+ i +'-last-name'),            
            pos: document.querySelector('#p'+ i +'-position'),
            physic: document.querySelector('#p'+ i +'-physical'),
            def: document.querySelector('#p'+ i +'-defense'),
            att: document.querySelector('#p'+ i +'-attack')
        }
    }
    console.log(playerArr);
    return playerArr;
}
domPlayers();

var playerCreate = function (id){
    var posn = numberGen.randomPosition();
    var nameFirst = numberGen.randomFirst();
    var nameLast = numberGen.randomLast();
    var phyl = numberGen.randomPhysical();
    var defe = numberGen.randomDefense();
    var defeA = numberGen.randomDefenseAtt();
    var attk = numberGen.randomAttack();
    var attkD = numberGen.randomAttackDef();
    var attkG = numberGen.randomAttackGk();
    
    if(posn === 0){
        playerArr[id].firstN.textContent = firstNameArr[nameFirst];
        playerArr[id].lastN.textContent = lastNameArr[nameLast];
        playerArr[id].pos.textContent = positionArr[posn];
        playerArr[id].physic.textContent = phyl;
        playerArr[id].def.textContent = defe;
        playerArr[id].att.textContent = attkG;
        console.log('gk');
        console.log(posn);
    }
    else if(posn > 0 && posn < 5){
        playerArr[id].firstN.textContent = firstNameArr[nameFirst];
        playerArr[id].lastN.textContent = lastNameArr[nameLast];
        playerArr[id].pos.textContent = positionArr[posn];
        playerArr[id].physic.textContent = phyl;
        playerArr[id].def.textContent = defe;
        playerArr[id].att.textContent = attkD;
        console.log('d');
        console.log(posn);
    }
    else if(posn >= 5 && posn < 9){
        playerArr[id].firstN.textContent = firstNameArr[nameFirst];
        playerArr[id].lastN.textContent = lastNameArr[nameLast];
        playerArr[id].pos.textContent = positionArr[posn];
        playerArr[id].physic.textContent = phyl;
        playerArr[id].def.textContent = defe;
        playerArr[id].att.textContent = attk;
        console.log('m');
        console.log(posn);
    }
    else{
        playerArr[id].firstN.textContent = firstNameArr[nameFirst];
        playerArr[id].lastN.textContent = lastNameArr[nameLast];
        playerArr[id].pos.textContent = positionArr[posn];
        playerArr[id].physic.textContent = phyl;
        playerArr[id].def.textContent = defeA;
        playerArr[id].att.textContent = attk;
        console.log('a');
        console.log(posn);
    }
}
var fullTeam = function(){
    for(i=1; i < 23; i++){
        playerCreate(i);
    }
}
fullTeam();
