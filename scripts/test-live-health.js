const http = require('http');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkGet(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, length: data.length, body: data });
      });
    }).on('error', (err) => resolve({ status: 500, error: err.message }));
  });
}

async function checkImageUpload() {
  return new Promise((resolve) => {
    const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
    const parts = [
      `--${boundary}\r\n`,
      'Content-Disposition: form-data; name="image"; filename="healthcheck-test.png"\r\n',
      'Content-Type: image/png\r\n\r\n',
    ];
    
    const pngHeader = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
    const footer = Buffer.from(`\r\n--${boundary}--\r\n`);
    const headerBuf = Buffer.from(parts.join(''));
    const payload = Buffer.concat([headerBuf, pngHeader, footer]);

    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: '/api/interview/upload-image',
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': payload.length,
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, body: data });
      });
    });

    req.on('error', (err) => resolve({ status: 500, error: err.message }));
    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('Testing live server & database...\n');

  // 1. Check Full 1001 page
  const fullRes = await checkGet('/dsa-list/full');
  console.log(`1. [GET /dsa-list/full] Status: ${fullRes.status} | Has 1001 Explorer: ${fullRes.body?.includes('1,001')}`);

  // 2. Check 300 Curated page
  const full300Res = await checkGet('/dsa-list/full-300');
  console.log(`2. [GET /dsa-list/full-300] Status: ${full300Res.status} | Has 377 Explorer: ${full300Res.body?.includes('377')}`);

  // 3. Check Image upload API
  const uploadRes = await checkImageUpload();
  console.log(`3. [POST /api/interview/upload-image] Status: ${uploadRes.status} | Response: ${uploadRes.body}`);

  // 4. Check Neon PostgreSQL database
  try {
    const articleCount = await prisma.article.count();
    console.log(`4. [Prisma -> Neon DB] Connected! Total articles in PostgreSQL: ${articleCount}`);
  } catch (dbErr) {
    console.error('4. [Prisma -> Neon DB] Error:', dbErr.message);
  } finally {
    await prisma.$disconnect();
  }

  console.log('\nAll systems operational! 🚀');
}

main();
