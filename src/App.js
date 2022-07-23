import './App.css';
import ListButton from './components/listButton';
import ImageGallery from 'react-image-gallery';
import PersonCard from './components/PersonCard';

function App() {
  // const listItems = ["item one", "item two", "item three", "item four", "item five", "item six"]
  // const images = [
  //   {
  //     original: 'https://picsum.photos/id/1018/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1018/250/150/',
  //   },
  //   {
  //     original: 'https://picsum.photos/id/1015/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1015/250/150/',
  //   },
  //   {
  //     original: 'https://picsum.photos/id/1019/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
  //   },
  // ];

  return (
    <div className="App">
        <h1>
          My First React Project
        </h1>
        <PersonCard name={"John"} age={99}/>
        <PersonCard name={"Wall"} age={9}/>
        <PersonCard name={"Will"} age={10}/>
        <PersonCard name={"Bill"} age={1}/>
    </div>
  );
}

export default App;
