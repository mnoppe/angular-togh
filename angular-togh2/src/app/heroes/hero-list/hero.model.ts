import { Member } from 'src/app/shared/model/member.model';

export class Hero {
    public name: string;
    public imagePath: string;
    public description: string;
    public members: Member[];

    constructor(name: string, imagePath: string, description: string, members: Member[]) {
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
        this.members = members;
    }
}
