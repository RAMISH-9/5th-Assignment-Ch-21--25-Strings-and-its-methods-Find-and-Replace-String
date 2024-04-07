var originText = "I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my Homeland."

var cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sheikhpura', 'Kashmir'];

// console.log(cities[1])

document.getElementById('originalTextBox').innerHTML = originText;


// Lowercase 
function lowerCase() {

    let lowerCaseText = originText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText
}

// Uppercase
function UpperCase() {

    let upperCaseText = originText.toUpperCase();
    document.getElementById("output").innerHTML = upperCaseText;
}

// Capitalize 
function capitalize() {
    let capitalizeText = '<span style= "text-transform: capitalize;">' + originText + '</span>'
    // document.getElementById("output").style.textTransform = "capital";
    document.getElementById("output").innerHTML = capitalizeText;
}

// Better Formatting
function betterFormating() {
    let text = document.getElementById("inputText").value;

    if (!text) {
        alert("Please type your text")
        return;
    }

    text = text.toLowerCase();

    document.getElementById('output').style.textTransform = 'capitalize';
    document.getElementById('output').innerHTML = text;
}

// Print All Cities
function printAllCities() {
    document.getElementById("output").innerHTML = "";

    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById('output').innerHTML += num + ') ' + cities[i] + '<br>';
    }
}


// Add Your City in List
function addCity() {
    let city = document.getElementById("inputText").value;

    // if (city === "") {
    if (city.length < 3) {
        alert('Please type your city name correctly.');
        return;
    }
    // let cityFirstLetter = city.slice(0,1).toUpperCase();
    // console.log(cityFirstLetter);
    // let cityAllLetters = city.slice(1).toLowerCase();
    // console.log(cityAllLetters);
    // return
    let cityFirstLetter = city.charAt(0).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();

    let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
    // console.log(cityWorldInCapitalize)

    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityWordInCapitalize) {
            cityFound = true;
            let html = '<span style= "color:red; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list.';
            document.getElementById("output").innerHTML = html;
        }
    }
    if (cityFound === false) {
        cities.push(cityWordInCapitalize);
        let html = '<span style = "color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> has been successfully added into list.';
        document.getElementById("output").innerHTML = html;
    }
}


// Chech city in list
function checkCity() {
    let city = document.getElementById("inputText").value;

    if (!city) {
        alert('Please type your city name.')
        return;
    }
    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();
    cityWordInCapitalize = cityFirstLetter + cityAllLetters;
    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {
        if (cities[i]=== cityWordInCapitalize) {
            cityFound = true;
            let html ='<span style ="color: green; font-size: 20px;">"' +cityWordInCapitalize + '"</span> found in the list. &#128151;';
            document.getElementById("output").innerHTML = html;
        }
    }
    if (cityFound == false) {
        let html = "SORRY &#128524; We couldn\"t find your city <span style='color: red; font-size:'>'" + cityWordInCapitalize + '"</span> in list.<br>Click <span style="color: green; font-size: 16px;">"Add Your City In List"</span> to add your city &#128522;'
        document.getElementById("output").innerHTML = html;
    }
}

// Find word in the original text
function findWord() {
    // var myName = ["faisalabad", "lahore", "islamabad"]
    // myName = myName.toLowerCase();
    // let someText = "My name is Rizwan.";
    // someText = someText.toLocaleLowerCase();
    // let wordFromInputField = "nAMe"
    // wordFromInputField = wordFromInputField.toLocaleLowerCase();
    // let findWord2 = someText.indexOf(wordFromInputField)
    // console.log(findWord)
    // if (findWord !== -1) {
    //     alert("word found at index: " + findWord)
    // } else{
    //     alert("word not found")
    // }
    // var findThisWord = "Umair1"
    // findThisWord = findThisWord.toLowerCase()
    // var findWord = myName.indexOf(findThisWord)
    // console.log(findWord)
    // return 
    let newOriginalText = originText.toLowerCase();
    let word = document.getElementById("inputText").value;
    if (!word) {
        alert('Please type a word for find.')
        return
    }
    word = word.toLowerCase();
    
    let findWord = newOriginalText.indexOf(word);
    console.log(findWord)
    // let findWord = newOriginalText.lastIndexOf(word);

    if (findWord !== -1) {
        let html = 'Your word <span style= "color: green; font-size: 18ppx;"' + word + '"</span> found at index: ' + findWord;
        document.getElementById("output").innerHTML = html;
    } else {
        let html = 'Your word <span style = "color: green; font-size:18px;">"' + word + '"<span> does not exist in the Original Strings';
        document.getElementById("output").innerHTML = html;
    }
}

// Replace words in the original text
function replaceWord(){
    // let cnic = "33100-1234567-8"
    // let word = "-";
    // let replaceWith = "";
    // let cnicWithoutDashes = cnic.replace(word, replacewith);
    // console.log(cnicWithoutDashes)

    let newOriginalText = originText.toLocaleLowerCase();
    let word = document.getElementById("inputText").value;
    
    if (!word) {
        alert('Please type a word for replacing.')
        return;
    } 
    let replaceWith = prompt('Enter a word that you want to replace with ')
    if (!replaceWith) {
        alert('Please type a word to replace it with '+ word + ".");
        return;
    }
    word = word.toLowerCase();
    word = new RegExp(word, 'g');
    
    replaceWith = replaceWith.toLowerCase();
    let replaceWord = newOriginalText.replace(word, replaceWith);
    document.getElementById("output").innerHTML = replaceWord;
}

// Clear Input Button
function clearInput() {
    let inputField = document.getElementById('inputText');
    inputField.value = '';
}

// Clear Output Button
document.getElementById("clearOutPutButton").onclick = function () {
    document.getElementById("output").innerHTML= '';
}