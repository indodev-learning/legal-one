import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LogTable from './LogTable';

const Home = () => (
  <>
    <Header />
    <div className="separator" />
    <div className="wrapper">
      <LogTable />
    </div>
    <Footer />
  </>
);

export default Home;