import { Route, Routes } from 'react-router-dom'
import "./app.css"
import Logo from "./assets/shared/logo.svg"

export default function App() {

  return (

    <div className='container'>
      <header>
        <div className="header--top">
          <img className='logo-header' src={Logo} alt="" />
          <h2 className='start-slideshow'>Start slideshow</h2>
        </div>
      </header>
      <hr className='header--hr' />
      <Routes>



        Starry Night
        Vincent Van Gogh

        Girl with a Pearl Earring
        Johannes Vermeer

        Guernica
        Pablo Picasso

        Penitent Magdalene
        Artemisia Gentileschi

        The Storm on the Sea of Galilee
        Rembrandt

        The Great Wave off Kanagawa
        Hokusai

        Van Gogh Self-portrait
        Vincent Van Gogh

        The Sleeping Gypsy
        Henri Rousseau

        Lady with an Ermine
        Leonardo da Vinci

        The Night Café
        Vincent Van Gogh

        The Basket of Apples
        Paul Cézanne

        The Boy in the Red Vest
        Paul Cézanne

        Arnolfini Portrait
        Jan van Eyck

        Mona Lisa
        Leonardo da Vinci

        The Swing
        Jean-Honoré Fragonard
      </Routes>
    </div>

  )
}
