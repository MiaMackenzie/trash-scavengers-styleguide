import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';


export default function Home() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
  
      <main className={`${styles.main}`}>
        <div>
          <div>
          <h1 class="variations">Logo + Variations</h1>
          </div>
          <div class="leftSide">
          <Image src={'/fish/LeftFish.png'} width={100} height={70}/>
          </div>
          <div class="rightSide">
          <Image src={'/fish/RightFish.png'} width={100} height={70}/>
          </div>
          <p class="Vdescription">The logo was designed as a simple raccoon because the mascot of the app is a raccoon named Scrappy Sammy. The raccoon vector consists of simple lines and colours to reflect the simplicity and cohesiveness of the Trash Scavengers app.</p>
          <div class="fcl">
            <h4>1. Full Colour Logo</h4>
            <Image src={'/Logo Variations/FullColorLogo.png'} width={100} height={94}/>
          </div>
          
          <div class="bwl">
            <h4>2. Black and White Logo</h4>
            <Image src={'/Logo Variations/BlackWhiteLogo.png'} width={100} height={94}/>
          </div>
          <div class="gl">
            <h4>3. Greyscale Logo</h4>
            <Image src={'/Logo Variations/GreyscaleLogo.png'} width={100} height={94}/>
          </div>
          <div class="ml">
            <h4>4. Monochromatic Logo</h4>
            <Image src={'/Logo Variations/FullColorLogo.png'} width={100} height={94}/>
          </div>
          <div class="hvfcl">
            <h4>5. Horizontal Version of Full Colour Logo</h4>
            <Image src={'/Logo Variations/HorizontalLogo.png'} width={185} height={70}/>
          </div>
          <div class="vsfcl">
            <h4>6. Vertical/Stacked Version of Full Colour Logo</h4>
            <Image src={'/Logo Variations/VerticalStackedLogo.png'} width={100} height={108}/>
          </div>
          <div class="fv">
            <h4>7. Favicon Variations</h4>
            <p>i. 16 x 16</p>
            <Image src={'/Logo Variations/Favicon.png'} width={16} height={14}/>
            <p>ii. 32 x 32</p>
            <Image src={'/Logo Variations/Favicon.png'} width={32} height={28}/>
            <p>iii. 48 x 48</p>
            <Image src={'/Logo Variations/Favicon.png'} width={48} height={40}/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}