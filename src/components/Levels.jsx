import Level from "./Level";

const subjects = [
  { id: 1, level: 1, subject: "Maths", characterImg: "/path-to-maths-character.png", activeLevel: 1 },
  { id: 2, level: 1, subject: "Science", characterImg: "/path-to-science-character.png", activeLevel: 2 },
  { id: 3, level: 1, subject: "History", characterImg: "/path-to-history-character.png", activeLevel: 3 },
  { id: 4, level: 1, subject: "Geography", characterImg: "/path-to-geography-character.png", activeLevel: 4 },
];

const Levels = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {subjects.map(({ id, level, subject, characterImg, activeLevel }) => (
        <Level
          key={id}
          level={level}
          subject={subject}
          characterImg={characterImg}
          activeLevel={activeLevel}
        />
      ))}
    </div>
  );
};

export default Levels;
