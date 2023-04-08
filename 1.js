const cels = Number.parseInt(prompt('Введите количество градусов по Цельсию: '))
const fahren = (9/5)*cels+32
const result = fahren.toFixed(1)
alert (`Цельсий: ${cels}, Фаренгейт: ${result}`)