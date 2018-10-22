// Code your solution in this file
function findMatching(list, name){
  return list.filter(function (drivername){
    return drivername.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (list, name) {
  return list.filter(function (driverName){
    return driverName === name
  })
}
