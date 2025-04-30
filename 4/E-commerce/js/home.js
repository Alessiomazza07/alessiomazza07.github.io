if(localStorage.getItem('logged')=='false'){
  localStorage.removeItem('cart');
  localStorage.removeItem('user');
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
  image.setAttribute('src','image.webp');/* prodotti[i].immagine */
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
  add.innerHTML='Aggiungi';
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
  cart=localStorage.getItem("cart");
  var newCart=[];
  for(let i=0;i<cart.length;i++)
      newCart.push(cart[i]);
  newCart.push(id);
  localStorage.setItem('cart',newCart);
}
const divSearch=document.querySelector('div.search');
divSearch.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      divSearch.submit();
      const input = document.querySelector('div.search input').value.toLowerCase();
      search(input);
  }
});
function search(input){
  const products = document.querySelectorAll('#productList .product');
  products.forEach(product => {
      const productName = product.querySelector('div.nome').textContent.toLowerCase();
      const hasClassMatch = product.classList.contains(input);
      if (productName.includes(input) || hasClassMatch)
          product.style.display = 'block';
      else
          product.style.display = 'none';
  });
}
