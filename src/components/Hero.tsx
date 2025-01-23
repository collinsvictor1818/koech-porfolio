import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://vqwcqahyfyaokipspqbc.supabase.co"; // Replace with your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxd2NxYWh5Znlhb2tpcHNwcWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNDU4MDgsImV4cCI6MjA1MjkyMTgwOH0.lXKyR7epTth4QAo7IjUvBvZ2VPU45jF1qi1-_Sg5_7I"; // Replace with your Supabase Anon Key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const Hero = () => {
  const [aboutMe, setAboutMe] = useState<{ name: string; title: string; profile_photo: string } | null>(null);

  useEffect(() => {
    const fetchAboutMe = async () => {
      const { data, error } = await supabase.from("about").select("*").limit(1);
      if (error) {
        console.error("Error fetching about me:", error);
      } else {
        setAboutMe(data[0]); // Set the first row
      }
    };

    fetchAboutMe();
  }, []);

  if (!aboutMe) return <div>Loading...</div>;

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-primary py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            {aboutMe.name}
          </h1>
          <p className="text-2xl md:text-3xl text-secondary mb-8">
            {aboutMe.title}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-12 px-8 font-medium text-white bg-secondary rounded-full transition-colors hover:bg-secondary/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 font-medium text-white border border-white/20 rounded-full transition-colors hover:bg-white/10"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
 <div className="absolute inset-0 rounded-full"></div>
            <img src={"https://vqwcqahyfyaokipspqbc.supabase.co/storage/v1/object/public/portfolio/logo/Collins%20-%20Copy.png?t=2025-01-20T05%3A08%3A18.382Z"} alt="Profile" className="w-64 h-64 rounded-full mx-auto mb-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};