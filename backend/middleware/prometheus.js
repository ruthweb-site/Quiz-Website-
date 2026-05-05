const client = require('prom-client');

// Create a Registry
const register = new client.Registry();

// Add default metrics
client.collectDefaultMetrics({ register });

// Custom metrics
const quizSubmissionsCounter = new client.Counter({
  name: 'quiz_submissions_total',
  help: 'Total number of quiz submissions',
  labelNames: ['category', 'subcategory']
});
register.registerMetric(quizSubmissionsCounter);

const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});
register.registerMetric(httpRequestDurationMicroseconds);

module.exports = {
  register,
  quizSubmissionsCounter,
  httpRequestDurationMicroseconds
};
