export function ChatbotHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#c9a961] animate-pulse"></div>
            <span className="text-sm text-white/80 font-light tracking-wide">AI Chatbot for Elite Ecommerce</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]">
            <span className="text-white font-light">AI Chatbot That</span>
            <br />
            <span className="text-[#c9a961] font-normal">Sells While You Sleep</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 mb-12 max-w-2xl font-light leading-relaxed">
            24/7 AI assistant that handles customer questions, recovers abandoned carts, and closes sales across all your channels.
          </p>
        </div>
      </div>
    </section>
  );
}