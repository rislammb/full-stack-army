import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { socialIcons } from './data';

library.add(fas, fab, far);

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '4px',
        justifyContent: 'center',
        margin: '16px 0px',
      }}
    >
      {socialIcons.map((item) => (
        <IconItem item={item} key={item.id} />
      ))}
    </div>
  );
};

function IconItem({ item: { link, color, tooltip, icon } }) {
  const [isHoverd, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      style={{
        color: isHoverd ? '#fff' : color,
        backgroundColor: isHoverd ? color : '',
        border: '1px solid #9a9a9a',
        borderRadius: '50%',
        width: '28px',
        height: '28px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.45s ease',
      }}
      title={tooltip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default App;
