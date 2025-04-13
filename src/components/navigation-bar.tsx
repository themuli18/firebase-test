import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="bg-background py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold">
          RMBG Digital Consulting
        </Link>
        <div className="space-x-6">
          <Link href="/#about" className="hover:text-accent">
            About
          </Link>
          <Link href="/#expertise" className="hover:text-accent">
            Expertise
          </Link>
          <Link href="/#ai-consultation" className="hover:text-accent">
            Get Started
          </Link>
          <Link href="/#contact" className="hover:text-accent">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { NavigationBar };
