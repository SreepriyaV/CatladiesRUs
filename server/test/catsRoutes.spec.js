const expect = require('chai').expect;
require('chai').use(require('chai-as-promised'));
const agent = require('supertest')(require('../'));
const { Cats } = require('../db/models');
const { db } = require('../db/db.js');

describe('http requests', function() {
  before(() => Cats.sync({ force: true }));

  describe('GET /api/cats/', function() {
    it('responds with 200', () => agent.get('/api/cats/').expect(200));
  });

  describe('GET /api/cats/:catId', function() {
    before(() =>
      Cats.create({
        name: 'catlady',
        description: 'i was born on May4th',
        price: 100.0
      })
    );

    it('responds with 404 on page that does not exist', () =>
      agent.get('/api/cats/:400').expect(404));
  });
});
