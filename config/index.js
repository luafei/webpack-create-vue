const config = {
    development: {
        a_API: 'www.test.a.api.com',
        b_API: 'www.test.b.api.com'
    },
    production: {
        a_API: 'www.th.a.api.com',
        b_API: 'www.th.b.api.com'
    }
};

module.exports = config[process.env.NODE_ENV];