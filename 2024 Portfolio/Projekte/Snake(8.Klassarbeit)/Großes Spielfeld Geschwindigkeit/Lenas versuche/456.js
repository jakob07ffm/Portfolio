function save(){
var text_to_save=document.getElementById('textfield').value;
localStorage.setItem("text", text_to_save); //save the item
}