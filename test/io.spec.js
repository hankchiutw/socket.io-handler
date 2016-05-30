'use strict';

const assert = require('chai').assert;

describe('IO', function(){
    const Server = require('../index');
    const io = Server();

    it('IO instance', function(){
        assert.instanceOf(io, Server.IO);
    });
});
