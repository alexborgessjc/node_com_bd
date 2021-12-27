import db from "../db";
import User from "../models/user.model";

class UserRepository{
    async findAllUsers(): Promise<User[]>{
        const query="SELECT uuid, username FROM application_user";
        db.query<User[]>(query);
        //O await vai fazer que a promise seja feita e depois seja armazenada em result
        const result = await db.query<User>(query);
        const rows = result.rows;

        return rows || [];
    }
}

export default new UserRepository();