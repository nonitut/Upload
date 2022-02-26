$(function () {
$({ n: 0 }).animate({n: 1E3 }, {
duration: 20E3,
step: function (a) {
$(".textptut").html(a | 0)
}
})
});
