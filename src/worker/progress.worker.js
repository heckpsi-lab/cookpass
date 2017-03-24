let progress = 0;

while (progress < 100) {
  progress += 1;
  postMessage(JSON.stringify({ event: 'progress', data: progress }));
}

postMessage(JSON.stringify({ event: 'done', data: '12345' }));
