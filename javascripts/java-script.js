$(function () {
$({ n: 0 }).animate({n: 1E3 }, {
duration: 20E3,
step: function (a) {
$(".textptut").html(a | 0)
}
})
});
//jQuery метод .animate() позволяет выполнить пользовательскую анимацию,
// основанную на изменении CSS свойств для выбранных элементов.
// duration -- длительность анимации в мс
//float - с плавающей точкой 1E3 == 1×10³== 1000 - 1 секунда
// 20E3 == 20×10³==20000 продолжительность перехода анимации - 20 секунд
//step: function - ступенчатая функция
