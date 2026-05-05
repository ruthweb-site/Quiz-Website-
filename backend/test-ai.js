const http = require('http');

const body = JSON.stringify({ topic: 'Python programming' });

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/ai/generate',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
  },
};

console.log('🚀 Sending request to /api/ai/generate ...\n');

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => {
    const json = JSON.parse(data);
    if (json.success) {
      console.log('✅ AI Quiz Generation WORKING!\n');
      json.questions.forEach((q, i) => {
        console.log(`Q${i + 1}: ${q.question}`);
        q.options.forEach((opt, idx) => {
          const marker = idx === q.correctAnswer ? '✔' : ' ';
          console.log(`  [${marker}] ${opt}`);
        });
        console.log('');
      });
    } else {
      console.error('❌ Failed:', json.message);
      console.error('Error:', json.error);
    }
  });
});

req.on('error', (e) => console.error('❌ Request error:', e.message));
req.write(body);
req.end();
