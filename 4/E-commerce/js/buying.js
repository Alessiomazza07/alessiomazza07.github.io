if(localStorage.getItem('logged')==null){
    localStorage.setItem('logged',false);
    window.location.href='login.html';
}
if(localStorage.getItem('logged')=='false'){
    localStorage.removeItem('cart');
    localStorage.removeItem('user');
    localStorage.removeItem('card');
    window.location.href='login.html';
}
const user=localStorage.getItem('user').split(',');
document.querySelector('p.form-title').innerHTML+=localStorage.getItem('total')+' €';
const nome=document.getElementById('first-name');
nome.value=user[0];
const cognome=document.getElementById('last-name');
cognome.value=user[1];
const email=document.getElementById('email');
email.value=user[4];
const password=document.getElementById('password');
password.value=user[3];
const number=document.getElementById('number');
number.value=user[5];
const city=document.getElementById('city');
city.value=user[6];
const cap=document.getElementById('cap');
cap.value=user[7];
const address=document.getElementById('address');
address.value=user[8];
const card=localStorage.getItem('card').split(',');
if(card!=null && card!=''){
    document.getElementById('card-number').value=card[0];
    document.getElementById('expiry-date').value=card[1];
    document.getElementById('cvv').value=card[2];
}
const oldUser=localStorage.getItem('user');
function pay(event){
    event.preventDefault();
    console.log(check());
    if(check()>0) return;
    localStorage.removeItem('user');
    let newUser=[];
    let newCard=[];
    fillUser(newUser);
    fillCard(newCard);
    localStorage.setItem('user',newUser);
    localStorage.setItem('card',newCard);
    clearForm();
    window.location.href='receipt.html'
}
function check(){
    if(document.getElementById('card-number').value.length!=16) return 0;
    if(document.getElementById('expiry-date').value.length!=5) return 1;
    if(document.getElementById('cvv').value.length!=3) return 2;
    if(number.value.length<10 || number.value.length>13) return 3;
    if(cap.length!=5) return false;
    if(nome==null || nome=="" || 
        cognome==null || cognome=="" || 
        email==null || email=="" || 
        password==null || password=="" || 
        number==null || number=="" || 
        city==null || city=="" || 
        cap==null || cap=="" || 
        address==null || address=="") return 4;
    return -1;
}
function fillUser(v){
    const oldUser=localStorage.getItem('user');
    v.push(nome.value);
    v.push(cognome.value);
    v.push(oldUser[2]);
    v.push(password.value);
    v.push(email.value);
    v.push(number.value);
    v.push(city.value);
    v.push(cap.value);
    v.push(address.value);
    return v;
}
function fillCard(v){
    v.push(document.getElementById('card-number').value);
    v.push(document.getElementById('expiry-date').value);
    v.push(document.getElementById('cvv').value);
    return v;
}
function clearForm(){
    nome.value="";
    cognome.value="";
    email.value="";
    password.value="";
    number.value="";
    city.value="";
    cap.value="";
    address.value="";
    document.getElementById('card-number').value="";
    document.getElementById('expiry-date').value="";
    document.getElementById('cvv').value="";
}
const inputSearch=document.querySelector('div.search input.search');
inputSearch.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search(inputSearch.value.toLowerCase());
    }
});
function search(input){
    localStorage.setItem('search',input);
    window.location.href='home.html';
}
