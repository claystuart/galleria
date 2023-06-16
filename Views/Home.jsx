import React from 'react'
import Logo from "../src/assets/shared/logo.svg"
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div className='container'>
            <header>
                <div className="header--top">
                    <img className='logo-header' src={Logo} alt="" />
                    <h2 className='start-slideshow'>Start slideshow</h2>
                </div>
            </header>
            <hr className='header--hr' />
            <main>
                <PictureCard path='starry-night'
                    title="Starry Night" artist="Vincent Van Goh" />

                <PictureCard path='girl-with-pearl-earring'
                    title="Girl with a Pearl Earring" artist="Johannes Vermeer" />

                <PictureCard path='guernica'
                    title="Guernica" artist="Pablo Picasso" />

                <PictureCard path='penitent-magdalene'
                    title="Penitent Magdalene" artist="Artemisia Gentileschi" />

                <PictureCard path='the-storm-on-the-sea-of-galilee'
                    title="The Storm on the Sea of Galilee" artist="Rembrandt" />

                <PictureCard path='the-great-wave-off-kanagawa'
                    title="The Great Wave off Kanagawa" artist="Hokusai" />

                <PictureCard path='van-gogh-self-portrait'
                    title="Van Gogh Self-portrait" artist="Vincent Van Gogh" />

                <PictureCard path='the-sleeping-gypsy'
                    title="The Sleeping Gypsy" artist="Henri Rousseau" />

                <PictureCard path='lady-with-an-ermine'
                    title="Lady with an Ermine" artist="Leonardo da Vinci" />

                <PictureCard path='the-night-cafe'
                    title="The Night Café" artist="Vincent Van Gogh" />

                <PictureCard path='the-basket-of-apples'
                    title="The Basket of Apples" artist="Paul Cézanne" />

                <PictureCard path='the-boy-in-the-red-vest'
                    title="The Boy in the Red Vest" artist="Paul Cézanne" />

                <PictureCard path='arnolfini-portrait'
                    title="Arnolfini Portrait" artist="Jan van Eyck" />

                <PictureCard path='mona-lisa'
                    title="Mona Lisa" artist="Leonardo da Vinci" />

                <PictureCard path='the-swing'
                    title="The Swing" artist="Jean-Honoré Fragonard" />
            </main>
        </div>
    )
}

function PictureCard({ artist, path, title }) {
    return (
        <Link to={`/${path}`}>
            <figure id={path} className='masonry-item'>
                <picture className='thumb-picture' >
                    <img className='thumb-img'
                        src={`../src/assets/${path}/thumbnail.jpg`}
                        alt={`Painting titled '${title}'`} />
                    <figcaption className='thumb-title'>{title}</figcaption>
                    <figcaption className='thumb-subtitle'>{artist}</figcaption>
                </picture>
            </figure >
        </Link>
    )
}
