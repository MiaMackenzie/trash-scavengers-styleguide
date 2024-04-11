import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function References() {
    return (
      <>
      <header>
        <Navbar/>
      </header>
        <main className={`${styles.main}`}>
          <div>
            <div class="referencesTitle">
          <h1>References</h1>
            </div>
            <div class="logoReferences">
              <h3>Logo:</h3>
              <p>Figma Open-Source Plugin "Iconify"</p>
            </div>
            <div>
              <p>___________________________________________________________________________________________________________________________</p>
            </div>
            <div class="coloursReference">
              <h3>Colour Contrast:</h3>
              <p>Figma Plugin "Contrast"</p>
              <p>Coolors Color Palette Builder</p>
              <Image src={'/colourExamples/coolorsPalette.png'} width={500} height={230}/>
              <p>Link to palette: https://coolors.co/e74c4c-439744-3e3e3e-e1b94f-c7c6c5</p>
            </div>
            <div>
              <p>___________________________________________________________________________________________________________________________</p>
            </div>
            <div class="typographyReference">
              <h3>Typography:</h3>
              <p>Google Font: "Righteous"</p>
              <p>Link to Font Page: https://fonts.google.com/specimen/Righteous</p>
              <Image src={'/googleFonts.png'} width={400} height={95}/>
            </div>
            <div>
              <p>___________________________________________________________________________________________________________________________</p>
            </div>
            <div class="iconographyReference">
              <h3>Iconography:</h3>
              <p>All icons were sourced from either Google M3 Material Design Library</p>
              <Image src={'/m3Pic.png'} width={400} height={170}/>
              <p>Link to M3: https://m3.material.io/</p>
                <p>or</p> 
                
                <p>Figma Plugin "Iconify"</p>
                <Image src={'/iconifyLogo.png'} width={100} height={95}/>
                <p>Link to Iconify: https://www.figma.com/community/plugin/735098390272716381/iconify</p>
            </div>
          </div>
        </main>
        <Footer/>
      </>
    )
  }