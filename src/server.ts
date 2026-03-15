import express, {json, Request, Response} from "express";

const app = express();

const port = process.env.PORT;


app.use(json());

app.get("/", (req: Request, res: Response) => {
    res.status(201).json({player: "Halland"});
});

app.listen(port, () => {
    console.log(`🔥Server is running on port http://localhost: ${port}`);
});


