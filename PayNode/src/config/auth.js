export default
{
  secret: 'a7314ac75a51f449fd6444a9acdf4d4b',
  tempopara_expira: '7d',

  amount: 21000,
  card: {
    card_number: '4111111111111111',
    card_cvv: '123',
    card_expiration_date: '0922',
    card_holder_name: 'Morpheus Fishburne',
  },
  installments: 12,
  customer: {
    name: 'Morpheus Fishburne',
    type: 'individual',
    country: 'br',
    email: 'mopheus@nabucodonozor.com',
    external_id: '#3311',
    documents: [
      {
        type: 'cpf',
        number: '01225076145',
      },
    ],
    phone_numbers: ['+5511999998888', '+5511888889999'],
    birthday: '1965-01-01',
  },
  billing: {
    name: 'Trinity Moss',
    address: {
      country: 'br',
      state: 'sp',
      city: 'Cotia',
      neighborhood: 'Rio Cotia',
      street: 'Rua Matrix',
      street_number: '9999',
      zipcode: '06714360',
    },
  },
  items: [
    {
      id: 'r123',
      title: 'Red pill',
      unit_price: 10000,
      quantity: 1,
      tangible: true,
    },
    {
      id: 'b123',
      title: 'Blue pill',
      unit_price: 10000,
      quantity: 1,
      tangible: true,
    },
  ],

};
