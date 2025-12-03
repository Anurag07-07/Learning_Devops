interface IGame {
    id: string;
    whiteplayerName: string;
    blackplayerName: string;
    moves: string[];
}
export declare class GameManager {
    games: IGame[];
    private static instance;
    private constructor();
    static getInstance(): GameManager;
    addMove(gameID: string, move: string): void;
    addGame(gameId: string): void;
    log(): void;
}
export declare const gameManager: GameManager;
export {};
//# sourceMappingURL=store.d.ts.map