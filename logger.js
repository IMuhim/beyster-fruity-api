const logger = (req, res, next) => { //next is required to pass through the middleware. Without it request will be blocked
    console.log(req.method, req.originalUrl)
    next()
}

module.exports = logger