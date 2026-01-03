import { motion } from "framer-motion";
import { footerItem } from "./footerAnimation";
import { footerSocialLinks } from "../../config/footerSocial";
import { useTranslation } from "react-i18next";

const FooterSocial = () => {
  const { t } = useTranslation()

  return (
    <div className="mt-12 text-center">
      <motion.h4 variants={footerItem} className="text-lg font-medium mb-4">
        {t("footer.contact.title")}
      </motion.h4>
      <div className="flex gap-4 justify-center md:justify-start">
        {footerSocialLinks.map(({ name, href, icon: Icon }) => (
          <motion.a
            key={name}
            variants={footerItem}
            href={href}
            target={name !== "Email" ? "_blank" : undefined}
            rel={name !== "Email" ? "noopener noreferrer" : undefined}
            aria-label={name}
            className="p-2 rounded-md hover:text-primary hover:bg-neutral-800/40 transition"
          >
            <Icon className="w-10 h-10" />
          </motion.a>
        ))}
      </div>
    </div>
  )
};

export default FooterSocial;