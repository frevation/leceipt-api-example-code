import axios from 'axios';

const URl = 'https://api.leceipt.com';
const endpoint = '/etax/documents/receipts';
const API_Key = 'YOUR-API-KEY';

// unstructure เป็น true

// let customer = {
//   name: 'บริษัท ลูกค้าทดสอบ จำกัด',
//   addressLineOne: '999 หมู่ 999 ถ.สาทร 99',
//   addressLineTwo: 'แขวงสีลม เขตบางรัก กรุงเทพมหานคร',
//   postcode: '10500',
//   branchNumber: '00000',
//   taxNumberType: 'TXID',
//   taxId: '1234567890123',
//   phone: '0812345678',
//   email: 'test@test.com',
//   unstructure: true,
// };

// unstructure เป็น false
let customer = {
  name: 'บริษัท ลูกค้าทดสอบ จำกัด',
  buildingNumber: '99',
  address: 'หมู่ที่ 99',
  streetName: 'สาทร 99',
  branchNumber: '00000',
  subDistrictCode: '100402',
  districtCode: '1004',
  provinceCode: '10',
  postcode: '10500',
  taxNumberType: 'TXID',
  taxId: '1234567890123',
  phoneCountryCode: '+66',
  phone: '0812345678',
  email: 'test@test.com',
  unstructure: false,
};

let items = [
  {
    number: 1,
    description: 'ค่าอาหารและเครื่องดื่ม',
    quantity: 1,
    unitCode: 'EA',
    price: 1500,
    discount: 0,
    percentVat: 0,
  },
  {
    number: 2,
    description: 'ค่าอาหารและเครื่องดื่ม',
    quantity: 1,
    unitCode: '',
    price: 1000,
    discount: 0,
    percentVat: 7,
  },
];

let refer = {
  // สามารถเว้นว่างได้ ถ้า reIssue เป็น false
  number: 'TIV20210300000',
  dateBE: '18/03/2564',
  reasonCode: 'RCTC01',
};

let data = {
  number: 'TIV20210300001',
  dateBE: '23/03/2564',
  includeVat: false,
  items: items, // items จากข้อมูลก่อนหน้า
  discount: 0,
  language: 'th',
  customer: customer, // customer จากข้อมูลก่อนหน้า
  note: 'ทดสอบหมายเหตุ',
  receivedBy: 'สมชาย',
  reIssue: true,
  refer: refer, // refer จากข้อมูลก่อนหน้า
};

async function CreateReceipt() {
  const response = await axios.post(URl + endpoint, data, {
    headers: {
      'API-Key': API_Key,
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}

console.log(CreateReceipt());
