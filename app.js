// Collegare le variabile ad un container HTML
const container = document.getElementById('main-contain');
console.log(container);

// Creare un programma che stampi i numeri da 1 a 100
for (let i = 1; i < 101; i++) {
  const squareWrapper = document.createElement('div');
  container.append(squareWrapper);
  squareWrapper.classList.add('number-wrapper');

  // Selezionare i numeri che sono sia multipli di 3 e multipli di 5
  if (i % 15 === 0) {
    squareWrapper.classList.add('fizzbuzz-wrapper');
    squareWrapper.append('fizzbuzz');
    
    // Selezionare i multipli di 3
  } else if (i % 3 === 0) {
    squareWrapper.classList.add('fizz-wrapper');
    squareWrapper.append('fizz');
    
    // Selezionare i multipli di 5
  } else if (i % 5 === 0) {
    squareWrapper.classList.add('buzz-wrapper');
    squareWrapper.append('buzz');
  } else {
    squareWrapper.append(i);
  }
}
