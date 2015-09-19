
(function () {
    'use strict';
    
    /* Think First thing I need to do is? */
    
    //One approach may be

    /* 1. Write a function called compareTwoNumbers 
    ** 1.1  The function should have two arguments numA numB 
    ** 1.2  if numA is greater than numB then return numA otherwise return numB   
    ** 
    */
    
    /* 2. Write another function called onCompareClick 
    ** 2.1 Get the value of the first input (#a) field and remember it 
    ** 2.2 Get the value of the second input (#b) field and remember it
    ** 2.3 if value of first input is greater than second input
    ** 2.4 then display ">" in the span (#comparison)
    ** 2.5 if value of second input is greater than first input 
    ** 2.6 then display "<" in the span (#comparison)
    ** 2.5 otherwise "="
    */
        
    /* 3. Find the compare button and when clicked invoke the onCompareClick function */
    
    /* Begin writing your JavaScript here */
    
    // GLOBAL variables
    
    var fadeInAnim = 'fadeIn',
        fadeOutAnim = 'fadeOut',
        spanComparison = $('#comparison');
    
    function resetAnim() {   
        spanComparison.removeClass(fadeInAnim);
        spanComparison.removeClass(fadeOutAnim);
    }
    
    function doComparision(e) {
        
        var inputA = $('#a').val(),
            inputB = $('#b').val();
        
        var numA = parseFloat(inputA),
            numB = parseFloat(inputB);
        
        if (numA > numB)
            spanComparison.html('>');
        else if (numA < numB)
            spanComparison.html('<');
        else
            spanComparison.html('=');
        
        spanComparison.removeClass(fadeOutAnim);
        spanComparison.addClass(fadeInAnim);
        spanComparison.one("animationend webkitAnimationEnd", resetAnim);
    }
    
    function onCompareClick(e) {
        e.preventDefault();
        
        spanComparison.addClass(fadeOutAnim);
        spanComparison.one("animationend webkitAnimationEnd", doComparision);
    }
    
    $('#submit').click(onCompareClick);
    /* Your JavaScript ends here */
}());