export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo - Large and Centered */}
          <div className="mb-12 flex justify-center">
            <img
              src="https://ucarecdn.com/ceab01f3-3961-42e4-b78d-4b1a5abd1454/-/format/auto/"
              alt="Professional Electrical Services Logo"
              className="w-96 h-auto max-w-full"
            />
          </div>

          {/* Supporting Text - Now at top, gold and big */}
          <p
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-relaxed"
            style={{
              background: "linear-gradient(135deg, #ffd700, #ff9800)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              maxWidth: "900px",
              margin: "0 auto 1.5rem",
            }}
          >
            Licensed & certified electrical contractors delivering premium
            service with unmatched pricing.
          </p>

          {/* Headline - Now at bottom, small and grey */}
          <h1 className="text-xl md:text-2xl text-slate-600 mb-12 leading-tight font-inter">
            Powering Your Home
            <br />& Business Safely
          </h1>

          {/* CTA Button */}
          <a
            href="tel:6138070621"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg md:text-xl font-semibold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Now: 613-807-0621
          </a>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
