import db from '../../../connection'

export default async function handler (req, res) {

    let result = null
    try {

        let sql     = `SELECT * FROM teng LIMIT 5`;
        let execute = await db.query(sql);

        console.log("RESULT QUERY : ", execute)

        if(execute.length > 0) {
            result = {
                status: 200,
                data: execute
            }
        } else {
            result = {
                status: 500,
                data: []
            }
        }
    } catch(e) {

    }
    
    res.status(200)
    .json(
        { 
            name: 'Saleha Kema',
            username: process.env.DB_USERNAME,
            data: result
        }
    );
}
