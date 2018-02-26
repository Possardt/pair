const express = require('express');
const router  = express.Router();

router.get('/todaysPairs', (req, res) => {
  let todaysPairs = {
    date : new Date(),
    teams : [
      {
        teamName : 'myAssortment',
        members : ['Ryan Possardt', 'Kris Green', 'Patrick Yeung', 'Kyle Dye'],
        pairs : [
          ['Ryan', 'Kris'],
          ['Patrick', 'Kyle']
        ]
      },
      {
        teamName : 'AMT2.0 Maintenance',
        members  : ['Matt Westbrook', 'Francisco Quesada Lara', 'Casey Rogers', 'Mayank Singh' ],
        pairs    : []
      }
    ]
  };
  res.send(todaysPairs);
});

module.exports = router;
