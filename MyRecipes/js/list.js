window.addEventListener("load", loadRecipes);

function changeStarColor(){
    star = document.getElementById("star")
    button.addEventListener('click', handleButtonClick);
}

function loadRecipes() {
    var allRecipes = JSON.parse(localStorage.getItem("allRecipes"));

    document.getElementById("recipes").innerHTML = "";

    if (allRecipes != null) {
        
        allRecipes.forEach(addItems);

        function addItems(item, index) {
           
                //              <ion-button> <ion-icon name="star" color="warning"></ion-icon></ion-button>
                //display in localstorage if favorite
            document.getElementById("recipes").innerHTML += `
            
            <ion-card>
                <ion-card-header>
                <ion-card-title>${item.title}</ion-card-title>
                </ion-card-header>
                <ion-card-content style="white-space: pre-line;">${item.ingredients}</ion-card-content>
                <ion-card-content style="white-space: pre-line;">${item.selection}</ion-card-content>
                <ion-card-content style="white-space: pre-line;">${item.orderDate}</ion-card-content>
                <ion-buttons>
                <ion-button >
                <ion-label slot="end">
                    <ion-icon name="${item.favorite == true ? "star" : "star-outline"}" color="warning" onclick="addFavorite(${index})" ></ion-icon>
                    </ion-label>
                    </ion-button>
                <ion-button><ion-icon name="camera-outline"></ion-icon></ion-button>
                <ion-button><ion-icon name="image-outline"></ion-icon></ion-button>
                <ion-button >
                <ion-label slot="end">
                    <ion-icon name="trash-outline"  onclick="DeleteMsg(${index})"></ion-icon>
                </ion-label>
                </ion-button>
                </ion-buttons>
            </ion-card>
            `
            
        }
    }
    else {
        document.getElementById("recipes").innerHTML = '<h4 class="ion-text-center">No recipes yet. Go on, add a new one!</h4> <button>Press here to go back</button>';
    }
}

var clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", clearRecipes)

function clearRecipes() {

    var alert = document.createElement('ion-alert');

    alert.header = 'Delete all recipes?';
    alert.message = 'Are you sure you want to delete all recipes?';
    alert.buttons = [
        {
            text: 'No',
            role: 'cancel'
        },
        {
            text: 'Yes',
            handler: () => {
                localStorage.removeItem("allRecipes");
                presentToast("All recipes were cleared");
                loadRecipes();
            }
        }
    ];

    document.body.appendChild(alert);

    return alert.present();
}

function DeleteMsg(i) {

    var recipies = JSON.parse(localStorage.getItem("allRecipes"));
    recipies.splice(i, 1)
    localStorage.setItem("allRecipes", JSON.stringify(recipies))
    loadRecipes()
  
  }

function addFavorite(i) {
  

    var recipies = JSON.parse(localStorage.getItem("allRecipes"));
    recipies[i].favorite = recipies[i].favorite == false ? true : false; 
    localStorage.setItem("allRecipes", JSON.stringify(recipies))
    loadRecipes()
  
  }
  

function presentToast(message) {
    const toast = document.createElement('ion-toast');
    toast.message = message
    toast.duration = 5000;
    toast.position = "bottom";

    document.body.appendChild(toast);
    return toast.present();
}
