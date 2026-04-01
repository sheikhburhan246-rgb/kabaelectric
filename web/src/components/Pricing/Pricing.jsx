export function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">Affordable & Competitive Pricing</h2>
        <p className="section-subtitle">
          Quality electrical work shouldn't break the bank. At Kaba Electric, we
          believe in honest, transparent pricing that respects your budget.
        </p>

        <div className="pricing-content">
          <p className="pricing-description">
            We provide detailed, upfront quotes before any work begins — no
            surprises, no hidden fees, just fair and competitive rates. You'll
            know exactly what you're paying for, and we stand behind every
            service with quality workmanship and complete transparency.
          </p>

          <div className="pricing-features">
            <div className="pricing-feature">
              <div className="pricing-icon">
                <i className="fas fa-file-invoice-dollar"></i>
              </div>
              <div className="pricing-feature-content">
                <h3>Transparent Quotes</h3>
                <p>
                  Clear, detailed estimates with no confusing technical jargon.
                  You'll understand exactly what you're paying for.
                </p>
              </div>
            </div>

            <div className="pricing-feature">
              <div className="pricing-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="pricing-feature-content">
                <h3>No Hidden Fees</h3>
                <p>
                  What we quote is what you pay. No surprise charges or
                  last-minute add-ons. Just honest, straightforward pricing.
                </p>
              </div>
            </div>

            <div className="pricing-feature">
              <div className="pricing-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <div className="pricing-feature-content">
                <h3>Fair & Competitive Rates</h3>
                <p>
                  Professional quality at prices that make sense. We deliver
                  exceptional value without compromising on safety or standards.
                </p>
              </div>
            </div>
          </div>

          <div className="pricing-cta">
            <h3>Ready to Get Started?</h3>
            <p>Call now for a free, no-obligation quote</p>
            <a href="tel:613-807-0621" className="btn btn-primary">
              <i className="fas fa-phone-alt"></i>
              Call Now – 613-807-0621
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
