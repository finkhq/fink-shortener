/* global describe, it */

'use strict'

require('should')

const shortener = require('..')

describe('fink shortener ::', function () {
  describe('.shorten', function () {
    it('create a hash from a number', function () {
      const short = shortener(9)
      short.id.should.be.an.Number()

      short.hash.should.be.a.String()
      short.hash.should.be.equal('a')

      short.hashEmoji.should.be.a.String()
    })
  })
})
