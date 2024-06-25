let errorname = true
let formname = document.getElementsByName('formname')[0];
formname .onfocus = function (){
this.setAttribute('style', 'background: white');
 }
formname.onblur = function (){
    if (this.value.match(regexName)) {
        this.setAttribute('style', 'background: white');
        document.querySelector ('.msg.formname').innerHTML = '';
        document.querySelector ('.msg.formname').setAttribute ('style', 'display: none');
        errorname = false;
    } else {
        this.setAttribute('style', 'background: seashell');
        document.querySelector ('.msg.formname').innerHTML = 'Bitte geben Sie Ihren Namnen ein!';
        document.querySelector ('.msg.formname').setAttribute('style', 'display: block');
        errorname = true;