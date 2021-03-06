import { Router } from 'express';
import Weight from '../models/Weight.js';


export default Router()
  .post('/', async (req, res, next) => {
    try {
      const pokemon = await Weight.insert(req.body);
      res.json(pokemon);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const pokemon = await Weight.getAll(req.body);
      res.send(pokemon);
    } catch(err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const pokemon = await Weight.getById(id);
      res.send(pokemon);
    } catch(err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const pokemon = await Weight.change(id, req.body);
      res.send(pokemon);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const remove = await Weight.removePokemon(id);
      res.send(remove);
    } catch (error) {
      next(error);
    }
  });

