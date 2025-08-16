import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Viziopath API',
      version: '1.0.0',
      description: 'REST API for Viziopath (auth, projects, programs, posts, contact)'
    },
    servers: [
      { url: 'http://localhost:5000/api' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }
      }
    }
  },
  apis: []
});