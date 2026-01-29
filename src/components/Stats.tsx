import { TrendingDown, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    value: "40%",
    label: "Average Savings",
    description: "On business & first class",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "HNIs & corporate travelers",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Routes Covered",
    description: "US ↔ Europe sectors",
  },
  {
    icon: Award,
    value: "24/7",
    label: "Concierge",
    description: "Always available",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <stat.icon className="w-7 h-7 text-gold" />
              </div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-medium text-primary-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
