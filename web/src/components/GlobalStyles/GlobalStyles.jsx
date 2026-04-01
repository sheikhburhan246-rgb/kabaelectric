export function GlobalStyles() {
  return (
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: 'Poppins', sans-serif;
        line-height: 1.6;
        color: #333;
        background: #0a0a0a;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      /* Navigation */
      .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        background: rgba(10, 10, 10, 0.95);
        backdrop-filter: blur(10px);
        padding: 15px 0;
        z-index: 1000;
        border-bottom: 2px solid #ff9800;
        box-shadow: 0 2px 20px rgba(255, 152, 0, 0.3);
      }

      .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo-container {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .logo-img {
        height: 50px;
        width: 50px;
        object-fit: contain;
      }

      .logo-text {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-weight: 700;
        background: linear-gradient(135deg, #ffd700, #ff9800);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .nav-menu {
        display: flex;
        list-style: none;
        gap: 30px;
        align-items: center;
      }

      .nav-menu a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s;
        position: relative;
      }

      .nav-menu a:hover {
        color: #ffd700;
      }

      .nav-menu a::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #ffd700, #ff9800);
        transition: width 0.3s;
      }

      .nav-menu a:hover::after {
        width: 100%;
      }

      .btn-cta-nav {
        background: linear-gradient(135deg, #ffd700, #ff9800);
        color: #0a0a0a;
        padding: 10px 25px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s;
        box-shadow: 0 4px 15px rgba(255, 152, 0, 0.4);
      }

      .btn-cta-nav:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(255, 152, 0, 0.6);
      }

      /* Hero Section */
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        position: relative;
        background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
        overflow: hidden;
        margin-top: 80px;
      }

      .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=1080&fit=crop') center/cover;
        opacity: 0.15;
        z-index: 0;
      }

      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.1), transparent 50%);
        z-index: 1;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        text-align: center;
        color: #fff;
      }

      .hero-title {
        font-family: 'Montserrat', sans-serif;
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 20px;
        background: linear-gradient(135deg, #ffd700, #ff9800);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 0 40px rgba(255, 215, 0, 0.3);
      }

      .hero-subtitle {
        font-size: 1.4rem;
        margin-bottom: 40px;
        color: #e0e0e0;
        font-weight: 300;
      }

      .hero-buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn {
        padding: 15px 35px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-size: 1.1rem;
      }

      .btn-primary {
        background: linear-gradient(135deg, #ffd700, #ff9800);
        color: #0a0a0a;
        box-shadow: 0 8px 25px rgba(255, 152, 0, 0.4);
      }

      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(255, 152, 0, 0.6);
      }

      .btn-secondary {
        background: transparent;
        color: #ffd700;
        border: 2px solid #ffd700;
      }

      .btn-secondary:hover {
        background: #ffd700;
        color: #0a0a0a;
        transform: translateY(-3px);
      }

      /* Services Section */
      .services {
        padding: 100px 0;
        background: #0f0f0f;
      }

      .section-title {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 15px;
        background: linear-gradient(135deg, #ffd700, #ff9800);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .section-subtitle {
        text-align: center;
        color: #b0b0b0;
        margin-bottom: 60px;
        font-size: 1.1rem;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
      }

      .service-card {
        background: #1a1a1a;
        border-radius: 15px;
        overflow: hidden;
        transition: all 0.3s;
        border: 1px solid #2a2a2a;
        position: relative;
      }

      .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(255, 152, 0, 0.3);
        border-color: #ff9800;
      }

      .service-icon {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #ffd700, #ff9800);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        box-shadow: 0 4px 15px rgba(255, 152, 0, 0.4);
      }

      .service-icon i {
        font-size: 28px;
        color: #0a0a0a;
      }

      .service-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .service-card h3 {
        color: #ffd700;
        margin: 20px 20px 10px;
        font-size: 1.4rem;
      }

      .service-card p {
        color: #b0b0b0;
        padding: 0 20px 20px;
        line-height: 1.7;
      }

      /* About Section */
      .about {
        padding: 100px 0;
        background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
      }

      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
      }

      .about-content {
        color: #e0e0e0;
      }

      .about-text {
        margin-bottom: 20px;
        line-height: 1.8;
        color: #b0b0b0;
      }

      .why-choose {
        margin-top: 40px;
      }

      .why-choose h3 {
        color: #ffd700;
        margin-bottom: 20px;
        font-size: 1.5rem;
      }

      .check-list {
        list-style: none;
      }

      .check-list li {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 15px;
        color: #d0d0d0;
      }

      .check-list i {
        color: #ffd700;
        font-size: 20px;
      }

      .about-image {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        min-height: 600px;
        display: block;
      }

      .about-image img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        border-radius: 15px;
      }

      .experience-badge {
        position: absolute;
        bottom: 30px;
        left: 30px;
        background: linear-gradient(135deg, #ffd700, #ff9800);
        padding: 25px 35px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 8px 25px rgba(255, 152, 0, 0.5);
        z-index: 10;
      }

      .badge-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: #0a0a0a;
        line-height: 1;
      }

      .badge-text {
        color: #0a0a0a;
        font-weight: 600;
        margin-top: 5px;
      }

      /* Team Section */
      .team {
        padding: 100px 0;
        background: #0f0f0f;
      }

      /* Gallery Section */
      .gallery {
        padding: 100px 0;
        background: #0f0f0f;
      }

      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
      }

      .gallery-item {
        position: relative;
        overflow: hidden;
        border-radius: 15px;
        height: 300px;
        cursor: pointer;
      }

      .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
      }

      .gallery-item:hover img {
        transform: scale(1.1);
      }

      .gallery-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
        padding: 20px;
        transform: translateY(100%);
        transition: transform 0.3s;
      }

      .gallery-item:hover .gallery-overlay {
        transform: translateY(0);
      }

      .gallery-overlay h4 {
        color: #ffd700;
        font-size: 1.2rem;
      }

      /* Contact Section */
      .contact {
        padding: 100px 0;
        background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
      }

      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
      }

      .contact-item {
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
      }

      .contact-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #ffd700, #ff9800);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .contact-icon i {
        font-size: 24px;
        color: #0a0a0a;
      }

      .contact-item h4 {
        color: #ffd700;
        margin-bottom: 5px;
      }

      .contact-item p,
      .contact-item a {
        color: #b0b0b0;
        text-decoration: none;
      }

      .contact-item a:hover {
        color: #ffd700;
      }

      .contact-form-container {
        background: #1a1a1a;
        padding: 40px;
        border-radius: 15px;
        border: 1px solid #2a2a2a;
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 15px;
        background: #0f0f0f;
        border: 1px solid #2a2a2a;
        border-radius: 8px;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        transition: all 0.3s;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: #ffd700;
        box-shadow: 0 0 15px rgba(255, 215, 0, 0.2);
      }

      .btn-submit {
        background: linear-gradient(135deg, #ffd700, #ff9800);
        color: #0a0a0a;
        padding: 15px 35px;
        border: none;
        border-radius: 30px;
        font-weight: 600;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        box-shadow: 0 8px 25px rgba(255, 152, 0, 0.4);
      }

      .btn-submit:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(255, 152, 0, 0.6);
      }

      /* Location Section */
      .location {
        padding: 100px 0;
        background: #0f0f0f;
      }

      .map-container {
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        border: 2px solid #2a2a2a;
      }

      /* Pricing Section */
      .pricing {
        padding: 100px 0;
        background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
      }

      .pricing-content {
        max-width: 900px;
        margin: 0 auto;
      }

      .pricing-description {
        text-align: center;
        color: #d0d0d0;
        font-size: 1.15rem;
        line-height: 1.8;
        margin-bottom: 60px;
        padding: 0 20px;
      }

      .pricing-features {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        margin-bottom: 60px;
      }

      .pricing-feature {
        display: flex;
        gap: 25px;
        align-items: flex-start;
        background: #1a1a1a;
        padding: 30px;
        border-radius: 15px;
        border: 1px solid #2a2a2a;
        transition: all 0.3s;
      }

      .pricing-feature:hover {
        transform: translateX(10px);
        border-color: #ff9800;
        box-shadow: 0 10px 30px rgba(255, 152, 0, 0.2);
      }

      .pricing-icon {
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, #ffd700, #ff9800);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 4px 15px rgba(255, 152, 0, 0.4);
      }

      .pricing-icon i {
        font-size: 32px;
        color: #0a0a0a;
      }

      .pricing-feature-content h3 {
        color: #ffd700;
        font-size: 1.5rem;
        margin-bottom: 10px;
        font-weight: 600;
      }

      .pricing-feature-content p {
        color: #b0b0b0;
        line-height: 1.7;
        font-size: 1.05rem;
      }

      .pricing-cta {
        text-align: center;
        background: #1a1a1a;
        padding: 50px 40px;
        border-radius: 20px;
        border: 2px solid #2a2a2a;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      }

      .pricing-cta h3 {
        color: #ffd700;
        font-size: 2rem;
        margin-bottom: 10px;
        font-weight: 700;
      }

      .pricing-cta p {
        color: #b0b0b0;
        font-size: 1.1rem;
        margin-bottom: 30px;
      }

      .pricing-cta .btn {
        font-size: 1.2rem;
        padding: 18px 40px;
      }

      /* Footer */
      .footer {
        background: #0a0a0a;
        padding: 60px 0 30px;
        border-top: 2px solid #ff9800;
      }

      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px;
        margin-bottom: 40px;
      }

      .footer-logo {
        width: 60px;
        height: 60px;
        margin-bottom: 15px;
      }

      .footer-section h3,
      .footer-section h4 {
        color: #ffd700;
        margin-bottom: 20px;
      }

      .footer-section p,
      .footer-section a {
        color: #b0b0b0;
        text-decoration: none;
        display: block;
        margin-bottom: 10px;
      }

      .footer-section a:hover {
        color: #ffd700;
      }

      .footer-section ul {
        list-style: none;
      }

      .footer-section i {
        margin-right: 10px;
        color: #ff9800;
      }

      .footer-bottom {
        text-align: center;
        padding-top: 30px;
        border-top: 1px solid #2a2a2a;
        color: #808080;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .nav-menu {
          display: none;
        }

        .hero-title {
          font-size: 2.2rem;
        }

        .hero-subtitle {
          font-size: 1.1rem;
        }

        .about-grid,
        .contact-grid {
          grid-template-columns: 1fr;
        }

        .services-grid,
        .gallery-grid {
          grid-template-columns: 1fr;
        }

        .section-title {
          font-size: 2rem;
        }

        .btn {
          padding: 12px 25px;
          font-size: 1rem;
        }

        .about-image {
          order: -1;
        }
      }

      @media (max-width: 480px) {
        .hero-title {
          font-size: 1.8rem;
        }

        .contact-form-container {
          padding: 25px;
        }
      }
    `}</style>
  );
}
