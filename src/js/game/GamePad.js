(function(root) {

var GamePad = Class.extend({

    keys: [0,0,0,0,0],

    // constructor
    init: function()
    {
        console.log("GamePad.init()");
    },

    checkInput: function()
    {
        var keys = {'keys': [
            that.keys[87] || that.keys[38] || 0,    //UP
            that.keys[68] || that.keys[39] || 0,    //RIGHT
            that.keys[13] || that.keys[77] || 0,
            that.keys[65] || that.keys[37] || 0,    //LEFT
            that.keys[32] || 0]                     //SPACE
        };

        for(var i in that.keys) {

            if (that.keys[i] === 2) {
                that.keys[i] = 0;
            }
           //console.log(i+ " :: "+that.keys[i]);
        }
        this.keys = keys.keys;
        for(var i in this.keys) {

            //console.log(i+ " :: "+this.keys[i]);

        }
    }

});

 // Input
var that = this;
this.keys = {};
window.onkeydown = window.onkeyup = function(e) {

    var key = e.keyCode;
    if (key !== 116 && !e.shiftKey && !e.altKey && !e.ctrlKey) {
        if (e.type === "keydown") {
            that.keys[key] = 1;
        } else {
            that.keys[key] = 2;
        }
        if (that.playing) {
             e.preventDefault();
            return false;
        }
    }

};

// static var
root.HelicopterGame.GamePad = GamePad;

})(window);