var config = {
  local: {
    mode: 'local',
    port: 3002
  },
  staging:{
    mode: 'staging',
    port: 4000
  },
  production:{
    mode: 'production',
    port: 5000
  }
}
module.exports = function(mode){
  return config[mode || 'local' || process.argv[2]] || config.local;
}