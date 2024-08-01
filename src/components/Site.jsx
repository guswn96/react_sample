import React from "react";

const siteText = [
  {
    text: ["make", "site compliant with", "LimHyeonJu"],
    title: "웹표준을 준수한 웹사이트",
    code: "/",
    view: "/",
    info: [
      "site coding",
      "production perriod : 5day",
      "use stack : HTML5 / CSS3 / SCSS / Javascript /jQuery",
    ],
  },
  {
    text: ["make", "팀 프로젝트", "무모한 도전"],
    title: "팀의 합작품",
    code: "/",
    view: "/",
    info: [
      "site coding",
      "production perriod : 10day",
      "use stack : HTML5 / CSS3 / SCSS / Javascript /jQuery",
    ],
  },
  {
    text: ["make", "1차 포트폴리오", "짜장이네"],
    title: "나의 첫 작품",
    code: "/",
    view: "/",
    info: [
      "site coding",
      "production perriod : 15day",
      "use stack : HTML5 / CSS3 / SCSS / Javascript /jQuery",
    ],
  },
  {
    text: ["make", "리디자인", "이름"],
    title: "내가 입사지원 할 회사 웹페이지",
    code: "/",
    view: "/",
    info: [
      "site coding",
      "production perriod : 3day",
      "use stack : HTML5 / CSS3 / SCSS / Javascript /jQuery",
    ],
  },
];

const Site = () => {
  return (
    <section id="site">
      <div className="site_inner">
        <div className="site_title">
          Site coding <em>나의 작품</em>
        </div>
        <div className="site_wrap">
          {siteText.map((site, key) => (
            <article className={`site_item s${key+1}`} key={key}>
              <span className="num">{key+1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href="{site.code}">사이트 바로가기</a>
                <a href="{site.view}">자세히보기</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
