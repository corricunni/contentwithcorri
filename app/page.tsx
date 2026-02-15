export default function ContentWithCorri() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Content With Corri</h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Done-for-you TikTok & Instagram content for brands who don’t have time to post consistently.
            I visit your business, film everything in one session, then deliver 30+ ready-to-post videos.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition">
            Book a Content Day
          </button>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4">1. Strategy Call</h3>
              <p>
                We map out your goals, target audience, offers, and content pillars so every video has purpose.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4">2. Content Filming Day</h3>
              <p>
                I come to your location and film all short-form content in one organised, efficient shoot.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4">3. 30+ Edited Videos Delivered</h3>
              <p>
                You receive fully edited, caption-ready TikToks & Reels ready to schedule and post.
              </p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-8 rounded-2xl shadow flex flex-col">
              <h3 className="text-2xl font-bold mb-4">Starter Content Day</h3>
              <p className="text-3xl font-semibold mb-6">$1,500</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li>✔ 2-hour on-site filming</li>
                <li>✔ 15 edited short-form videos</li>
                <li>✔ Hook-focused scripting</li>
                <li>✔ Optimised for TikTok & Reels</li>
                <li>✔ 7-day turnaround</li>
              </ul>
              <button className="bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90 transition">
                Enquire Now
              </button>
            </div>

            {/* Growth */}
            <div className="bg-black text-white p-8 rounded-2xl shadow flex flex-col scale-105">
              <h3 className="text-2xl font-bold mb-4">Growth Package</h3>
              <p className="text-3xl font-semibold mb-6">$2,800</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li>✔ Half-day filming session</li>
                <li>✔ 30 edited short-form videos</li>
                <li>✔ Trend research + scripting</li>
                <li>✔ Caption & hook guidance</li>
                <li>✔ 2 rounds of revisions</li>
                <li>✔ 10-day turnaround</li>
              </ul>
              <button className="bg-white text-black px-6 py-3 rounded-2xl hover:opacity-90 transition">
                Book Growth Package
              </button>
            </div>

            {/* Authority */}
            <div className="bg-white p-8 rounded-2xl shadow flex flex-col">
              <h3 className="text-2xl font-bold mb-4">Authority Intensive</h3>
              <p className="text-3xl font-semibold mb-6">$4,500</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li>✔ Full-day filming</li>
                <li>✔ 45+ edited videos</li>
                <li>✔ Content strategy roadmap</li>
                <li>✔ Competitor & trend analysis</li>
                <li>✔ Priority 5-day turnaround</li>
                <li>✔ Monthly strategy call</li>
              </ul>
              <button className="bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90 transition">
                Apply Now
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Stop Posting Once a Month. Start Showing Up Daily.
          </h2>
          <p className="mb-8 text-lg">
            Let’s batch your content properly so your brand finally looks consistent, credible, and everywhere.
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-2xl text-lg hover:opacity-90 transition">
            Secure Your Content Day
          </button>
        </section>
      </div>
    </div>
  );
}
