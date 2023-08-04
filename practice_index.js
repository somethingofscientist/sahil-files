console.log("hi from practice index ->")

const simpleFunction = () => {
    console.log('Starting')
    // Wait 2 seconds before running the function
    setTimeout(() => {
        console.log('2 Second Timer')
    }, 2000)
    console.log('Stopping')
}


simpleFunction();
// return simpleFunction();
// console.log("your function ->", simpleFunction());