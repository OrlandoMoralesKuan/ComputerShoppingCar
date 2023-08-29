var Count1, array, Count2, Count3;


Count1 = 0;
Count2 = 0;
Count3 = 0;


document.getElementById('add1').addEventListener('click', (event) => {
  let element_Count1 = document.getElementById('Count1');
  Count1 = (typeof Count1 === 'number' ? Count1 : 0) + 1;
  element_Count1.innerText = Count1;

});

document.getElementById('rem1').addEventListener('click', (event) => {
  let element_Count12 = document.getElementById('Count1');
  if (Count1 > 0) {
    Count1 = (typeof Count1 === 'number' ? Count1 : 0) + -1;
    element_Count12.innerText = Count1;
  }

});

document.getElementById('add2').addEventListener('click', (event) => {
  let element_Count2 = document.getElementById('Count2');
  Count2 = (typeof Count2 === 'number' ? Count2 : 0) + 1;
  element_Count2.innerText = Count2;

});

document.getElementById('rem2').addEventListener('click', (event) => {
  let element_Count22 = document.getElementById('Count2');
  if (Count2 > 0) {
    Count2 = (typeof Count2 === 'number' ? Count2 : 0) + -1;
    element_Count22.innerText = Count2;
  }

});

document.getElementById('add3').addEventListener('click', (event) => {
  let element_Count3 = document.getElementById('Count3');
  Count3 = (typeof Count3 === 'number' ? Count3 : 0) + 1;
  element_Count3.innerText = Count3;

});

document.getElementById('rem3').addEventListener('click', (event) => {
  let element_Count32 = document.getElementById('Count3');
  if (Count3 > 0) {
    Count3 = (typeof Count3 === 'number' ? Count3 : 0) + -1;
    element_Count32.innerText = Count3;
  }

});

document.getElementById('total').addEventListener('click', (event) => {
  array = [];
  let element_result = document.getElementById('result');
  array.unshift(Count1);
  array.unshift(Count2);
  array.unshift(Count3);
  element_result.innerText = array.reduce((a,b) => a+b, 0);

});