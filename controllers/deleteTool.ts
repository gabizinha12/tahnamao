import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Tool } from "../vuttr/src/entity/Tool";

export async function toolDelete(request: Request, response: Response) {

    const toolRepository = getManager().getRepository(Tool);

    const deleteTools = await toolRepository.delete(request.params.id)


    if (deleteTools) {
        response.sendStatus(204)
    }

}