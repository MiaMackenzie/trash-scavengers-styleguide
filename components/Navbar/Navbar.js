import React from "react";
import Link from "next/link";
import styles from "@/components/Navbar/Navbar.module.css";

function Navbar() {
    return(
        <ul>
            <li class="Logos">
                <Link href="/">Logos</Link>
            </li>
            <li class="Colours">
                <Link href="/Colours">Colours</Link>
            </li>
            <li class="Typography">
                <Link href="/TypographyGraphics">Typography</Link>
            </li>
            <li class="References">
                <Link href="/References">References</Link>
            </li>
        </ul>
    );
}

export default Navbar;