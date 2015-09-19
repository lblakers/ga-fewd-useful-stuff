/*global $*/
(function () {
    'use strict';

    var fadeInAnim = 'fadeIn',
        fadeOutAnim = 'fadeOut',
        spanComparison = $('#comparison');

    function resetAnim() {
        spanComparison.removeClass(fadeInAnim);
        spanComparison.removeClass(fadeOutAnim);
    }

    function doComparision(e) {

        var inputA = $('#a').val(),
            inputB = $('#b').val(),
            numA = parseFloat(inputA),
            numB = parseFloat(inputB);

        if (numA > numB) {
            spanComparison.html('>');
        } else if (numA < numB) {
            spanComparison.html('<');
        } else {
            spanComparison.html('=');
        }

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