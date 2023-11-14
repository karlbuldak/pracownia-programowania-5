class Invoice{
    name: string = '';
    quantity: number = 0;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}

enum Unit{
    meters = 'm',
    grams = 'g',
}
enum Tax{
    t23 = 0.23,
    t5 = 0.05,
}

