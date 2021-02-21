console.log("extension is working");

/* Filters out words in specific tag type */
function filterWords(tagType) {

    let rawHtml = document.getElementsByTagName(tagType);
    let word;
    let text;
    let textArray;
    let newText = "";
    let element;

    for (let i = 0; i < rawHtml.length; i++) {

        // extracting words and putting into array
        element = rawHtml[i];
        text = element.innerHTML;
        textArray = text.split(" ");

        // filtering out bad words and replacing them in the array
        for (let j = 0; j < textArray.length; j++) {
            word = textArray[j]; 
            // console.log(word);
            if (word == "Structure") {
                textArray[j] = "***";
                console.log("swimming has been located: " + textArray[i]);
            }
        }

        // converting edited array of words back into a string
        for (let k = 0; k < textArray.length; k++) {
            newText += textArray[k] + " "; 
        }

        // replace old text with new text on webpage 
        element.innerHTML = newText; 
    }

}

// filterWords("p");
// filterWords("h1");
filterWords("article");
filterWords("p");
filterWords("h1");
filterWords("h2");
filterWords("h3");
filterWords("h4");
filterWords("h5");
filterWords("h6");
filterWords("title");
// filterWords();
console.log("words have been censored");  
