module.exports = function check(str, bracketsConfig) {

  const map = new Map(bracketsConfig);
  
  const stack = [];
  
  
  for (let char of str) {
  
    
  if (char === map.get(stack[stack.length - 1])) stack.pop();
  
  else stack.push(char);
  
  }
      
  return !stack.length;
    };
  