const express = require('express');
const router  = express.Router();

router.get('/todaysPairs', (req, res) => {
  let todaysPairs = {
    date : new Date(),
    teams : [
      {
        teamName : 'myAssortment',
        members : ['Ryan', 'Kris', 'Patrick', 'Francisco'],
        pairs : [
          ['Ryan', 'Kris'],
          ['Patrick', 'Kyle']
        ]
      },
      {
        teamName : 'AMT2.0 Maintenance',
        members  : ['Matt', 'Francisco', 'Casey', 'Mayank' ],
        pairs    : []
      }
    ]
  };
  res.send(todaysPairs);
});

module.exports = router;
