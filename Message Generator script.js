const greeting = (userName) => {
    console.log (`Hi ${userName}! Getting inspiration for your day.`);
};
greeting("Roberto");

const returnFirstSection = () => {
    const firstSentenceSection = ["You slept tight last night", "You didn't sleep much", "You didn't sleep at all"];
    const inspiringMessage1 = [];
    const firstSentenceRandom = firstSentenceSection[Math.floor(Math.random() * 3)];
    inspiringMessage1.push(firstSentenceRandom);
    return inspiringMessage1
}


// console.log(returnFirstSection());

const returnSecondSection = () => {
    const secondSentenceSection = ["and feel sleepy and tired.", "and feel incredibly brand new.", "and feel happy.", "and feel angry."];
    const inspiringMessage2 = [];
    const secondSentenceRandom = secondSentenceSection[Math.floor(Math.random() * 4)];
    inspiringMessage2.push(secondSentenceRandom);
    return inspiringMessage2
}

// console.log(returnSecondSection());

const returnThirdSection = () => {
    const thirdSentenceSection = ["Today holds great experiences for you.", "Today you will find kindness and affection all around you.", "Today you will accomplish what you have been dreaming of.", "Today will be another day to survive."];
    const inspiringMessage3 = [];
    const thirdSentenceRandom = thirdSentenceSection[Math.floor(Math.random() * 4)];
    inspiringMessage3.push(thirdSentenceRandom);
    return inspiringMessage3
}

// console.log(returnThirdSection());


const returnAllSections = () => {
return console.log(`${returnFirstSection()} ${returnSecondSection()} ${returnThirdSection()}`);
};

returnAllSections();






