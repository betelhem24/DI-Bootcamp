function makeJuice(size){
  const ingredients = [];

  function addIngredients(ing1, ing2, ing3){
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice(){
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    const p = document.createElement('p');
    p.textContent = sentence;
    document.getElementById('juiceSection').appendChild(p);
  }

  // Part II example
  addIngredients('apple', 'banana', 'orange');
  addIngredients('mango', 'kiwi', 'strawberry');
  displayJuice();
}

makeJuice('large');
