/**
 * 排除Pres不受翻译
 */
function excludePres() {
  for (let item of document.getElementsByTagName('pre')) {
    item.classList.add('notranslate');
  }
  for (let item of document.getElementsByClassName('d2h-wrapper')) {
    item.classList.add('notranslate');
  }
  for (let item of document.getElementsByClassName('code-excerpt')) {
    item.classList.add('notranslate');
  }
}

/**
 * 还原
 */
function restorePres() {
  for (let item of document.getElementsByTagName('pre')) {
    item.classList.remove('notranslate');
  }
}

excludePres();
