import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { z } from "zod";

const WEBHOOK_URL = "https://hook.us2.make.com/7vylmpgq8g29mmhrcv9bgp6ag2w3cu9e";

const formSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(100),
  last_name: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  details: z.string().trim().min(1, "Travel details are required").max(5000),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    details: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result.data,
          date: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
              Request a Quote
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-10">
              Share your travel plans and receive a personalized quote. We respond within hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              <a href="mailto:access@magnusprive.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span className="text-sm">access@magnusprive.com</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span className="text-sm">New York, NY</span>
              </div>
            </div>
          </div>

          {/* Right Form / Status */}
          <div className="bg-card border border-border rounded-lg p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-5">
                <CheckCircle className="w-10 h-10 text-gold" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-foreground">Request Received</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  A Private Client Director is reviewing your itinerary and will contact you shortly.
                </p>
              </div>
            ) : status === "error" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-5">
                <AlertCircle className="w-10 h-10 text-destructive" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-foreground">Connection Error</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Please email{" "}
                  <a href="mailto:access@magnusprive.com" className="text-gold hover:text-gold-light underline">
                    access@magnusprive.com
                  </a>{" "}
                  directly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gold/50 text-gold hover:bg-gold/10 mt-2"
                  onClick={() => setStatus("idle")}
                >
                  Try Again
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.first_name}
                      onChange={(e) => handleChange("first_name", e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/40 focus:border-gold/40 transition-colors"
                      placeholder="John"
                    />
                    {errors.first_name && <p className="text-destructive text-xs mt-1">{errors.first_name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.last_name}
                      onChange={(e) => handleChange("last_name", e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/40 focus:border-gold/40 transition-colors"
                      placeholder="Doe"
                    />
                    {errors.last_name && <p className="text-destructive text-xs mt-1">{errors.last_name}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/40 focus:border-gold/40 transition-colors"
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Travel Details</label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => handleChange("details", e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/40 focus:border-gold/40 transition-colors resize-none"
                    placeholder="Tell us your route, dates, and class of service..."
                  />
                  {errors.details && <p className="text-destructive text-xs mt-1">{errors.details}</p>}
                </div>
                <Button
                  type="submit"
                  variant="outline"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light hover:border-gold tracking-wider uppercase text-xs"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
                <p className="text-xs text-muted-foreground/60 text-center">
                  Your information is kept strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
