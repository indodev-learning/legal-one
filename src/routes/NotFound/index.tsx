import Header from '../../components/Header';
import './styles.css';

const NotFound = () => (
  <>
    <Header />
    <div className="separator" />
    <div className="wrapper">
      <div className="notFound">
        404 Not Found
      </div>
    </div>
  </>
);

export default NotFound;