# THE COOLER DICTIONARY 

### Background
Ever wanted walking past your fridge to stimulate your brain instead of your 
stomach? The Cooler Dictionary* was created with that goal in mind. Suitable for 
both eaters and readers, the Cooler Dictionary allows the user to rearrange 
magnetic letters on the fridge to spell out a word.... What do you think happens 
when you open this kind of fridge? Trust me when I say it's more awesome than 
your typical heavy, dust-ridden dictionary.


### Functionality & MVPs
In the Cooler Dictionary, users will be able to:
- rearrange magnetic letters by dragging them across the surface of the fridge 
to create English words
- pull on the fridge handle to search for that specific query in the Cooler 
Dictionary, returning definitions, synonyms, antonyms, etc.
- see how their queries change the view of the fridge door (eg.  add an image 
of each query as a postcard, have a whiteboard with history of previous queries 
crossed out)
- click a magnet saying "Feeling random?" which will randomly generate a random 
word query and re-arrange the letters

In addition, this project will include:
-  instructions that show per point-and-click object upon hover
-  light functionality when the fridge door is opened or closed
- eraser for Whiteboard that can be used to erase and rearrange letters to a 
previous word
-  potentially showing the definition as a Nutrition Facts label of a bottle of 
Andok's Litson Sauce (Filipino product)
- random quote about food generated as a wall sign


### Sample Layout
https://wireframe.cc/pro/pp/6ff6c3277567799


### Technologies, Libraries, APIs
- Canvas API
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Pexels Image Search API](https://www.pexels.com/api/) 
OR [Imsea API](https://imsea.herokuapp.com)
- [CSS Animation Library](https://christinecha.github.io/choreographer-js/)
	- [CSS Transition MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [Typeface.js](https://owlbot.info/) Library for font functionality??
- Dictionary APIs
	- [Owlbot](https://owlbot.info/)
	- [Free Dictionary API](https://dictionaryapi.dev/)
	- [WordsAPI](https://www.wordsapi.com/docs/)
		- Has random word generator functionality
- [Pointer Events API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)


### Implementation Timeline
1.   Friday Afternoon & Weekend
	- [ ] Getting to know Canvas and drawing the background (https://itch.io/game-assets/tag-kitchen)
	- [ ] Constructing the letter magnets out of different fonts
	- [ ] Randomizing their placement on the page
	- [ ] Code for snapping letters together / highlight / glow when linked to 
    create a word
	- [ ] Understanding how to fetch from the dictionary API
2.   Monday
	- [ ] Fridge door open and close logic for dictionary query
	- [ ] Create inner fridge visual????
	- [ ] Word history showing up in script on the whiteboard
3.   Tuesday
	- [ ] Postcards of recent word searches as images
4.   Wednesday
	- [ ] Game music / ambient sound
5.   Thursday Morning


* Title Credit: Kyle Ginzburg