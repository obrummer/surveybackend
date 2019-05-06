const Pool = require('pg').Pool;

require('dotenv').config()

const conopts = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'kysely'
}
const pool = new Pool(conopts);

const users = () => {
  return pool.connect()
      .then(client => {
          const sql = 'SELECT * FROM results;';
          return client.query(sql)
              .then(res => {
                  client.release();
                  return res;
              })
              .catch(err => {
                  client.release();
                  console.error(err);
              });
      })
}

const insertUser = (question1, 
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18,
  question19,
  question20
) => {
  return pool.connect()
      .then(client => {
          const sql = 'INSERT INTO results(question1, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);';
          return client.query(sql, [question1, 
            question11,
            question12,
            question13,
            question14,
            question15,
            question16,
            question17,
            question18,
            question19,
            question20])
              .then(res => {
                  client.release();
                  return res;
              })
              .catch(err => {
                  client.release();
                  console.error(err);
              });
      })
}



module.exports = { users, insertUser };