// this will contain all the logic to make level one work 

const level_1_Story ={
    storyStart: [`You are a well-experienced adventurer traveling to the next kingdom.  You awaken in your camp under a small tree feeling well rested for the journey ahead.  You pull out your map and examine it for the next kingdom.  You see a shortcut a villager marked on your map the day before.` ,`Do you take the villager’s shortcut or proceed to the well-worn path?`, `You head down the main path.`, `You head to the short cut`],
    questions1: [`Clearly, you are one for reliability and stability. Unfortunately, reliability and stability do not make for a good adventurer. To be a good adventurer one must take the path less traveled. The main path leads you to a nice town you settle down in and never go on another adventure ever again!`, `You head into the forest and take the shortcut.  Not long into the day, you hear the frightened cries of a young woman nearby. As you approach, you see the young woman is Princess Katy from Dizzylot, the kingdom you are traveling to. She is tied to a tree. `],
    questions2: [`Do you cut the rope and free the princess or do you leave her there?`, `Cut the rope.`, `You go up to the princess as she struggles and say “You’re Princess Katy from the kingdom of Dizzylot, right? Are you okay? Do you need help? ”`, `She replies “Of course I am, What do you think? I'm tied to a tree!”`, `You lean down to untie her and feel a sharp pain in the middle of your back. Blood sprays onto the princess' face as she looks up at you with an evil grin.`, `The princess says “Nice shot boys! They are sure to have plenty of a loot on them”`, `You died`],
    questions3: [`You start to walk up to the princess but hear rustling in the leaves nearby and notice that the ropes tying her to the tree look strangely loose. As you start to draw your weapon and prepare for the attack you are sure is coming, you remember the words of a wise professor… `, `You get lost in thought tearing up at the thought of your old classmates and teacher. A Bandit comes up and kills you, you should have indented. `, `Remembering your professor's wise words has focused your senses, you spin around your sword cutting down the first bandit that dared to make a move. You make quick work of the other three but when you turn to look for the princess she is gone. `]
}


let startOfstory = level_1_Story.storyStart;
let questions1 = level_1_Story.questions1;
// on click to excute this function 
const mainText = $(".storyTextLevel1")
let ArrayText = $("<div>")
const button1 = $("<button>")
const button2 = $("<button>")
const buttonArea = $(".choiceLevel1")
button1.addClass('btn btn-outline-dark')
button2.addClass('btn btn-outline-dark')


$(document).ready(function () {
    ArrayText.text(startOfstory[0]);
    ArrayText.appendTo(mainText);

    document.addEventListener('click', function() {
        ArrayText.text(startOfstory[1])
        ArrayText.appendTo(mainText);
    });
    document.addEventListener('click', function() {
        ArrayText.text(startOfstory[1])
        ArrayText.appendTo(mainText);
        button1.text(startOfstory[2]);
        button2.text(startOfstory[3]);
        button1.appendTo(buttonArea);
        button2.appendTo(buttonArea);
    }); 
    button2.on("click", function() {
        ArrayText.text(questions1[0]);
        ArrayText.appendTo(mainText);
    });
    button1.on("click", function() {
        // Display text when button 1 is clicked
        alert("Button 2 was clicked!");
    });
});

// document.addEventListener('click', function() {
//     console.log("hello");
// });

// $(mainText).on('click', function addStartStoryText() {
//     startOfstory[1]
//     button1.text(startOfstory[2])
//     button2.text(startOfstory[3])
//     button1.appendTo(buttonArea)
//     button2.appendTo(buttonArea)
// })
//function start story text to create fitrst line  on click moe on to next text block typeit.js 


// module.exports = {}