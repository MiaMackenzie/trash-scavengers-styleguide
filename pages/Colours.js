import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

export default function Colours() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
      <main className={`${styles.main}`}>
        <div>
            <h1>Colour Palette</h1>
        </div>
        <div class="Assets">
        <Image src={'/colorcodes/Asset 1.png'} width={100} height={120}/>
        <Image src={'/colorcodes/Asset 2.png'} width={100} height={120}/>
        <Image src={'/colorcodes/Asset 3.png'} width={100} height={120}/>
        <Image src={'/colorcodes/Asset 4.png'} width={100} height={120}/>
        <Image src={'/colorcodes/Asset 5.png'} width={100} height={120}/>
        <Image src={'/colorcodes/Asset 6.png'} width={100} height={120}/>
        </div>
        <div class="paletterationale">
            <p>This colour palette was chosen based on the theme of the app: recycling. Green, blue and yellow are commonly used on recycling bins and bags around Vancouver. Green and blue also represent the earth and sustainability, which is the main focus of Trash Scavengers. The light greys and red compliment the main colours and are easy on the eyes. </p>
        </div>  
        <div class="results">
            <h2>Colour Contrast Checker Results</h2>
        <div class="firstpic">
        <Image src={'/ColourContrastImages/DarkBlue+LightGreen.png'} width={160} height={200}/>
        </div>
        <div>
            <p>This colour combo was only used for graphics so it's a pass.</p>
        </div>
        <div class="fourpics">
        <Image src={'/ColourContrastImages/Blue+White.png'} width={160} height={200}/>
        <Image src={'/ColourContrastImages/DarkGreen+LightGreen.png'} width={160} height={200}/>
        <Image src={'/ColourContrastImages/DarkGrey+LightBlue.png'} width={160} height={200}/>
        <Image src={'/ColourContrastImages/DarkGrey+LightGreen.png'} width={160} height={200}/>
        </div>
        <div>
            <p>Graphics</p>
        </div>
        <div class="threepics">
        <Image src={'/ColourContrastImages/DarkRed+LightGrey.png'} width={160} height={200}/>
        <Image src={'/ColourContrastImages/Green+Blue 2.png'} width={160} height={200}/>
        <Image src={'/ColourContrastImages/Green+LightGrey.png'} width={160} height={200}/>
        </div>
        <div>
            <p>Graphics</p>
        </div>
        <div class="singlepic">
        <Image src={'/ColourContrastImages/LightGrey+Black.png'} width={160} height={200}/>
        </div>
        <div>
            <p>Text</p>
        </div>
        </div>
      </main>
    </>
  )
}
