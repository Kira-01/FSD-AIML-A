import Book from './Component/book.jsx'
import Footer from './Component/footer.jsx';
import Header from './Component/header.jsx';

const App = () => {
    return (
    <div>
      <Header />
    <div className='booklist'>
      <Book />
      <Book />
      <Book />
    </div>
    <Footer />
    </div>
  )
}

export default App;
