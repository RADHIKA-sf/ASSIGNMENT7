import {User} from '../public/user';

export function findIndex(id:Number,data:User[]){
    return data.findIndex((user) => user.Id === id);
    }