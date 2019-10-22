import { UserSignUpInput } from "../models/user_dto";
import { User } from "../../domain/model/user";

export interface IUserService {
    create(user: UserSignUpInput): Promise<User>;
    get(query: { id?: string; emailOrUsername?: string }): Promise<User>;
    getAll(): Promise<User[]>;
    pagedGetAll(
        skipCount?: number,
        maxResultCount?: number
    ): Promise<{ count: number; items: User[] }>;
    update(user: Partial<User>): Promise<void>;
    delete(id: string): Promise<boolean>;
}
