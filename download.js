import fs from 'fs';
import axios from 'axios';

const URl = 'https://api.leceipt.com';
const endpoint = '/etax/files/';
const API_Key = 'YOUR-API-KEY';

const fileId = 'file id from check.js response jobs api';

async function Download() {
  try {
    const response = await axios.get(
      URl + endpoint + fileId + '/?api-version=2021-04-22',
      {
        headers: {
          'API-Key': API_Key,
          'Content-Type': 'application/json',
        },
        responseType: 'stream',
      }
    );

    response.data.pipe(fs.createWriteStream('etax-document.pdf'));
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
}

Download();
