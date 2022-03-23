// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (job = "go to the office") {
    return `This Monday, I will ${job}.`
}

function wrapAdjective(flair = '*') {
    return function(word = "special") {
        return `You are ${flair}${word}${flair}!`
    }
}