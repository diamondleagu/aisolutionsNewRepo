import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Discovering the Future of AI</title>
        <meta name="description" content="Explore the latest in AI innovations and technological advancements" />
        <meta name="keywords" content="AI, Artificial Intelligence, Technology, Future, Innovation" />
        <meta property="og:title" content="AI Explorer" />
        <meta property="og:description" content="Discover the future of AI and its impact on our world" />
        <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="/" className={styles.logo}>
            <Image src="/logo.png" alt="AI Explorer Logo" width={150} height={50} />
          </a>
          <div className={styles.navLinks}>
            <a href="#company">Company</a>
            <a href="#products">Products</a>
            <a href="#frameworks">Frameworks</a>
            <a href="#solutions">Solutions</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact Us</a>
            <button className={styles.signInButton} aria-label="Sign In">Sign In</button>
            <button className={styles.signUpButton} aria-label="Sign Up">Sign Up</button>
          </div>
          <div className={styles.authButtons}>
           
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainHeading}>Discover the Future of AI</h1>
            <p className={styles.subHeading}>Explore cutting-edge innovations and technological advancements</p>
            <button className={styles.ctaButton} aria-label="Start exploring AI innovations">Start Exploring</button>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features} id="features">
          {[
            { title: "AI in Healthcare", image: "/AIimage.png", description: "Revolutionizing patient care and medical research" },
            { title: "AI in Finance", image: "/AIimage.png", description: "Transforming financial services and decision-making" },
            { title: "AI and Ethics", image: "/AIimagepic.png", description: "Navigating the ethical implications of AI advancements" },
            { title: "AI in Education", image: "/AIimagepic.png", description: "Personalizing learning experiences for students worldwide" },
          ].map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <Image src={feature.image} alt={feature.title} className={styles.featureImage} layout="intrinsic" width={150} height={150} />
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <button className={styles.learnMoreButton}>Learn More</button>
            </div>
          ))}
        </section>

        {/* About Section */}
        <section className={styles.about} id="about">
          <h2>About AI Explorer</h2>
          <p>We are passionate about uncovering the potential of AI and its impact on various industries. Our mission is to educate and inspire individuals about the endless possibilities of Artificial Intelligence.</p>
        </section>

        {/* Call to Action */}
        <section className={styles.callToAction} id="contact">
          <h2>Ready to Shape the Future with AI?</h2>
          <p>Join us in exploring the endless possibilities of Artificial Intelligence.</p>
          <button className={styles.ctaButton} aria-label="Get in touch">Get in Touch</button>
        </section>

        {/* Call to Action */}
        <section className={styles.callToAction} id="contact">
          <h2>Ready to Shape the Future with AI?</h2>
          <p>Join us in exploring the endless possibilities of Artificial Intelligence.</p>
          <button className={styles.ctaButton} aria-label="Get in touch">Get in Touch</button>
        </section>

        {/* Call to Action */}
        <section className={styles.callToAction} id="contact">
          <h2>Ready to Shape the Future with AI?</h2>
          <p>Join us in exploring the endless possibilities of Artificial Intelligence.</p>
          <button className={styles.ctaButton} aria-label="Get in touch">Get in Touch</button>
        </section>

        {/* Call to Action */}
        <section className={styles.callToAction} id="contact">
          <h2>Ready to Shape the Future with AI?</h2>
          <p>Join us in exploring the endless possibilities of Artificial Intelligence.</p>
          <button className={styles.ctaButton} aria-label="Get in touch">Get in Touch</button>
        </section>

        {/* Call to Action */}
        <section className={styles.callToAction} id="contact">
          <h2>Ready to Shape the Future with AI?</h2>
          <p>Join us in exploring the endless possibilities of Artificial Intelligence.</p>
          <button className={styles.ctaButton} aria-label="Get in touch">Get in Touch</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} AI Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
