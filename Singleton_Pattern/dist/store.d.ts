interface IGame {
    id: string;
    whiteplayerName: string;
    blackplayerName: string;
    moves: string[];
}
export declare class GameManager {
    games: IGame[];
    constructor();
    addMove(gameID: string, move: string): void;
    addGame(gameId: string): void;
    log(): void;
}
export {};
//# sourceMappingURL=store.d.ts.map