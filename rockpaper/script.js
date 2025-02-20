document.addEventListener("DOMContentLoaded",function(){
    
    const buttons = document.querySelectorAll(".button.player");
    let lastHighlighted = null; // Guarda el último botón iluminado

    function randomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; /* math random saca un entero entre 0 y 1 lo multiplicamos por   * (max - min + 1) porque math floor siempre redondea hacia abajo, y luego sumamos el min  */
    }


    buttons.forEach(button =>{

        button.addEventListener("click", function () {
            
            // 🔴 Quita la iluminación anterior si existe
            if (lastHighlighted !== null) {
                enemyButtonDiv[lastHighlighted].classList.remove("highlight");
            }


            let rand = randomInRange(1,3);
            let enemySelection = ["rock", "paper", "scissors"][rand - 1];
            lastHighlighted = rand-1;



            const classes = button.classList;

            let resultDiv =  document.querySelector(".result");
            enemyButtonDiv = document.querySelectorAll(".button.cpu");
            

            let result = "";



            

            if(classes[0] == "rock"){
                if(rand == 1){
                    result = "You chose " +classes[0]+ ". Enemy chose "+enemySelection+". Tie!"
                }
                else if(rand== 2){
                    result = "You chose " +classes[0]+ ". Enemy chose "+enemySelection+". Lose!"
                }else{
                    result = "You chose " +classes[0]+ ". Enemy chose "+enemySelection+". Win!"
                }
                
            }

            if(classes[0] == "paper"){
                if(rand == 1){
                    result = "You chose " +classes[0]+ ". Enemy chose "+enemySelection+". Win!"
                }
                else if(rand== 2){
                    result = "You chose " +classes[0]+ ". Enemy chose "+enemySelection+". Tie!"
                }else{
                    result = "You chose " +classes[0]+ ". Enemy chose "+enemySelection+". Lose!"
                }
                
            }

            if(classes[0] == "scissors"){
                if(rand == 1){
                    result = "You chose " +classes[0]+ ". Enemy chose "+enemySelection+". Lose!"
                }
                else if(rand== 2){
                    result = "You chose " +classes[0]+ ". Enemy chose "+enemySelection+". Win!"
                }else{
                    result = "You chose " +classes[0]+ ". Enemy chose "+enemySelection+". Tie!"
                }
            }


            enemyButtonDiv[rand-1].classList.add("highlight");
            resultDiv.innerHTML=result;
    
        });

    });
});