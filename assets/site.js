(() => {
  const codes = [107,101,104,114,105,98,97,114,49,57,53,57,64,103,109,97,105,108,46,99,111,109];
  const address = codes.map((code) => String.fromCharCode(code)).join('');
  document.querySelectorAll('[data-contact]').forEach((element) => {
    const subject = element.getAttribute('data-subject') || 'TV Remote Control | Universal Support';
    element.setAttribute('href', `mailto:${address}?subject=${encodeURIComponent(subject)}`);
  });

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
