import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const useCaseCustomRequest = {
      user_id: user_id as string,
    };

    try {
      const userFound = this.turnUserAdminUseCase.execute(useCaseCustomRequest);
      return response.status(200).send(userFound);
    } catch (err) {
      return response.status(404).send({ error: err.message });
    }
  }
}

export { TurnUserAdminController };
