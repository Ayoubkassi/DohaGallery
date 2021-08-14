import './App.css';
import Title from './components/Title/title.component';
import UploadForm from './components/uploadForm/upload-form.component';
import ImageGrid from './components/imageGrid/imageGrid.component';
import Modal from './components/Modal/modal.component';
import {useState} from 'react';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}  />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
