export declare const openApiSpec: {
    openapi: string;
    info: {
        title: string;
        description: string;
        version: string;
    };
    servers: {
        url: string;
    }[];
    paths: {
        "/users": {
            get: {
                summary: string;
                description: string;
                parameters: {
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                    };
                    required: boolean;
                    description: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    components: {
        schemas: {
            User: {
                type: string;
                properties: {
                    id: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    name: {
                        type: string;
                        description: string;
                    };
                };
                required: string[];
            };
        };
    };
};
//# sourceMappingURL=openapispec.d.ts.map