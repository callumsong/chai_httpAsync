'use strict';

require('../lib/request_handlers');
require('../index');
require('../lib/router');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

describe('my local server', function() {
  var server = 'localhost:8888';
  var date = new Date();
  it ('should read the time', function(done) {
    chai.request(server)
      .get('/time')
      .end(function(err, res) {
        expect(err).eql(null);
        expect(res).to.have.status(200);
        expect(res.text).eql(date.toLocaleTimeString('en-US'));
        done();
      });
  });

  it('should return my name', function(done) {
    chai.request(server)
      .get('/greet/callum')
      .end(function(err, res) {
        expect(err).eql(null);
        expect(res).to.have.status(200);
        expect(res.text).eql("What up callum");
        done();
      });
  });
});