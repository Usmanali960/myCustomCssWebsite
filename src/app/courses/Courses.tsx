import Image from 'next/image';
import styles from "@/app/page.module.css"// Import the CSS module
import 'boxicons/css/boxicons.min.css';  

const coursesData = [
    {
        id: 1,
        title: 'Computer Science',
        description: 'Learn the fundamentals of computer science, algorithms, and data structures.',
        duration: '3 Years',
        students: '2500+ Students',
        image: "/coding.avif"
    },
    {
        id: 2,
        title: 'Business Management',
        description: 'Master the art of business, including strategy, management, and finance.',
        duration: '2 Years',
        students: '1800+ Students',
        image: "/business.avif"
    },
    {
        id: 3,
        title: 'Engineering',
        description: 'Explore various engineering fields and gain hands-on experience.',
        duration: '4 Years',
        students: '3200+ Students',
        image: '/engineering.avif',
    },
    {
        id: 4,
        title: 'Graphic Design',
        description: 'Learn design principles and tools for creating stunning visuals.',
        duration: '1 Year',
        students: '1500+ Students',
        image: '/graphicDesign.avif',
    },
];

const Courses = () => {
    return (
        <section className={styles.container} id="courses">
            <div className={styles.titleSection}>
                <h2>Our Courses</h2>
                <p>Explore a variety of courses tailored to help you achieve your career goals.</p>
            </div>

            <div className={styles.gridContainer}>
                {coursesData.map((course) => (
                    <div key={course.id} className={styles.courseCard}>
                        <Image src={course.image} alt={course.title} width={500} height={300} className={styles.courseImage} />
                        <div className={styles.cardBody}>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <div className={styles.courseInfo}>
                                <div className="flex items-center">
                                    <i className="bx bx-time-five mr-2"></i>
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="bx bx-user mr-2"></i>
                                    <span>{course.students}</span>
                                </div>
                            </div>
                            <button className={styles.learnMoreBtn}>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;
