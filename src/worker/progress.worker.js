import CryptoJS from 'crypto-js';

let progress = 0;

// eslint-disable-next-line
onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.profile.engine === 'passnexuser') {
    let hashbase = '';
    const software = ` ${data.profile.software}`;
    const hashpro = CryptoJS.MD5(software).toString();
    const source = `${data.password}${hashpro}0`;
    hashbase = CryptoJS.MD5(source).toString();
    for (let i = 0; i < data.profile.strength; i += 1) {
      hashbase = CryptoJS.MD5(hashbase).toString();
      hashbase = Buffer.from(hashbase).toString('base64');
      hashbase = hashbase.substr(0, data.profile.length);
      if ((((i + 1) / data.profile.strength) * 100) - progress >= 1) {
        progress = ((i + 1) / data.profile.strength) * 100;
        postMessage(JSON.stringify({ event: 'progress', data: progress }));
      }
    }
    postMessage(JSON.stringify({ event: 'done', data: hashbase }));
    close();
  } else if (data.profile.engine === 'cook') {
    const salt = CryptoJS.SHA512(`${data.profile.software}${data.profile.account}`).toString(CryptoJS.enc.Base64);
    let hash = data.password;
    for (let i = 0; i < data.profile.strength; i += 1) {
      hash = CryptoJS.SHA512(`${hash}${salt}`).toString(CryptoJS.enc.Base64).substr(0, data.profile.length);
      if ((((i + 1) / data.profile.strength) * 100) - progress >= 1) {
        progress = ((i + 1) / data.profile.strength) * 100;
        postMessage(JSON.stringify({ event: 'progress', data: progress }));
      }
    }
    postMessage(JSON.stringify({ event: 'done', data: hash }));
    close();
  }
};
