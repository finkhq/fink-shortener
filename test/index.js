/* global describe, it */

'use strict'

require('should')

const shortener = require('..')

describe('fink shortener ::', function () {
  it('create a hash from a number', function () {
    const short = shortener(123)
    short.id.should.be.an.Number()
    short.hash.should.be.a.String()
    short.emojifier.should.be.a.String()
  })
})