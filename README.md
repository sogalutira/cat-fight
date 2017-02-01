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
* .classList.add, .classList.remove

###Your Challenge###
1. Create an *app.js* file.
2. Reference the *app.js* file in the *index.html* file.
3. Use the DOM method to reference an element by its **ID**.
4. `addEventListener()`s to the referenced element in step 3.

    ```
    document.getElementById('div').addEventListener('click', greeting);

    function greeting(){
      console.log('hello!');
    }
    ```

5. `setTimeout()` is a powerful method for cat fighters to `.remove` class and rest.

    ```
    setTimeout(greeting, 3000);
    ```

6. Cat fighters `.add` and `.remove` their class by using `.classList`.

    ```
    div.classList.add('className')
    ```

* Cat fighter with an **ID** of `cat-kick` listens for a `click` event when the mouse is clicked on the **X** target `document.getElementById('target1')`. On mouse click cat fighter learns the class `kicking`.


* Cat fighter with an **ID** of `cat-powerup` listens for a `mousedown` to power up and learn the class `fly`. Cat fighter also needs to listen for `mouseup` to stop power up.

####Example:####
```
function(){
 document.getElementById('div').classList.add('className');
 setTimeout(remove, 1000);
}

function remove(){
  document.getElementById('div').classList.remove('className');
}
```

####Stretch####

####Objectives####
* setInterval() method
* clearInterval() method


1. Cat fighter with an **ID** `cat-fireball` listens for a `keydown`, specifically for the `spacebar` so that cat fighter can learn classes `fire` and `energy`.

2. Cat fighter's energy blast has the **ID** `big-blast` with the class `energy`.

3. Use `setInterval()` to make the `big-blast` appear after the `cat-fireball` animation ends.

4. Use `clearInterval()` so that the `big-blast` disappears when it hits the tree.


###Resources###
[addEventListener](http://www.w3schools.com/js/js_htmldom_eventlistener.asp)

[W3 Schools setTimeout](http://www.w3schools.com/jsref/met_win_settimeout.asp)

[classList](http://www.w3schools.com/jsref/prop_element_classlist.asp)

[W3 Schools setInterval](http://www.w3schools.com/jsref/met_win_setinterval.asp)

[W3 Schools clearInterval](http://www.w3schools.com/jsref/met_win_clearinterval.asp)


