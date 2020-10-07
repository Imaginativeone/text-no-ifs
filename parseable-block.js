const textdata = `**Data** The quick brown fox jumped over the lazy dog. -|-`;
const showText = document.getElementById('texttoshow');

const begMarker = '**Data**';
const ignMarker = '!';
const endMarker = '-|-';

function canParse(iText) {

  let objParse = {};
  const markers = ['**Data**', '-|-', '!'];
  const indexReplacements = ['beg', 'end', 'off'];

  const parseText = markers.filter((marker, i) => {

    // console.log(i);
    // console.log(`I want to replace ${ marker } with ${ indexReplacements[i] }`);
    replacedMarker = indexReplacements[i];

    // console.log(`replacedMarker: ${ replacedMarker }`);
    // console.log(`In text: ${ iText.indexOf(marker) }`);
    objParse[replacedMarker] = iText.indexOf(marker) + 1;
    
  });

  return objParse;

}

const can = canParse(textdata);
// console.log(canParse(textdata));

function parseBlock(objCanParse) {
  
  console.log(objCanParse);

  let objConstructed = {}

  console.log(objConstructed);

  const parser = Object.entries(objCanParse).filter((accumulator, value, i) => {

    parsingStates = [-1, -1,  1];

    // accumulator[value[0]] = value[1];

    objConstructed[value[0]] = value[1];
    console.log('objConstructed', objConstructed, `parsingStates[${ i }]`, parsingStates[i]);

    return addParsingState(objConstructed, objConstructed[value[0]]);

    function addParsingState(object, s) {

      console.log('object', object, 's', s);

      const states = {
        parse: 'Parse',
        dontparse: 'Don\'t Parse'
      }
    }

    // if (value[0] == "beg" && value[1] !== -1) {

    //   const { end, off, ...begChopped } = objCanParse;
    //   console.log('Destructured', begChopped);
      
    // } else if (value[0] == "end" && value[1] !== -1) {

    //   const { beg, off, ...endChopped } = objCanParse;
    //   console.log('Destructured', endChopped);

    // } else if (value[0] == "off" && value[1] === -1) {

    //   const { beg, end, ...offChopped } = objCanParse;
    //   console.log('Destructured', offChopped);

    // } else {
    //   console.log('Don\'t parse the text');
    // }

    // return accumulator += value;

  }, accumulator = {});

}

parseBlock(can);
