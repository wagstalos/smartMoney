import {getUUID} from './UUID';
import {getRealm} from './Realm';

export const getDefaultCategories = () => {
  return [
    {
      id: getUUID(),
      name: 'Alimentação',
      color: '#1BBC9B',
      isDebit: true,
      order: 0,
    },
    {
      id: getUUID(),
      name: 'Restaurantes e Bares',
      color: '#16A086',
      isDebit: true,
      order: 1,
    },
    {
      id: getUUID(),
      name: 'Casa',
      color: '#1BA39C',
      isDebit: true,
      order: 2,
    },
    {
      id: getUUID(),
      name: 'Compras',
      color: '#13d6be',
      isDebit: true,
      order: 3,
    },
    {
      id: getUUID(),
      name: 'Saúde',
      color: '#0F6177',
      isDebit: true,
      order: 4,
    },
    {
      id: getUUID(),
      name: 'Dívidas e Empréstimos',
      color: '#76448e',
      isDebit: true,
      order: 5,
    },
    {
      id: getUUID(),
      name: 'Educação',
      color: '#9363aa',
      isDebit: true,
      order: 6,
    },
    {
      id: getUUID(),
      name: 'Família e Filhos',
      color: '#a870d3',
      isDebit: true,
      order: 7,
    },
    {
      id: getUUID(),
      name: 'Impostos e Taxas',
      color: '#b282e8',
      isDebit: true,
      order: 8,
    },
    {
      id: getUUID(),
      name: 'Investimentos',
      color: '#d4a6ff',
      isDebit: true,
      order: 9,
    },
    {
      id: getUUID(),
      name: 'Lazer',
      color: '#828af3',
      isDebit: true,
      order: 10,
    },
    {
      id: getUUID(),
      name: 'Mercado',
      color: '#6F88FC',
      isDebit: true,
      order: 11,
    },
    {
      id: getUUID(),
      name: 'Outras Despesas',
      color: '#45E3FF',
      isDebit: true,
      order: 12,
    },

    {
      id: getUUID(),
      name: 'Empréstimos',
      color: '#013562',
      isCredit: true,
      order: 1,
    },
    {
      id: getUUID(),
      name: 'Investimentos',
      color: '#0065A0',
      isCredit: true,
      order: 2,
    },
    {
      id: getUUID(),
      name: 'Salário',
      color: '#017AAE',
      isCredit: true,
      order: 3,
    },
    {
      id: getUUID(),
      name: 'Outras Receitas',
      color: '#0098C5',
      isCredit: true,
      order: 4,
    },
    {
      id: getUUID(),
      name: 'Saldo Inicial',
      color: '#52ecc6',
      isInit: true,
      order: 5,
    },
  ];
};

export const getAllCategories = async () => {
  const realm = await getRealm();
  return realm.objects('Category').sorted('order');
};

export const getDebitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isDebit = true AND isInit = false')
    .sorted('order');
};

export const getCreditCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isCredit = true AND isInit = false')
    .sorted('order');
};

export const getInitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isInit = true')
    .sorted('order')['0'];
};
