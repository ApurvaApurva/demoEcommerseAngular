import { Role } from "./Role";

export class User {
    id!: number;
    name!: string;
    type!: string;  
    password!: string;
    email!: string;  
    phone!: string;
    address!: string;
    active!: boolean;
    role!: Role;
   

    constructor(){
        this.active = true;
        //this.role = Role.Customer;
    }
  }