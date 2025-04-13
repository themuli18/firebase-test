const Footer = () => {
  return (
    <footer className="bg-secondary py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © 2025 RMBG. All rights reserved. |{" "}
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
        <p className="text-sm">
          RMBG BV is registered as #76905284 at Chamber of Commerce in
          Amsterdam, The Netherlands
        </p>
        <p className="text-sm">
          Valschermkade 16, 1059CD Amsterdam |{" "}
          <a href="mailto:info@rmbg.nl" className="hover:underline">
            info@rmbg.nl
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
