document.getElementById("maintitle").innerText = "point and click adventure";

const offsetCharacter = 16;
const gameWindow = document.getElementById("gamewindow");
const maincharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function(e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    maincharacter.style.left = x - offsetCharacter + "px";
    maincharacter.style.top = y - offsetCharacter + "px";

    console.log(e.target.id);
    switch(e.target.id){
        case "brokencrates":
            console.log("these crates are broken and have been looted, exept for one");
            break;
        case "barrel1":
            console.log("this barrel contains fresh food and drinks, you can smell it for sure");
            break;
            default:
                console.log("nothin here");
                break;
    }

}
