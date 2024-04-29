import {getAllStatus} from "./StatusModel.js";

export async function getStatus() {
    const status = await getAllStatus();
    console.log(status);
}