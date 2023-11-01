import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Farm from './components/form';
import Card from './components/card';
import Modal from './components/modal';

function App() {
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [modal, setModal] = useState(false);
  const [activeBook, setBook] = useState({});
  const [id,setId]=useState('');
  const [updateBook,setUpdateBook]=useState(false)

/** fisrt time load all books */
  useEffect(() => {
    fetch('/books').then((res) => res.json()).then(data => setData(data.list))
  }, [])

  /** filter book */
  useEffect(()=>{
    fetch('/books').then((res) => res.json()).then(data => {
     if(data && data.list.length){
      let newData= data?.list && data?.list?.filter((item,index)=> item._id.slice(0, id.length)===String(id))
      console.log("newData", newData);
      setData(newData);
        // setData(data.list)
     }
    })

  }, [id])

  function fetcAllBook() {
    setView(!view)
  }

  function viewBook(data) {
    setBook(data)
    setModal(true)
  }

  function closeModal() {
    setModal(false)
  }

  async function deleteHandler(bookID) {
    try {
      const response = await fetch("/deletebook", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: bookID }),
      });


      if (response.ok) {
        alert('Book deleted successfully');
        fetch('/books').then((res) => res.json()).then(data => setData(data.list))
      } else {
        console.error('Error submitting form data');
        alert('something went wrong')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function onChangeHandler(e){
    e.preventDefault();
    setId(e.target.value);
  };

  function updateHandler(data){
    setUpdateBook(true);
    setView(false);
    setBook(data);
  }

  return (
    <div className="App">
      <Navbar
        fetcAllBook={fetcAllBook}
        onChangeHandler={onChangeHandler}
        view={view}
      />
      {!view && <Farm 
        {...activeBook}
        update={updateBook}
        setUpdateBook={setUpdateBook}
      />}
      <div className='container-fluid d-flex flex-wrap justify-content-center'>
        {view && data.map((item, index) => {
          return <Card
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
            viewBook={viewBook}
            key={index}
            {...item}
          />
        })}
      </div>
      {modal && <Modal
        {...activeBook}
        closeHandle={closeModal}
      />}
    </div>
  );
}

export default App;
