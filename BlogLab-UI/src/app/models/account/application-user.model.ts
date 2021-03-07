export class ApplicationUserLogin {

    constructor(
        public ApplicationUserId: number,
        public username: string,
        public fullname: string,
        public email: string,
        public token: string
    ){}
}