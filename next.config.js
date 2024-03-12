module.exports = {
    async redirects() {
      return [
        // Basic redirect
        {
          source: '/api/:slug',
          destination: 'https://ylw5nsj4f3.execute-api.us-east-1.amazonaws.com',
          permanent: true,
        },
      ]
    },
  }