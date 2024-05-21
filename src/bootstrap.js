 import { connection } from "./DB/connection.js"
import productRouter from "./modules/note/note.router.js"
import userRouter from"./modules/user/user.router.js"
 function bootstrap(app,express) {
    app.use(express.json())
    app.use(userRouter)
    app.use(productRouter)
    connection()
 }
 export default bootstrap