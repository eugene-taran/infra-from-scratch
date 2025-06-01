import type {Server} from 'http'
import {createExpressServer} from "./createExpressServer"

let server: Server | undefined

export const start = () => {
    const app = createExpressServer()

    server = app.listen(3000, () => {
        console.log(`Gateway service running at http://localhost:3000`)
    }).on('error', error => {
        throw error
    })

}

// Used to gracefully shut down the server during application termination
export const stop = () => {
    server?.close(() => {
        console.log('Gateway service has been stopped.')
    })
}

// Wire stop() to process signals for graceful shutdown
process.on('SIGINT', () => {
    console.log('Received SIGINT. Shutting down...')
    stop()
})

process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Shutting down...')
    stop()
})
start()

