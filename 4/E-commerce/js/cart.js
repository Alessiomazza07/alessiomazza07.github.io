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

let cart=JSON.parse(localStorage.getItem('cart')) || [];
if(cart==null || cart.length==0){
    emptyCart();
}else{
    fetch('https://alessiomazza07.github.io/4/E-commerce/json/prodotti.json')
    .then(response => {
      if (!response.ok)
        console.log('Problema con la fetch');
      return response.json();
    })
    .then(prodotti => {
        let container=document.querySelector('div.container');
        var already=[],tot=0;
        for(let i=0;i<cart.length;i++){
            tot+=prodotti[cart[i]].prezzo;
            if(!already.includes(cart[i])){
                already.push(cart[i]);
                let prodotto=document.createElement('div');
                prodotto.className='prodotto';

                let img=document.createElement('img');
                img.className='image';
                img.src='./images/'+prodotti[i].immagine;
                prodotto.append(img);

                let text=document.createElement('div');
                text.className='text';

                let nome=document.createElement('a');
                nome.className='nome';
                nome.setAttribute('onclick','clicked(event,'+prodotti[i].id+')');
                nome.innerHTML=prodotti[cart[i]].nome;
                text.append(nome);

                let prezzo=document.createElement('p');
                prezzo.className='prezzo';
                prezzo.innerHTML=prodotti[cart[i]].prezzo+" €";
                text.append(prezzo);

                let panel=document.createElement('div');
                panel.className='panel';

                let decr=document.createElement('button');
                decr.className='decrement';
                decr.innerHTML='-';
                decr.setAttribute('onclick','changeQt('+cart[i]+',-1)');
                panel.append(decr);

                let qt = document.createElement('input');
                qt.className='quantita';
                qt.id=cart[i];
                qt.type='text';
                qt.setAttribute('readonly',true);
                qt.value=count(cart,cart[i]);
                panel.append(qt);

                let incr=document.createElement('button');
                incr.className='increment';
                incr.innerHTML='+';
                incr.setAttribute('onclick','changeQt('+cart[i]+',1)');
                panel.append(incr);

                text.append(panel);
                prodotto.append(text);
                container.append(prodotto);
            }
        }
        container.append(document.createElement('hr'));

        let total=document.createElement('p');
        total.className='total';
        total.innerHTML='Total: '+getTotal()+' €';
        container.append(total);

        let order=document.createElement('button');
        order.className='order';
        order.innerHTML='Order now '+'<i class="fa-solid fa-truck-fast"></i>';
        order.setAttribute('onclick','order()');
        container.append(order);
    })
    .catch(error => {
      console.error('Errore:'+error);
    });
}
function count(v,n){
    let c=0
    for(let i=0;i<v.length;i++){
        if(v[i]==n) c++;
    }
    return c;
}
function changeQt(id,n){
    let input=document.getElementById(id);
    let toChange=parseInt(input.value);
    input.value=toChange+n;
    if(n>0) addCart(id);
    else if(toChange>0) removeCart(id);
    if(input.value==0){
        const products = document.querySelectorAll(".prodotto");
        for(let i=0;i<products.length;i++){
            var value = products[i].querySelector(".text .panel .quantita").value;
            console.log(value);
            if(value==0) products[i].remove();
        }
    }
    if(isEmpty()) emptyCart();
    let total=document.querySelector('p.total');
    total.innerHTML='Total: '+getTotal()+' €';
}
function addCart(id){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(id);
    localStorage.setItem('cart',JSON.stringify(cart));
}
function removeCart(id){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(cart.indexOf(id),1);
    localStorage.setItem('cart',JSON.stringify(cart));
}
function clicked(event, idp) {
    event.preventDefault();
    localStorage.setItem('product',idp);
    window.location.href = 'product.html';
}
function order(){
    localStorage.setItem('total',getTotal());
    window.location.href='buying.html'
}
function isEmpty(){
    const products = document.querySelectorAll(".prodotto");
    if(products.length==0) return true;
    return false;
}
function emptyCart(){
    let container=document.querySelector('div.container');
    var orderbtn = document.querySelector("button.order");
    if(orderbtn) container.removeChild(orderbtn);
    var total = document.querySelector('p.total');
    if(total) container.removeChild(total);
    let parag=document.createElement('p');
    parag.innerHTML='Il tuo carrello al momento è vuoto';
    parag.className='void';
    container.append(parag);
    let link=document.createElement('a');
    link.innerHTML='Torna a fare shopping';
    link.className='back';
    link.href='home.html';
    container.append(link);
    container.style.marginBottom='27rem';
}
function getTotal(){
    let prezzi=document.querySelectorAll('.prezzo');
    let qts=document.querySelectorAll('.panel .quantita');
    let tot=0;
    for(let i=0;i<prezzi.length;i++){
        let pr=parseFloat(prezzi[i].innerHTML.slice(0,-2));
        tot+=pr*qts[i].value;
    }
    return tot.toFixed(2);
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
