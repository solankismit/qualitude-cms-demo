import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            Have questions or want to discuss a project? We're here to help. Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <ContactForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Office Location</h3>
            <p className="text-muted-foreground">
              123 Business Street<br />
              City, State 12345<br />
              Country
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Email: info@qualitude.com
              </p>
              <p className="text-muted-foreground">
                Phone: +1 (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 