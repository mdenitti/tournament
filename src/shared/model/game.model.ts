export class Game {
    constructor(
    public id: number,
    public tournament_id: number,
    public referee_id: number,
    public team1_id: number,
    public team2_id: number,
    public field_id: number,
    public time: string,
    public score_team1: number,
    public score_team2: number,
    ) {}
   }
