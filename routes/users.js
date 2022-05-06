var express = require('express');
var router = express.Router();
/*
/* GET users listing. */
router.get('/', function(req, res, next) {
res.send('respond with a resource');
});
/*
this route returns the text "Eres genial" in the /users/cool/ URL.
@version 01.00.00 2022-05-06, The route corresponds to version 1 of the system,
it has suffered 0 refactorings during the version
0 minor changes were made.
* @author Jhon Dorado jhd400@gmail.com
* @since 01.00.00 2022-05-06
*/
router.get('/cool', function(req, res, next) {
  res.send('Eres genial');
});

module.exports = router;
