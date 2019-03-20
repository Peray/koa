const assert = require('assert');

const hello = require('../hello');

const request = require('supertest');
const app = require('../app');

describe('#hello.js', () => {

    describe('#hello', () => {
        before(function () {
            console.log('before:');
        });

        after(function () {
            console.log('after.');
        });

        beforeEach(function () {
            console.log('  beforeEach:');
        });

        afterEach(function () {
            console.log('  afterEach.');
        });

        it('hello.sum() should return 0', () => {
            assert.strictEqual(hello.sum(), 0);
        });

        it('hello.sum(1) should return 1', () => {
            assert.strictEqual(hello.sum(1), 1);
        });

        it('hello.sum(1, 2) should return 3', () => {
            assert.strictEqual(hello.sum(1, 2), 3);
        });

        it('hello.sum(1, 2, 3) should return 6', () => {
            assert.strictEqual(hello.sum(1, 2, 3), 6);
        });

        it('#async function', async () => {
            let r = await hello.yibu();
            assert.strictEqual(r, 15);
        });
    });

    describe('#test koa app', () => {

        let server = app.listen(9900);
    
        describe('#test server', () => {
    
            it('#test GET /', async () => {
                let res = await request(server)
                    .get('/')
                    .expect('Content-Type', /text\/html/)
                    .expect(200, '<h1>Hello, world!</h1>');
            });
    
            it('#test GET /path?name=Bob', async () => {
                let res = await request(server)
                    .get('/path?name=Bob')
                    .expect('Content-Type', /text\/html/)
                    .expect(200, '<h1>Hello, Bob!</h1>');
            });
        });
    });
});