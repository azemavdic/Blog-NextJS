const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'asko2212',
                mongodb_password: 'asko2212',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'mySite-dev',
            },
        };
    }
    return {
        env: {
            mongodb_username: 'asko2212',
            mongodb_password: 'asko2212',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'mySite',
        },
    };
};
