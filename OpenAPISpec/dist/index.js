import express from 'express';
import SwaggerUI from 'swagger-ui-express';
import { openApiSpec } from './openapispec.js';
const app = express();
const port = 3000;
app.use(express.json());
app.use('/documentation', SwaggerUI.serve, SwaggerUI.setup(openApiSpec));
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];
app.get('/users', (req, res) => {
    const { name } = req.query;
    if (name) {
        //@ts-ignore
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowercase()));
        res.json(filteredUsers);
    }
    else {
        res.json(users);
    }
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map