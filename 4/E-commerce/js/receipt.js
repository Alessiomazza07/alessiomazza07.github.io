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
/*0=nome,1=cognome,2=user,3=password,4=email,5=telefono,6=citta,7=cap,8=indirizzo
0=card-number,1=expiry-date,2=cvv*/
document.querySelector('p.address').innerHTML=user[8]+', '+user[7];
document.querySelector('p.city').innerHTML=user[6];
document.querySelector('p.number').innerHTML+=localStorage.getItem('card').split(',')[0].slice(-4);
document.querySelector('p.subtotal').innerHTML='€ '+localStorage.getItem('total');
document.querySelector('p.total').innerHTML='€ '+(parseFloat(localStorage.getItem('total'))+10);
function checkout(){
    localStorage.removeItem('cart');
    localStorage.removeItem('total');
    const container=document.querySelector('div.container');
    container.removeChild(container.firstElementChild);
    container.removeChild(container.firstElementChild);
    var ack=document.createElement('p');
    ack.className='ack';
    ack.innerHTML='Il tuo ordine è stato effettuato';
    container.append(ack);
    let link=document.createElement('a');
    link.innerHTML='Torna a fare shopping';
    link.className='back';
    link.href='home.html';
    container.append(link);
}
function isPromo(event){
    event.preventDefault();
    var input=document.querySelector('div.promo input').value;
    if(document.querySelector('div.details p.discount')) return;
    fetch('https://alessiomazza07.github.io/4/E-commerce/json/promo.json')
    .then(response => {
      if (!response.ok)
        console.log('Problema con la fetch');
      return response.json();
    })
    .then(promo => {
        promo.forEach(p => {
            if(p.code === input) applyDiscount(p.discount);
        });
    })
    .catch(error => {
      console.error('Errore:'+error);
    });
}
function applyDiscount(n){
    var promoDiv = document.createElement("div");
    promoDiv.className = "details";
    var p=document.createElement('p');
    p.innerHTML='Promo code:'
    var discount=document.createElement('p');
    discount.className='discount';
    var disc=((n/100)*parseFloat(localStorage.getItem('total'))).toFixed(2);
    var tot=parseFloat(localStorage.getItem('total'))-disc;
    discount.innerHTML='- € '+disc;
    promoDiv.append(p);
    promoDiv.append(discount);
    var div = document.querySelector("div.details");
    div.parentNode.insertBefore(promoDiv, div.nextSibling);
    document.querySelector('p.total').innerHTML='€ '+(tot+10);
}