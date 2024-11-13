import { useState } from 'react';
import '../sass/collapse.scss';

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCollapse = () => setIsOpen(!isOpen);

    return (
        <div className="collapse">
          <div className="collapse-title" onClick={handleCollapse}>
            <h2>{title}</h2>
            <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
          </div>
          <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
            {children}
          </div>
        </div>
      );
}

export default Collapse;