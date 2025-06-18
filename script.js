function createCard(value) {
  if (value) {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = value;
    document.getElementById('cardList').appendChild(card);
  }
}

// DOMContentLoadedイベントでイベントリスナーを設定
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('createButton');
  const input = document.getElementById('cardInput');
  
  button.addEventListener('click', function() {
    const value = input.value.trim();
    if (value) {
      createCard(value);
      input.value = ''; // 入力フィールドをクリア
    }
  });
  
  // Enterキーでもカードを作成できるようにする
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const value = input.value.trim();
      if (value) {
        createCard(value);
        input.value = ''; // 入力フィールドをクリア
      }
    }
  });
});