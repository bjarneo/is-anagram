const test = require('ava');

const isAnagram = require('.');

test(t => t.true(isAnagram('silent', 'listen')));

test(t => t.true(isAnagram('rail safety', 'fairy tales')));

test(t => t.false(isAnagram('silent', 'lamb')));

test(t => t.false(isAnagram('silent', true)));
