const prodotti=[
    {
        "id": 0,
        "nome": "Smartphone 5G",
        "descrizione": "Smartphone di ultima generazione con connettività 5G, fotocamera da 108 MP e display AMOLED.",
        "prezzo": "699.99",
        "immagine": "https://example.com/images/smartphone_5g.jpg"
    },
    {
        "id": 1,
        "nome": "Tablet Android",
        "descrizione": "Tablet Android con schermo da 10 pollici, ideale per navigare, guardare film e giocare.",
        "prezzo": "299.99",
        "immagine": "https://example.com/images/tablet_android.jpg"
    },
    {
        "id": 2,
        "nome": "Cuffie Wireless",
        "descrizione": "Cuffie wireless con cancellazione del rumore, perfette per ascoltare musica in alta qualità.",
        "prezzo": "149.99",
        "immagine": "https://example.com/images/cuffie_wireless.jpg"
    },
    {
        "id": 3,
        "nome": "Smartwatch",
        "descrizione": "Smartwatch con monitoraggio della salute, notifiche e GPS integrato per attività all'aperto.",
        "prezzo": "199.99",
        "immagine": "https://example.com/images/smartwatch.jpg"
    },
    {
        "id": 4,
        "nome": "Laptop Gaming",
        "descrizione": "Laptop gaming ad alte prestazioni con scheda grafica dedicata e display ad alta frequenza di aggiornamento.",
        "prezzo": "1299.99",
        "immagine": "https://example.com/images/laptop_gaming.jpg"
    },
    {
        "id": 5,
        "nome": "Televisore 4K",
        "descrizione": "Televisore 4K Ultra HD con supporto HDR e smart TV integrata per streaming e app.",
        "prezzo": "799.99",
        "immagine": "https://example.com/images/televisore_4k.jpg"
    },
    {
        "id": 6,
        "nome": "Altoparlante Bluetooth",
        "descrizione": "Altoparlante Bluetooth portatile con suono potente e batteria a lunga durata, ideale per feste.",
        "prezzo": "89.99",
        "immagine": "https://example.com/images/altoparlante_bluetooth.jpg"
    },
    {
        "id": 7,
        "nome": "Webcam HD",
        "descrizione": "Webcam HD con risoluzione 1080p, perfetta per videoconferenze e streaming.",
        "prezzo": "49.99",
        "immagine": "https://example.com/images/webcam_hd.jpg"
    },
    {
        "id": 8,
        "nome": "Hard Disk Esterno",
        "descrizione": "Hard disk esterno da 2TB, ideale per il backup di dati e archiviazione di file multimediali.",
        "prezzo": "79.99",
        "immagine": "https://example.com/images/hard_disk_esterno.jpg"
    },
    {
        "id": 9,
        "nome": "Stampante Multifunzionale",
        "descrizione": "Stampante multifunzionale con funzioni di scansione e copia, perfetta per uso domestico e ufficio.",
        "prezzo": "129.99",
        "immagine": "https://example.com/images/stampante_multifunzionale.jpg"
    },
    {
        "id": 10,
        "nome": "Router Wi-Fi",
        "descrizione": "Router Wi-Fi ad alta velocità con copertura estesa, ideale per streaming e gaming online.",
        "prezzo": "69.99",
        "immagine": "https://example.com/images/router_wifi.jpg"
    },
    {
        "id": 11,
        "nome": "Caricatore Wireless",
        "descrizione": "Caricatore wireless veloce compatibile con tutti i dispositivi abilitati Qi.",
        "prezzo": "29.99",
        "immagine": "https://example.com/images/caricatore_wireless.jpg"
    },
    {
        "id": 12,
        "nome": "Microfono USB",
        "descrizione": "Microfono USB di alta qualità, ideale per registrazioni audio e streaming.",
        "prezzo": "99.99",
        "immagine": "https://example.com/images/microfono_usb.jpg"
    },
    {
        "id": 13,
        "nome": "Telecamera di Sicurezza",
        "descrizione": "Telecamera di sicurezza Wi-Fi con visione notturna e rilevamento del movimento.",
        "prezzo": "89.99",
        "immagine": "https://example.com/images/telecamera_sicurezza.jpg"
    },
    {
        "id": 14,
        "nome": "Ventilatore USB",
        "descrizione": "Ventilatore portatile USB, ideale per rinfrescare l'aria in ufficio o a casa.",
        "prezzo": "19.99",
        "immagine": "https://example.com/images/ventilatore_usb.jpg"
    },
    {
        "id": 15,
        "nome": "Cavo HDMI",
        "descrizione": "Cavo HDMI ad alta velocità, perfetto per collegare dispositivi a TV e monitor.",
        "prezzo": "9.99",
        "immagine": "https://example.com/images/cavo_hdmi.jpg"
    },
    {
        "id": 16,
        "nome": "Supporto per Laptop",
        "descrizione": "Supporto regolabile per laptop, progettato per migliorare la postura e il comfort durante l'uso.",
        "prezzo": "29.99",
        "immagine": "https://example.com/images/supporto_laptop.jpg"
    },
    {
        "id": 17,
        "nome": "Cuffie Gaming",
        "descrizione": "Cuffie gaming con microfono integrato e suono surround, perfette per sessioni di gioco prolungate.",
        "prezzo": "69.99",
        "immagine": "https://example.com/images/cuffie_gaming.jpg"
    },
    {
        "id": 18,
        "nome": "Smart TV Box",
        "descrizione": "Smart TV Box per trasformare qualsiasi TV in una smart TV, con accesso a tutte le app di streaming.",
        "prezzo": "49.99",
        "immagine": "https://example.com/images/smart_tv_box.jpg"
    },
    {
        "id": 19,
        "nome": "Lampada LED Smart",
        "descrizione": "Lampada LED smart controllabile tramite app, ideale per creare atmosfere personalizzate.",
        "prezzo": "39.99",
        "immagine": "https://example.com/images/lampada_led_smart.jpg"
    }
  ];
  
  const id=localStorage.getItem('product');
  const container=document.querySelector('div.container');
  let prodotto=document.createElement('div');
  prodotto.className='product';
  
  let image=document.createElement('div');
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
  /*
  fetch('./prodotti.json')
  .then(response => {
    if (!response.ok)
      console.log('Problema con la fetch');
    return response.json();
  })
  .then(prodotti => {
      const container=document.querySelector('div.container');
      let prodotto=document.createElement('div');
      prodotto.className='product';
      
      let image=document.createElement('div');
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
  */