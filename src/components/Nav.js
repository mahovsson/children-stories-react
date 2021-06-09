import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


const Nav = ({storiesStatus, setStoriesStatus}) => {

  const openStoriesHandler = () => {
    setStoriesStatus(!storiesStatus)
  }

  return (
    <nav>
      <h1>Pohadkovo</h1>
      <button className={storiesStatus ? 'stories-active' : ''} onClick={openStoriesHandler}>
      pohadky
      <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
   );
}

export default Nav;