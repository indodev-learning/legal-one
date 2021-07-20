import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AgentTable from './AgentTable';

const Agent = () => (
  <>
    <Header />
    <div className="separator" />
    <div className="wrapper">
      <h3>Details for Agent</h3>
      <AgentTable />
    </div>
    <Footer />
  </>
);

export default Agent;