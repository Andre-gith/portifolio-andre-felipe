const tabs = document.querySelectorAll('.skill-tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));

    const id = tab.getAttribute('data-tab');

    document.getElementById('tab-' + id).classList.add('active');
    tab.classList.add('active');
  });
});
