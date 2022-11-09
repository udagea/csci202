function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}


const img = document.getElementById('img');
const change_imageleft = function() {
  if (img.dataset.image == "front") {
  	img.src = "stairsleft.jpg";
    img.dataset.image = "left";
    return
  };
  
  if (img.dataset.image == "left") {
  	img.src = "stairsfront";
    img.dataset.image = "front";
    return
  };
};

console.log('value');
 if (value == 10)
   console.log('Top');
   
  else
   console.log('Not matched, the number was '+gnum);