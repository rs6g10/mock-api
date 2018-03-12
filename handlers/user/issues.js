'use strict';
var dataProvider = require('../../data/user/issues.js');
/**
 * Operations on /user/issues
 */
module.exports = {
    /**
     * summary: 
     * description: List issues.
List all issues across owned and member repositories for the authenticated
user.

     * parameters: filter, state, labels, sort, direction, since, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
