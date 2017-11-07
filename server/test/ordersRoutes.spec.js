const expect = require('chai').expect;
require('chai').use(require('chai-as-promised'));
const agent = require('supertest')(require('../'));
const { Orders } = require('../db/models');
const { db } = require('../db/db.js');

describe('http requests', function() {
  before(() => Orders.sync({ force: true }));

  describe('GET /api/orders/', function() {
    it('responds with 200', () => agent.get('/api/orders/').expect(200));
  });

  describe('GET /api/orders/:userId', function() {
    before(() =>
      Orders.create({
        status: 'Created',
        totalPrice: 400.0
      })
    );

    it('responds with 404 on page that does not exist', () =>
      agent.get('/api/orders/:500').expect(404));
  });

  describe('GET /api/orders/:userId/:orderId', function() {
    before(() =>
      Orders.create({
        status: 'Created',
        totalPrice: 400.0
      })
    );

    it('responds with 404 on page that does not exist', () =>
      agent.get('/api/orders/:100/:200').expect(404));
  });
});
