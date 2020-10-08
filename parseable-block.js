const textdata = `**Data** The quick brown fox jumped over the lazy dog! -|-`;

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

  const _parse = function(b, e, i) {

    const no_b = (!b &&  e &&  i);
    const no_e = ( b && !e &&  i);
    const no_i = ( b &&  e && !i);

    const only_b = (!b && !e &&  i);
    const only_e = (!b &&  e && !i);
    const only_i = (!b && !e &&  i);

    const no_markers  = (!b && !e && !i);
    const all_markers = ( b &&  e &&  i);

    // There's a way to figure out these permutations with a function
    // After that, I need to deliver the final logical result

    // Compare the actual table with the possibilties
    const actual = (b && e && i);
    const comparison = [no_b, no_e, no_i, only_b, only_e, only_i, no_markers, all_markers];

    return 'placeholder';

  }
   
  console.log('_parse', _parse(b, e, i));
  
}

textBlockLogic(textdata, begMarker, endMarker, ignMarker);
