// module.exports = function() {
//     console.log("Module.js says hello")
// }

module.exports = {
    hello: function() {
        console.log("Module.js says hello")
    },
    goodbye: function() {
        console.log("Module.js says goodbye")
    }
}

export default {
    hello: function() {
        console.log("Module.js says hello")
    },
    goodbye: function() {
        console.log("Module.js says goodbye")
    }
}