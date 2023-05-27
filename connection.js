const mysql     = require('mysql2/promise');
const config    = require('./config');

async function CHECK_CONNECTION() {

    let status_connection   = false;
    let connection          = await mysql.createConnection(config.db);

    try {
        // LET CONNECTION DATABASE BEGIN
        await connection.connect((err) => {

            console.log("STATUS CONNECTION : ", err)

            if(err) {
                status_connection = false
            } else {
                status_connection = true
            }
        })
    } catch(e) {
        console.log("DB CONNECTION ERROR : ", e);
        status_connection = false;
    }

    return status_connection;
}

async function query(sql, params) {

  const connection  = await mysql.createPool(config.db);
  const [results, ] = await connection.execute(sql, params);

  //await connection.execute('CALL kill_all_sleep_connections()');
  connection.end();

  return results;
}

async function destroy() {
    const connection = (await mysql.createConnection(config.db)).destroy();
    return connection;
}

module.exports = {
    CHECK_CONNECTION,
    query,
    destroy
}