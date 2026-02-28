/**
 * 	Key Functions for explode-the-web
 */


// object to track pressed keys
var keys = {
    e: false,
    tilda: false
};
/**
 * 	If keydown detected
 */
document.addEventListener("keydown", function(event) {
    if (event.code == 69) // e
        keys.e = true;
    else if (event.code == 192) // ~
        keys.tilda = true;
    if (keys.e && keys.tilda) {
        console.log("e + tilda ~");
        explodeThePage();
    }
    //console.log(event.keyCode,keys);
});
/**
 * 	Reset keys that are no longer pressed
 */
document.addEventListener("keyup", function(event) {
    // reset status of the button 'released' == 'false'
    if (event.code == 69)
        keys.e = false;
    else if (event.code == 192)
        keys.tilda = false;
    //console.log(event.keyCode,keys);
});
