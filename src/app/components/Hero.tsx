import styles from "@/app/page.module.css"

const Hero = () => {
  return (
    <div
      className={styles.heroContainer}
      style={{ backgroundImage: `url('/university.avif')` }}
    >
      {/* Dark Overlay */}
      <div className={styles.heroOverlay}></div>

      {/* Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          World&apos;s Biggest University
        </h1>
        <p className={styles.heroParagraph}>
          Making website is now one of the easiest things in the world. You just need to learn HTML, CSS, JavaScript and you are good to go.
        </p>

        <button className={styles.heroButton}>
          Visit Us to Know More
        </button>
      </div>
    </div>
  );
};

export default Hero;
