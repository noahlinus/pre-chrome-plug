const { config } = chrome.extension.getBackgroundPage();

function init() {
  const btnClose = document.getElementById('btn-close');
  btnClose.onclick = () => {
    if (config.open) {
      config.open = false;
      btnClose.innerText = '打开';
    } else {
      config.open = true;
      btnClose.innerText = '关闭';
    }
  }
}

init();
