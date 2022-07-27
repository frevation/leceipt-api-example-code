import axios from 'axios';

const URl = 'https://api.leceipt.com';
const endpoint = '/etax/documents/receipts-taxinvoices-abb';
const API_Key = 'YOUR-API-KEY';

let items = [
  {
    number: 1,
    description: 'ค่าอาหารและเครื่องดื่ม',
    quantity: 1,
    unitName: 'ชิ้น/อัน',
    price: 1500,
    discount: 0,
    percentVat: 0,
  },
  {
    number: 2,
    description: 'ค่าอาหารและเครื่องดื่ม',
    quantity: 1,
    unitName: '',
    price: 1000,
    discount: 0,
    percentVat: 7,
  },
];

let refer = {
  // สามารถเว้นว่างได้ ถ้า reIssue เป็น false
  number: 'TIV20210300000',
  dateBE: '18/03/2564',
  reasonCode: 'TIVC01',
};

let data = {
  number: 'TIV20210300001',
  dateBE: '23/03/2564',
  includeVat: false,
  items: items, // items จากข้อมูลก่อนหน้า
  discount: 0,
  language: 'th',
  note: 'ทดสอบหมายเหตุ',
  receivedBy: 'สมชาย',
  reIssue: true,
  refer: refer, // refer จากข้อมูลก่อนหน้า
};

async function CreateReceiptTaxInvoiceAbb() {
  try {
    const response = await axios.post(URl + endpoint, data, {
      headers: {
        'API-Key': API_Key,
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
}

CreateReceiptTaxInvoiceAbb();
