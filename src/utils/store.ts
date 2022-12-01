import { proxy } from 'valtio';

export const store = proxy<{ starkKey: string; erc721MAddress: string }>({
  starkKey: '',
  erc721MAddress: window.localStorage.getItem('erc721m') || '',
});

export const addStarkKey = (starkKey: string) => {
  store.starkKey = starkKey;
};
