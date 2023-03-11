import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div className={classes.app}>
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <h3>Brand Name</h3>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>Link one</li>
            <li>Link two</li>
            <li>Link three</li>
          </ul>
        </div>
      </nav>

      <main className={classes.main}>{props.children}</main>

      <footer className={classes.footer}>
        <h3>Footer</h3>
        <ul>
          <li>Footer link one</li>
          <li>Footer link two</li>
          <li>Footer link three</li>
        </ul>
      </footer>
    </div>
  );
}

export default Layout;
