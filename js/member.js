 const form = document.getElementById('commentForm');
  const resultDiv = document.getElementById('result');

  // Ambil data dari localStorage saat halaman dibuka
  const savedComments = JSON.parse(localStorage.getItem('fanComments')) || [];

  // Fungsi untuk menampilkan komentar
  function displayComments() {
    resultDiv.innerHTML = '';
    savedComments.forEach(comment => {
      resultDiv.innerHTML += `
        <div style="background: #fce5ec; padding: 1rem; border-left: 5px solid #ff6ea0; margin-top: 1rem; border-radius: 6px;">
          <strong>${comment.name}:</strong><br>
          <p>${comment.message}</p>
        </div>
      `;
    });
  }

  // Tampilkan saat pertama kali
  displayComments();

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && message) {
      const newComment = { name, message };
      savedComments.push(newComment);
      localStorage.setItem('fanComments', JSON.stringify(savedComments));
      displayComments();
      form.reset();
    }
  });