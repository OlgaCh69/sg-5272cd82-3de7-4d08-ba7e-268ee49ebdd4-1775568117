import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogPreview } from "@/components/BlogPreview";

export default function BlogPage() {
  return (
    <>
      <SEO
        title="The Intelligence Layer | O.N.E.Tech"
        description="Insights on AI Governance, Operational Intelligence, Enterprise Infrastructure, Workforce Intelligence, and GCC Transformation from O.N.E.Tech."
      />
      <Header />

      <main className="relative min-h-screen">
        <section className="relative pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                <span className="text-sm font-medium text-primary">KNOWLEDGE BASE</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold">
                The Intelligence <span className="text-primary">Layer</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Insights on AI Governance, Operational Intelligence, Enterprise AI Infrastructure,
                Workforce Intelligence, and GCC Transformation.
              </p>
            </div>
          </div>
        </section>

        <BlogPreview />
      </main>

      <Footer />
    </>
  );
}