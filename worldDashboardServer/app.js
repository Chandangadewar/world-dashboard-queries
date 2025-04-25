    import express from 'express'
    import dotenv from 'dotenv'
    import cors from 'cors'
    import dashboardRoute from './routes/dashboardRoute.js'
    import './config/db.js'


    dotenv.config()
    const app = express();

    app.use(express.json());
    app.use(cors())

    app.get('/',(req,res)=>{
        res.send("Hello")
    })

    app.use('/dashboard',dashboardRoute);


    const port = process.env.PORT || 8000

    app.listen(port ,()=>{
        console.log(`server started on http://localhost:${port}`);
        
    })

// http://localhost:7000/dashboard/total-population`