import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { iconSkills } from '../data/index'

const Skills = () => {
  return (
    <>
      <div className="mt-4 w-full">
        <h6 className="flex items-center text-lg gap-2 font-semibold mb-6">
          <BiCodeAlt /> Skills
        </h6>
        <div className="flex flex-wrap gap-3 container">
          {iconSkills.map((skill) => {
            return (
              <img
                key={skill.id}
                src={skill.techImage}
                alt={skill.techAlt}
                width="50"
                className="bg-slate-200 rounded-full p-1"
                height="50"
              />
            );
          })}
        </div>
        <hr className="mt-4 border-1 border-black dark:border-slate-400" />
      </div>
    </>
  );
};

export default Skills;
