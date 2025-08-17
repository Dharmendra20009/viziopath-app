import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Viziopath API',
      version: '1.0.0',
      description: 'REST API for Viziopath (auth, projects, programs, posts, contact)',
      contact: {
        name: 'API Support',
        email: 'support@viziopath.com'
      },
      license: {
        name: 'MIT',
      }
    },
    servers: [
      { url: process.env.API_URL || 'http://localhost:5000/api' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: { 
          type: 'http', 
          scheme: 'bearer', 
          bearerFormat: 'JWT' 
        }
      }
    }
  },
  // Swagger will scan route files for documentation
  apis: ['./api/*.js', './models/*.js'],
});
