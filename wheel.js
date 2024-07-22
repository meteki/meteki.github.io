let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'Камень' : {
        'Камень' : 'draw',
        'Ножницы' : 'win',
        'Бумага' : 'lose'
    },
    'Ножницы' : {
        'Камень' : 'lose',
        'Ножницы' : 'draw',
        'paper' : 'win'
    },
    'Бумага' : {
        'Камень' : 'win',
        'Ножницы' : 'lose',
        'Бумага' : 'draw'
    }
}
function checker(input){
    var choices = ["Камень", "Бумага", "Ножницы"];
    var num = Math.floor(Math.random()*3);
    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;
    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;
    let computer_choice = choices[num];
    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #2E8B57";
            result_ref.innerHTML = "Ты победил";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "Ты проиграл";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "Ничья";
            break;
    }
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}