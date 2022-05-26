// Your code here
function saturdayFun (activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (mark='*'){
    function inner(adjective='special'){
        return `You are ${mark}${adjective}${mark}!`;
    }
    return inner;
}
const Calculator = {
    add: function(x,y) {
        return x+y;
    },
    subtract: function (x,y){
        return x-y;
    },
    multiply: function (x,y){
        return x*y;
    },
    divide: function (x,y){
        return x/y;
    }
}
let arrays = [
    (a)=>a*2,
    (a)=>a+1000,
    (a)=>a%7
]

function actionApplyer (integer, arrayOfTransforms=arrays){
    let result = integer;
    for(let n=0; n<arrayOfTransforms.length; n++){
    result= arrayOfTransforms[n](result);
    }
    return result;
}

