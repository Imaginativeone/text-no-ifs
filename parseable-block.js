const textdata = `**Data** The quick brown fox jumped over the lazy dog. -|-`;

const begMarker = '**Data**';
const ignMarker = '!';
const endMarker = '-|-';

function locateBegMarker(begMarker, textdata) {

  const there = textdata.indexOf(begMarker) !== -1;
  console.log('Begin Marker There', there);

  return there;

}

function locateEndMarker(endMarker, textdata) {

  const there = textdata.indexOf(endMarker) !== -1;
  console.log('Begin Marker There', there);

  return there;

}

function locateIgnMarker(ignMarker, textdata) {

  const there = textdata.indexOf(ignMarker) !== -1;
  console.log('Begin Marker There', there);

  return there;

}

function textBlockLogic(textdata, begMarker, endMarker, ignMarker) {

  const b = locateBegMarker(begMarker, textdata);
  const e = locateEndMarker(endMarker, textdata);
  const i = locateIgnMarker(ignMarker, textdata);

  const parse = (b && e && !i)
  console.log('parse', parse);
  
}

textBlockLogic(textdata, begMarker, endMarker, ignMarker);