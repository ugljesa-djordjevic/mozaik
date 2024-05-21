import logo from './logo.svg';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/animate.css/animate.min.css';
import './css/style.css';
import './scss/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/fixed/Layout';
import Home from './components/Home';
import AudioPodcast from './components/AudioPodcast';
import VideoPodcast from './components/VideoPodcast';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="video-podcast" element={<VideoPodcast />} />
          <Route path="audio-podcast" element={<AudioPodcast />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
