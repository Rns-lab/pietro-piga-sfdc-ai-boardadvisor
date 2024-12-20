import { Award, Podcast, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Award,
    title: "12 Certifications",
    description: "Comprehensive Salesforce expertise across multiple domains",
  },
  {
    icon: Podcast,
    title: "Pioneer Podcaster",
    description: "Host of the first Italian Salesforce podcast",
  },
  {
    icon: Rocket,
    title: "Innovation Driver",
    description: "Continuously improving to provide the highest value service",
  },
];

export const Achievements = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Expertise & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <achievement.icon className="w-12 h-12 text-sf-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};