import pool from '../utils/pool.js';

export default class Ability {

  constructor(row){
    this.id = row.id;
    this.pokemon = row.pokemon;
    this.powers = row.powers;
  }
  static async insert({ pokemon, powers }){
    const { rows } = await pool.query(
      'INSERT INTO ability (pokemon, powers) VALUES ($1, $2) RETURNING *',
      [pokemon, powers]
    );
    return new Ability(rows[0]);
  }
  static async getAll(){
    const { rows } = await pool.query(
      'SELECT * FROM ability'
    );
    return rows.map(row => {
      return new Ability(row);
    });
  }
  static async getById(id){
    const { rows } = await pool.query(
      'SELECT * FROM ability WHERE id = ($1)',
      [id]
    );
    return new Ability(rows[0]);
  }
  static async update(id, { pokemon, powers }){
    const { rows } = await pool.query(
      'UPDATE ability SET pokemon=($1), powers=($2) WHERE id=($3) RETURNING *',
      [pokemon, powers, id]
    );
    return new Ability(rows[0]);
  }
  static async remove(id){
    const { rows } = await pool.query(
      'DELETE FROM ability WHERE id = ($1) RETURNING *',
      [id]
    );
    return new Ability(rows[0]);
  }
}
