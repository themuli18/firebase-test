"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";

export const ContactSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
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
                <Label htmlFor="name">Your Name</Label>
                <Input type="text" id="name" placeholder="Your Name"/>
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input type="email" id="email" placeholder="Your Email"/>
              </div>
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" placeholder="Your Message"/>
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
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <p>
              <a href="mailto:info@rmbg.nl">info@rmbg.nl</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
