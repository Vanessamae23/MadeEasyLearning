var scoreboard = 0
var videoOn = document.querySelector(".video")
let currentNumber = 0;
let list = [ {
    question: "1. 325 children attended a concert at a school auditorium. 4/5 of the boys and 3/4 of the girls left the auditorium at the end of the concert. 29 more boys than girls remained in the auditorium. How many girls attended the concert?",
    answer: 80,
    youtube_id: "https://www.youtube.com/embed/voH_c33go2I"
},
{
    question: "2.  At first, Ben ad some red, blue and green marbles. During a game, he removed 54 red marbles. During a game, he removed 54 red marbles, gave away 40% of the blue marbles and increased the green marbles by 25%. After the game, the ratio of the number of red marbles to the number of blue marbles to the number of green marbles was 3:1:5. The total number of marbles he had before and after the game was the same.  How many green marbles had he increased during the game?",
    answer: 162,
    youtube_id: "https://youtube.com/embed/bLkp0BSVqWw"
},
{
    question: "What is 3 + 2",
    answer: 5,
    youtube_id: "https://www.youtube.com/embed/voH_c33go2I"
}

]

function submit() {
        let user_answer = parseInt($('#question-number').val())
        console.log(user_answer)
        console.log(list[currentNumber].answer)
        if (user_answer === list[currentNumber].answer) {
            isCorrect();
        } else {
            isWrong();
        }
    
}

function isCorrect() {
    /* the new scoreboard function */
    if (window.getComputedStyle(videoOn).display === "none") {
            scoreboard++;
          } 
        console.log(scoreboard) 
    if (currentNumber < (list.length - 1)) {
        currentNumber++;
        
        questionUpdate();
        $(".video").css("display", "none")
        $(".wrong-sentence").css("visibility", "hidden")
    } else {
        $(".bodyhead").css("display", "none")
        var text = document.createElement("p")
        text.style.margin = "20px";
        text.innerHTML = `Congratulations, your score is ${scoreboard} out of ${list.length}`
        $("footer").before(text)
        }
    }

function isWrong() {
    $(".wrong-sentence").css("visibility", "visible")
    $(".video").attr("src", list[currentNumber].youtube_id)
    $(".video").css("display", "block")
}

function questionUpdate() {
    $(".question-fill").text(list[currentNumber].question)
}

