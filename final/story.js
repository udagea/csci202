var story = 0;
var form = document.getElementById('theStory')
var answer = '';
var submit = document.getElementById('continueButton')

var story_telling = {
    "start":{
        "question": "A child's room.",
        "answers":{
            "a": "Examine Closer.",
            "b": "Pick up stuffed animal.",
            "c": "Exit.."
        }
    },
    
      // Examine Room
  "1_a": {
    "question": "You decide to go to examine the room closer. The floor creaks below you. You can hear scratching from the dresser.",
    "answers": {
      "a": "Examine Floorboards.",
      "b": "Open Dresser.",
      "c": "Retreat."
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


   
// // Notice how I declare an onclick event in the javascript code
// document.getElementById( 'tvimage' ).onclick = function( e ) {

//     // First, get the clicked element
//     // We have to add these lines because IE is bad.
//     // If you don't work with legacy browsers, the following is enough:
//     //     var target = e.target;
//     var evt = e || window.event,
//         target = evt.target || evt.srcElement;

//     // Then, check if the target is what we want clicked
//     // For example, we don't want to bother about inner tags
//     // of the "div1, div2" etc.
//     if ( target.id.substr( 0, 3 ) === 'div' ) {

//         // Hide the clicked element
//         target.className = 'hidden';

//         // Now you have two ways to do what you want:
//         //     - Either you don't care about browser compatibility and you use
//         //       nextElementSibling to show the next element
//         //     - Or you care, so to work around this, you can "guess" the next
//         //       element's id, since it remains consistent
//         // Here are the two ways:

//         // First way
//         target.nextElementSibling.className = '';

//         // Second way
//         // Strip off the number of the id (starting at index 3)
//         var nextElementId = 'div' + target.id.substr( 3 );
//         document.getElementById( nextElementId ).className = '';
//     }
// };