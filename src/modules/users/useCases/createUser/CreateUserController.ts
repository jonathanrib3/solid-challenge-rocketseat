import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;

    try {
      const createdUser = this.createUserUseCase.execute({ email, name });
      return response.status(201).send(createdUser);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { CreateUserController };
