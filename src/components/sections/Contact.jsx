import { useRef, useState } from "react";
import AnimateOnScroll from "../AnimateOnScroll";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import { FaEnvelope, FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const captchaRef = useRef();
  const [captcha, setCaptcha] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captcha) {
      toast.warning("Please complete the reCAPTCHA.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Message Sent!");
        setCaptcha(null);
        captchaRef.current.reset();
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("heimslycalauagan@gmail.com");
      toast.success("Email copied to clipboard!");
    } catch (err) {
      toast.error(`Failed to copy email. ${err.message}`);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative flex min-h-screen flex-col items-center justify-center gap-8 py-20"
      >
        <AnimateOnScroll>
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 bg-linear-to-r from-blue-800 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-sm">
                <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-white/20 to-transparent opacity-40"></div>
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-white/20"></div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">Let's Connect</h3>
                  <p className="mb-6 text-gray-400">
                    I'm currently open to full-time opportunities and available
                    for collaboration on real-world projects.
                  </p>

                  <div className="space-y-4 text-sm">
                    <div className="flex flex-row gap-3">
                      <a
                        href="mailto:heimslycalauagan@gmail.com?subject=Portfolio%20Contact%20-%20Full-time%20Opportunity"
                        className="flex items-center gap-3 hover:text-blue-400"
                      >
                        <FaEnvelope size={20} />
                        heimslycalauagan@gmail.com
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="inline-block rounded-md border border-white/10 px-2 py-1 text-xs transition hover:border-blue-400 hover:text-blue-400"
                      >
                        <FaCopy className="text-gray-500" />
                      </button>
                    </div>

                    <a
                      href="https://github.com/ShiroKishi27"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-blue-400"
                    >
                      <FaGithub size={20} /> github.com/ShiroKishi27
                    </a>

                    <a
                      href="https://linkedin.com/in/heimsly-jr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-blue-400"
                    >
                      <FaLinkedin size={20} /> linkedin.com/in/heimsly-jr
                    </a>
                  </div>
                </div>

                <p className="mt-6 text-xs text-gray-500">
                  I typically respond within 24-48 hours.
                </p>
              </div>
              <form action="" className="space-y-4" onSubmit={handleSubmit}>
                <div className="form-box mx-auto rounded-2xl border border-white/30 bg-white/2 p-4 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/30 to-transparent opacity-40"></div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/30"></div>
                  <h3 className="mb-2 text-center text-xl font-bold text-white">
                    Send a Message
                  </h3>
                  <div className="relative my-3 h-12 w-full">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="peer h-full w-full rounded-xl border-b border-white bg-white/10 px-3 text-white/70 transition duration-500 outline-none"
                    />
                    <label
                      htmlFor="name"
                      className="absolute top-1/2 left-3 -translate-y-1/2 text-base text-white transition-all duration-500 peer-valid:-top-1 peer-valid:text-xs peer-focus:-top-1 peer-focus:text-xs"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative my-3 h-12 w-full">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="peer h-full w-full rounded-xl border-b border-white bg-white/10 px-3 text-white/70 transition duration-500 outline-none"
                    />
                    <label
                      htmlFor="email"
                      className="absolute top-1/2 left-3 -translate-y-1/2 text-base text-white transition-all duration-500 peer-valid:-top-1 peer-valid:text-xs peer-focus:-top-1 peer-focus:text-xs"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative my-3 h-40 w-full">
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="peer h-full w-full resize-none rounded-2xl border-b border-white bg-white/10 px-3 text-white/70 transition duration-500 outline-none"
                    />
                    <label
                      htmlFor="message"
                      className="absolute top-4 left-3 -translate-y-1/2 text-base text-white transition-all duration-500 peer-valid:-top-1 peer-valid:text-xs peer-focus:-top-1 peer-focus:text-xs"
                    >
                      Message
                    </label>
                  </div>
                  <div className="my-3 flex h-[70px] w-full justify-center">
                    <div className="inline-block h-full origin-top scale-80 rounded-lg p-2 shadow-md">
                      <ReCAPTCHA
                        ref={captchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        theme="dark"
                        onChange={(token) => setCaptcha(token)}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`relative w-full overflow-hidden rounded-4xl px-6 py-3 font-medium text-white transition ${
                      isSending
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-blue-500 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    }`}
                  >
                    {isSending ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}

export default Contact;
