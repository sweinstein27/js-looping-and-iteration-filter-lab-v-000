// Code your solution in this file
function findMatching(list, name){
  return list.filter(function (drivername){
    return drivername.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, partialName){
  let lengthOfName = partialName.length
  return list.filer(function (drivername){
    return drivername.slice(0, lengthOfName) === partialName
  })
}
