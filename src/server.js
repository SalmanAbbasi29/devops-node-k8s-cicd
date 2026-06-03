const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'Professional DevOps CI/CD Project - Updated Version';
const STUDENT_NAME = process.env.STUDENT_NAME || 'M Salman';
const APP_VERSION = process.env.APP_VERSION || '1.0.0';

let visitorCounter = 0;
const startedAt = new Date();

function getAppData() {
  return {
    appName: APP_NAME,
    studentName: STUDENT_NAME,
    version: APP_VERSION,
    timestamp: new Date().toISOString(),
    containerId: os.hostname(),
    visitors: visitorCounter,
    uptimeSeconds: Math.floor(process.uptime()),
    startedAt: startedAt.toISOString(),
    environment: process.env.NODE_ENV || 'production'
  };
}

app.get('/', (req, res) => {
  visitorCounter += 1;
  const data = getAppData();

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${data.appName}</title>
  <style>
    :root { font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #e5eefc; background: #07111f; }
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: radial-gradient(circle at top left, #184e77, transparent 36%), linear-gradient(135deg, #07111f, #0b1b32); }
    .card { width: min(920px, 92vw); border: 1px solid rgba(255,255,255,.14); border-radius: 28px; padding: 34px; background: rgba(7,17,31,.78); box-shadow: 0 26px 70px rgba(0,0,0,.35); backdrop-filter: blur(14px); }
    .badge { display: inline-flex; gap: 8px; align-items: center; padding: 8px 12px; border-radius: 999px; background: rgba(61, 178, 255, .14); color: #8fd3ff; font-weight: 700; font-size: 13px; letter-spacing: .04em; text-transform: uppercase; }
    h1 { margin: 18px 0 10px; font-size: clamp(32px, 5vw, 58px); line-height: 1.02; }
    .subtitle { color: #b8c7dc; font-size: 18px; max-width: 760px; line-height: 1.6; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 16px; margin-top: 28px; }
    .metric { padding: 18px; border-radius: 18px; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.09); }
    .metric span { display: block; color: #9fb1c9; font-size: 13px; margin-bottom: 8px; }
    .metric strong { font-size: 20px; word-break: break-word; }
    .footer { margin-top: 28px; color: #92a3bb; font-size: 14px; }
    a { color: #8fd3ff; }
  </style>
</head>
<body>
  <main class="card">
    <div class="badge">🚀 Live on AWS EC2 + Minikube</div>
    <h1>${data.appName}</h1>
    <p class="subtitle">This Project is made by M Salman Abbasi .A professional DevOps project showing a Node.js app running inside Docker, stored in Amazon ECR, deployed on Kubernetes, and updated automatically through GitHub Actions CI/CD.</p>
    <section class="grid" aria-label="Application dynamic information">
      <div class="metric"><span>Current Timestamp</span><strong>${data.timestamp}</strong></div>
      <div class="metric"><span>Container ID / Hostname</span><strong>${data.containerId}</strong></div>
      <div class="metric"><span>Visitor Counter</span><strong>${data.visitors}</strong></div>
      <div class="metric"><span>App Version</span><strong>${data.version}</strong></div>
      <div class="metric"><span>Uptime</span><strong>${data.uptimeSeconds}s</strong></div>
      <div class="metric"><span>Student</span><strong>${data.studentName}</strong></div>
    </section>
    <p class="footer">Health check endpoint: <a href="/health">/health</a> | JSON info endpoint: <a href="/api/info">/api/info</a></p>
  </main>
</body>
</html>`);
});

app.get('/api/info', (req, res) => {
  res.json(getAppData());
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: APP_NAME,
    timestamp: new Date().toISOString(),
    containerId: os.hostname()
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found', path: req.originalUrl });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`${APP_NAME} is running on port ${PORT}`);
});
