/**
 * Created by Administrator on 2015/4/9.
 */
(function( global, factory ) {

    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
    var iQuery = function( selector, context ) {
            // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new iQuery.fn.init( selector, context );
    }
    var strundefined = typeof undefined;
    iQuery.fn=iQuery.prototype={
        constructor: iQuery,
        name:22,
        age:28
    }

    iQuery.fn.init = function( selector, context ) {

    }

    if ( typeof noGlobal === strundefined ) {
        window.iQuery = window.$ = iQuery;
    }
    return iQuery;
}));
alert(iQuery.age);
function AA(){
    this.hello="hello,AA";
    this.self=this;
}

(function A(args){
   this.message=args;
}("12345656"));
alert((new AA()).hello);
AA();