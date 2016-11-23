var form = document.querySelector('form');

var validateForm = function(evt) {
    // Reset the border style of all inputs
    var inputs = document.querySelectorAll('input');
    for (var k = 0; k < inputs.length; k++) {
        inputs[k].style.border = 'none';
    }

    // evt.preventDefault();
    // Select elements which have 'required' attribute
    var rElements = document.querySelectorAll('input[required]');
    // If the value of these inputs is empty
    for (var i = 0; i < rElements.length; i++) {
        if (rElements[i].value.length == 0) {
            // Prevent submission
            evt.preventDefault();
            // Change the border color of invalid input to red
            rElements[i].style.border = '1px solid red';
            // end if
        }
    }

    // Select elements which have 'pattern' attribute.
    var pElements = document.querySelectorAll('input[pattern]');
    // If the value of these inputs don`t match
    // the pattern attribute (  match() )
    for (var j = 0; j < pElements.length; j++) {
        var patt = pElements[j].pattern;
        // console.log(pElements[j].value.match(patt));
        if (pElements[j].value.match(patt) === null) {
            // Prevent submission
            evt.preventDefault();
            // Change the border color of invalid input to orange
            pElements[j].style.border = '1px solid orange';
            // end if
        }
    }
}

form.addEventListener('submit', validateForm);