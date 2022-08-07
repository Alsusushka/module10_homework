let value = prompt('Введите значение');
value = +value;

switch (typeof value) {
    case 'number':
        if (isNaN(value)) {
            console.log('Упс, кажется, вы ошиблись');
        } else {
            if (value % 2) {
                console.log('нечётное');
            } else {
                console.log('чётное');
            }
        }
        break;
    default:
        console.log('Упс, кажется, вы ошиблись');
}
