import React from 'react'
import './App.scss'
import SiteHeader from './components/site-header/site-header'
import { Divider } from '@chakra-ui/react'
import Routes from './routes/routes'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteHeader links={['About', 'Contact']} />
        <Divider />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
