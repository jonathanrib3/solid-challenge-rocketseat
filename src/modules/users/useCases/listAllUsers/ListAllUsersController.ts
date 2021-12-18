import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    const useCaseCustomRequest = {
      user_id: user_id as string,
    };

    try {
      const list = this.listAllUsersUseCase.execute(useCaseCustomRequest);
      return response.status(200).send(list);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { ListAllUsersController };
