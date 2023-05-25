export default function handler(req, res) {
    res
    .status(200)
    .setHeader('Access-Control-Allow-Origin', '*')
    .json(
        { 
            name: 'Saleha Kema',
            username: process.env.DB_USERNAME
        }
    );
}
