import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import port01 from "../assets/img/mbc_prot01_code_99.png";
import port02 from "../assets/img/mbc_prot02_eof.png";
import port03 from "../assets/img/mbc_prot03__joteam.png";
import port04 from "../assets/img/mbc_prot04__scoops.png";
import port05 from "../assets/img/mbc_prot05_tamyok.png";

const portText = [
  {
    num: "01",
    title: "code_99팀",
    img: port01,
    img_alt: "code_99팀",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut error officia quo odit placeat suscipit porro unde inventore animi repudiandae vitae veniam, illo perferendis pariatur minus? Recusandae, amet voluptatum!",
    site: "http://tnwjd3887.dothome.co.kr/port1_5",
  },
  {
    num: "02",
    title: "eof팀",
    img: port02,
    img_alt: "eof팀",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut error officia quo odit placeat suscipit porro unde inventore animi repudiandae vitae veniam, illo perferendis pariatur minus? Recusandae, amet voluptatum!",
    site: "http://tjsdudis.dothome.co.kr/team",
  },
  {
    num: "03",
    title: "조현호와아이들팀",
    img: port03,
    img_alt: "조현호와아이들팀",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut error officia quo odit placeat suscipit porro unde inventore animi repudiandae vitae veniam, illo perferendis pariatur minus? Recusandae, amet voluptatum!",
    site: "http://tlswnsxor.dothome.co.kr/joteam/",
  },
  {
    num: "04",
    title: "20의10승팀",
    img: port04,
    img_alt: "20의10승팀",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut error officia quo odit placeat suscipit porro unde inventore animi repudiandae vitae veniam, illo perferendis pariatur minus? Recusandae, amet voluptatum!",
    site: "http://mieum0915.dothome.co.kr/scoops/",
  },
  {
    num: "05",
    title: "무모한도전팀",
    img: port05,
    img_alt: "무모한도전팀",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut error officia quo odit placeat suscipit porro unde inventore animi repudiandae vitae veniam, illo perferendis pariatur minus? Recusandae, amet voluptatum!",
    site: "http://ds1djs.dothome.co.kr/mainpage",
  },
  {
    num: "06",
    title: "code_99팀",
    img: port01,
    img_alt: "code_99팀",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut error officia quo odit placeat suscipit porro unde inventore animi repudiandae vitae veniam, illo perferendis pariatur minus? Recusandae, amet voluptatum!",
    site: "http://tnwjd3887.dothome.co.kr/port1_5",
  },
  {
    num: "07",
    title: "eof팀",
    img: port02,
    img_alt: "eof팀",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut error officia quo odit placeat suscipit porro unde inventore animi repudiandae vitae veniam, illo perferendis pariatur minus? Recusandae, amet voluptatum!",
    site: "http://tjsdudis.dothome.co.kr/team",
  },
  {
    num: "08",
    title: "조현호와아이들팀",
    img: port03,
    img_alt: "조현호와아이들팀",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut error officia quo odit placeat suscipit porro unde inventore animi repudiandae vitae veniam, illo perferendis pariatur minus? Recusandae, amet voluptatum!",
    site: "http://tlswnsxor.dothome.co.kr/joteam/",
  },
  {
    num: "09",
    title: "20의10승팀",
    img: port04,
    img_alt: "20의10승팀",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut error officia quo odit placeat suscipit porro unde inventore animi repudiandae vitae veniam, illo perferendis pariatur minus? Recusandae, amet voluptatum!",
    site: "http://mieum0915.dothome.co.kr/scoops/",
  },
  {
    num: "10",
    title: "무모한도전팀",
    img: port05,
    img_alt: "무모한도전팀",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor aut error officia quo odit placeat suscipit porro unde inventore animi repudiandae vitae veniam, illo perferendis pariatur minus? Recusandae, amet voluptatum!",
    site: "http://ds1djs.dothome.co.kr/mainpage",
  },
];

const Port = () => {
  const horizontalRef = useRef(null); //상수를 만들었는데 안을 비워두겠다(훅) //하나만 사용 ex)selector
  //horizontalRef라는 변수를 생성하고 useRef 훅으로 추기화
  const sectionRef = useRef([]); //갯수만큼 늘어남 ex)selectorAll
  //sectionRef 변수를 생성하고 useRef 훅으로 빈배열로 초기화

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    //라이브러리를 사용할 수 있도록 안정화시켜주는 명령어

    const horizontal = horizontalRef.current;
    //current는 현재 선택된 (horizontalRef)것을 (horizontal라는) 변수에 넣어라
    const sections = sectionRef.current;

    let scrollTween = gsap.to(sections,{
      xPercent:-120*(sections.length-1),
      ease : "none",
      scrollTrigger : {
        trigger: horizontal,
        start: "top 56px",
        end : ()=>"+="+horizontal.offsetWidth,
        pin : true,
        scrub : 1,
      }
    })
    return()=>{
      scrollTween.kill();
    }
  },[]);
  return (
    <section id="port" ref={horizontalRef}>
      <div className="port_inner">
        <div className="port_title">
          portfolio <em>나의 작품들</em>
        </div>
        <div className="port_wrap">
          {portText.map((port, key) => (
            <div 
            className={`port_item s${key + 1}`}
            key={key}
            ref={(el)=>(sectionRef.current[key]=el)}
            >
              <span className="num">{port.num}.</span>
              <a href={port.site} target="_blank" className="img">
                <img src={port.img} alt={port.img_alt} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a href={port.site} target="_blank" className="site">
                사이트 보기
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
