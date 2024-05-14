// this will contain all the logic to make level three work 

//const { level_3_Story } = require("../../storyarray/storyarray");

// const level_3_Story = {
//     //storyStart: 
//     questions1: [`“You're not a half-bad fighter, you'll make a great knight.” Princess Katy says, “well, I suppose it's time to head back to Dizzylot, should we go?”`, `“Fine,” she says.  You go your separate ways.`, `You continue to do good deeds but songs are never written about you.  You kill bad guys and help good people, but no one knows your name.  You lead a life of purpose and anonymity. Due to this, and your humble nature, you die alone and penniless in old age. The world will never know the deeds you did and no one remembers you. `, `You arrive at the gates of the castle, but the guards stop you and ask “Who are you two? The king is not accepting visitors.” `],
//     questions2: [`You arrive at the gates of the castle, but the guards stop you and ask “Who are you two? The king is not accepting visitors.” `, `You step up to the guards as if you're going to chat with them and  quickly pull out your sword and stab the first guard, then the second guard comes at you, but the Princess takes him before he gets to you. `, `You're quickly surrounded by guards and captured. You spend your days awaiting execution for your crimes.`, `Finally, the day has come for you to die. You're escorted by the guards to the chopping block. You lay your head down and wonder how many people have died the way you are about to? Just before the ax comes down to sever your head from your body, you think, why did I kill those people with so many witnesses?`, `“Actually sir, this is Princess Katy of Dizzylot and I am with her. 
//     We come to claim her position as next in line for the throne” you say.
//     “Oh well why didn’t you just say so, Princess Katy?”`, `The gates open and you're allowed into the castle.  The castle is magnificent, the most beautiful place you've ever seen. You're in the great hall, there are gold and white pillars from floor to ceiling.  The ceiling arches resemble those of a church.`, `At the end of the hall sits King Gary on a white marble throne. You approach cautiously.  “I have returned to reclaim my throne, Dizzy chose me as Dizzylot’s next ruler. You can leave your post as king regent.” finishes Princess Katy.`, `“But you have been gone so long Princess, you should wait to adjust back into royal life. It looks like you have been through a lot” says King Gary.`, `No, I don't need to adjust. I left only to bring Dizzy’s murderer to justice and now that I have completed my mission, I will take my place as rightful Queen of Dizzylot.” 
//     “Well, well, left to avenge Dizzy huh?” says Gary, “the king”.  You feel the mood of the whole room shift.
//     “Well I guess you shouldn't have come back yet” says Gary.
//     “What are you saying?” asks Katy.
//     With thunderous laughter, Gary says “I ordered Dizzy’s death. I am the reason your precious dog is dead.” 
//     “WHAT,” she says enraged. Without thinking, she lunges at King Gary with her dagger but misses. In a moment King Gary has disabled her weapon and knocked her aside.`, `It's your turn, you come at the King remembering what a different king once said to you….`],
//     questions3: [`The king easily bushes you aside and casts a spell of death grip. You feel life being sucked out of your body. Your hands wither, your hair grays, and you die a slow and painful death.`, `Your blade strikes true right into the heart of the king, the battle is over. You see the Queen as she is now beginning to wake. She sees that you have killed the evil king.`],
//     storyEnd: [`The coming days go by in a blur as Queen Katy makes arrangements and does her best to undo all the damage evil King Gary had on the kingdom.`, `You are knighted as well and appointed as the chief role guard to the queen. The Queen and her guard go down in history as one of the most powerful and fair monarchs in all the realm.`, `From time to time you see a small white dog watching from the distance, Dizzy telling you from another world that you have done well.`]
// }

