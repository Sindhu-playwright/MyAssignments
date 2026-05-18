// const is blocked scope, executes only inside {}

function getBrowserVersion(){
    {
        const browserVersion = "Chrome"
    }
//local variable called outside the block => ReferenceError: browserVersion is not defined    
    console.log(browserVersion)  
}
getBrowserVersion()


function getBrowserVersion(){
    {
        const browserVersion = "Chrome"
        console.log(browserVersion)  //block scope, called inside the block
    }  
}
getBrowserVersion()