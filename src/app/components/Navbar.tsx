"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css"
import Image from "next/image";
import 'boxicons/css/boxicons.min.css';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            {/* Brand Name */}
            <a href="#" className={styles.logo}> <Image alt='logo' width={100} height={100} className='mix-blend-multiply bg-transparent' src={"/image.png"} /><p>Harward.</p></a>

            {/* Desktop Navigation Links */}
            <ul className={styles.navLinks}>
                <li><Link href="/" className="text-lg">Home</Link></li>
                <li><Link href="#about" className="text-lg">About</Link></li>
                <li><Link href="#courses" className="text-lg">Courses</Link></li>
            </ul>

            {/* Contact Button */}
            <Link href="#contact" className={styles.contactButton}>
                Contact
            </Link>

            {/* Hamburger Icon for Mobile */}
            <button className={styles.hamburger} onClick={toggleMenu}>
                <i className="bx bx-menu"></i>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div id={styles.mobileMenu} className={styles.mobileMenu}>
                    <ul>
                        <li>
                            <Link href="#home" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link href="#about" onClick={closeMenu}>About</Link>
                        </li>
                        <li>
                            <Link href="#services" onClick={closeMenu}>Courses</Link>
                        </li>
                        <li>
                            <Link href="#contact" className={styles.contactButton} onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
