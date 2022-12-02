const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


let state = {}

function startGame() {
    state = {};
    showTextNode(1);
}
var link = document.createElement('link');

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    
    while(optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
    
  
    // ternary operator that looks for the imageLink property

    textNode.options.forEach(option => {

    // if statement removed as it will always returns true since that is the purpose of the function called
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
    })

    if (textNode.id == 4) {
        document.getElementById('image').style.backgroundImage.display= url(kitchen.jpg);
    } 
    else {
        document.getElementById('image').style.backgroundImage=url(bedroom.jpg);
    }

    textNode.imageLink ? document.getElementById('image').style.backgroundImage = `url(${textNode.imageLink})` : document.getElementById('image').style.display = "none", {
        
        'url("kitchen.jpg")' : 'url("living_room.jpg")',
        "url('../images/bbyshrk.jpg')": "url('/images/pexels_bg.jpeg')"
      }
}

// function commented as it's purpose seems redundant
/*
function showOption(){
    return true;
}
*/

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'A living room.',
      // image link propert
      // change the link as you see fit 
        options: [
            {
                text: 'Change channel',
                setState: {},
                nextText: 2
            },
            {
                text: "Investigate room",
                setState: {},
                nextText: 3
            },
            {
                text: "Leave room",
                setState: {},
                nextText: 4
            } 
        ]
    },
    {
        id: 2,
        imageLink: 'URL("bedroom.jpg")',
        text: 'The tv will not turn on.',
        options: [
            {
                text: "Invesgigate room",
                setState: {},
                nextText: 3
            },
            {
                text: "Leave room",
                setState: {},
                nextText: 4
            }   
        ]
    },
    {
        id: 3,
        text: "You find an old polaroid on the table. It is blurry.",
        options: [
            {
                text: "Leave room" ,
                
                setState: {},
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        imageLink: 'URL("kitchen.jpg")',
        text: "BioPharma's cost structure is shown below in Figure 1",
        options: [
            {
                text: "Here is some stuff",
            }
        ]
    }
]

startGame();