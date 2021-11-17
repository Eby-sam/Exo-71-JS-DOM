let monDiv = document.createElement('div');
monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript";
let monDiv2 = document.createElement('div');
document.getElementById('viewport').appendChild(monDiv);
monDiv2.style.width = "100px";
monDiv2.style.height= "100px";
monDiv2.style.backgroundColor = "red";
document.getElementById('viewport').appendChild(monDiv2);
let span1 = document.getElementById("aSupprimer");
span1.remove();







