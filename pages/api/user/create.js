import db from '../../../connection'

export default async function handler(req, res) {

    let result = null

    console.log("REQUEST BODY : ", req.body);

    try {

        let username    = req.body.username
        let email       = req.body.email
        let phone       = req.body.phone

        let sql = `INSERT INTO teng(username, userfullname, useremail, userphone, userstatus) VALUES (?,?,?,?,?)`;
        let query = await db.query(sql, [username, username, email, phone, 1]);

        console.log("LOG QUERY REGISTER USER : ", query)

        if(query.insertId) {
            result = {
                status_code: 200,
                status: 'success',
                message: 'New user registered',
                data: {
                    id: query.insertId
                }
            }
        } else {
            result = {
                status_code: 500,
                status: 'Internal Server Error',
                message: 'Query problem. Please contact your system administrator.',
                data: {
                    id: null
                }
            }
        }
        
    } catch(e) {
        result = {
            status_code: 500,
            status: "Internal Server Error",
            message: "Internal Server Error. Please contact your system administrator.",
            data: {}
        }
    }

    res.status(result.status_code).json(result);
}