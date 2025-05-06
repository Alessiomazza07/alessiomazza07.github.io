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
fetch('https://alessiomazza07.github.io/4/E-commerce/json/prodotti.json')
.then(response => {
  if (!response.ok)
    console.log('Problema con la fetch');
  return response.json();
})
.then(prodotti => {
     const container=document.querySelector('div.container');
for(let i = 0; i < prodotti.length; i++){
    let prodotto=document.createElement('button');
    prodotto.className='product';
    prodotto.id=prodotti[i].id;

    let image=document.createElement('img');
    image.className='image';
    image.src='./images/'+prodotti[i].immagine;
    prodotto.append(image);

    let nome=document.createElement('a');
    nome.className='nome';
    nome.innerHTML=prodotti[i].nome;
    nome.setAttribute('onclick','clicked(event,'+prodotti[i].id+')');
    prodotto.append(nome);

    let prezzo=document.createElement('div');
    prezzo.className='prezzo';
    prezzo.innerHTML=prodotti[i].prezzo+" €";
    prodotto.append(prezzo);

    let add=document.createElement('button');
    add.className='add';
    add.innerHTML='Add to cart';
    add.setAttribute('onclick','addCart('+prodotti[i].id+')');
    prodotto.append(add);

    container.appendChild(prodotto);
}
})
.catch(error => {
  console.error('Errore:'+error);
});


function clicked(event, idp) {
    event.preventDefault();
    localStorage.setItem('product',idp);
    window.location.href = 'product.html';
}
function addCart(id){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(id);
    localStorage.setItem('cart',JSON.stringify(cart));
}
const inputSearch=document.querySelector('div.search input.search');
inputSearch.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search(inputSearch.value.toLowerCase());
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var searchInput=localStorage.getItem('search');
    if(searchInput){
        search(searchInput);
        localStorage.removeItem('search');
    }
});
function search(input){
    const products = document.querySelectorAll('button.product');
    products.forEach(product => {
        const productName = product.querySelector('a.nome').textContent.toLowerCase();
        if (productName.includes(input) || productName === input) product.style.display = 'flex';
        else product.style.display = 'none';
    });
}