  const id=localStorage.getItem('product');
  fetch('https://alessiomazza07.github.io/4/E-commerce/json/prodotti.json')
  .then(response => {
    if (!response.ok)
      console.log('Problema con la fetch');
    return response.json();
  })
  .then(prodotti => {
      const container=document.querySelector('div.container');
      let prodotto=document.createElement('div');
      prodotto.className='product';
      
      let image=document.createElement('img');
      image.className='image';
      image.setAttribute('src',prodotti[id].immagine);
      prodotto.append(image);
  
      let nome=document.createElement('div');
      nome.className='nome';
      nome.innerHTML=prodotti[id].nome;
      prodotto.append(nome);
  
      let descrizione=document.createElement('div');
      descrizione.className='descrizione';
      descrizione.innerHTML=prodotti[id].descrizione;
      prodotto.append(descrizione);
  
      let prezzo=document.createElement('div');
      prezzo.className='prezzo';
      prezzo.innerHTML=prodotti[id].prezzo;
      prodotto.append(prezzo);
  
      let add=document.createElement('button');
      add.className='add';
      add.setAttribute('onclick','addCart('+prodotti[id].id+')');
  
      prodotto.append(add);
      container.append(prodotto);
  })
  .catch(error => {
    console.error('Errore:'+error);
  });