import BookingForm from "../components/BookingForm";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-gold px-4 py-10">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Kebika Curry</h1>
        <p className="text-xl mb-6">Reserve your table with ease.</p>

        {/* Your Book a Table Button */}
        <a href="#book-table"
          className="inline-flex items-center gap-4 bg-gold text-black font-bold px-6 py-3 rounded-lg shadow transition-none"
        >
          <img src="/images/hero-icon.png" width="48" height="48" alt="booking icon" />
          <span className="text-xl">Book A Table</span>
        </a>
      </section>

      {/* Booking Form Section */}
      <section id="book-table" className="py-16">
        <BookingForm />
      </section>
    </main>
  );
}
