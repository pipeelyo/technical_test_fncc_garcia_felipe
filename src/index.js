import {config} from "dotenv";
import {appFncc} from "./app/app.js";

config()
const port = process.env.NODE_DOCKER_PORT || 4000;

appFncc.listen(port, () => {
    console.log(`Server listening on port ${process.env.NODE_DOCKER_PORT}`);
});