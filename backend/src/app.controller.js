
import authController from './modules/auth/auth.controller.js'

const bootstrap = (app,express) =>{
    app.use(express.json())
    app.get('/',(req, res) => res.send('Hello World!'))
    app.use("/auth", authController)
}

export default bootstrap