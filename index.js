'use strict'

const base58 = require('encode-base58')

module.exports = function shorten (id) {
  const hash = base58(id)
  const hashEmoji = base58.emoji(id)
  return { id, hash, hashEmoji }
}
