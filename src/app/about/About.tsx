import React from 'react';
import Image from 'next/image';
import styles from "@/app/page.module.css"

const About = () => {
    return (
        <div className={styles.aboutContainer} id="about">
            {/* University Overview */}
            <section className="text-center mb-16">
                <h1 className={styles.sectionTitle}>About Eduford University</h1>
                <p className={styles.sectionText}>
                    Eduford University is one of the world’s most prestigious institutions dedicated to advancing knowledge and fostering innovation. Since its inception, Eduford has been committed to offering high-quality education and research programs, empowering students to achieve their potential.
                </p>
            </section>

            {/* Mission, Vision, Core Values */}
            <section className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <i className={`${styles.icon} bx bxs-rocket`}></i>
                    <h2 className="text-2xl font-semibold">Our Mission</h2>
                    <p className="text-gray-600 mt-2">
                        To empower students to become pioneers in their fields through rigorous education, research, and service to the community.
                    </p>
                </div>
                <div className={styles.gridItem}>
                    <i className={`${styles.icon} bx bxs-bulb`}></i>
                    <h2 className="text-2xl font-semibold">Our Vision</h2>
                    <p className="text-gray-600 mt-2">
                        To be a globally recognized university that transforms lives through knowledge, innovation, and a commitment to excellence.
                    </p>
                </div>
                <div className={styles.gridItem}>
                    <i className={`${styles.icon} bx bxs-heart`}></i>
                    <h2 className="text-2xl font-semibold">Core Values</h2>
                    <p className="text-gray-600 mt-2">
                        Integrity, Excellence, Innovation, and Social Responsibility are the guiding principles that define our ethos.
                    </p>
                </div>
            </section>

            {/* Departments and Programs */}
            <section className="text-center mb-16">
                <h2 className={styles.sectionTitle}>Our Departments</h2>
                <p className={styles.desc}>
                    Eduford University offers a wide range of programs across multiple disciplines to prepare students for the global job market.
                </p>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
                        <p className="text-gray-600">
                            Learn cutting-edge technologies and develop skills in software engineering, data science, and artificial intelligence.
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <h3 className="text-xl font-semibold mb-2">Business Administration</h3>
                        <p className="text-gray-600">
                            Equip yourself with business skills through programs in management, finance, and entrepreneurship.
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <h3 className="text-xl font-semibold mb-2">Engineering</h3>
                        <p className="text-gray-600">
                            Gain expertise in mechanical, electrical, and civil engineering with hands-on projects and labs.
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <h3 className="text-xl font-semibold mb-2">Medicine</h3>
                        <p className="text-gray-600">
                            Become a healthcare leader with programs that combine classroom learning and clinical practice.
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <h3 className="text-xl font-semibold mb-2">Law</h3>
                        <p className="text-gray-600">
                            Explore the legal system, justice, and policy development through comprehensive legal education.
                        </p>
                    </div>
                    <div className={styles.gridItem}>
                        <h3 className="text-xl font-semibold mb-2">Environmental Studies</h3>
                        <p className="text-gray-600">
                            Address global environmental challenges and sustainability through research-driven learning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Notable Faculty */}
            <section className="text-center mb-16">
                <h2 className={styles.sectionTitle}>Meet Our Esteemed Faculty</h2>
                <p className={styles.sectionText}>
                    Our faculty consists of world-renowned professors and researchers who are dedicated to mentoring students and pushing the boundaries of knowledge.
                </p>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <Image src="/first.webp" width={100} height={100} alt="Faculty Member" className={styles.cardImage} />
                        <h3 className={styles.cardHeading}>Dr. John Doe</h3>
                        <p className={styles.cardSubHeading}>Professor of Computer Science</p>
                    </div>
                    <div className={styles.gridItem}>
                        <Image src="/second.webp" alt="Faculty Member" width={100} height={100} className={styles.cardImage} />
                        <h3 className={styles.cardHeading}>Dr. Jane Smith</h3>
                        <p className={styles.cardSubHeading}>Dean of Business School</p>
                    </div>
                    <div className={styles.gridItem}>
                        <Image src="/third.webp" width={100} height={100} alt="Faculty Member" className={styles.cardImage} />
                        <h3 className={styles.cardHeading}>Dr. Alan Brown</h3>
                        <p className={styles.cardSubHeading}>Head of Engineering</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
