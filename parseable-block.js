const textdata = `**Data** The quick brown fox jumped over the lazy dog. -|-`;

const begMarker = '**Data**';
const ignMarker = '!';
const endMarker = '-|-';

function locateBegMarker(begMarker, textdata) {

  const yes = textdata.indexOf(begMarker) !== -1;
  const no  = textdata.indexOf(begMarker) === -1;
  console.log('Begin Marker There', yes);
  console.log('Begin Marker Not There', no);

}

function locateEndMarker(endMarker, textdata) {

  const yes = textdata.indexOf(begMarker) !== -1;
  const no  = textdata.indexOf(begMarker) === -1;
  console.log('End Marker There', yes);
  console.log('End Marker Not There', no);

}

function locateIgnMarker(endMarker, textdata) {

  const yes = textdata.indexOf(begMarker) !== -1;
  const no  = textdata.indexOf(begMarker) === -1;
  console.log('End Marker There', yes);
  console.log('End Marker Not There', no);

}

locateBegMarker(begMarker, textdata);
locateEndMarker(endMarker, textdata);
locateIgnMarker(ignMarker, textdata);