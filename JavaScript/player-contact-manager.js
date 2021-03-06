/*
You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!

The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

The method should return an empty array if the argument passed is an empty string or nil/None/null.
Examples

Have at thee!
*/

const _ = require('lodash');
function playerManager(players) {
  return !players ? [] : _.chunk(players.split(", "), 2).map(e => ({player: e[0], contact: +e[1]}));
}
