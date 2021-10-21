import { io } from "./app";
import {serverHttp} from "./app"


serverHttp.listen(4000, () => {
    console.log("🚀 Server is Running on Port 4000")
})
