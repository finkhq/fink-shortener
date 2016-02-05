'use strict'

const ALPHABET_BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const base58 = require('base-x')(ALPHABET_BASE58)
const emoji = require('base64-emoji')

module.exports = function shorten (id) {
  let hash = base58.encode(id.toString())
  let hashEmoji = emoji.encode(id.toString()).toString()
  return {id, hash, hashEmoji}
}
