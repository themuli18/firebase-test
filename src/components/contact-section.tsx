
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <img
              src="https://picsum.photos/600/400?random=5"
              alt="Contact RMBG"
              className="rounded-lg shadow-md mb-4 md:mb-0"
            />
          </div>
          <div>
            <p className="mb-4">
              We'd love to hear from you! Reach out to us directly, and we'll
              get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea placeholder="Your Message" />
              </div>
              <Button>Submit Message</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Where to find us</h3>
            <p>Valschermkade 16</p>
            <p>1059CD Amsterdam</p>
            <p className="mt-4">
              <a href="mailto:info@rmbg.nl">info@rmbg.nl</a>
            </p>
          </div>
          <div>
          </div>
        </div>
      </div>
      <footer className="bg-secondary py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 RMBG. All rights reserved. | Privacy Policy</p>
        </div>
      </footer>
    </section>
  );
};

