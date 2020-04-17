export class Team {
    constructor (
    public id: number,
    public tournament_id: number,
    public name: string,
    public logo: string,
    public points: number
    ) {}
   }