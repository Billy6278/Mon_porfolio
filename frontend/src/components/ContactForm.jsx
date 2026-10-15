import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactMessage } from '../services/contactService';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validateForm(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Le nom est requis';
  if (!form.email.trim()) errors.email = "L'email est requis";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Email invalide';
  if (!form.subject.trim()) errors.subject = 'Le sujet est requis';
  if (!form.message.trim()) errors.message = 'Le message est requis';
  else if (form.message.trim().length < 10) errors.message = 'Le message doit contenir au moins 10 caractères';
  return errors;
}

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function handleBlur(event) {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validateForm(form);
    if (validationErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validationErrors[name] }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    setSuccess('');

    try {
      const response = await sendContactMessage(form);
      setSuccess(response.message || 'Message envoyé avec succès !');
      setForm(initialForm);
      setTouched({});
      setErrors({});
    } catch (err) {
      const apiErrors = err.response?.data?.errors;
      if (apiErrors?.length) {
        const fieldErrors = {};
        apiErrors.forEach((e) => {
          if (e.path) fieldErrors[e.path] = e.msg;
        });
        setErrors(fieldErrors);
      } else {
        setErrors({ form: err.response?.data?.message || "Impossible d'envoyer le message" });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className={`form-group ${errors.name && touched.name ? 'form-group--error' : ''}`}>
        <label htmlFor="name">Nom</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && touched.name && (
          <span id="name-error" className="form-error" role="alert">{errors.name}</span>
        )}
      </div>

      <div className={`form-group ${errors.email && touched.email ? 'form-group--error' : ''}`}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && touched.email && (
          <span id="email-error" className="form-error" role="alert">{errors.email}</span>
        )}
      </div>

      <div className={`form-group ${errors.subject && touched.subject ? 'form-group--error' : ''}`}>
        <label htmlFor="subject">Sujet</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && touched.subject && (
          <span id="subject-error" className="form-error" role="alert">{errors.subject}</span>
        )}
      </div>

      <div className={`form-group ${errors.message && touched.message ? 'form-group--error' : ''}`}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && touched.message && (
          <span id="message-error" className="form-error" role="alert">{errors.message}</span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {success && (
          <motion.div
            className="alert alert--success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
          >
            <CheckCircle size={18} />
            {success}
          </motion.div>
        )}
        {errors.form && (
          <motion.div
            className="alert alert--error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
          >
            <AlertCircle size={18} />
            {errors.form}
          </motion.div>
        )}
      </AnimatePresence>

      <button type="submit" className="btn btn--primary btn--full" disabled={loading}>
        {loading ? 'Envoi en cours...' : (
          <>
            <Send size={18} />
            Envoyer
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
