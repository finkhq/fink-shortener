/* global describe, it */

'use strict'

require('should')

const shortener = require('..')

describe('fink shortener ::', function () {
  describe('.shorten', function () {
    it('create a hash from a number', function () {
      const short = shortener(123)
      short.id.should.be.an.Number()
      short.hash.should.be.a.String()
      short.hashEmoji.should.be.a.String()
    })
  })

  describe('.isValid', function () {
    describe('valid', function () {
      it('when the URI is from different hostname', function () {
        const isValid = shortener.isValid('myhost.com', 'http://kikobeats.com')
        isValid.should.be.true()
      })

      it('from bittorrent protocol', function () {
        const isValid = shortener.isValid('myhost.com', 'magnet:?xt=urn:sha1:PDAQRAOQQRYS76MRZJ33LK4MMVZBDSCL')
        isValid.should.be.true()
      })
    })

    describe('invalid', function () {
      it('when the URI is from the same hostname', function () {
        const isValid = shortener.isValid('google.com', 'https://google.com/')
        isValid.should.be.false()
      })

      it('when is not a valid URI', function () {
        const isValid = shortener.isValid('google.com', 'aoskdpoakd')
        isValid.should.be.false()
      })
    })
  })
})
