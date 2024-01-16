import './App.css'
import Faq from './components/FAQ/Faq';
import Banner from './components/banner/Banner';
import BreadCrump from './components/breadCrump/BreadCrump';
import LogogCreate from './components/logoCreate/LogogCreate';
import NavigationSec from './components/navigationSec/NavigationSec'


function App() {
  return (
    <div className='bg-slate-100'>
      <NavigationSec />
      <BreadCrump />
      <Banner />
      <LogogCreate />
      <Faq />
    </div>
  )
}

export default App
