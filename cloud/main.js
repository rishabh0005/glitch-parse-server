Parse.Cloud.define('hello', function(req, res) {
  console.log('cloud code is running');
  res.success('Hi');
});