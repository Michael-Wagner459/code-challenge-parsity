
const findSum = function(array) {
  var total = 0
  for(i = 0; i < array.length; i++){
    total += array[i]
  }
  return total
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  let count1 = {}

  array.forEach(function (item) {
    if(count1.hasOwnProperty(item)) {
      count1[item] += 1;
    }
    else {
      count1[item] = 1;
    }
  });
  let sortable = [];
  for (var word in count1) {
    sortable.push([word, count1[word]])
  };
  sortable.sort(function(a, b) {
    return a[1] - b[1]
  });
  var mostFrequent = sortable[sortable.length - 1][0]
  var leastFrequent =  sortable[0][0]
  var answer = {most: mostFrequent, least: leastFrequent
  };
  return answer
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  const array = str.toLowerCase().split('')
  let reverseArray = array.slice().reverse()
  let newStr = array.join('')
  let reverseStr = reverseArray.join('')
  if(newStr == reverseStr) {
    return true 
  }
  else if (newStr !== reverseStr) {
    return false
  }
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let array2 = []
  for(let i = 0; i < array.length - 1; i++) {
    array2.push(array[i] * array[i + 1])
  }
  array2.sort((a, b) => a - b)
  return array2.pop()
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  const array3 = str.split('')

  var firstPar = array3.indexOf('(')
  var secondPar = array3.indexOf(')')
  var difference = secondPar - firstPar 

  var arrayWithoutPar = array3.toSpliced(firstPar, difference + 1)

  return arrayWithoutPar.join('')
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  var onepoint = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
  var twopoint = ['d', 'g']
  var threepoint = ['b', 'c', 'm', 'p']
  var fourpoint = ['f', 'h', 'v', 'w', 'y']
  var fivepoint = ['k']
  var eightpoint = ['j', 'x']
  var tenpoint = ['q', 'z']

  const array4 = str.toLowerCase().split('')
  var totalScore = 0
  for(i = 0; i < array4.length; i++) {
    for(j = 0; j < onepoint.length; j++) {
      if(array4[i] === onepoint[j]) {
        totalScore += 1
      };
    };
    for(j = 0; j < twopoint.length; j++) {
      if(array4[i] === twopoint[j]) {
        totalScore += 2
      };
    };
    for(j = 0; j < threepoint.length; j++) {
      if(array4[i] === threepoint[j]) {
        totalScore += 3
      };
    };
    for(j = 0; j < fourpoint.length; j++) {
      if(array4[i] === fourpoint[j]) {
        totalScore += 4
      };
    };
    for(j = 0; j < fivepoint.length; j++) {
      if(array4[i] === fivepoint[j]) {
        totalScore += 5
      };
    };
    for(j = 0; j < eightpoint.length; j++) {
      if(array4[i] === eightpoint[j]) {
        totalScore += 8
      };
    };
    for(j = 0; j < tenpoint.length; j++) {
      if(array4[i] === tenpoint[j]) {
        totalScore += 10
      };
    };
  };
  return totalScore
}
  
