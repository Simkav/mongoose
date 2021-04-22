const app = require('./app');
const http = require('http');
const { PORT } = require('./config/index')

const server = http.createServer(app);

server.listen(PORT, () => {
        console.log('SERVER STARTED')
    },
)