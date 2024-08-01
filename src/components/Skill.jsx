import React from 'react'

const skillText = [
    {
        title : "꿈을 설계하고 디자인하다.",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur, placeat nisi nulla ex ipsa optio deleniti magnam eaque iure ratione itaque illum eum omnis quod dicta saepe? Asperiores, quod?"
    },
    {
        title : "열심히 할수록 기회는 따른다.",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur, placeat nisi nulla ex ipsa optio deleniti magnam eaque iure ratione itaque illum eum omnis quod dicta saepe? Asperiores, quod?"
    },
    {
        title : "나에게 정직하다.",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur, placeat nisi nulla ex ipsa optio deleniti magnam eaque iure ratione itaque illum eum omnis quod dicta saepe? Asperiores, quod?"
    }
]

const Skill = () => {
  return (
    <section id='skill'>
        <div className="skill_inner">
            <div className="skill_title">
                Challenge <em>나의 도전</em>
            </div>
            <div className="skill_desc">
                {
                    skillText.map((skill,key)=>(
                        <div key={key}>
                            <span>{key+1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill
