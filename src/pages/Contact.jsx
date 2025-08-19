import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // ID du service
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // ID du template
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // Public key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  useEffect(() => {
    if (success !== null) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <section id="contact" className="py-20 px-6 bg-base-200">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-lg text-base-content/70 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Une idée de projet ou une opportunité ? Discutons-en !  
          Remplis le formulaire ci-dessous
        </motion.p>

        {success === true && (
          <div role="alert" className="alert alert-success mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Message envoyé avec succès !</span>
          </div>
        )}

        {success === false && (
          <div role="alert" className="alert alert-error mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Erreur lors de l’envoi. Réessayez.</span>
          </div>
        )}

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid gap-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Votre Nom"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Votre Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Votre Message"
            className="textarea textarea-bordered w-full"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
