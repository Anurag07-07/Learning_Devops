import { gameManager } from "./store.js";
export function startLogger() {
    setInterval(() => {
        console.log(gameManager.log());
    }, 5000);
}
//# sourceMappingURL=logger.js.map