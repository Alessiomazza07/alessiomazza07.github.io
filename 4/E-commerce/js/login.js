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
/*0=nome,1=cognome,2=user,3=password,4=email,5=telefono,6=citta,7=cap,8=indirizzo,*/
  fetch('https://alessiomazza07.github.io/4/E-commerce/json/users.json')
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
            localStorage.removeItem('card');
            clearForm();
            window.location.href = 'home.html';
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
  let img=document.querySelector('img');
  console.log(img.height);
  img.style.height='29.8rem';
}
function passwordResolve(){
  let p=document.querySelector('p.problems');
  p.innerHTML="";
  let img=document.querySelector('img');
  img.style.height='28.65rem';
}