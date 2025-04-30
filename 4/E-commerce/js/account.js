if(localStorage.getItem('logged')=='false'){
    localStorage.removeItem('cart');
    localStorage.removeItem('user');
    window.location.href='login.html';
}
const user=localStorage.getItem('user').split(',');
/* Formato oggetto->vettore
    "nome" :nome,
    "cognome": cognome,
    "user": user,
    "password": password,
    "email": "",
    "telefono": "",
    "citta": "",
    "cap": "",
    "indirizzo": ""
*/
nome=document.getElementById('nome');
nome.value=user[0];

cognome=document.getElementById('cognome');
cognome.value=user[1];

username=document.getElementById('username');
username.value=user[2];

email=document.getElementById('email');
email.value=user[4];

password=document.getElementById('password');
password.value=user[3];

telefono=document.getElementById('telefono');
telefono.value=user[5];

citta=document.getElementById('citta');
citta.value=user[6];

cap=document.getElementById('cap');
cap.value=user[7];

indirizzo=document.getElementById('indirizzo');
indirizzo.value=user[8];

function change(i,id){
    user[i] = document.getElementById(id).value;
    localStorage.setItem('user',user);
}
function logout(){
    localStorage.removeItem('user');
    localStorage.setItem('logged',false);
    nome.innerHTML="";
    cognome.innerHTML="";
    username.innerHTML="";
    email.innerHTML="";
    password.innerHTML="";
    telefono.innerHTML="";
    citta.innerHTML="";
    cap.innerHTML="";
    indirizzo.innerHTML="";
    window.location.href='login.html';
}