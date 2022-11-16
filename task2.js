document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.j-btn-screen')

  btn.addEventListener('click', () => {
    alert(`
    Размеры экрана(монитора):
      Ширина: ${window.screen.width} / Высота: ${window.screen.height}
    Внутренний размер окна браузера (с учётом полосы прокрутки):
      Ширина: ${window.innerWidth} / Высота: ${window.innerHeight}
    Размеры области просмотра (без учёта полосы прокрутки):
      Ширина: ${document.documentElement.clientWidth} / Высота: ${document.documentElement.clientHeight}
    `)
  })
})