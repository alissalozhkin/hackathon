
$(function () {
    $.get('/all_bad_words.txt', function (data) {
       bad_words = data.split(':1,\n');
    });
});


// Runs cleanup on the document title
let cleanup = word => {
    //possibly to get everything on the website
    let element = document.getElementsByTagName("*") //maybe have [0]
    let document_array = element.innerHTML.split(' ')
    //extract title from webpage
    document_array.map(word => {
        if(bad_words.indexOf(word.toLowerCase()) != -1){
            return '*'.repeat(word.length);
        }
        else{ return word}
    }).join(' ')
}

// Mutation observer to listen for changes
let createObserver = function() {
    let observer = new MutationObserver((mutations) => {
        // Disconnect the MO so there isn't an infinite update loop
        console.log('Mutations!', mutations)
        observer.disconnect()
        observer = null
        // Run cleanup again
        cleanup()
        // Create a new MO to listen for more changes
        createObserver()
    })
    observer.observe(
        document.querySelector('title'),
        { subtree: true, characterData: true, childList: true }
    )
}
createObserver()

// Initial page load check
cleanup()