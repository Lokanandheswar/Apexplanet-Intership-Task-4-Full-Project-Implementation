document.getElementById('feedbackForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const comment = document.getElementById('comment').value;

  const res = await fetch('/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, comment }),
  });

  if (res.ok) {
    document.getElementById('feedbackForm').reset();
    loadFeedback();
  }
});

async function loadFeedback() {
  const res = await fetch('/feedback');
  const feedback = await res.json();

  const list = document.getElementById('feedbackList');
  list.innerHTML = '';

  feedback.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.username}: ${item.comment}`;
    list.appendChild(li);
  });
}

// Load feedback on page load
loadFeedback();
