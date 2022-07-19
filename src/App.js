import './App.css';
import ListButton from './components/listButton';
import ImageGallery from 'react-image-gallery';

function App() {
  const listItems = ["item one", "item two", "item three", "item four", "item five", "item six"]
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  

  return (
    <div className="App">
        <h1>
          My First React Project
        </h1>
        
        <ListButton listItems={listItems}/>
        <ListButton listItems={listItems}/>
        <ListButton listItems={listItems}/>
        <ListButton listItems={listItems}/>

        <ImageGallery items={images} />
    </div>
  );
}

export default App;
