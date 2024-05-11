export const date_validation = {
  name: 'date',
  label: 'date',
  id: 'date',
  placeholder: 'dd/mm/yyyy',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const income_validation = {
  name: 'name',
  label: 'Income',
  type: 'text',
  id: 'name',
  placeholder: 'Source of income',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}


export const amount_validation = {
  name: 'num',
  amountLabel: 'Amount',
  amountType: 'number',
  amountId: 'num',
  currencyId: 'currency',
  amountPlaceholder: 'Amount earned',
  currencyPlaceholder: 'XXX',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    min: {
      value: 0.1,
      message: 'positive only',
    },
  },
}

export const savings_bucket_data = {
  id: 'num',
  placeholder: 'Category',
  label: 'Savings goal'
}