function example(){
	return 'taylor rocks'
}

example() ; var { assert } = require('../chai');describe('Example Test', function() {
  it('should be a function', function() {
    assert.isFunction(example)
  })
  it('should return taylor rocks', function() {
    assert.equal(example(), 'taylor dsarocks')
  })
  
  efeas
})