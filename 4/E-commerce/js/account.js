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
/*0=nome,1=cognome,2=user,3=password,4=email,5=telefono,6=citta,7=cap,8=indirizzo,*/
document.getElementById('first-name').value=user[0];
document.getElementById('last-name').value=user[1];
document.getElementById('user').value=user[2];
document.getElementById('email').value=user[4];
document.getElementById('password').value=user[3];
document.getElementById('number').value=user[5];
document.getElementById('city').value=user[6];
document.getElementById('cap').value=user[7];
document.getElementById('address').value=user[8];
function set(i,id){
    user[i] = document.getElementById(id).value;
    localStorage.setItem('user',user);
}
function logout(){
    localStorage.removeItem('user');
    localStorage.setItem('logged',false);
    document.getElementById('first-name').value='';
    document.getElementById('last-name').value='';
    document.getElementById('user').value='';
    document.getElementById('email').value='';
    document.getElementById('password').value='';
    document.getElementById('number').value='';
    document.getElementById('city').value='';
    document.getElementById('cap').value='';
    document.getElementById('address').value='';
    window.location.href='login.html';
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