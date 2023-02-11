const skills = [
  {
    skill: "Github",
    percentage: 20,
    source: "/github-svgrepo-com.svg",
  },
  {
    skill: "Html",
    percentage: 80,
    source: "/html-svgrepo-com.svg",
  },
  {
    skill: "Css",
    percentage: 60,
    source: "/css-svgrepo-com.svg",
  },
  {
    skill: "Golang",
    percentage: 10,
    source: "/go-svgrepo-com.svg",
  },
  {
    skill: "Java",
    percentage: 40,
    source: "/java-svgrepo-com.svg",
  },
  {
    skill: "Python",
    percentage: 10,
    source: "/python-svgrepo-com.svg",
  },
  {
    skill: "Javascript",
    percentage: 49,
    source: "/javascript-svgrepo-com.svg",
  },
  {
    skill: "Deno",
    percentage: 49,
    source: "/deno-svgrepo-com.svg",
  },
  {
    skill: "React",
    percentage: 49,
    source: "/react-svgrepo-com.svg",
  },
  {
    skill: "Vue",
    percentage: 49,
    source: "/vue-svgrepo-com.svg",
  },
];

function Skill() {
  return (
    <div class="flex flex-wrap py-2 px-3 gap-2">
      {skills.map(({ skill, source }, i) => (
        <div key={i}>
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg flex-row hover:bg-gray-100">
            <i className="p-2">
              <img class="w-8" src={source} alt="css-logo" />
            </i>
            <span className="text-sm mr-4 leading-normal">
              <h5>{skill}</h5>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skill;
