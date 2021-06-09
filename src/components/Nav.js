import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


const Nav = ({storiesStatus, setStoriesStatus}) => {

  const openStoriesHandler = () => {
    setStoriesStatus(!storiesStatus)
  }

  return (
    <nav>
      <h1>zzZZzzzzZZ</h1>
      <button className={storiesStatus ? 'stories-active' : ''} onClick={openStoriesHandler}>
      Night Stories
      <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
   );
}

export default Nav;