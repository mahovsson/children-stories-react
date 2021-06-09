import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
  return (
    <nav>
      <h1>Pohadkovo</h1>
      <button className='stories-active'>
      pohadky
      <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
   );
}

export default Nav;