export const customerDefinition = {
  name: 'Customer',
  properties: {
    id: {
      type: 'string',
      id: true,
      required: true,
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    ssn: {
      type: 'string',
    },
    customerSince: {
      type: 'date',
    },
    street: {
      type: 'string',
    },
    state: {
      type: 'string',
    },
    city: {
      type: 'string',
    },
    zip: {
      type: 'string',
    },
    lastUpdated: {
      type: 'date',
    },
  },
};
