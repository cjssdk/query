/**
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

module.exports = {
    /**
     * Parse the given location search string into object.
     *
     * @param {string} query string to parse
     *
     * @return {Object.<string, string>} result data
     */
    parse: function ( query ) {
        var data = {};

        // parse and fill the data
        query.split('&').forEach(function ( part ) {
            part = part.split('=');
            // valid number on params
            if ( part.length === 2 ) {
                data[part[0]] = decodeURIComponent(part[1]);
            }
        });

        return data;
    },


    /**
     * Make uri query part in a string form.
     *
     * @param {Object} params data to stringify
     *
     * @return {string} query string
     */
    stringify: function ( params ) {
        var data = [];

        Object.keys(params).forEach(function ( name ) {
            data.push(name + '=' + encodeURIComponent(params[name]));
        });

        return data.join('&');
    }
};
