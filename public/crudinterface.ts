import {User} from "../public/user";

export interface CRUD<T>
{
    create(object:T) : void;
    read() : T[];
    update(object:T) : void;
    delete(object:T) : void;
    cancel(object:T) : void;

}