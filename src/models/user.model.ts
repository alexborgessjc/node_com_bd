//o Type irá apenas nos dar funcionalidades
type User={
    //O ? serve dizer que o campo é opcional
    uuid?: string;
    username: string;
    password?: string;
}

export default User;
