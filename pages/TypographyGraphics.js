import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function Typography() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className={`${styles.main}`}>
                <div>
                    <div class="typoTitle">
                    <h1>Typography</h1>
                    </div>
                    <div class="textSizes">
                        <h2>Heading 36px/24px Regular</h2>
                        <h3>Subheading 22px/31px Regular</h3>
                        <h4>Body 20px/Auto Regular</h4>
                        <h5>Small Body 16px/auto Regular</h5>
                        <h6>Score 10px/16px Regular</h6>
                    </div>
                    <div class="fontRationale">
                        <p>The font "Righteous" was chosen for Trash Scavengers because it is simple yet interesting to look at. The serifs are not over-pronounced, making it a good fit for a minimalistically designed and aesthetically pleasing app about recycling and trash pandas!</p>
                    </div>
                    <div>
              <p>___________________________________________________________________________________________________________________________</p>
            </div>
                    <div class="graphicsTitle">
                        <h2>Graphics + Icons</h2>
                    </div>
                    <div class="firstIcons">
                        <Image src={'/StyleGuideIcons/AlertIcon.png'} width={100} height={90}/>
                        <Image src={'/StyleGuideIcons/CoinIcon.png'} width={90} height={90}/>
                        <Image src={'/StyleGuideIcons/LeaderboardIcon.png'} width={105} height={90}/>
                        <Image src={'/StyleGuideIcons/SearchIcon.png'} width={90} height={90}/>
                        <p>Icons for use in the home page, leaderboard, search bar and game that can be easily identified for people with low vision.</p>
                    </div>
                    <div class="secondIcons">
                        <Image src={'/StyleGuideIcons/ThumbsUpIcon.png'} width={100} height={95}/>
                        <Image src={'/StyleGuideIcons/UsernameLBIcon.png'} width={100} height={95}/>
                        <Image src={'/StyleGuideIcons/ThumbsDownIcon.png'} width={100} height={95}/>
                        <p>These icons are used in the leaderboard and game, and can be distinguished easily due to the simple graphics and colour choice.</p>
                    </div>
                    <div class="thirdIcons">
                    <Image src={'/StyleGuideIcons/CompostIcons.png'} width={310} height={120}/>
                    <Image src={'/StyleGuideIcons/GarbageIcons.png'} width={310} height={120}/>
                    <Image src={'/StyleGuideIcons/RecyclingIcons.png'} width={310} height={120}/>
                    <p>Icons used in the recycling info page, are designed to be associated with their corresponding recycling category (glass bottles, cans, etc).</p>
                    </div>
                    <div class="fourthIcons">
                    <Image src={'/StyleGuideIcons/GameStoreIcons.png'} width={310} height={90}/>
                    <Image src={'/StyleGuideIcons/StoreIcons.png'} width={310} height={90}/>
                    <p>Icons used in the store page, clearly represent food and toys.</p>
                    </div>
                    <div class="fifthIcons">
                    <Image src={'/StyleGuideIcons/HealthStatusIcons.png'} width={150} height={300}/>
                    <Image src={'/StyleGuideIcons/HomePageIcons.png'} width={120} height={300}/>
                    <p>Health status icons represent food and happiness, easy for people with cognitive disabilities to understand. Similar to home page tab icons (pickup times for different waste categories).</p>
                    </div>
                    <div class="sixthIcons">
                    <Image src={'/StyleGuideIcons/YourDepotsIcons.png'} width={310} height={50}/>
                    <Image src={'/StyleGuideIcons/NavBarIcons.png'} width={310} height={65}/>
                    <p>The depot icons are commonly used for functions like favouriting and viewing a map, and are understood easily. Same with the nav bar, they clearly represent their respective pages in the app.</p>
                    </div>
                    <div class="seventhIcons">
                    <Image src={'/StyleGuideIcons/Settings icons.png'} width={60} height={450}/>
                    <p>Lastly, the setting icons are a little less commonly used, for example the language and text resize icons, but can be easily learned in a short amount of time.</p>
                    </div>
                    <div>
              <p>___________________________________________________________________________________________________________________________</p>
            </div>
                    <div class="mascot">
                        <h3>App Mascot: Scrappy Sammy the Raccoon</h3>
                        <Image src={'/Logo Variations/Favicon.png'} width={200} height={160}/>
                        <p>Sammy is a cute raccoon who represents the app and is part of its identity. Raccoons are commonly associated with rooting through the garbage, and the app is basically centered around that.</p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}