import './App.css';
import Articles from './component/Articles';
import Footer from './component/Footer';
import First from './component/Header';
import Introduction from './component/Introduction';
import Services from './component/Services';

function App() {
  return (
    <>
      <main>
        <First />
        <Introduction />
        <Services />
        <Articles />
        <Footer />
      </main>
    </>
  );
}

export default App;
