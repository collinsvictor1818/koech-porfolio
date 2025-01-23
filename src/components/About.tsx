import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://vqwcqahyfyaokipspqbc.supabase.co"; // Replace with your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxd2NxYWh5Znlhb2tpcHNwcWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNDU4MDgsImV4cCI6MjA1MjkyMTgwOH0.lXKyR7epTth4QAo7IjUvBvZ2VPU45jF1qi1-_Sg5_7I"; // Replace with your Supabase Anon Key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const About = () => {
  const [aboutMe, setAboutMe] = useState<{ name: string; description: string; profile_photo: string } | null>(null);

  useEffect(() => {
    const fetchAboutMe = async () => {
      const { data, error } = await supabase.from("about").select("*").limit(1);
      if (error) {
        console.error("Error fetching about me:", error);
      } else if (data.length > 0) {
        setAboutMe(data[0]); // Set the first row
      } else {
        console.error("No data found");
      }
    };

    fetchAboutMe();
  }, []);

  if (!aboutMe) return <div>Loading...</div>;

  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-white/80 max-w-2xl mx-auto">{aboutMe.description}</p>
        </motion.div>
      </div>
    </section>
  );
};