const story = {
    part1: {
        description: `“You're not a half-bad fighter, you'll make a great knight.” Princess Katy says, “well, I suppose it's time to head back to Dizzylot, should we go?” “Fine,” she says.  You go your separate ways. You continue to do good deeds but songs are never written about you.  You kill bad guys and help good people, but no one knows your name.  You lead a life of purpose and anonymity. Due to this, and your humble nature, you die alone and penniless in old age. The world will never know the deeds you did and no one remembers you.`,
        question: ` `,
        wrongChoice: ` `,
        rightChoice: ` `,
        wrongResult: ` `,
        img: ' '
    },
    part2: {
        description: `You arrive at the gates of the castle, but the guards stop you and ask “Who are you two? The king is not accepting visitors.” You step up to the guards as if you're going to chat with them and  quickly pull out your sword and stab the first guard, then the second guard comes at you, but the Princess takes him before he gets to you. You're quickly surrounded by guards and captured. You spend your days awaiting execution for your crimes. Finally, the day has come for you to die. You're escorted by the guards to the chopping block. You lay your head down and wonder how many people have died the way you are about to? Just before the ax comes down to sever your head from your body, you think, why did I kill those people with so many witnesses? “Actually sir, this is Princess Katy of Dizzylot and I am with her. 
        We come to claim her position as next in line for the throne” you say.
        “Oh well why didn’t you just say so, Princess Katy?” The gates open and you're allowed into the castle.  The castle is magnificent, the most beautiful place you've ever seen. You're in the great hall, there are gold and white pillars from floor to ceiling.  The ceiling arches resemble those of a church. At the end of the hall sits King Gary on a white marble throne. You approach cautiously.  “I have returned to reclaim my throne, Dizzy chose me as Dizzylot’s next ruler. You can leave your post as king regent.” finishes Princess Katy. “But you have been gone so long Princess, you should wait to adjust back into royal life. It looks like you have been through a lot” says King Gary.  No, I don't need to adjust. I left only to bring Dizzy’s murderer to justice and now that I have completed my mission, I will take my place as rightful Queen of Dizzylot.” 
        “Well, well, left to avenge Dizzy huh?” says Gary, “the king”.  You feel the mood of the whole room shift.      “Well I guess you shouldn't have come back yet” says Gary. “What are you saying?” asks Katy.  With thunderous laughter, Gary says “I ordered Dizzy’s death. I am the reason your precious dog is dead.” “WHAT,” she says enraged. Without thinking, she lunges at King Gary with her dagger but misses. In a moment King Gary has disabled her weapon and knocked her aside. It's your turn, you come at the King remembering what a different king once said to you… `,
        question: ` `,
        wrongChoice: ` `,
        rightChoice: ` `,
        wrongResult: ` `,
        img: ' ',
        img2: ' '
    },
    part3: {
        description: `The king easily bushes you aside and casts a spell of death grip.You feel life being sucked out of your body.Your hands wither, your hair grays, and you die a slow and painful death. Your blade strikes true right into the heart of the king, the battle is over.You see the Queen as she is now beginning to wake.She sees that you have killed the evil king. The coming days go by in a blur as Queen Katy makes arrangements and does her best to undo all the damage evil King Gary had on the kingdom. You are knighted as well and appointed as the chief role guard to the queen. The Queen and her guard go down in history as one of the most powerful and fair monarchs in all the realm. From time to time you see a small white dog watching from the distance, Dizzy telling you from another world that you have done well.`,
        question: "enter riddle here",
        wrongChoice: 'wrong riddle',
        rightChoice: 'right riddle',
        wrongResult: ` `,
        rightResult: ` `,
        img: ' ',
        overlayImg: "bloodimg"
    }
}


// //let startOfstory = level_1_Story.storyStart;
// let questions1 = level_3_Story.questions1;
// let questions2 = level_3_Story.questions2;
// let storyEnd = level_3_Story.storyEnd;
// // on click to excute this function 
// const mainText = $(".storyTextLevel3")
// let ArrayText = $("<div>")
// let ArrayText1 = $("<div>")
// let ArrayText3 = $("<div>")
// const button1 = $("<button>")
// const button2 = $("<button>")
// const buttonArea = $(".choiceLevel3")
// button1.addClass('btn btn-outline-dark')
// button2.addClass('btn btn-outline-dark')

// //Don't have a startOfStory
// $(document).ready(function () {
//     ArrayText.text(questions1[0]);
//     //ArrayText.text(startOfstory[0]);
//     ArrayText.appendTo(mainText);

//     document.addEventListener('click', function () {
//         ArrayText.text(questions1[1])
//         ArrayText.appendTo(mainText);
//     });
//     document.addEventListener('click', function () {
//         //ArrayText.text(startOfstory[1])
//         ArrayText.text(questions1[2])
//         ArrayText.appendTo(mainText);
//         //button1.text(startOfstory[2]);
//         button1.text(questions1[3]);
//         // button2.text(startOfstory[3]);
//         button2.text(questions1[4]);
//         //button3.text(endOfstory[0]);
//         button1.appendTo(buttonArea);
//         button2.appendTo(buttonArea);
//        // button3.appendTo(buttonArea);
//     });
//     button2.on("click", function () {
//         // console.log("hello")
//         button2.hide(); // Hide button2 using jQuery method
//         button1.hide(); // Hide button1 using jQuery method
//         ArrayText1.text(questions1[0]);
//         $('body').css('background-image', 'url("../../public/imgs/alterending.PNG")');
//         // document.body.style.backgroundImage = "url('../imgs/alterending.PNG')";
//         ArrayText1.appendTo(mainText);

//     });
//     button1.on("click", function () {
//         button2.hide(); // Hide button2 using jQuery method
//         button1.hide(); // Hide button1 using jQuery method
//         ArrayText1.text(questions1[1]);
//         $('body').css('background-image', 'url("../../public/imgs/Runningaftertheprincess.PNG")')
//         ArrayText1.appendTo(mainText);
//     });
//     document.addEventListener('click', function () {
//         ArrayText3.text(questions2[0])
//         ArrayText3.appendTo(mainText);
//     });
//     document.addEventListener('click', function () {
//         ArrayText3.text(questions2[1])
//         ArrayText2.appendTo(mainText);
//         button1.text(questions2);
//         //button2.text(startOfstory[3]);
//         button1.appendTo(buttonArea);
//         button2.appendTo(buttonArea);
//     });
//     button2.on("click", function () {
//         // console.log("hello")
//         button2.hide(); // Hide button2 using jQuery method
//         button1.hide(); // Hide button1 using jQuery method
//         ArrayText1.text(questions1[0]);
//         $('body').css('background-image', 'url("../../public/imgs/alterending.PNG")');
//         // document.body.style.backgroundImage = "url('../imgs/alterending.PNG')";
//         ArrayText1.appendTo(mainText);

//     });
//     button1.on("click", function () {
//         button2.hide(); // Hide button2 using jQuery method
//         button1.hide(); // Hide button1 using jQuery method
//         ArrayText1.text(questions1[1]);
//         $('body').css('background-image', 'url("../../public/imgs/Runningaftertheprincess.PNG")')
//         ArrayText1.appendTo(mainText);
//     });
// });


// // module.exports = {}