const textdata = {

  will_be_parsed: `**Data** The quick brown fox jumped over the lazy dog! -|-`,
  will_not_be_parsed: 
    `
    The quick brown fox jumped over the lazy dog.
    `,  
}

const showText = document.getElementById('texttoshow');
const showString = (input) => {
  showText.innerHTML = "Text: " + textdata.will_be_parsed;
}

const parseableText = document.getElementById('parseableText');
parseableText.value = 'Hello';

console.log(parseableText);

const begMarker = '**Data**';
const ignMarker = '!';
const endMarker = '-|-';

function parseBlock(searchStringA, searchStringB, searchStringC) {

  const begMarkerFound = textdata.will_be_parsed.indexOf(searchStringA) != -1;
  const endMarkerFound = textdata.will_be_parsed.indexOf(searchStringB) != -1;
  const ignMarkerFound = textdata.will_be_parsed.indexOf(searchStringC) != -1;

  console.log(begMarkerFound);

  if (begMarkerFound && endMarkerFound && !ignMarkerFound) {
    alert(`${ searchStringA } Found and ${ searchStringB } Found`);
  } else {
    
    alert(`
      begMarkerFound: ${ begMarkerFound }
      endMarkerFound: ${ endMarkerFound }
      ignMarkerFound: ${ ignMarkerFound }
    `);
  }
  
}

parseBlock(begMarker, endMarker, ignMarker);