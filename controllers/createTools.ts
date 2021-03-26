import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Tool } from "../vuttr/src/entity/Tool";

export async function toolCreate(request: Request, response: Response) {
    const { title, link, description, tags } = request.body;

    const toolRepository = getManager().getRepository(Tool);

    const newTools = await toolRepository.save(request.body)

    if (newTools) {
        response.sendStatus(201)
        console.log(newTools)
    }

}