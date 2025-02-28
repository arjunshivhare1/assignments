/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const prom = new Promise((res) => {
    setTimeout(res, n * 1000);
  });
  return prom;
}

module.exports = wait;
