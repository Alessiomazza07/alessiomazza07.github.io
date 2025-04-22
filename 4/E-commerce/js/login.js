function login(event){
    event.preventDefault();
    const nome = document.getElementById('first-name').value;
    const cognome = document.getElementById('last-name').value;
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm-password').value;
    if(password!==confirm_password) {passwordProblem();return;}
    else passwordResolve();
    const persona={
        "nome" :nome,
        "cognome": cognome,
        "user": user,
        "password": password,
        "email": "",
        "telefono": "",
        "citta": "",
        "cap": "",
        "indirizzo": ""
    }
  fetch('../json/users.json')
    .then(response => {
      if (!response.ok)
        console.log('Problema con la fetch');
      return response.json();
    })
    .then(users => {
        for(let i = 0; i < users.length; i++){
            if(log(persona,users[i])){
                console.log('Login effettuato con successo!');
                window.location.href = '../pages/home.html';
                return;
            }
        } 
    })
    .catch(error => {
      console.error('Errore:'+error);
    }); 
}
function log(p1,p2){
  return (p1.nome == p2.nome && p1.cognome == p2.cognome && p1.user == p2.user && p1.password == p2.password);
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
