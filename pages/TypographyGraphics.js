import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

export default function Typography() {
    return (
      <>
      <header>
        <Navbar/>
      </header>
        <main className={`${styles.main}`}>
          <h1>Typography</h1>
        </main>
      </>
    )
  }