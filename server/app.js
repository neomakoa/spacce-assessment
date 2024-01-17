import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import routes from "./routes/index.js";

// express server
const app = express();

// Middleware
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }

        return callback(null, true);
    },
    credentials: true
}));

// server port
const PORT = 5001;

// nodejs http server
const server = http.createServer(app);

// data formats
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/", routes);

// server
server.listen(PORT);
console.log("server is running on PORT: ", PORT);
