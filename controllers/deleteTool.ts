import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Tool } from "../vuttr/src/entity/Tool";

export async function toolDelete(request: Request, response: Response) {
    const id = request.params.id
    const toolRepository = getManager().getRepository(Tool);

    const deleteTools = await toolRepository.delete(id)


    if (deleteTools) {
        response.sendStatus(204)
    }

}