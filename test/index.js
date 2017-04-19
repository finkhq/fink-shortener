'use strict'

const should = require('should')

const shortener = require('..')

describe('fink shortener ::', function () {
  describe('.shorten', function () {
    it('create a hash from a number', function () {
      const short = shortener(9)
      should(short.id).be.an.Number()

      should(short.hash).be.a.String()
      should(short.hash).be.equal('a')

      should(short.hashEmoji).be.a.String()
      should(short.hashEmoji).be.equal('🔆')
    })
  })
})
