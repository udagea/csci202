
//these variables connect our code with the 'id' on the html
//we can then manipulate the variables and it will manipulate the html
var images = document.getElementById("images"); 
var text = document.getElementById("text"); 
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
//this is the variable for the name of the character
var yername;

let state = {}


//this is how after we type in the character name and hit enter
//we will add the name to the variable, remove the input box and start our first scenario
input.onkeypress = function(event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    yername =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};


//this changes the text and puts in your characters name
var changeText = function(words) {
  text.innerHTML = words.replace("Your name", yername);
};

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }

//this takes the image link and puts it in the proper format, sending it to the html
var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};


//this looks at the number of options we have set and creates enough buttons 
var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

//this is what moves the game along
var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};






//this is the object that holds each scenario, the more you add the more options there are
//scenario = {}
var scenario = {
  one: {
    image: "living_room.jpg", 
    text: "You find yourself in a small living room, your mind fuzzy. You should focus and collect yourself.\n",
  },
  two: {
    image: "living_room.jpg",
    text: "Your name, yes, you remember. What do you want to do?",
    buttons: [["Change channel", "advanceTo(scenario.three)"],["Search room", "advanceTo(scenario.four)"],["Exit room", "advanceTo(scenario.five)"]]
  },
  three: {
    image: "living_room.jpg",
    text: "The TV will not turn on.",
    buttons: [["Search room", "advanceTo(scenario.four)"],["Exit room", "advanceTo(scenario.five)"]]
  },
    four: {
    image: "living_room.jpg",
    text: "You find an old polaroid on the table. The photo is blurry.",
    buttons: [["Exit room", "advanceTo(scenario.five)"]]
  },
    five: {
    image: "dining.jpg",
    text: "You exit the living room and find yourself in a dining room. Ahead of you are stairs, but you can also smell something delicious from the kitchen.",
    buttons: [["Examine room", "advanceTo(scenario.six)"], ["Go upstairs", "advanceTo(scenario.seven)"],["Go to kitchen", "advanceTo(scenario.eight)"]]

  },
  
    six: {
    image: "dining.jpg",
    text: "You examine the living room, looking at the photos on the walls. The blurry figures are almost familiar.",
    buttons: [["Go upstairs", "advanceTo(scenario.seven)"],["Go to kitchen", "advanceTo(scenario.kitchenOne)"]]
    },
//stairs
    seven: {
    image: "stairs.jpg",
    text: "You walk up the stairs. They seem to go on forever and ever.",
    buttons: [["Continue on", "advanceTo(scenario.eight)"],["Give up.", "advanceTo(scenario.ending1)"]]
     }, 

     eight: {
        image: "bedroom.jpg",
        text: "You reach a child's room. It hasn't been disturbed in years.",
        buttons: [["Pick up bear", "advanceTo(scenario.nine)"],["Open wardrobe", "advanceTo(scenario.ten)"], ["Retreat.", "advanceTo(scenario.ending1)"]]
        },
    nine: {
        image: "bedroom.jpg",
        text: "You pick up the stuffed animal. It had been well loved and cared for.",
        buttons: [["Open wardrobe", "advanceTo(scenario.animalten)"], ["Retreat.", "advanceTo(scenario.ending1)"]]
        },    
    wardrobenine: {
        image: "bedroom.jpg",
        text: "You pick up the stuffed animal. It had been well loved and cared for.",
        buttons: [["Remember.", "advanceTo(scenario.ending2)"]]
        },      
    ten: {
        image: "bedroom.jpg",
        text: "The wardrobe is filled with clothes that never felt like your own.",
        buttons: [["Pick up bear", "advanceTo(scenario.wardrobenine)"],["Retreat.", "advanceTo(scenario.ending1)"]]
        },
    animalten: {
        image: "bedroom.jpg",
        text: "The wardrobe is filled with clothes that never felt like your own.",
        buttons: [["Remember.", "advanceTo(scenario.ending2)"]]
        },

//kitchen
    kitchenOne: {
    image: "kitchen.jpg",
    text: "The kitchen is empty, but familiar aromas remain.",
    buttons: [["Exit room", "advanceTo(scenario.five)"]]
    }, 



  //endings
ending1: {
    image: "tv.jpg",
    text: "You were not ready to be back, and that is okay. - Ending 1.",
    }, 

ending2: {
    image: "tvroom.png",
    text: "It may no longer be home, for better or worse, but you have made it. Welcome back, Your name. - Ending 2",
    }, 

ending3: {
    image: "tv.jpg",
    text: "It may no longer be home, for better or worse.  - Ending 2.",
    }, 
};



//this is the code that starts the game
advanceTo(scenario.one);
