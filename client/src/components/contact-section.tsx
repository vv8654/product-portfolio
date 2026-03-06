import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View Profile",
      href: `https://${portfolioData.linkedin}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Austin, Texas",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss product strategy, new opportunities, or just chat about building great products
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium mb-1">{method.label}</h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.label === "LinkedIn" ? "_blank" : undefined}
                      rel={method.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      className="text-sm text-primary hover:underline"
                      data-testid={`link-contact-${method.label.toLowerCase()}`}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Build Something Great?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Whether you have a project in mind or just want to explore possibilities, I'd love to hear from you.
              </p>
              <Button size="lg" asChild data-testid="button-send-message">
                <a href={`mailto:${portfolioData.email}`}>
                  <Send className="h-4 w-4 mr-2" />
                  Send Me a Message
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
