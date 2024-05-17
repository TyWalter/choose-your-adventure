const getStatsFromDatabase = async () => {
    // Example of fetching data from a database
    return {
      timesPlayed: await db.getTimesPlayed(),
      wins: await db.getWins(),
      losses: await db.getLosses(),
      deaths: await db.getDeaths(),
    };
  };
  app.put('/api/stats', async (req, res) => {
    try {
      const stats = await getStatsFromDatabase();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch stats' });
    }
  });
  
  app.get('/api/stats', async (req, res) => {
    try {
      const stats = await getStatsFromDatabase();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch stats' });
    }
  });
  
  app.get('/stats', async (req, res) => {
    try {
      const stats = await getStatsFromDatabase();
      res.render('stats', { stats });
    } catch (error) {
      res.status(500).send('Failed to render stats');
    }
  });
  