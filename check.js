import axios from 'axios';

const URl = 'https://api.leceipt.com';
const endpoint = '/etax/jobs/';
const API_Key = 'YOUR-API-KEY';

const id = 'document id from create document response api';

async function Check() {
  try {
    const response = await axios.get(URl + endpoint + id, {
      headers: {
        'API-Key': API_Key,
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
}

Check();
