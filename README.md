# assignment-4-clinardos
This is Assignment 4 I created in NMD 105 spring 23' will be updated as assignment nears completion 

## assignment-4-challenge-1
### [Link](https://editor.p5js.org/clinardos/full/nzgWYu7yz)
<p> To start off this assignment, the first challenge was to create a radially symmetric shape by using a loop to assist you in building the shape. After, designing your shape the next part of the assignment was to create a custom function that creates your shape with the loop included inside the function. That function must be able to pass parameters that set one aspect of the shape. Lastly, we were to use our function that was just created to create multiple shapes on the canvas and make them distinct by using the different parameters that have been set. 

<p> To complete this challenge, I first started by using the p5.js software and creating a new sketch that measured 400 x 400. Next I decided I wanted to make a Sunflower. I added a function called <strong>"addSunFlower"</strong> within this function I began to build my unique shape. As I edited my shape within the function, I called my function within the Draw() function to allow me to see the shape I was designing. I next implemented a loop to add the petals on to the sunflower which at this point had just been a circle. The loop looked like this: 

```Javascript 
    for (let petalsAdded = 0; petalsAdded <120; petalsAdded++)
    { rotate (140) ellipse (0,42,7,45) } 
```
<p> This helped to complete my function, the last step within the function was to now add parameters, these are what I used:
<ul>
    <li> Translate (x,y) </li>
    <li> Scale (size) </li>
    <li> Fill ("color") </li>
</ul>

<br>Adding these parameters altered my function name so it now looked like: <strong> "addSunFlower(x,y,size,color)" </strong>

<br> For the last part of the challenge, I simply added 4 sunflowers with different parameters to the draw() function. This allowed me to create what seemed like 4 different shapes. 


You can make a pattern that looks like this: 
<img width="500" alt="Screenshot 2023-04-05 at 1 48 17 PM" src="https://user-images.githubusercontent.com/124199359/230163498-4d5008b3-4a85-4d10-94cd-d6dde5575bdf.png">

## assignment-4-challenge-2
### [Link](https://editor.p5js.org/clinardos/full/vqGYkEldi)
<p> The task of this assignmnet was to create a two-dimensional pattern by repeating a combination of shapes horizontally and vertically. To do this you must use loops within the draw() function to repeat tiles of shapes in horizontal and vertical directions. The tile should consist of multiple different sprite that have different parameters. 
<p> To complete this challenge I first made a duplicate of my sketch from challenge 1. This allowed me to re-use my sprite I had already created. I first created 10 different variables each that would create a different sprite with different parameters. I next used the for loop function to create rows and columns which looks like this: 

``` Javascript
     for (let columnsDrawn = 0; columnsDrawn < pattern.columns; columnsDrawn++) {
      sunFlower1.x = sunFlower1.startX + (width / pattern.columns) * columnsdrawn;}
```

```Javascript
    for (let rowsDrawn = 0; rowsDrawn < pattern.rows; rowsDrawn++) {
     sunFlower1.y = sunFlower1.startY + (height / pattern.rows) * rowsDrawn;
     addSunFlower(sunFlower1); } 
```

I added all of the variables used in each SunFlower so the program could be read properly. There were a total of 10 sunflowers. Then I just played around with arrangement until it looked like a piece of fabric. 


You can make a pattern that looks like this:
<img width="929" alt="Screenshot 2023-04-05 at 1 48 42 PM" src="https://user-images.githubusercontent.com/124199359/230163644-a3eb5b5f-809a-466d-bf5f-9b0226d07054.png">



## assignment-4-challenge-3
### [Link](https://editor.p5js.org/clinardos/full/XEJGfXZru)

<p> For this Challenge the task was to incorporate randomness into our parameters. First,  we had to watch the tutorial "Draw a Random Pattern with P5.js" to give us an idea of what we could randomize within our sketch. Then you had to incorporate techniques from the tutorial to randomize your pattern. 
<p> I changed a lot for this challenge I took out my duplicated flowers and allowed the pattern to have 4 different unique flowers. I did this to try and clear up my code. After designing the four different flowers. I then added random parameters to both the position and the color. When adding random parameters to the position I just created an interval variable and used the randomize function. For the color I had to create an array which left the code looking like this: 

```Javascript 
let colors = [
  "powderblue", "lightblue","lightskyblue","deepskyblue","skyblue","lightsteelblue","steelblue","dodgerblue","cornflakeblue","royalblue","blue","mediumblue","darkblue","navy","midnightblue","mediumslateblue","slateblue","darkslateblue"
];
function setup() {
 randomColors1 = random(colors);
 randomColors2 = random(colors);
 randomColors3 = random(colors);
 randomColors4 = random(colors); }
  ```
  
  Then I just called each random color in the fill funciton of the corresponding flower. 
  
  You can make a pattern that looks like this (each time played a new pattern will appear):
  
  <img width="498" alt="Screenshot 2023-04-05 at 1 49 17 PM" src="https://user-images.githubusercontent.com/124199359/230163802-5a0a3b8f-2c3a-4b30-8c1a-ee783724c9a1.png">

  
