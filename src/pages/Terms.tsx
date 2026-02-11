import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last Updated: 1 Jan, 2026
          </p>

          <div className="space-y-8 text-foreground/80 leading-relaxed text-sm">
            <p>
              Welcome to Magnus Privé. By engaging our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">1. Our Role as an Agent</h2>
              <p>Magnus Privé acts solely as an intermediary agent between you (the "Client") and third-party service providers (the "Suppliers"), including but not limited to airlines, private jet operators, hotels, transport companies, and tour operators.</p>
              <ul className="space-y-3 list-none pl-0">
                <li>We do not own or operate the aircraft, hotels, or vehicles used in your itinerary.</li>
                <li>While we carefully select our partners, we accept no liability for any acts, omissions, or failures of these Suppliers, including cancellations, delays, technical issues, or service deficiencies.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">2. Bookings &amp; Payments</h2>
              <ul className="space-y-3 list-none pl-0">
                <li><strong className="text-foreground">Deposits:</strong> A non-refundable deposit may be required to secure bespoke itineraries or initiate research for complex requests.</li>
                <li><strong className="text-foreground">Full Payment:</strong> Full payment is required by the due date stated on your invoice. Failure to pay by the deadline may result in the cancellation of your booking by the Supplier.</li>
                <li><strong className="text-foreground">Price Fluctuations:</strong> Prices for flights and accommodations are subject to dynamic pricing and currency fluctuations. We guarantee the price only once full payment has been received and the booking is ticketed/confirmed.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">3. Cancellations &amp; Refunds</h2>
              <ul className="space-y-3 list-none pl-0">
                <li><strong className="text-foreground">Client Cancellation:</strong> If you cancel a booking, you will be subject to the cancellation terms of the specific Supplier (airline/hotel), plus a Magnus Privé administrative service fee.</li>
                <li><strong className="text-foreground">Supplier Cancellation:</strong> If a Supplier cancels your reservation (e.g., flight cancellation), we will advocate on your behalf to secure a refund or alternative, but we are not financially liable for the Supplier's failure to provide service.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">4. Travel Documents &amp; Health</h2>
              <ul className="space-y-3 list-none pl-0">
                <li><strong className="text-foreground">Client Responsibility:</strong> It is the sole responsibility of the Client to ensure they possess valid passports (with at least 6 months validity), visas, and health certificates (e.g., vaccinations) required for all destinations.</li>
                <li><strong className="text-foreground">Liability:</strong> Magnus Privé cannot be held liable if you are refused entry to a country or denied boarding due to incorrect or missing documentation.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">5. Private Aviation (If Applicable)</h2>
              <p>For private charter bookings, Magnus Privé acts as a broker. The contract of carriage is strictly between the Client and the Aircraft Operator. We are not an air carrier.</p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Magnus Privé shall not be liable for any direct, indirect, special, or consequential damages arising out of:</p>
              <ul className="space-y-3 list-none pl-0">
                <li><strong className="text-foreground">Missed flights</strong> or connections.</li>
                <li><strong className="text-foreground">Loss of luggage</strong> or personal property.</li>
                <li><strong className="text-foreground">Personal injury</strong> or illness during travel.</li>
                <li><strong className="text-foreground">Events of "Force Majeure"</strong> (e.g., war, pandemics, extreme weather, strikes, or government restrictions).</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">7. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of NY, USA. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in NYC, NY.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
