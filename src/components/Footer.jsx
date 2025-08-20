export default function Footer() {
  return (
    <footer className="footer footer-center p-6 md:p-10 bg-base-200 text-base-content rounded">
      <nav className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
        <a href="/" className="link link-hover">Accueil</a>
        <a href="/about" className="link link-hover">À propos</a>
        <a href="/projects" className="link link-hover">Projets</a>
        <a href="/contact" className="link link-hover">Contact</a>
      </nav>

      {/* Réseaux sociaux */}
      <nav>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/Moro225" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" 
              className="fill-current">
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.292 9.385 7.865 10.918.575.106.785-.25.785-.554 0-.273-.01-1.183-.015-2.145-3.2.695-3.875-1.541-3.875-1.541-.523-1.33-1.28-1.685-1.28-1.685-1.046-.716.08-.701.08-.701 1.156.082 1.763 1.187 1.763 1.187 1.028 1.76 2.696 1.252 3.352.957.103-.745.402-1.253.73-1.542-2.553-.29-5.236-1.277-5.236-5.683 0-1.256.45-2.284 1.187-3.09-.12-.29-.515-1.457.113-3.038 0 0 .967-.31 3.17 1.179a11.06 11.06 0 0 1 2.887-.389c.979.005 1.964.132 2.887.389 2.203-1.489 3.17-1.179 3.17-1.179.628 1.581.233 2.748.113 3.038.738.806 1.187 1.834 1.187 3.09 0 4.416-2.686 5.39-5.247 5.675.414.357.782 1.065.782 2.147 0 1.548-.014 2.797-.014 3.178 0 .306.21.664.79.551C20.71 21.382 24 17.082 24 12c0-6.352-5.148-11.5-12-11.5z" />
            </svg>
          </a>

          <a href="https://linkedin.com/in/oumar-moro" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" 
              className="fill-current">
              <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 
              2.238 5 5 5h14c2.762 0 5-2.238 
              5-5v-14c0-2.762-2.238-5-5-5zm-11 
              19h-3v-10h3v10zm-1.5-11.268c-.966 
              0-1.75-.784-1.75-1.75s.784-1.75 
              1.75-1.75 1.75.784 1.75 
              1.75-.784 1.75-1.75 
              1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.06-1.865-3.06-1.867 
              0-2.153 1.459-2.153 2.965v5.699h-3v-10h2.877v1.367h.041c.401-.761 
              1.381-1.562 2.844-1.562 3.04 0 3.6 2.002 
              3.6 4.604v5.591z" />
            </svg>
          </a>

          <a href="mailto:morooumar99@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" viewBox="0 0 24 24" 
              className="fill-current">
              <path d="M12 13.065L.5 6.322V18.5c0 
              .828.672 1.5 1.5 1.5h20c.828 0 
              1.5-.672 1.5-1.5V6.322l-11.5 
              6.743zm11.5-9.565v-.935c0-.828-.672-1.5-1.5-1.5h-20c-.828 
              0-1.5.672-1.5 1.5v.935l11.5 
              6.743 11.5-6.743z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Texte */}
      <aside className="mt-2 text-center text-sm md:text-base">
        <p>© {new Date().getFullYear()} Oumar Moro — Tous droits réservés</p>
      </aside>
    </footer>
  );
}
