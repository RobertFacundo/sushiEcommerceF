import { footerProjects } from "../../config/footerProjects";
import { motion } from 'framer-motion'
import { footerItem } from "./footerAnimation";

const FooterLinks = () => (
    <nav className="mt-12">
        <h4 className="text-lg font-medium mb-4">
            <motion.span variants={footerItem}>
                More Projects
            </motion.span>
        </h4>
        <ul className="space-y-2 text-sm">
            {footerProjects.map(project => (
                <motion.li key={project.url} variants={footerItem}>
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-700 dark:neutral-300 hover:underline"
                    >
                        {project.label}
                    </a>
                </motion.li>
            ))}
        </ul>
    </nav>
);

export default FooterLinks;