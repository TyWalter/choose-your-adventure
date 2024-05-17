const router = require('express').Router()
const { Stats } = require('../../models')


// const getStatsFromDatabase = async () => {
//     // Example of fetching data from a database
//     return {
//       timesPlayed: await db.getTimesPlayed(),
//       wins: await db.getWins(),
//       losses: await db.getLosses(),
//       deaths: await db.getDeaths(),
//     };
//   };
  router.put('/', async (req, res) => {
    try {
      const result = req.body.result
      const stats = await Stats.findOne({ where: { user_id: req.session.user } })
      stats.increment(result)
      stats.increment('played')

      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch stats' });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const stats = await getStatsFromDatabase();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch stats' });
    }
  });
  
  // router.get('/', async (req, res) => {
  //   try {
  //     const stats = await getStatsFromDatabase();
  //     res.render('stats', { stats });
  //   } catch (error) {
  //     res.status(500).send('Failed to render stats');
  //   }
  // });
  
module.exports = router