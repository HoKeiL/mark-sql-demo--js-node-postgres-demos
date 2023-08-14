const { Client } = require("pg");

async function doDemo() {
  const client = new Client({ database: 'musicbase' });
  await client.connect();
  const text =
    "INSERT INTO artists(name) VALUES($1) RETURNING *";
  const values = ["Elton John"];

  const res = await client.query(text, values);
  console.log(res.rows);
  await client.end();
}

doDemo();
