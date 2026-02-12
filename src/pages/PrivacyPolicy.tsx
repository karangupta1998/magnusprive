import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last Updated: 1 Jan, 2026
          </p>

          <div className="space-y-8 text-foreground/80 leading-relaxed text-sm">
            <p>
              Magnus Privé ("we," "us," or "our") is committed to protecting the privacy and security of our clients. As a private office for premium travel and lifestyle management, we understand that discretion is paramount. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight">1. Information We Collect</h2>
              <p>To provide our bespoke services, we may collect the following categories of data:</p>
              <ul className="space-y-3 list-none pl-0">
                <li><strong className="text-foreground">Identity Data:</strong> Names, dates of birth, passport details, and government-issued IDs for you and your travel companions.</li>
                <li><strong className="text-foreground">Contact Data:</strong> Billing address, delivery address, email address, and telephone numbers.</li>
                <li><strong className="text-foreground">Financial Data:</strong> Bank account and payment card details (processed securely through encrypted third-party gateways).</li>
                <li><strong className="text-foreground">Travel Data:</strong> Flight itineraries, hotel preferences, dietary requirements, and specific health information relevant to travel (e.g., allergies or accessibility needs).</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight">2. How We Use Your Information</h2>
              <p>We use your data solely to execute the services you request:</p>
              <ul className="space-y-3 list-none pl-0">
                <li><strong className="text-foreground">Fulfillment:</strong> To book flights, hotels, private jets, and concierge services.</li>
                <li><strong className="text-foreground">Communication:</strong> To send itineraries, updates, and proposals.</li>
                <li><strong className="text-foreground">Compliance:</strong> To fulfill legal requirements for visas, border control, and aviation security.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight">3. Disclosure of Your Information</h2>
              <p>We do not sell your data. However, to execute your travel arrangements, we must share specific data with trusted third parties:</p>
              <ul className="space-y-3 list-none pl-0">
                <li><strong className="text-foreground">Service Providers:</strong> Airlines, hotels, transport companies, and ground handlers who require your details to fulfill your booking.</li>
                <li><strong className="text-foreground">Authorities:</strong> Customs, immigration, and border control agencies as required by law.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight">4. Data Security</h2>
              <p>We implement strict security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. Access to your personal data is limited to those employees, agents, and partners who have a strictly business need to know.</p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight">5. Your Legal Rights</h2>
              <p>Depending on your jurisdiction, you have the right to request access to your personal data, request correction of your data, or request erasure of your data. To exercise these rights, please contact our concierge team.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
