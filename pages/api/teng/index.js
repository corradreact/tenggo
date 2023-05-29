// IMPORT FILE YANG ADA FUNCTION QUERY
import db from '../../../connection'

export default async function handler(req, res) {

    let result = {
        status_code: 500,
        status: 'Internal Server Error',
        message: 'Internal Server Error',
        data: []
    }

    try {

        let sql     = `SELECT * FROM teng`
        let query   = await db.query(sql)

        console.log("RESULT FROM QUERY : ", query);

        if(query.length > 0) 
        {
            result.status_code  = 200
            result.status       = "success"
            result.message      = "Successfull fetch data"
            result.data         = query
        }
        else 
        {
            result.status_code  = 500
            result.status       = "Internal Server Error"
            result.message      = "Not data found."
            result.data         = []
        }

    } 
    catch(e) 
    {
        console.log("Syntax Error: ", e)
        result.status_code  = 500
        result.status       = "Internal Server Error"
        result.message      = "Not data found."
        result.data         = []
    }

    res.status(result.status_code).json(result);
}