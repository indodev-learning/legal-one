import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from "react-router-dom";
import CallTable from './CallTable';

const Call = () => {
  const location = useLocation();
  const number = location.pathname.split('+')[1] || '';

  return (
    <>
      <Header />
      <div className="separator" />
      <div className="wrapper">
        <h3>Details for number +{number}</h3>
        <CallTable />
      </div>
      <Footer />
    </>
  );
}


export default Call;