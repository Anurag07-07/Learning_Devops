import { gameManager } from "./index.js";
export function startLogger() {
    setInterval(() => {
        console.log(gameManager.log());
    }, 5000);
}
//# sourceMappingURL=logger.js.map