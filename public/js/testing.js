const story = {
    part1: {
        description: `You are a well-experienced adventurer traveling to the next kingdom. You awaken in your camp under a small tree feeling well rested for the journey ahead. You pull out your map and examine it for the next kingdom. You see a shortcut a villager marked on your map the day before.`,
        question: `Do you take the villager's shortcut or proceed to the well-worn path?`,
        wrongChoice: `You head down the main path.`,
        rightChoice: `You head to the short cut`,
        wrongResult: `Clearly, you are one for reliability and stability. Unfortunately, reliability and stability do not make for a good adventurer. To be a good adventurer one must take the path less traveled. The main path leads you to a nice town you settle down in and never go on another adventure ever again!`
    },
    part2: {
        description: `You head into the forest and take the shortcut. Not long into the day, you hear the frightened cries of a young woman nearby. As you approach, you see the young woman is Princess Katy from Dizzylot, the kingdom you are traveling to. She is tied to a tree.`,
        question: `Do you cut the rope and free the princess or do you leave her there?`,
        wrongChoice: `Cut the rope.`,
        rightChoice: `Don't cut the rope.`,
        wrongResult: `You go up to the princess as she struggles and say "You're Princess Katy from the kingdom of Dizzylot, right? Are you okay? Do you need help? " She replies "Of course I am, What do you think? I'm tied to a tree!" You lean down to untie her and feel a sharp pain in the middle of your back. Blood sprays onto the princess' face as she looks up at you with an evil grin. The princess says "Nice shot boys! They are sure to have plenty of loot on them", You died.`
    },
    part3: {
        description: `You start to walk up to the princess but hear rustling in the leaves nearby and notice that the ropes tying her to the tree look strangely loose. As you start to draw your weapon and prepare for the attack you are sure is coming, you remember the words of a wise professor…`,
        question: "Enter riddle here",
        wrongChoice: 'Wrong riddle',
        rightChoice: 'Right riddle',
        wrongResult: `You get lost in thought tearing up at the thought of your old classmates and teacher. A Bandit comes up and kills you, you should have been more alert.`,
        rightResult: `Remembering your professor's wise words has focused your senses, you spin around your sword cutting down the first bandit that dared to make a move. You make quick work of the other three but when you turn to look for the princess she is gone.`
    }
};

let mainText = $("#text-container");
let button1 = $("<button>").addClass('btn btn-outline-dark');
let button2 = $("<button>").addClass('btn btn-outline-dark');
let button3 = $("<button>").addClass('btn btn-outline-dark');
let button4 = $("<button>").addClass('btn btn-outline-dark');
let played = 0;
let wins = 0;
let deaths = 0;
let losses = 0;

function startStory() {
    typeText(story.part1.description, function() {
        button2.text("Next");
        mainText.append(button2);
        renderStoryStart();
    });
}

function renderStoryStart() {
    button2.on('click', function (event) {
        event.stopPropagation();
        typeText(story.part1.question, function() {
            button2.text(story.part1.wrongChoice);
            button1.text(story.part1.rightChoice);
            mainText.append(button1, button2);
            resultOfButton1();
            resultOfButton2();
        });
    });
}

function resultOfButton1() {
    button1.on('click', function (event) {
        event.stopPropagation();
        renderPart2();
    });
}

function resultOfButton2() {
    button2.on('click', function (event) {
        event.stopPropagation();
        typeText(story.part1.wrongResult, function() {
            $('body').css('background-image', 'url("imgs/alterending.PNG")');
            button3.text('Start Over');
            mainText.append(button3);
            losses++;
            played++;
            button3.on('click', startStory);
        });
    });
}

function renderPart2() {
    typeText(story.part2.description, function() {
        $('body').css('background-image', 'url("imgs/shortcut.PNG")');
        button2.text(story.part2.wrongChoice);
        button1.text(story.part2.rightChoice);
        mainText.append(button1, button2);
        resultOfButton1Part2();
        resultOfButton2Part2();
    });
}

function resultOfButton1Part2() {
    button1.on('click', function (event) {
        event.stopPropagation();
        renderPart3();
    });
}

function resultOfButton2Part2() {
    button2.on('click', function (event) {
        event.stopPropagation();
        typeText(story.part2.wrongResult, function() {
            $('body').css('background-image', 'url("imgs/deathscreen.PNG")');
            button3.text('Start Over');
            mainText.append(button3);
            deaths++;
            played++;
            button3.on('click', startStory);
        });
    });
}

function renderPart3() {
    typeText(story.part3.description, function() {
        // Handle the rendering for part 3
        // Example:
        // $('body').css('background-image', 'url("imgs/your-image.png")');
        // Implement the choices and their results as shown in previous parts
    });
}

function typeText(text, callback) {
    mainText.html(""); // Clear the text container
    new TypeIt("#text-container", {
        strings: [text],
        speed: 50,
        cursorChar: "👑",
        afterComplete: function(instance) {
            instance.destroy();
            if (callback) callback();
        }
    }).go();
}

// Start the story
startStory();








