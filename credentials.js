module.exports = {
    cookieSecret: 'a;sdigvhawer349875q-owiej,n43;2nwa;f',
    mongo: {
        dbURI: {
            local: 'mongodb://localhost:27017/angular'
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
