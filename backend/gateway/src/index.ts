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

// should be used in shutdownHook
export const stop = () => {
    server?.close(() => {
    })
}

start()

