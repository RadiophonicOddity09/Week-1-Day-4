var words = ["ground", "control", "to", "major", "tom"];

function map(arr, action) {
  var newArray = [];
  for(value of arr) {
    newArray.push(action(value));
  }
  console.log(newArray);
}

function mapped(name) {
 return value;
}
map(words, mapped);

map(words, function(name) {
  return name.length;
});

map(words, function(name) {
  return name.toUpperCase();
});

map(words, function(name) {
  return name.split('').reverse().join('');
});
