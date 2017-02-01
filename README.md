###Cat Fu Training Grounds###
In this project we will be working with JavaScript and CSS animations to practice using event listeners and the setTimeout method.

###Objective###
To create a simple application using JavaScript and CSS to understand the functionality of event listeners. CSS animations will be used as visual cues when the event listeners are triggered.

###Prerequisites###
In order to complete this project students must have the following:
* Basic understanding of JavaScript and DOM
* Basic understanding of CSS and animations

###Requirements###
To complete this project you will need the following:
* Sublime Text

###Desired Outcome###
At the completion of this exercise, students should understand:
* Event listeners
* setTimeout() method
* Class and Javascript

###Your Challenge###
1. Create an *app.js* file.
2. Reference the *app.js* file in the *index.html* file.
3. Use the DOM method to reference an element by its **ID**.
4. `**addEventListener()**`s to the referenced element in step 3.

```document.getElementById('div').addEventListener('click', greeting);
function greeting(){
  console.log('hello!');
}```

  1. Cat fighter on the left tree branch listens for a `click` event when the mouse is clicked on the **X** target `document.getElementById('target1')`. On mouse click cat fighter learns the class `kicking`.

  2. Cat fighter on the right tree branch listens for a `mousedown` to power up and learn the class `fly`. Cat figher also needs to listen for `mouseup` to stop power up.

  3. Cat fighter on the ground listens for a `keydown`, specifically for the `spacebar` so that cat fighter can learn classes `fire` and `energy`.
5. `**setTimeout()**` is a powerful method for cat fighters to learn their class. ```setTimeout(greeting, 3000);```

6. Cat fighters `.add` and `.remove` their class by using `.classList`. ```div.classList.add('className')```

###Resources###
[addEventListener](http://www.w3schools.com/js/js_htmldom_eventlistener.asp)

[W3 Schools setTimeout](http://www.w3schools.com/jsref/met_win_settimeout.asp)

[classList](http://www.w3schools.com/jsref/prop_element_classlist.asp)


