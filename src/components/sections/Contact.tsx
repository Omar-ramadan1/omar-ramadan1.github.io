import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../context/LanguageContext";

// const emailjsConfig = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   templateId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
// };

const Contact = () => {
  const { t } = useLanguage();

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
//     if (e === undefined) return;
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         emailjsConfig.serviceId,
//         emailjsConfig.templateId,
//         {
//           form_name: form.name,
//           to_name: config.html.fullName,
//           from_email: form.email,
//           to_email: config.html.email,
//           message: form.message,
//         },
//         emailjsConfig.accessToken
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm(INITIAL_STATE);
//         },
//         (error) => {
//           setLoading(false);

//           console.log(error);
//           alert("Something went wrong.");
//         }
//       );
//   };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} p={t.contact.p} h2={t.contact.h2} />

        <div className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">{t.contact.form.email.span}</span>
            <a
              href="mailto:o.abdelkader05@gmail.com"
              className="bg-tertiary rounded-lg px-6 py-4 font-medium text-white hover:opacity-80 transition-opacity"
            >
              {t.contact.form.email.placeholder}
            </a>
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">{t.contact.form.phone.span}</span>
            <a
              href="https://wa.me/4917677839266"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary rounded-lg px-6 py-4 font-medium text-white hover:opacity-80 transition-opacity"
            >
              {t.contact.form.phone.placeholder}
            </a>
          </label>

          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/omar-ramadan-2b86a4226/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Omar-ramadan1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
            >
              Github
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
