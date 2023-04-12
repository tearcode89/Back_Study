export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: '내가 만든 API 너를 위해 구웠지~',
            version: '1.0.0',
        },
    },
    apis: ['./swagger/*.swagger.js'], // files containing annotations as above
};