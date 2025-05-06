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
  const id=localStorage.getItem('product');
  const container=document.querySelector('div.container');
  let prodotto=document.createElement('div');
  prodotto.className='product';
  let image=document.createElement('img');
  image.className='image';
  image.src='./images/'+prodotti[id].immagine;
  prodotto.append(image);

  let text=document.createElement('div');
  text.className='text';

  let nome=document.createElement('div');
  nome.className='nome';
  nome.innerHTML=prodotti[id].nome;
  text.append(nome);

  let descrizione=document.createElement('div');
  descrizione.className='descrizione';
  descrizione.innerHTML=prodotti[id].descrizione;
  text.append(descrizione);

  let prezzo=document.createElement('div');
  prezzo.className='prezzo';
  prezzo.innerHTML=prodotti[id].prezzo+" €";
  text.append(prezzo);

  let qt=document.createElement('div');
  qt.className='quantita';
  let label=document.createElement('label');
  label.innerHTML='Quantità: ';
  qt.append(label);
  let input=document.createElement('input');
  input.type='text';
  input.id='qt';
  qt.append(input);
  text.append(qt);

  let add=document.createElement('button');
  add.className='add';
  add.innerHTML='Add to cart';
  add.setAttribute('onclick','addCart('+prodotti[id].id+')');
  text.append(add);

  let buy=document.createElement('button');
  buy.className='buy';
  buy.innerHTML='Buy now';
  buy.setAttribute('onclick','buyNow('+prodotti[id].id+')');
  text.append(buy);

  prodotto.append(text); 
  container.append(prodotto);
})
.catch(error => {
console.error('Errore:'+error);
});
function addCart(id){
  let cart=JSON.parse(localStorage.getItem("cart")) || [];
  let quantita=document.getElementById('qt').value;
  for(let i=0;i<quantita;i++)
      cart.push(id);
  if(quantita==0) cart.push(id);
  localStorage.setItem('cart',JSON.stringify(cart));
}
function buyNow(id){
  addCart(id);
  window.location.href= 'cart.html'
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