window.onload = function () {
  main();
};

function main() {
  const app = Container([
    Text('h1', 'Hello world'),
    Text('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'),
    Container([Text('h3', 'Wow'), Text('h3', 'Nice')], {
      display: 'flex',
      gap: '2rem',
    }),
  ]);

  document.getElementById('root').appendChild(app);
}

function Container(children, style = {}) {
  console.log(style);
  const div = document.createElement('div');
  Object.keys(style).forEach((key) => (div.style[key] = style[key]));

  children.forEach((child) => div.appendChild(child));

  return div;
}

function Text(tag, value) {
  const text = document.createElement(tag);
  text.innerText = value;

  return text;
}
