

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const increase = (number: number) => {
    return {
        type: INCREASE,
        number
    }
}

export const decrease = (number: number) => {
    return {
        type: DECREASE,
        number
    }
}
