(()=>{

let inputNameTask = document.getElementById('name-task'),
    boxListTask = document.getElementById('task-list'),
    btnAddTask = document.getElementById('btn-add');

    let addTask = () => {

        if (inputNameTask.value !== ""){
            // se captura el texto del <input>
            let textContentTask = inputNameTask.value,
                // se crea el elemento, etiqueta <li>
                createElementLi = document.createElement('li'),
                // se transforma el texto capturado en un nodo de texto
                createTextContent = document.createTextNode(textContentTask);
    
            // se añade la clase a los elementos <li> que se crean
            createElementLi.classList.add('item-list');
            // se añade el texto capturado a las etiquetas <li>
            createElementLi.appendChild(createTextContent);
            // se añade los elementos <li> a la lista <ul>
            boxListTask.appendChild(createElementLi);
            // se limpia el campo de texto <input>
            inputNameTask.value = "";

        }else{
            // modifica el atributo del <input>, y agrega un nuevo valor
            inputNameTask.setAttribute('placeholder', 'Debe ingresar una tarea valida...');
            // añade la clase al elemento <input>
            inputNameTask.classList.add('validate-error');
        }
        
    };

    let validateTask = () => {
        // modifica el atributo del <input>, y agrega un nuevo valor
        inputNameTask.setAttribute('placeholder', 'Agregar tarea...');
        // remueve la clase del elemento <input>
        inputNameTask.classList.remove('validate-error');
    };

    btnAddTask.addEventListener('click', addTask);
    inputNameTask.addEventListener('click', validateTask);

})();