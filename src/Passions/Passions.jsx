import './Passions.css'
import { motion } from 'framer-motion'

function Passions() {
    return (
        <>
            <div className="fill">
                <motion.div
                    className="leftfill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1>Hobbies</h1>
                    <p>Outside of my technical interests, I have a deep passion for various creative pursuits. Photography is something I love, as it allows me to capture moments and express my perspective through visuals. I often experiment with different styles, lighting, and compositions to develop my skills. Video editing is another area where I can merge my technical and artistic sides, bringing stories to life through editing techniques, effects, and sound design.</p>
                </motion.div>
                <motion.div
                    className="rightfill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h1>Future Goals</h1>
                    <p>I am passionate about continually expanding my knowledge and expertise in technology. My future goals include mastering advanced concepts in Al/ML and Blockchain, contributing to impactful open-source projects, and building scalable, user-centric applications. I am also keen on exploring the intersection of data science and app development to create innovative solutions for real-world challenges.</p>
                </motion.div>
            </div>
        </>
    );
}

export default Passions;