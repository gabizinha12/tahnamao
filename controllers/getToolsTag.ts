import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Tool } from "../vuttr/src/entity/Tool";

export async function toolGetTag(request: Request, response: Response) {
    const tag = request.params.tag;

    const toolRepository = getManager().getRepository(Tool);

    const tools = await toolRepository.findOne(tag)

    if (!tools) {
        response.status(404)
        response.end()
        return;
    }

    response.send(tools);
}