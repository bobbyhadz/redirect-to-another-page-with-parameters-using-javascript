console.log('bobbyhadz.com');

const button = document.getElementById('btn');

button.addEventListener('click', () => {
  const url = 'https://example.com';
  window.location.href = `${url}?key1=value1&key2=value2`;
});
