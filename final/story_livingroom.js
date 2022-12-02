var story = 0;
var form = document.getElementById('theStory')
var answer = '';
var submit = document.getElementById('continueButton')

var story_telling = {
    "start":{
        "question": "A living room.",
        "answers":{
            "a": "Change channel.",
            "b": "Leave room.",
        }
    },
    
      // Examine Room
  "1_a": {
    "question": "The TV will not turn on.",
    "answers": {
      "a": "Leave room.",
    }
  },

  "2_a": {
    "question": "The fairy glady accepts your offer and you two have a wonderful day! The End.",
  },
  "2_b": {
    "question": "There is nothing inside the dresser but a baseball bat. You take it. It could be useful.",
  },
  "2_c": {
    "question": "This is not your room. You should not intrude.",
  },

  // Pick Up Stuffed Animal

  "1_b": {
    "question": "You pick up the stuffed animal. It has been well loved and cared for.",
    "answers": {
      "d": "Run away screaming.",
      "e": "Stand your ground and fight!",
      "f": "Ask them if they want to be in your band.",
    }
  },
  "2_d": {
    "question": "The minotaur stares at you in confusion as you run all the way home. The End.",
  },
  "2_e": {
    "question": "You defeat the minotaur and they turn into a cute puppy. The End.",
  },
  "2_f": {
    "question": "The minotaur eagerly agrees, and together you start a funk revival band called The Groovy Hooves. The End.",
    "end": "the end"
  },

  // Mountain Path

  "1_c": {
    "question": "This room is not yours. You do not belong here.",
    "answers": {
      "g": "",
      "h": "",
      "i": "",
    }
  },
  "2_g": {
    "question": "You become the national fiddle playing champion. The End.",
  },
  "2_h": {
    "question": "The goat becomes the best surfer in the universe. The End.",
  },
  "2_i": {
    "question": "You and Gregory travel the world together. The End.",
  },
  
};



submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
    answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
    if(answer) {
      story++;//increment or add 1 to
      populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
      console.log("Story time!"); // Console log to make sure things are working
    }
   });
   
   // Generate answers from story
   function populateForm(story) {

    var current_story = story_telling[story];//take values from story_telling story
   
    var text = '';
   
    for(var prop in current_story['answers']) {
      if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
        text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
      }
   
    }
   
    form.querySelector('p').innerHTML = current_story.question;//write questions to the p tag in the HTML
   
    form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset
   }
   
   populateForm('start');//set the form at the beginning
