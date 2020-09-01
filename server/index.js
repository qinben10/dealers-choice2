const express = require("express")
const db = require('./db/index');
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/games', async (req, res, next)=> {
    try {
      res.send(await db.models.Games.findAll());
    }
    catch(ex){
      next(ex);
    }
  });
  app.get('/api/games/:gamesId', async (req, res, next) => {
    try {
      const game = await db.models.Games.findByPk(req.params.gamesId);
      res.json(game);
    } catch (err) {
      next(err);
    }
  });
  
  app.get('/api/developers', async (req, res, next)=> {
    try {
      res.send(await db.models.Developers.findAll());
    }
    catch(ex){
      next(ex);
    }
  });
  app.get('/api/platforms', async (req, res, next)=> {
    try {
      res.send(await db.models.Platforms.findAll());
    }
    catch(ex){
      next(ex);
    }
  });

  app.use((err, req, res, next)=> {
    res.status(500).send({ error: err.message });
  });
  
  const init = async()=> {
    try {
      await db.syncAndSeed();
      const port = process.env.PORT || 2233;
      app.listen(port, ()=> console.log(`listening on port ${port}`));
    }
    catch(ex){
      console.log(ex);
    }
  };
  
  init();