var button = document.querySelector('#saveButton');
button.addEventListener('click', handleButtonClick);


function saveRecipe(title, ingredients, selection) {
    // Parse any JSON previously stored in allEntries
    var allRecipes = JSON.parse(localStorage.getItem("allRecipes"));
    if (allRecipes == null) 
        allRecipes = [];

        let today = new Date ();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();
        let current_time = ' Date : '+ day + '/' + month + '/' + year +  ' Time : ' +hours + ':' + minutes + ':' + seconds 

    var recipe = {
        "title": title,
        "ingredients": ingredients,
        "selection": selection,
        "orderDate": current_time,
        "favorite": false,
    };

    allRecipes.push(recipe);
    localStorage.setItem("allRecipes", JSON.stringify(allRecipes));
}

function handleButtonClick() {
    const titleField = document.querySelector('#title');
    const ingredientsField = document.querySelector('#ingredients');
    const selectionTypeField = document.querySelector('#selection');

    const selectionTypeField2 = document.querySelector("#selection").value;

    var message, buttons = null

    if (titleField.value == "" || ingredientsField.value == "" || selectionTypeField.value == null) {
        message = "Please fill in both the recipe name ,the ingredients and the reccipe type"
        buttons = ['Ok']
    }
    else {
        message = "Are you sure you want to save this recipe?"
        buttons = [
            {
                text: 'Cancel',
                role: 'cancel'
            }, 
            {
                text: 'Ok',
                handler: () => {
                    saveRecipe(titleField.value, ingredientsField.value, selectionTypeField2);
                    
                    titleField.value = '';
                    ingredientsField.value = '';
                    selectionTypeField.value = '';

                    window.location.href = "index.html";
                }
            }
        ];
        
    }
    if(selectionTypeField.value=="BreakFast"){
        selectionTypeField.value = '<ion-icon name="sunny-outline"></ion-icon>'
    
        saveRecipe(titleField.value, ingredientsField.value,selectionTypeField.value,current_time);
    
        titleField.value="";
        ingredientsField.value="";
        selectionTypeField.value="";
        current_time="";
       
        window.location.href = "index.html"
    
    }else if(selectionTypeField.value=="Lunch"){
        selectionTypeField.value = '<ion-icon name="basket-outline"></ion-icon>'
    
        saveRecipe(titleField.value, ingredientsField.value,selectionTypeField.value,current_time);
    
        titleField.value="";
        ingredientsField.value="";
        selectionTypeField.value="";
        current_time="";
       
        window.location.href = "index.html"
    }else if(selectionTypeField.value=="Dinner"){
        selectionTypeField.value = '<ion-icon name="pizza-outline"></ion-icon>'
    
        saveRecipe(titleField.value, ingredientsField.value,selectionTypeField.value,current_time);
    
        titleField.value="";
        ingredientsField.value="";
        selectionTypeField.value="";
        current_time="";
       
        window.location.href = "index.html"
    }else if(selectionTypeField.value=="Desert"){
        selectionTypeField.value = '<ion-icon name="ice-cream-outline"></ion-icon>'
    
        saveRecipe(titleField.value, ingredientsField.value,selectionTypeField.value,current_time);
    
        titleField.value="";
        ingredientsField.value="";
        selectionTypeField.value="";
        current_time="";
       
        window.location.href = "index.html"
    }

    const alert = document.createElement('ion-alert');
    alert.header = 'MyRecipes';
    alert.message = message;
    alert.buttons = buttons;
  
    document.body.appendChild(alert);
    return alert.present();
}

