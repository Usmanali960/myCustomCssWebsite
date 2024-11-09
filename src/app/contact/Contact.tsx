import styles from "@/app/page.module.css"// Import the CSS module

const ContactSection = () => {

    return (
        <section id="contact" className={styles.container}>
            <div className="max-w-7xl mx-auto text-center">
                <div className={styles.titleSection}>
                    <h2>Contact Us</h2>
                    <p>Have questions? We&apos;d love to hear from you!</p>
                </div>

                <div className={styles.gridContainer}>
                    {/* Contact Information */}
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <i className="bx bx-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <i className="bx bx-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>contact@university.com</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <i className="bx bx-map"></i>
                            <div>
                                <h3>Address</h3>
                                <p>123 University Rd, City, State, 12345</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.contactForm}>
                        <form id="contact-form" className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"

                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
