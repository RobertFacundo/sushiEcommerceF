import { Github, Linkedin } from "lucide-react";

const FooterSocial = () => (
  <div>
    <h4 className="text-lg font-medium mb-4">Contacto</h4>
    <div className="flex gap-4">
      <a
        href="https://github.com/tuusuario"
        target="_blank"
        className="hover:text-primary transition"
      >
        <Github />
      </a>
      <a
        href="https://linkedin.com/in/tuusuario"
        target="_blank"
        className="hover:text-primary transition"
      >
        <Linkedin />
      </a>
    </div>
  </div>
);

export default FooterSocial;