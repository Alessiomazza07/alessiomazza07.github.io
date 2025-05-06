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
