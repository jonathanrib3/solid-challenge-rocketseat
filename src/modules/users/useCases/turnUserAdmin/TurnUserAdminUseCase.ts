import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userFound = this.usersRepository.findById(user_id);

    if (!userFound) {
      throw new Error("This user does not exists");
    }

    userFound.admin = true;
    userFound.updated_at = new Date();

    return userFound;
  }
}

export { TurnUserAdminUseCase };
