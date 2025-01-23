import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://vqwcqahyfyaokipspqbc.supabase.co"; // Replace with your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxd2NxYWh5Znlhb2tpcHNwcWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNDU4MDgsImV4cCI6MjA1MjkyMTgwOH0.lXKyR7epTth4QAo7IjUvBvZ2VPU45jF1qi1-_Sg5_7I"; // Replace with your Supabase Anon Key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const Contact = () => {
  const [contactDetails, setContactDetails] = useState([]);

  useEffect(() => {
    const fetchContactDetails = async () => {
      const { data, error } = await supabase.from("contact").select("*");
      if (error) {
        console.error("Error fetching contact details:", error);
      } else {
        setContactDetails(data);
      }
    };

    fetchContactDetails();
  }, []);

  if (contactDetails.length === 0) return <div>Loading...</div>;

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Interested in working together? Let's connect and discuss your next project
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactDetails.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center p-6 glass rounded-2xl text-center hover:bg-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white/80">{item.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};