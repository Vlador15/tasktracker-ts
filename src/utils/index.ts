interface IRand {
    (min?: number, max?: number): number;
}

// Генератор случайных чисел
export const getRandID: IRand = (min = 1000, max = 9999): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
