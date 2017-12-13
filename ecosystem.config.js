module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'homepage',
      script    : './bin/www',
      env: {
        PORT: '3001'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

  ],
};
