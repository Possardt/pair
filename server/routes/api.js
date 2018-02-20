const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send('works');
});

router.get('/todaysPairs', (req, res) => {
  let todaysPairs = {
    date : new Date(),
    teams : [
      {
        myAssortment : {
          members : ['Ryan', 'Kris', 'Patrick', 'Francisco'],
          pairs : {
            'Ryan' : 'Kris',
            'Patrick' : 'Francisco'
          }
        }
      }
    ]
  };
  res.send(todaysPairs);
});

module.exports = router;
