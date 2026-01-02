import { motion } from "framer-motion";
import { footerItem } from "./footerAnimation";

const FooterProfile = () => (
    <div className="flex flex-col gap-4">

        {/* Avatar + Name */}
        <motion.div variants={footerItem} className="flex items-center gap-4">
            <img
                src="/footerAvatar.jpg"
                alt="Facundo Robert"
                className="
          w-16 h-16
          rounded-full
          object-cover
          border border-neutral-300
          dark:border-neutral-700
        "
            />

            <h3 className="text-xl font-semibold">
                Facundo Robert
            </h3>
        </motion.div>

        {/* Description full width */}
        <motion.p variants={footerItem} className="text-sm text-neutral-600 text-center dark:text-neutral-400 leading-relaxed text-center max-w-md mx-auto md:mx-0 tracking-wide">
            Fullstack Developer especializado en React y Node.js.<br />
            Desarrollo proyectos full-stack aplicando buenas prácticas,
            arquitectura clara y niveles de abstracción profesionales.
        </motion.p>
        <motion.div variants={footerItem} className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
                Website
            </span>
            <a
                href="https://facundorobert.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:underline"
            >
                Portfolio
            </a>
        </motion.div>
    </div>
);

export default FooterProfile;