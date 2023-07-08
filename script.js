const smallGlass = document.querySelectorAll('.smallGlass');

console.log(smallGlass); 

const addWater = function(smallGlass){
  smallGlass.classList.add('waterFilled');
  smallGlass.addEventListener('click',()=>{removeWater(smallGlass)});
}

const removeWater = function(smallGlass){
  smallGlass.classList.remove('waterFilled');
  smallGlass.addEventListener('click',()=>{addWater(smallGlass)});
}

for(let i=0;i<smallGlass.length;i++){
  smallGlass[i].addEventListener('click',()=>{addWater(smallGlass[i])})
}

