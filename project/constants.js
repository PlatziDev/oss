exports.NODE_ENV = process.env.NODE_ENV || 'development'; // the app enviroment

exports.PORT = process.env.PORT || '3000'; // the docker port
exports.HOST = process.env.HOST || 'localhost'; // the docker host

exports.P_PROT = process.env.P_PROT || 'http'; // the public protocol
exports.P_HOST = process.env.P_HOST || 'localhost'; // the public host
exports.P_PORT = process.env.P_PORT || '3000'; // the public port
