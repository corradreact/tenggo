const config = {
    db: {
		/* don't expose password or any sensitive info, done only for demo */
		host: process.env.DEVELOPMENT_DBHOST,
		user: process.env.DEVELOPMENT_DBUSERNAME,
		password: process.env.DEVELOPMENT_DBPASSWORD,
		database: process.env.STAGING_DBNAME,
		connectionLimit: 60
    },
    listPerPage: 10,
};

module.exports = config;