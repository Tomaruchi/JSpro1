// Function to display a value in the input field
function Display(value) {
    // Append the value to the current content of the display
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    // Set the display value to an empty string
    document.getElementById('display').value = '';
}

// Function to delete the last character from the display
function deleteLastNum() {
    const display = document.getElementById('display');
    // Remove the last character from the display value
    display.value = display.value.slice(0, -1);
}

function myfun(event) {
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '+' || event.key == '-' || event.key == '/' || event.key == '%' || event.key == '.' || event.key == '00') {
        document.getElementById('display').value += event.key;
    }
}

var cal = document.getElementById('calculator');
cal.onkeyup = function (event) {
    if (event.keycode == 13) {
        console.log("enter");
        let x = document.getElementById('display').value
        console.log(x);
        slove();
    }
}
function slove() {
    let x = document.getElementById('display').value;
    let result = math.evaluate(x);
    document.getElementById('display').value = result;
}

