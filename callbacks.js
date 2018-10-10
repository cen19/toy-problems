// CB COMBINE FETCHERS
const combineFetchers = (prefix, fetchers) => {
  fetchers.forEach(fetcher => {
    fetcher(prefix);
  });
};


let makeFunctionCB = (cb, fn) => {
  return (prefix) => {
    cb(prefix, fn);
  }
}

let consoleLogCB = (x, funcName) => {
  console.log(`getting data for prefix ${x} for ${funcName}`);
};

let func1 = makeFunctionCB(consoleLogCB, 'func1');
let func2 = makeFunctionCB(consoleLogCB, 'func2');

const stuff = [func1, func2];


combineFetchers('hello world', stuff);



function sampleFetcher(prefix, cb) {
  // makes API call with prefix and does the callback
  let fetchers = [/* bunch of first class  */]
};


// PROMISE COMBINE FETCHERS