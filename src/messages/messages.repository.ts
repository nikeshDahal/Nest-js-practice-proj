import { Injectable } from "@nestjs/common";
const { v4: uuidv4 } = require('uuid');
import { readFile,writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository{
     async findOne(id:string){
        const contents = await readFile('messages.json','utf-8');
        const messages = JSON.parse(contents);

        return messages[id];
    }
    async findAll(){
        const contents = await readFile('messages.json','utf-8');
        const messages = JSON.parse(contents);
         return messages;


    }

    async create(content:string){
        const contents = await readFile('messages.json','utf-8');
        const messages = JSON.parse(contents);
        const id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        messages[id]={id,content}

        await writeFile('messages.json',JSON.stringify(messages))
    }
}