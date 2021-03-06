import { useMemo } from 'react';
import shallow from 'zustand/shallow';
import { selectGasSlice } from '~/store/GasSlice';
import { useStore } from '~/store/main';
import { selectProvider } from '~/store/Web3Slice';

// fetch gas price from store
export const useGasPrice: () => number = () => {
    const provider = useStore(selectProvider);
    const { gasPrice, getGasPrice } = useStore(selectGasSlice, shallow);

    useMemo(() => {
        if (provider !== undefined) {
            getGasPrice(provider);
        }
    }, [provider?.network]);

    return gasPrice;
};
