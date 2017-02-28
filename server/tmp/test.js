function example(){
	return 'taylor rocks'
}

function nickRocks(){
	return 10
}

nickRocks() ; var { assert } = require('../chai');describe('Example Test', function() {
  it('should be a function', function() {
    assert.isFunction(nickRocks)
  })
  it('should return taylor rocks', function() {
    assert.equal(example(), 'taylor rocks')
  })
    it('should return taylor rock!s', function() {
    assert.equal(example(), 'taylor rocks')
    assert.isNull(null, 'there was no error');

  })
})

