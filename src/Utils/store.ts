import { create } from "zustand";

//define the types

type countStoreType = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void
}

export const useCounterStore = create<countStoreType>((set) => ({
    count: 0,
    increment: (): void => {
        set((state) => ({ count: state.count + 1 }))
    },
    decrement: (): void => {
        //check if the state is zero
        set((state) => {
            if (state.count === 0) {
                return {}
            } else {
                return {
                    count: state.count - 1
                }
            }
        })

    },
    reset: (): void => {
        set((state) => ({ count: state.count = 0 }))
    }
}))