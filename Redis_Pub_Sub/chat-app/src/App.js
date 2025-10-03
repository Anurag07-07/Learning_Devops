import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const App = () => {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState("");
    const [latestmessage, setLatestMessage] = useState("");
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen = () => {
            console.log(`Connected`);
            setSocket(socket);
        };
        socket.onmessage = (message) => {
            console.log(`Message is ${message.data}`);
            setLatestMessage(message.data);
        };
        return () => {
            socket.close();
        };
    }, []);
    if (!socket) {
        console.log(` Connection take a while`);
    }
    return (_jsxs("div", { children: [_jsx("input", { type: " text", placeholder: "Enter the Message", onChange: (e) => setMessage(e.target.value) }), _jsx("button", { onClick: () => {
                    socket?.send("Hello World");
                }, children: "Send" }), _jsx("div", { children: latestmessage })] }));
};
export default App;
//# sourceMappingURL=App.js.map