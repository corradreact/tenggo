export default function handler(req, res) {

    const jwt = require("json5")
    res
    .status(200)
    .setHeader('Access-Control-Allow-Origin', '*')
    .json(
        { 
            name: 'Saleha Kema',
            username: jwt.stringify("jahskdjhakjshdkajhsd")
        }
    );
}
