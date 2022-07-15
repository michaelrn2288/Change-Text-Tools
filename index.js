const textArea = document.querySelector('#textArea');


function allToUpper() {
    const textEdited = textArea.value.toUpperCase();
    textArea.value = textEdited;
}


function allToLower(){
    const textEdited = textArea.value.toLowerCase();
    textArea.value = textEdited;
}


function removeAllSpace() {
    const textEdited = textArea.value.replace(/ /g,'');
    textArea.value = textEdited;
}

function removeExcessSpace() {
    while (textArea.value.includes('  ')) {
        const textEdited = textArea.value.replace(/  /g,' ');
        textArea.value = textEdited;
    }
}


function firstToUpperEachWord() {
    let textDivided = textArea.value.split(' ');
    let wordsEdited = [];

    for (let i = 0; i < textDivided.length; i++) {
        wordsEdited[i] = textDivided[i].charAt(0).toUpperCase() + textDivided[i].slice(1);
    }

    const textEdited = wordsEdited.join(' ');
    textArea.value = textEdited;
}


function firstToUpperEachPhrase() {
    let textDivided = textArea.value.split('. ');
    let phrasesEdited = [];

    for (let i = 0; i < textDivided.length; i++) {
        phrasesEdited[i] = textDivided[i].charAt(0).toUpperCase() + textDivided[i].slice(1);
    }

    const textEdited = phrasesEdited.join('. ');
    textArea.value = textEdited;
}

function invertLettersOrder (){
    const textEdited = textArea.value.split('').reverse().join('');
    textArea.value = textEdited;
}

function invertWordsOrder() {
    const textEdited = textArea.value.split(' ').reverse().join(' ');
    textArea.value = textEdited;
}