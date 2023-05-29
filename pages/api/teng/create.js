import db from '../../../connection'
import { API_RESPONSE_200, API_RESPONSE_400, API_RESPONSE_500, INITIAL_API_RESPONSE } from '../../../constants'

export default async function handler(req, res) {

    let result = INITIAL_API_RESPONSE

    let username        = null
    let userpassword    = null
    let userfullname    = null
    let useremail       = null
    let userphone       = null

    try {

        let params = req.body;

        username        = params.username
        userpassword    = params.userpassword
        userfullname    = params.userfullname
        useremail       = params.useremail
        userphone       = params.userphone

        if(!username || username === null || username === "") 
        {
            result = API_RESPONSE_400
            result.message = "Parameter username is undefined."
        }
        else if(!userpassword || userpassword === null || userpassword === "") 
        {
            result = API_RESPONSE_400
            result.message = "Parameter userpassword is undefined."
        }
        else if(!userfullname || userfullname === null || userfullname === "") 
        {
            result = API_RESPONSE_400
            result.message = "Parameter userfullname is undefined."
        }
        else if(!useremail || useremail === null || useremail === "") 
        {
            result = API_RESPONSE_400
            result.message = "Parameter useremail is undefined."
        }
        else if(!userphone || userphone === null || userphone === "") 
        {
            result = API_RESPONSE_400
            result.message = "Parameter userphone is undefined."
        } 
        else
        {
            let sql = `
            INSERT INTO teng(
                username, 
                userpassword, 
                userfullname, 
                useremail, 
                userphone, 
                userstatus
            ) VALUES (?,?,?,?,?,1)
            `;

            let query = await db.query(sql, [username, userpassword, userfullname, useremail, userphone])
            
            console.log("LOG QUERY INSERT NEW USER : ", query);

            if(query.insertId) 
            {
                result = API_RESPONSE_200
                result.data = {
                    insertId: query.insertId
                }
            } 
            else 
            {
                result = API_RESPONSE_500
                result.data = {
                    insertId: null
                }
            }
            //result = API_RESPONSE_200;
        }

    } 
    catch(e) 
    {
        console.log("Syntax Error: ", e)
        result = API_RESPONSE_500
    }

    res.status(result.status_code).json(result)
}