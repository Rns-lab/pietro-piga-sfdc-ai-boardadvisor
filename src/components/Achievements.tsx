import { Award, Podcast, Rocket, BookOpen, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Award,
    title: "7x Certified",
    description: "Multiple Salesforce certifications including Admin, Platform App Builder, and more",
  },
  {
    icon: Trophy,
    title: "Trailhead Ranger",
    description: "100,000+ points and 150+ badges earned on Trailhead",
  },
  {
    icon: Podcast,
    title: "Pioneer Podcaster",
    description: "Host of the first Italian Salesforce podcast",
  },
  {
    icon: Rocket,
    title: "Innovation Driver",
    description: "Leading complex Salesforce implementations and digital transformations",
  },
  {
    icon: Users,
    title: "Community Leader",
    description: "Active contributor to the Salesforce ecosystem and community",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Constantly expanding expertise through certifications and hands-on experience",
  },
];

export const Achievements = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Expertise & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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