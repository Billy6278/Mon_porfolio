import {
  MapPin, Phone, Mail, MessageCircle,
} from 'lucide-react';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { profile } from '../data/portfolio';
import ContactForm from '../components/ContactForm';
import { SectionTitle, ScrollReveal } from '../components/ui/ScrollReveal';

const contactInfo = [
  { icon: MapPin, label: 'Adresse', value: profile.address },
  { icon: Phone, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: 'WhatsApp', value: profile.whatsapp, href: `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}` },
  { icon: GitHubIcon, label: 'GitHub', value: 'github.com/bnk-dev', href: profile.github },
  { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/bnk-dev', href: profile.linkedin },
  { icon: MapPin, label: 'Localisation', value: profile.location },
];

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionTitle
          subtitle="Contact"
          title="Travaillons ensemble"
          description="Un projet en tête ? N'hésitez pas à me contacter."
        />

        <div className="contact-grid">
          <ScrollReveal direction="right" className="contact-info">
            <h3>Informations</h3>
            <div className="contact-info__list">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="contact-info__item">
                  <div className="contact-info__icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="contact-info__label">{label}</span>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {value}
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="contact-form-wrapper glass-card">
            <h3>Envoyez-moi un message</h3>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
