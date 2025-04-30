const users=[
  {
      nome: "A",
      cognome: "A",
      user: "A",
      password: "a",
      email: "",
      telefono: "",
      citta: "",
      cap: "",
      indirizzo: ""
  },
  {
      nome: "B",
      cognome: "B",
      user: "B",
      password: "b",
      email: "",
      telefono: "",
      citta: "",
      cap: "",
      indirizzo: ""
  },
  {
      nome: "C",
      cognome: "C",
      user: "C",
      password: "c",
      email: "",
      telefono: "",
      citta: "",
      cap: "",
      indirizzo: ""
  },
  {
      nome: "D",
      cognome: "D",
      user: "D",
      password: "d",
      email: "",
      telefono: "",
      citta: "",
      cap: "",
      indirizzo: ""
  },
  {
      nome: "E",
      cognome: "E",
      user: "E",
      password: "e",
      email: "",
      telefono: "",
      citta: "",
      cap: "",
      indirizzo: ""
  }
];
function login(event){
  event.preventDefault();
  const nome = document.getElementById('first-name').value;
  const cognome = document.getElementById('last-name').value;
  const user = document.getElementById('user').value;
  const password = document.getElementById('password').value;
  const confirm_password = document.getElementById('confirm-password').value;
  if(password!==confirm_password) {passwordProblem();return;}
  else passwordResolve();
  const persona=[nome,cognome,user,password,"","","","",""];
/*
Formato oggetto->vettore
  "nome" :nome,
  "cognome": cognome,
  "user": user,
  "password": password,
  "email": "",
  "telefono": "",
  "citta": "",
  "cap": "",
  "indirizzo": ""
*/
  
  fetch('./users.json')
  .then(response => {
    if (!response.ok)
      console.log('Problema con la fetch');
    return response.json();
  })
  .then(users => {
      for(let i = 0; i < users.length; i++){
          if(eq(persona,users[i])){
              localStorage.setItem('user',persona);
          localStorage.setItem('logged',true);
          localStorage.removeItem('cart');
          clearForm();
          window.location.href = '../home.html'; 
          }
      } 
  })
  .catch(error => {
    console.error('Errore:'+error);
  });
  
}
function eq(a,b){
  return a[0] === b.nome && a[1] === b.cognome && a[2] === b.user && a[3] === b.password;
}
function clearForm(){
  const nome = document.getElementById('first-name');
  const cognome = document.getElementById('last-name');
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  const confirm_password = document.getElementById('confirm-password');
  nome.value="";
  cognome.value="";
  user.value="";
  password.value="";
  confirm_password.value="";
}
function passwordProblem(){
  let p=document.querySelector('p.problems');
  p.innerHTML="Password non coincidenti";
  p.style.color="red";
}
function passwordResolve(){
  let p=document.querySelector('p.problems');
  p.innerHTML="";
}