import React, { useState } from "react";

export function Nav() {
  const [expandedMenu, setExpandedMenu] = useState({});

  // 사이드 메뉴 확장/축소 토글 함수
  const toggleMenu = (type) => {
    setExpandedMenu((prev) => ({
      ...prev,
      [type]: !prev[type], // 클릭 시 해당 메뉴 확장/축소 토글
    }));
  };

  // 메인 섹션으로 스크롤 이동 함수
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="App-nav">
      <ul>
        <li>
          <a href=".App">홈으로</a>
        </li>
        <li>
          <span onClick={() => toggleMenu("Sofa")}>소파</span>
          {expandedMenu["Sofa"] && (
            <ul>
              <li onClick={() => scrollToSection("sofa")}>모던 소파</li>
              <li onClick={() => scrollToSection("sofa")}>빈티지 소파</li>
            </ul>
          )}
        </li>
        <li>
          <span onClick={() => toggleMenu("Table")}>테이블</span>
          {expandedMenu["Table"] && (
            <ul>
              <li onClick={() => scrollToSection("table")}>우드 테이블</li>
              <li onClick={() => scrollToSection("table")}>
                모던 글래스 테이블
              </li>
            </ul>
          )}
        </li>
        <li>
          <span onClick={() => toggleMenu("Chair")}>의자</span>
          {expandedMenu["Chair"] && (
            <ul>
              <li onClick={() => scrollToSection("chair")}>에코 의자</li>
              <li onClick={() => scrollToSection("chair")}>클래식 의자</li>
            </ul>
          )}
        </li>
        <li>
          <span onClick={() => toggleMenu("Cabinet")}>장식장</span>
          {expandedMenu["Cabinet"] && (
            <ul>
              <li onClick={() => scrollToSection("dbord")}>원목 장식장</li>
              <li onClick={() => scrollToSection("dbord")}>미니멀 장식장</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
