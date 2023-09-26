import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "begineer ",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];
export default function App() {
  return (
    <div className="App">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}
function Avatar() {
  return <img src="jonas-image.jpeg" alt="jonas" />;
}
function Intro() {
  return (
    <div>
      <h1>Jonas schmadtman</h1>
      <p>
        Here are my some skills I'm gonna inplement all these skills for my
        practice
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div>
      {skills.map((item) => (
        <Skill skill={item.skill} level={item.level} color={item.color} />
      ))}
    </div>
  );
}
function Skill({ skill, level, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "🥺"}
        {level === "intermediate" && "😇"}
        {level === "advanced" && "😎"}
      </span>
    </div>
  );
}
