import axios from 'axios';

const URl = 'https://api.leceipt.com';
const endpoint = '/etax/documents/taxinvoices';
const API_Key = 'YOUR-API-KEY';

let company = {
  name: 'บริษัท ผู้ขายทดสอบ จำกัด',
  buildingNumber: '999',
  address: 'หมู่ 999',
  streetPrefix: 'ถ.',
  streetName: 'สาทร 999',
  subDistrictPrefix: 'แขวง',
  subDistrictCode: '100402',
  subDistrictName: 'สีลม',
  districtPrefix: 'เขต',
  districtCode: '1004',
  districtName: 'บางรัก',
  provincePrefix: '',
  provinceCode: '10',
  provinceName: 'กรุงเทพมหานคร',
  postcode: '10500',
  branchNumber: '00000',
  branchText: '(สำนักงานใหญ่)',
  taxNumberType: 'TXID',
  taxId: '1234567890123',
  phoneCountryCode: '+66',
  phone: '812345678',
  email: 'test@test.com',
  unstructure: false,
};

let customer = {
  name: 'บริษัท ลูกค้าทดสอบ จำกัด',
  addressLineOne: '999 หมู่ 999 ถ.สาทร 99',
  addressLineTwo: 'แขวงสีลม เขตบางรัก กรุงเทพมหานคร',
  postcode: '10500',
  branchNumber: '00000',
  branchText: '(สำนักงานใหญ่)',
  taxNumberType: 'TXID',
  taxId: '1234567890123',
  phoneCountryCode: '+66',
  phone: '812345678',
  email: 'test@test.com',
  unstructure: true,
};

let items = [
  {
    number: 1,
    description: 'ค่าอาหารและเครื่องดื่ม',
    quantity: 1,
    unitCode: '',
    unitName: '',
    price: 1500,
    discount: 0,
    percentVat: 7,
    percentVatText: '',
    total: 1500,
  },
];

let refer = {
  // สามารถเว้นว่างได้ ถ้า reIssue เป็น false
  typeCode: '388',
  typeName: 'ใบกำกับภาษี',
  number: 'TIV20210300000',
  date: '2021-03-17T17:00:00.000Z',
  dateBE: '18/03/2564',
  reasonCode: 'TIVC01',
  reasonName: 'ชื่อผิด',
};

let data = {
  company: company, // company จากข้อมูลก่อนหน้า
  customer: customer, // customer จากข้อมูลก่อนหน้า
  date: '2021-03-23T14:50:21.073Z',
  dateBE: '23/03/2564',
  dateCE: '23/03/2021',
  items: items, // items จากข้อมูลก่อนหน้า
  note: 'ทดสอบหมายเหตุ',
  number: 'TIV20210300001',
  receivedBy: 'สมชาย',
  percentVat: 7,
  amountTotal: 10000,
  nonVatPriceTotal: 0,
  zeroVatPriceTotal: 0,
  vatPriceTotal: 10000,
  vatTotal: 700,
  grandTotal: 10700,
  discount: 0,
  reIssue: true,
  refer: refer, // refer จากข้อมูลก่อนหน้า
};

async function CreateTaxinvoice() {
  const response = await axios.post(URl + endpoint, data, {
    headers: {
      'API-Key': API_Key,
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}

console.log(CreateTaxinvoice());
