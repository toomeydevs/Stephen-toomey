import SectionHeading from "@/components/SectionHeading";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "University of the People",
    degree: "Bachelor of Science",
    field: "Computer Science",
    dates: "Graduated 2025",
    highlights: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering"],
  },
  {
    institution: "Self-Directed",
    degree: "Intensive Project-Based Curriculum",
    field: "Full-Stack Engineering",
    dates: "2024 – 2025",
    highlights: ["7 Deployed Applications", "Cloud Deployment", "Payment Integration", "CS Fundamentals"],
  },
];

const Education = () => {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Education" subtitle="My academic background and certifications" />

        {/* Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, i) => (
            <div
              key={edu.institution}
              className="flex gap-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                {i < education.length - 1 && <div className="mt-2 w-px flex-1 bg-border" />}
              </div>
              <div className="rounded-xl border border-border bg-card p-6 flex-1">
                <p className="font-mono text-xs text-primary mb-1">{edu.dates}</p>
                <h3 className="text-lg font-bold text-card-foreground">{edu.degree} in {edu.field}</h3>
                <p className="text-sm text-muted-foreground mb-3">{edu.institution}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span key={h} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Education;
