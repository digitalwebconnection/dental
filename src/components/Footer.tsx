// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#f1f2fa] text-[#0c1324] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left blocks */}
        <div className="space-y-10">
          <h2 className="font-[Times_New_Roman] text-5xl">Seves</h2>

          <div>
            <h3 className="font-[Times_New_Roman] text-lg mb-2">Contact Us</h3>
            <p className="text-sm leading-relaxed">
              123-456-7890 <br />
              info@mysite.com
            </p>
          </div>

          <div>
            <h3 className="font-[Times_New_Roman] text-lg mb-2">Address</h3>
            <p className="text-sm leading-relaxed">
              500 Terry Francine St. San <br />
              Francisco, CA 94158
            </p>
          </div>
        </div>

        {/* Right links */}
        <div className="flex flex-col justify-end items-start lg:items-end gap-4 w-full">
          <div className="space-y-2 text-sm">
            <a href="#" className="block hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="block hover:underline">
              Accessibility Statement
            </a>
          </div>
          <p className="text-xs mt-4">
            © {new Date().getFullYear()} by Seves. Powered and secured by Wix
          </p>
        </div>
      </div>
    </footer>
  );
}
