// Code your solution in this file
function findMatching(list, name){
  return list.filter(function (drivername){
    return drivername.toLowerCase() === name.toLowerCase();
  });
}