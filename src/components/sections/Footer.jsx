function Footer() {
  return (
    <section className="absolute flex w-full justify-center border-white/10 bg-[rgba(10,10,10,0.8)] shadow-lg backdrop-blur-lg">
      <div className="py-4">
        {" "}
        &copy; {new Date().getFullYear()} Heimsly Calauagan Jr.
      </div>
    </section>
  );
}

export default Footer;
