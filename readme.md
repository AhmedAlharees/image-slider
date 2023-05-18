# SIMPLE IMAGE SLIDER
##  Tech used
* html, SCSS & JavaScript

## How did i make the images slide 
Explanation

The code utilizes JavaScript event listeners and 
methods to enable dragging and arrow navigation 
functionality for the image slider.

    The 'dragStart' function is triggered when the user clicks 
    on the slider element. It sets the initial drag state, 
    captures the starting mouse position, and saves the 
    initial scroll position of the slider.

    The 'dragging' function is called when the user moves the 
    mouse while holding down the mouse button. It calculates 
    the difference in mouse position from the starting position 
    and adjusts the scroll position of the slider accordingly, 
    resulting in a smooth drag effect.

    The 'dragStop' function is triggered when the user releases the mouse button, indicating the end of the dragging interaction.

    The arrow buttons (slideArrowsLeft and slideArrowsRight) are assigned click 
    event listeners that scroll the slider element by a fixed amount 
    (slideStep) in the respective direction.

    Additionally, there is a keydown event listener attached to the 
    slider element that sets the scroll position to a specific value when a key is pressed. 
    Adjust the value (200 in the provided code) to your desired scroll position.

Feel free to modify the code to fit your specific requirements and incorporate it into your project.

## License

This code is released under the MIT License.