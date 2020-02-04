///asssignment1 - change color of box4 by clicking box1

///step1 - give the box1 element in the html document a function when clicking the box
///step2 - declare the function in your javascript file (here)
function changeColor(){
  let box4 = document.getElementById("b4");
  box4.style.backgroundImage = "";
box4.style.backgroundColor = "PaleGoldenRod";
//alert("changing color");
}
///step3 - create a variable that is containing box4
///step4 - change the style.backgroundColor of that variable inside that function
//let box2 = document.getElementById("b2");
//let box2 = document.getelementsbyclassname("box2")[0];
///----
///assignment2 -  change color of box4 to a new color when hovering over it
let box2 = document.getElementById("b2"); box2.addEventListener("mouseover", function changeColor() {
  let box4 = document.getElementById("b4");
  box4.style.backgroundImage = "";
  box4.style.backgroundColor = "DarkOrchid";
});
///step1 - give the box2 element in the html document a function when hovering the box (look at next step)
///step1.1 - (!! here you need to give the box a first function when the mouse is entering the box - onmouseenter)
///step1.2 - (!! here you need to give the box a second function when the mouse is leaving the box - onmouseleave)
///step2 - declare the two functions in your javascript file (here)
///step3 - create a variable that is containing box2 in both of the functions
///step4 - change the style.backgroundColor of that variable inside those functions

///----

///assignment3 - change the color of box4 ONLY when the mouse is clicked down on box2
//add mouseout event listner
box2.addEventListener("mouseout", function(){
  let box4 = document.getElementById("b4");
  box4.style.backgroundImage = 'url("https://vignette.wikia.nocookie.net/souleater/images/0/0e/Death_the_Kid_%28Pre-Timeskip%29_Profile.png/revision/latest/top-crop/width/360/height/450?cb=20130626171741")';
      box4.style.backgroundSize = "cover";
})
///step1 - give the box2 element in the html document a function when clicking DOWN on the box (look at next step)
///step1.1 - (!! here you need to give the box a first function when the mouse is clicking down the box - onmousedown)
///step1.2 - (!! here you need to give the box a second function when the mouse stopping to click the box - onmouseup)
///step2 - declare the two functions in your javascript file (here)
///step3 - create a variable that is containing box3 in both of the functions
///step4 - change the style.backgroundColor of that variable inside those functions

///----

///assignment4 - add font size to header1 when moving the mouse around over box5

///step1 - declare a variable that is a counter with a starting value of 20
///step2 - give the box5 element in the html document a function when moving around the mouse over it - onmousemove
///step3 - declare the function in your javascript file (here)
///step4 - add 1 to the counter every time the funciton is triggered
///step5 - create a variable that is containing header
///step6 - change the style.fontSize of that variable to the value of the counter (remember to add + "px"  in the end)

///----

///assignment5 - remove font size to header1 when moving the mouse around over box6

///step1 - give the box6 element in the html document a function when moving around the mouse over it - onmousemove
///step2 - declare the function in your javascript file (here)
///step3 - remove 1 from  the counter every time the funciton is triggered
///step4 - create a variable that is containing header
///step6 - change the style.fontSize of that variable to the value of the counter
