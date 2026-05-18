// const and let are blocked scope, executes only inside {}
// var is function scoped
var browserVersion = "Chrome"

// function getBrowserVersion(){
//     if(browserVersion == "Chrome"){
        
//         let browserVersion = "Edge"
//         console.log(browserVersion)
//    }     
// }
// getBrowserVersion()

function getBrowserVersion(){
    let browserVersion = "Chrome"
    {
        console.log(browserVersion)
    }
}
getBrowserVersion()