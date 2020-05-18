var Question = function (q, ansArr, corAns) {
    this.q = q;
    this.ansArr = ansArr;
    this.corAns = corAns;
}

quesArr = ['Who are u???', 'Are u insane???',
            'Can u jumble 9 balls simultaneously']

ansArrs = [{0: 'Stupid', 1: 'Mental', 2: 'Insane'},
            {0: 'Yes!! without any doubt', 1: 'No'},
            {0: 'Yes!! Of corse', 1: 'No!! I have no skill.'}]

cAnsArr = [2, 0, 1]

var yes = true
var ran
var score = 0
var qs = []
var count = 0
var incCount = 0
// var checkCount = true
// var checkIncCount = true

for (var i =0;i<quesArr.length;i++){
    qs.push(new Question(quesArr[i],ansArrs[i], cAnsArr[i]))
}

// console.log(qs[2].q)
// console.log(qs[2].ansArr)
// console.log(qs[2].corAns)
// console.log(qs.length)

dispQues();

function dispQues(){
    if (yes === true){
        ran = createRandom()
    }
    ranQues = qs[ran].q
    ranAnsArr = qs[ran].ansArr
    rancAns = qs[ran].corAns
    console.log(ranAnsArr)
    // console.log('Correct answer will give you +1.')
    // console.log('Wrong answer will deduct -1.')
    console.log('You will get 10 questions(can repeat).\n' +
        'Correct answer will give you +1.\n' +
                'Wrong answer will deduct -1.\n' +
                '3 Incorrect answers will end the quiz and will output ' +
                'your previous score.' +
                'Click OK to proceed.\n' +
                'Click CANCEL to exit the quiz.')
    
    
    var input = prompt(ranQues, 'Write your honest answer in digit hereS')
    if (input == rancAns){
        console.log('Yeah, You Know yourself nicely!!\n+1')
        yes = true
        score += 1
        count += 1
        console.log('Your Score : ' + score)
        // checkIncCount = check_incCount()
        // checkCount = check_count()
        if (count == 10){
            end()
            return
        }
        dispQues()
    }
    else if (input === null){
        end()
        return
    }
    // else if (incCount !== 3 && count !==10 && input !== (null || rancAns))
    else {
        console.log('Hell!! You don\'t even know yourself. ' +
        'Please do try Again!\n-1')
        yes = false
        score -= 1
        count += 1
        incCount += 1
        console.log('Your Score : ' + score)
        if (incCount === 3 || count == 10){
            end()
            return
        }
        dispQues()
    }
}

function createRandom(){
    return Math.floor(Math.random()*qs.length)
}

// function check_incCount(){
//     if (incCount === 3){
//         return false
//     }
// }

// function check_count(){
//     if (count === 10){
//         return false
//     }
// }

function end(){
    console.log('Your Final Score : ' + score)
}



