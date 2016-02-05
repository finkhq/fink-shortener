'use strict'

const ALPHABET_BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const base58 = require('base-x')(ALPHABET_BASE58)
const emoji = require('base64-emoji')
const parseURI = require('parse-uri')

function shorten (id) {
  let hash = base58.encode(id.toString())
  let hashEmoji = emoji.encode(id.toString()).toString()
  return {id, hash, hashEmoji}
}

function isValid (hostname, something, opts) {
  const URI = parseURI(something, opts)
  if (!URI.protocol) return false
  if (hostname === URI.host) return false
  return true
}

module.exports = shorten
module.exports.isValid = isValid
