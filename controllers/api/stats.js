const router = require('express').Router()
const {Stats, Login} = require('../../models')

router.get('/', async (req, res) => {
  try {
    const stats = await Stats.findAll();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

router.put('/', async (req, res) => {
  console.log(req.session)
  try {
    const result = req.body.result
    const stats = await Stats.findOne({ where: { user_id: req.session.user_id } })
    console.log(stats)
    stats.increment(result)
    stats.increment('played')

    res.json(stats);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});
  
module.exports = router