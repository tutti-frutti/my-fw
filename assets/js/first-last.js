$(document).ready(function () {
    $('.words-first h2').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    })
    $('.words-last h2').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    })
})
// each() - проходим по всем элементам
// each(function) - для каждого "пройденного" элемента пишем функцию
// каждое нужное слово оборачиваем в span с помощью рег выражения
// делаем с помощью метода html - просто делаем замену html
// .replace(/(\S+)\s*$/, '<span>$1</span>') - регулярное выражение и замена