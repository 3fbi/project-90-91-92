player_1 = localStorage.getItem("player1");
player_2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;


document.getElementById("player1_name").innerHTML = player_1 + " : ";
document.getElementById("player2_name").innerHTML = player_2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML ="Question Turn - " + player_1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2;

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    answer = number1 * number2;
    console.log(answer);

    question = "<h4> "+number1 + "X" + number2 + "</h4>"; 
    input_box = "<br> Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question + input_box + check_button ; 
    document.getElementById("output").innerHTML = row; 
    
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value; 

    if (answer==get_answer)
    {
        if (answer_turn == "player1")
        {
            
            player1_score = player1_score +1;
            console.log(player1_score)
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1")
    {
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_2;
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1;
    }
    else
    {
        question_turn = "player1";
        answer_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_1;
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2;
    }

    document.getElementById("output").innerHTML = "";
    
}
