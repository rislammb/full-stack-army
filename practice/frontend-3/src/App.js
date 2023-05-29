import React from 'react';
import { finalMenu, product } from './data';

const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {finalMenu.map((menu) => (
          <div key={menu.id}>
            <p>{menu?.text}</p>
            {menu.children.length > 0 && (
              <ul>
                {menu.children.map((child) => (
                  <li key={child.id}>{child?.text}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <h3>Breadcrumbs</h3>
      <div>
        {product.breadcrumbs.map((item, index) => (
          <React.Fragment key={item.text}>
            <a href={item.link} style={{ display: 'inline-block' }}>
              {item.text}
            </a>
            {index < product.breadcrumbs.length - 1 && <span>{'  /  '}</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default App;
