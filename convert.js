//liquid measure variables
var cups = "Cups";
var pints = "Pints";
var quarts = "Quarts";
var fluidoz = "Fluid Oz";
var gallons = "Gallons";

//liquid cup ratios
var cupTOpintratio = 2;
var cupTOquartratio = 4;
var cupTOflozratio = 8;
var cupTOgalratio = 16;

//liquid pint ratios
var ptTOquartratio = 2;
var ptTOflozratio = 16;
var ptTOgalratio = 8;

//liquid quart ratios
var qtTOflozratio = 32;
var qtTOgalratio = 4;

//liquid fluid ounces ratios
var flozTOgalratio = 128;

//weight measure variables
var pounds = "Pounds";
var ounces = "Ounces";
var grams = "Grams";
var kilograms = "Kilograms";

//weight pounds ratios
var poundsTOozratio = 16;
var poundsTOgramsratio = 453.592;
var poundsTOkgramsratio = .453592;

//weight ounces ratios
var ozTOgramsratio = 28.3495;
var ozTOkgramsratio = .0283495;

//weight grams ratios
var gramsTOkgramsratio = .001;

//temperature variables
var fahrenheit = "Fahrenheit";
var celsius = "Celsius";

var formlist = "";

//Handle for user keypress Enter key instead of clicking button.
function handle(e){
        if(e.keyCode === 13){
          event.preventDefault();
          convertAmount();
        }
        return false;
    }

//This is adding an event handler to the Submit button.
function init() {
document.getElementById('btn').onclick = convertAmount;
 }
 window.onload=init; 
    

function convertAmount() {
    var result;
    var amount = document.getElementById("input").value;
    var slash = amount.indexOf("/");
    var fromUnits = document.getElementById("fromUnits").value;
    var toUnits = document.getElementById("toUnits").value;

    //Did user input a fraction?
    if (slash > 0) {
        var fraction = amount.split("/");
        quantity = fraction[0] / fraction[1];
        console.log(quantity);
    }
    //Did user input a valid number?
    else if (isNaN(parseInt(amount)) || amount < 0) {
        document.getElementById("answer").innerHTML = 'Input not valid. Please enter a valid amount.'
        return false;
    }
    else { quantity = amount; }

    //cup
    if (fromUnits == cups) {
        if (toUnits == cups) {
            result = quantity;
        }
        else if (toUnits == pints) {
            result = quantity / cupTOpintratio;
        }
        else if (toUnits == quarts) {
            result = quantity / cupTOquartratio;
        }
        else if (toUnits == fluidoz) {
            result = quantity * cupTOflozratio;
        }
        else if (toUnits == gallons) {
            result = quantity / cupTOgalratio;
        }

    }
    //pint
    else if (fromUnits == pints) {
        if (toUnits == cups) {
            result = quantity * cupTOpintratio;
        }
        else if (toUnits == pints) {
            result = quantity;
        }
        else if (toUnits == quarts) {
            result = quantity / ptTOquartratio;
        }
        else if (toUnits == fluidoz) {
            result = quantity * ptTOflozratio;
        }
        else if (toUnits == gallons) {
            result = quantity / ptTOgalratio;
        }

    }
    //quart
    else if (fromUnits == quarts) {
        if (toUnits == cups) {
            result = quantity * cupTOquartratio;
        }
        else if (toUnits == pints) {
            result = quantity * ptTOquartratio;
        }
        else if (toUnits == quarts) {
            result = quantity;
        }
        else if (toUnits == fluidoz) {
            result = quantity * qtTOflozratio;
        }
        else if (toUnits == gallons) {
            result = quantity / qtTOgalratio;
        }

    }
    //fluid ounce
    else if (fromUnits == fluidoz) {
        if (toUnits == cups) {
            result = quantity / cupTOflozratio;
        }
        else if (toUnits == pints) {
            result = quantity / ptTOflozratio;
        }
        else if (toUnits == quarts) {
            result = quantity / qtTOflozratio;
        }
        else if (toUnits == fluidoz) {
            result = quantity;
        }
        else if (toUnits == gallons) {
            result = quantity / flozTOgalratio;
        }

    }
    //gallon
    else if (fromUnits == gallons) {
        if (toUnits == cups) {
            result = quantity * cupTOgalratio;
        }
        else if (toUnits == pints) {
            result = quantity * ptTOgalratio;
        }
        else if (toUnits == quarts) {
            result = quantity * qtTOgalratio;
        }
        else if (toUnits == fluidoz) {
            result = quantity * flozTOgalratio;
        }
        else if (toUnits == gallons) {
            result = quantity;
        }
    }

    //pounds
    else if (fromUnits == pounds) {
        if (toUnits == pounds) {
            result = quantity;
        }
        else if (toUnits == ounces) {
            result = quantity * poundsTOozratio;
        }
        else if (toUnits == grams) {
            result = quantity * poundsTOgramsratio;
        }
        else if (toUnits == kilograms) {
            result = quantity * poundsTOkgramsratio;
        }
    }

    //ounces
    else if (fromUnits == ounces) {
        if (toUnits == pounds) {
            result = quantity / poundsTOozratio;
        }
        else if (toUnits == ounces) {
            result = quantity;
        }
        else if (toUnits == grams) {
            result = quantity * ozTOgramsratio;
        }
        else if (toUnits == kilograms) {
            result = quantity * ozTOkgramsratio;
        }
    }

    //grams
    else if (fromUnits == grams) {
        if (toUnits == pounds) {
            result = quantity * poundsTOgramsratio;
        }
        else if (toUnits == ounces) {
            result = quantity * ozTOgramsratio;
        }
        else if (toUnits == grams) {
            result = quantity;
        }
        else if (toUnits == kilograms) {
            result = quantity * gramsTOkgramsratio;
        }
    }

    //kilograms
    else if (fromUnits == kilograms) {
        if (toUnits == pounds) {
            result = quantity * poundsTOkgramsratio;
        }
        else if (toUnits == ounces) {
            result = quantity * ozTOkgramsratio;
        }
        else if (toUnits == grams) {
            result = quantity * gramsTOkgramsratio;
        }
        else if (toUnits == kilograms) {
            result = quantity;
        }

    }

    //fahrenheit
    else if (fromUnits == fahrenheit) {
        if (toUnits == fahrenheit) {
            result = quantity;
        }
        else if (toUnits == celsius) {
            result = (quantity - 32) / 1.8;
        }
    }

    //celsius
    else if (fromUnits == celsius) {
        if (toUnits == celsius) {
            result = quantity;
        }
        else if (toUnits == fahrenheit) {
            result = quantity * 1.8 + 32;
        }

    }

   
    var strNum = parseFloat(result);
    var x = strNum.toFixed(2);
    document.getElementById("answer").innerHTML = amount + ' ' + fromUnits + " = " + x + ' ' + toUnits;
    return false;
}


