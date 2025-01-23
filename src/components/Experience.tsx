import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://vqwcqahyfyaokipspqbc.supabase.co"; // Replace with your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxd2NxYWh5Znlhb2tpcHNwcWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNDU4MDgsImV4cCI6MjA1MjkyMTgwOH0.lXKyR7epTth4QAo7IjUvBvZ2VPU45jF1qi1-_Sg5_7I"; // Replace with your Supabase Anon Key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const { data, error } = await supabase.from("experience").select("*");
      if (error) {
        console.error("Error fetching experiences:", error);
      } else {
        setExperiences(data);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm text-secondary bg-primary rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Professional Experience</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Here are some of the roles I've held and the skills I've developed along the way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{experience.job_title}</h3>
              <h4 className="text-md font-medium mb-1 text-gray-600">{experience.company}</h4>
              <p className="text-sm text-gray-500 mb-2">{experience.duration}</p>
              <p className="text-gray-700 mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.skills && experience.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm text-white bg-accent rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 