// 参加者用：虫食いテンプレートの JavaScript
// このファイルは「埋める部分」を残した配布用です。
// 目的: 実際に手を動かして、`plusCoin`, `saveGame`, `loadGame`, `checkUnlock` を完成させてください。

// 1) 状態の定義（変更しない）
let playerName = '';
let clickCount = 0;

// 2) 画面更新（変更しない）
function updateDisplay() {
  document.getElementById('coinCount').textContent = clickCount;
}

// 3) TODO: アンロック判定を実装してください
function checkUnlock() {
  // ヒント:
  const unlockArea =  document.getElementById('unlockArea'); // - unlockArea 要素を取得する: document.getElementById('unlockArea')
  if (clickCount >= 100) {
    unlockArea.style.display = 'block';
  } // - もし clickCount が 100 以上なら表示する（style.display = 'block'）
  else {
    unlockArea.style.display = 'none';
  }// そうでなければ非表示にする
  // ここに実装を書きましょう
}

// 4) TODO: コインを増やす共通処理を実装してください
function plusCoin() {
  // ヒント:
  clickCount += 1; // - clickCount を 1 増やす
  updateDisplay(); // - updateDisplay() を呼ぶ
  checkUnlock(); // - checkUnlock() を呼ぶ
}

// 5) TODO: 保存処理を実装してください
function saveGame() {
  // ヒント:
  // - playerName を入力欄から取得する（document.getElementById('playerName').value）
  // - オブジェクトにまとめて JSON に変換して localStorage に保存する
  const data = {
    playerName: document.getElementById('playerName').value,
    clickCount: clickCount,
  };
  localStorage.setItem('myGameData', JSON.stringify(data));
// ここに実装を書きましょう
}

// 6) TODO: 読み込み処理を実装してください
function loadGame() {
  // ヒント:
  const saved = localStorage.getItem('myGameData'); // - localStorage からデータを読む
  if (saved) {
    const data = JSON.parse(saved);
    document.getElementById('playerName').value = data.playerName || '';
    playerName = data.playerName || '';
    clickCount = data.clickCount || 0;
    updateDisplay();
    checkUnlock();
  }// - 存在する場合は playerName と clickCount を復元して、updateDisplay() と checkUnlock() を呼ぶ
  // ここに実装を書きましょう
}

// ランダム移動
function moveCoinRandomly() {
  const coin = document.getElementById('clickButton');
  
  // -50px から +50px の範囲でランダムな数値を計算
  const randomX = Math.floor(Math.random() * 101) - 50;
  
  // コインの横位置（left）を変更する
  coin.style.left = randomX + 'px';
}

// 0.3秒（300ミリ秒）ごとに上の移動処理をずっと繰り返す
setInterval(moveCoinRandomly, 300);

// 7) 初期化: イベントをつなぐ（変更しない）
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('clickButton').addEventListener('click', plusCoin);
  document.getElementById('saveButton').addEventListener('click', saveGame);
  loadGame();
});
