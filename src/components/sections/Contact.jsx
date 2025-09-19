import { useRef, useState } from "react";
import AnimateOnScroll from "../AnimateOnScroll";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

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
      alert("Please verify you are not a robot!");
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
      .then((result) => {
        alert("Message Sent!");
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
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <section
        id="contact"
        className="relative flex min-h-screen flex-col items-center justify-center py-20"
      >
        <AnimateOnScroll>
          <div className="w-100 px-4">
            <h2 className="bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
              Get in Touch
            </h2>
            <form action="" className="space-y-4" onSubmit={handleSubmit}>
              <div className="form-box mx-auto max-w-md p-3">
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
                    className="peer h-full w-full rounded-xl border-b-1 border-white bg-white/10 px-3 text-white/70 transition duration-500 outline-none"
                  />
                  <label className="absolute top-1/2 left-3 -translate-y-1/2 text-base text-white transition-all duration-500 peer-valid:-top-1 peer-valid:text-xs peer-focus:-top-1 peer-focus:text-xs">
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
                    className="peer h-full w-full rounded-xl border-b-1 border-white bg-white/10 px-3 text-white/70 transition duration-500 outline-none"
                  />
                  <label className="absolute top-1/2 left-3 -translate-y-1/2 text-base text-white transition-all duration-500 peer-valid:-top-1 peer-valid:text-xs peer-focus:-top-1 peer-focus:text-xs">
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
                    className="peer h-full w-full resize-none rounded-2xl border-b-1 border-white bg-white/10 px-3 text-white/70 transition duration-500 outline-none"
                  />
                  <label className="absolute top-4 left-3 -translate-y-1/2 text-base text-white transition-all duration-500 peer-valid:-top-1 peer-valid:text-xs peer-focus:-top-1 peer-focus:text-xs">
                    Message
                  </label>
                </div>
                <div className="my-3 flex h-[70px] w-full justify-center">
                  <div className="inline-block h-full origin-top scale-75 rounded-lg p-2 shadow-md">
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
                      : "bg-blue-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}

export default Contact;
