//Creating Parent Container
container = document.querySelector('.container');
function genRndCol() {
  p = Math.floor(Math.random() * 360);
  return p;
}

//Creating random color function
function chngColor(event) {
  event.target.style.backgroundColor = `hsl(${genRndCol()}deg, 50%, 50%)`;
  setTimeout(() => {
    event.target.style.backgroundColor = '';
  }, 200);
}

//CSS change
let r = document.querySelector(':root');
let rs = getComputedStyle(r);

// Creating Divs
for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement('div');
  div.setAttribute('class', 'square');
  //   div.style.backgroundColor = `hsl(${10 * i}, 50%, 50%)`;
  div.addEventListener('mouseover', chngColor);

  container.append(div);
}

// Creating button
btn = document.createElement('button');
text1 = document.createTextNode('change');
btn.append(text1);
document.body.append(btn);

//Function to change divs
function chgSize(event) {
  //getting user input and deleting original divs
  sides = prompt('How many squares');
  deldiv = document.querySelectorAll('.square');
  for (let i of deldiv) {
    i.remove();
  }
  for (let i = 0; i < sides; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    //   div.style.backgroundColor = `hsl(${10 * i}, 50%, 50%)`;
    div.addEventListener('mouseover', chngColor);
    container.append(div);
    r.style.setProperty('--sides', `21`);
  }
}

//Button click event
btn.addEventListener('click', chgSize);

//Testing Css change
// r.style.setProperty('--width', '256px');
