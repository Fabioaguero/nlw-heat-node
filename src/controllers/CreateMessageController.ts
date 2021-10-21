import { request, Request, response, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";


class CreateMessageController {
    async handle(req: Request, res: Response) {

       const { message } = request.body;
       const { user_id } = request;

       const service = new CreateMessageService();

       const result = await service.execute(message, user_id);

       return response.json(result);

    }
}


export { CreateMessageController };