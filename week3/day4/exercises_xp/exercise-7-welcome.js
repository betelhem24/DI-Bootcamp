(function(userName){
  const nav = document.getElementById('navbar');
  if(nav){
    nav.innerHTML = `<div>
      <img src="https://via.placeholder.com/30" alt="Profile Picture">
      Welcome, ${userName}!
    </div>`;
  }
})('John');
