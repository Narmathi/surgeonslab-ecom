const Footer = () => {
  return (
    <footer className="border-t bg-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-white">
              SurgeonsLab
            </h2>

            <p className="mt-4 text-sm leading-7">
              Advancing surgical education through innovative medical
              simulation technology for hospitals, universities and
              training centers.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">
              Contact
            </h3>

            <p>support@surgeonslab.com</p>
            <p>www.surgeonslab.com</p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} SurgeonsLab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;