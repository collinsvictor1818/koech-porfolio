import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vqwcqahyfyaokipspqbc.supabase.co"; // Your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxd2NxYWh5Znlhb2tpcHNwcWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNDU4MDgsImV4cCI6MjA1MjkyMTgwOH0.lXKyR7epTth4QAo7IjUvBvZ2VPU45jF1qi1-_Sg5_7I"; // Replace with your Supabase Anon Key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;