import './Section.css'
import { motion } from 'framer-motion'

function Section(props) {
    return (
        <>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <div className="line"></div>
                <h1>{props.name}</h1>
                <div className="line"></div>
            </motion.div>
        </>
    );
}

export default Section;