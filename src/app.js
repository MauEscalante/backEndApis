import express from "express"
import cors from "cors"

/////////////ROUTES////////////////////
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import listRoutes from "./routes/lists.routes.js"

const app=express()

app.use(cors({ origin: 'http://localhost:3001' }));

/////////////MIDDLEWARES///////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json())

/////////////ROUTES////////////////////
app.use("/auth",authRoutes)
app.use("/user",userRoutes)
app.use("/lists",listRoutes)

export default app