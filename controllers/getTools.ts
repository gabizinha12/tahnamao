import { Request, Response } from 'express'
import { getManager } from 'typeorm'
import { Tool } from "../vuttr/src/entity/Tool";

export async function toolGetAll(request: Request, response: Response) {

    const toolRepository = getManager().getRepository(Tool);

    const tools = await toolRepository.find();


    response.json(tools);
}