// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((sumAccum, currentValue) => sumAccum + currentValue)

}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            return "10"
        } else if (a === c || a === b || c === b) {
            return "01"
        } else {
            return "11"
        }
    } else {
        return "00"
    }
    // В return стоит "заглушка", чтоб typescript не ругался

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(n: number): number {
    const f = String(n).split("")
    let s = 0
    for (let i = 0; i < f.length; i++) {

        s = s + Number(f[i])
    }
    return s
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let one = 0
    let two = 0
    for (let i = 0; i < arr.length; i++) {
        if ( i % 2 === 0) {
            two = two + arr[i]
        } else {
            one = one + arr[i]
        }


    }
    return two>one//...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return []
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    if (N > 0) {
        return N + sumFirstNumbers(N - 1)
    } else {
        return 0
    }
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}

let company = {
    menegment: [{ name: "григоревна ", bablo: 25000 }, { name: "Григорович", bablo: 25000 }],

    tractorteam: {
        menegmentTr: [{ name: 'Скоробогатько', bablo: 9000 }, { name: "Ковчак", bablo: 6000 }],
        siniorWorker: [{ name: 'корх', bablo: 8000 }, { name: "Обжа", bablo: 11000 }]
    },
    farmTeam: {
        menegmentTr: [{ name: "Петя ", bablo: 8000 }, { name: "Лена", bablo: 10000 }]
    }

};


function sumpay(depart) {
    if (Array.isArray(depart))
        return depart.reduce((prevValue, item) => prevValue += item.bablo, 0);
    else {
        let summ = 0;
        for (Har in depart) {
            summ += sumpay(depart[Har]);
        };

        return summ;

    };

};

console.log(sumpay(company.menegment));
