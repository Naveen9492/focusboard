import { ListTodo, Clock3, CircleCheck } from "lucide-react";

const OverviewCards = ({ tasks }) => {
  const totalTasks = tasks.length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In progress",
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const cards = [
    {
      title: "Total tasks",
      value: totalTasks,
      subtitle: "Across all projects",
      icon: ListTodo,
      color: "purple",
    },
    {
      title: "In progress",
      value: inProgressTasks,
      subtitle: "Keep the momentum",
      icon: Clock3,
      color: "blue",
    },
    {
      title: "Completed",
      value: completedTasks,
      subtitle: "Great work this week",
      icon: CircleCheck,
      color: "green",
    },
  ];

  return (
    <section className="overview-cards" aria-label="Task statistics">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <article className="stat-card" key={card.title}>
            <div className={`stat-icon ${card.color}`}>
              <Icon size={19} />
            </div>

            <div className="stat-content">
              <p>{card.title}</p>
              <div className="stat-bottom">
                <h3>{card.value}</h3>
                <span>{card.subtitle}</span>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default OverviewCards;
