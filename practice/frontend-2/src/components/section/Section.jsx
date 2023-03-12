function Section({ title, items }) {
  const itemArray = items.map((item) => <li>{item}</li>);

  return (
    <section>
      <h3>{title}</h3>
      <ul>{itemArray}</ul>
    </section>
  );
}

export default Section;
