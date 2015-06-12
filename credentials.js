module.exports = {
    cookieSecret: '',
    mongo: {
        dbURI: {
            local: ''   
        },
        dbOptions: {
            local: {
                server: {
                    socketOptions: {
                        keepAlive: 1
                    }
                }
            }
        }
    }
};
