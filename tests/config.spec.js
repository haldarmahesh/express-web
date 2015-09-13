describe("Configuration setup", function(){
  it("should load local Configurations", function(next){
    var config = require('../config')();
    expect(config.mode).toBe('local');
    expect(config.port).toBe(3002);
    next();
  });
  it("should local staging Configurations", function(next){
    var config = require('../config')('staging');
    expect(config.mode).toBe('staging');
    next();
  });
});