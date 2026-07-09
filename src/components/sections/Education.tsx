import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { education } from "@/constants/education";

export function Education() {
  return (
    <section id="education" className="bg-[#0f0f0f] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          description="Where I'm building my foundation in information technology."
        />
        <div className="space-y-4">
          {education.map((item) => (
            <div
              key={`${item.school}-${item.degree}`}
              className="glass p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-1 text-[#94a3b8]">{item.school}</p>
                  <p className="mt-2 text-sm font-medium text-blue-400">
                    Expected Graduation: {item.graduationYear}
                  </p>
                  {item.coursework?.length ? (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-white">
                        Relevant Coursework
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {item.coursework.map((course) => (
                          <li key={course} className="skill-pill text-xs">
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
