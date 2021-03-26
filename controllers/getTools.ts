import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Tool } from "../vuttr/src/entity/Tool";

export async function toolGetAll(request: Request, response: Response) {

    const toolRepository = getManager().getRepository(Tool);

    const tools = await toolRepository.find();

    if (!tools) {
        response.status(404)
        response.end()
        return;
    }

    response.send(tools);
}