const smallGlass = document.querySelectorAll('.smallGlass');
const waterBottleElement = document.querySelector('.remaining-water-ltr');
const smallWaterBottleElement = document.querySelector('.water-filling');

// console.log(smallGlass); 
// console.log(smallWaterBottleElement)
// gv
let height = 0;

const updateHeight = function(){
  smallWaterBottleElement.style.height = `${height}rem`;
  waterBottleElement.style.height = `${(20 - height)}rem`;
}
const addWater = function(smallGlass){
  if(!(smallGlass.classList.contains('waterFilled'))){
    smallGlass.classList.add('waterFilled');
    height += 2.5;
    if(height === 20){
      waterBottleElement.style.display= 'none';
    }
  }
  updateHeight();
  smallGlass.addEventListener('click',()=>{removeWater(smallGlass)});
}

const removeWater = function(smallGlass){
  if(smallGlass.classList.contains('waterFilled')){
    smallGlass.classList.remove('waterFilled');
    height -= 2.5;
    if(height < 20){
      waterBottleElement.style.display= 'flex';
    }
  }
  updateHeight();
  smallGlass.addEventListener('click',()=>{addWater(smallGlass)});
}

for(let i=0;i<smallGlass.length;i++){
  smallGlass[i].addEventListener('click',()=>{addWater(smallGlass[i])})
}

