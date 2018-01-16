export class ProfileInterface {
  first_name: string;
  last_name: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  address: string;
  phone: string;
  mail: string;
}

export class Adress {
  first_name: string;
  last_name: string;
  country: string;
  state: string;
  city: string;
  province: string;
  district: string;
  zip: string;
  address: string;
  house: string;
  unit: string;
  apartment: string;
  phone: string;
}

export class History {
  id: number;
  date: string;
  invoice: string;
  description: string;
  price: string;
  balance: string;
}
