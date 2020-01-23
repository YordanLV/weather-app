export default function(mathFunc, array, property) {
  return Math[mathFunc].apply(
    array,
    array.map(function(item) {
      return item[property];
    })
  );
}
