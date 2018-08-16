
// make objects for relationship, mode, tone, and emphasis

const quizApp = {};
let total = 0;

quizApp.submitChoices = function () {
      $('form').on('submit', function (e) {
            e.preventDefault();
            const relationAnswer = $('input[name = relation]:checked').val()
            console.log(relationAnswer);
            const modeAnswer = $('input[name = mode]:checked').val()
            // console.log(modeAnswer);
            const toneAnswer = $('input[name = tone]:checked').val()
            // console.log(toneAnswer);
            const emphasisAnswer = $('input[name = emphasis]:checked').val();
            // console.log(emphasisAnswer);
            const answerArray = [];
            answerArray.push(relationAnswer, modeAnswer, toneAnswer, emphasisAnswer);
            // console.log(answerArray);

            answerArray.forEach((item) => {
                  total += parseInt(item);
                  console.log(item);
            })
            console.log(total);
      });
}




// for each object, make properties that produce a value. write a title for each value produced.
// 0 = dontUse
// 10 = useWithCaution
// 20 = use


// quizApp.answers = {
//    answer1: { 
//       professional: 0,
//       personal: 20,
//       audience: 10
//    },
//    answer2: {
//       email: 10,
//       messenger: 20,
//       post: 10,
//       letter: 0
//    },
//    answer3: {
//       joyful: 20,
//       humorous: 20,
//       informal: 20,
//       optimistic: 20,
//       serious: 0,
//       formal: 0,
//       sad: 0,
//       pessimistic: 0,
//       horror: 0
//    },
//    answer4: {
//       astonishment: [
//          "I'm amazed! I'm astonished!",
//          20,
//       ],
//       shock: [
//          "I'm so surprised and have mixed feelings!", 
//          20,
//       ],
//       excitement: [
//          "I'm eager!", 
//          20,
//       ],
//       urgency: [
//          "I need swift action to be taken!",
//          20,
//       ],
//       vehemence: [
//          "I am intensely passionate about this!",
//          20,
//       ],
//       nodeclare: [
//          "I'm pretty chill right now", 
//          0,
//       ],
//    }
// }


// based on what the user selects, they will either accumulate points on each question or not.

// {} objects
// () functions
// [] arrays





// the more points they have, the more acceptable it is to use exclamation points. 

// when they submit the quiz, it displays each option they selected.