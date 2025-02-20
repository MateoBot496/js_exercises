document.addEventListener("DOMContentLoaded", function(){ 
    const addButton = document.querySelector(".add button");
    const addInput = document.querySelector(".add input");
    const list = document.querySelector(".list ul");
    let delButton = document.querySelector(".list button");

    function addDeleteFunctionality(button) {
        button.addEventListener("click", function () {
            button.previousElementSibling.remove(); // Elimina el <li> y button completo
            button.remove();
        });
    }

    addDeleteFunctionality(delButton); /*borramos primer delete*/

    addButton.addEventListener("click", function(){
        if(addInput.value){
            let newItem = document.createElement("li"); /*creamos li y button para añadir al ul*/
            let deleteButton = document.createElement("button");

            deleteButton.textContent = "Delete"; /*ponemos texto en el button*/

            newItem.innerHTML= addInput.value; /* COGEMOS EL VALOR DEL ImPUT */
            addDeleteFunctionality(deleteButton); /*AÑADIMOS FUNCion borrar al botton*/

            list.appendChild(newItem);
            list.appendChild(deleteButton); /*agregamos al ul*/

        }
        
    });

});
