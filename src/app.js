const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

for (const button of document.querySelectorAll('[data-copy-code]')) {
  button.addEventListener('click', async () => {
    const code = button.dataset.copyCode;
    try {
      await navigator.clipboard.writeText(code);
      const original = button.textContent;
      button.textContent = 'Kod kopyalandı';
      window.setTimeout(() => { button.textContent = original; }, 1800);
    } catch {
      button.textContent = code;
    }
  });
}
