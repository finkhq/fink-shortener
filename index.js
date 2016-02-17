'use strict'

const emoji = require('base64-emoji')
const alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
const base = alphabet.length

function base58 (num) {
  if (!/^\d+$/.test(num)) throw new Error('Value passed is not an integer.')
  if (typeof num !== 'number') num = parseInt(num)

  var str = ''

  while (num >= base) {
    var mod = num % base
    str = alphabet[mod] + str
    num = (num - mod) / base
  }

  return alphabet[num] + str
}

module.exports = function shorten (id) {
  let hash = base58(id)
  let hashEmoji = emoji.encode(id.toString()).toString()
  return {id, hash, hashEmoji}
}
