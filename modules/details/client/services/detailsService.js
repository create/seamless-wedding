/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 3/2/14
 * Time: 6:44 PM
 * To change this template use File | Settings | File Templates.
 */

"use strict";

module.exports = function () {
    return {
        poem: function () {
            return {
                pre: [
                    "Once upon a time in the wicked land of NYC",
                    "A ginger found an asian, a single soul become an abductee",
                    "Knowing the asian could be 20 or 50, the ginger approached with great heed",
                    "Thoughts of side ways row boats indeed"
                ],
                one: [
                    "When I first set my sights I placed words upon her flesh",
                    "She did not comply",
                    "Complications of the fictitious man",
                    "But I knew she would soon hold my hand"
                ],
                two: [
                    "A gathering of friends",
                    "And she was green with envy",
                    "The big white beast has been discovered",
                    "Maybe now she will know my hand"
                ],
                three: [
                    "Toys were us except for the hoops",
                    "They fell to her ground",
                    "Charming, beauty, hole in my stomach",
                    "She gently grazed my hand"
                ]
            };
        },
        text: function () {
            return {
                pre: "blah blah blah blah beach blah blah blah blah sun blah blah logs and platform built by mr oscar",
                one: "blah blah blah events blah blah stuff food cake dance party turn down for what",
                two: "blah blah blah entourage blah blah best man blah blah JULIA",
                three: "blah blah mapbox blah blah too far blah blah carpool"
            };
        },
        title: function() {
            return {
                pre: "LOCATION",
                one: "EVENTS",
                two: "ENTOURAGE",
                three: "MAP"
            };
        }
    };
};