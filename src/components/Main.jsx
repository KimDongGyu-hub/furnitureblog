import React, { useState } from "react";
import { furnitureData } from "../furnitureData"; // 가구 데이터를 불러옴

export function Main() {
  const [selectedItems, setSelectedItems] = useState({}); // 선택된 가구 정보를 저장하는 상태 (섹션별로)
  const [expandedMenu, setExpandedMenu] = useState({}); // 사이드 메뉴 확장 상태

  // 가구 정보를 선택하고 표시하는 함수 (해당 섹션 밑에만 표시)
  const handleShowDetails = (type) => {
    const items = furnitureData.filter((furniture) => furniture.type === type);
    setSelectedItems((prev) => ({
      ...prev,
      [type]: prev[type] ? null : items, // 클릭 시 해당 섹션의 가구 정보 토글
    }));
  };

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
    <main className="App-main">
      <h2>가구 블로그</h2>

      <section>
        {/* 소파 */}
        <article id="sofa" onClick={() => handleShowDetails("Sofa")}>
          <h3>최신 소파 트렌드</h3>
          <p>
            2024년 소파 디자인의 최신 트렌드를 확인하세요. 모던하면서도 편안한
            스타일이 주목받고 있습니다.
          </p>
          {/* 소파 관련 가구 정보 출력 */}
          {selectedItems["Sofa"] && (
            <div className="furniture-details">
              {selectedItems["Sofa"].map((item) => (
                <div key={item.id} className="furniture-item">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>가격: {item.price}원</p>
                  <p>재고: {item.stock}개</p>
                  <img src={item.imageUrl} alt={item.name} width="200" />
                </div>
              ))}
            </div>
          )}
        </article>

        {/* 테이블 */}
        <article id="table" onClick={() => handleShowDetails("Table")}>
          <h3>최고의 테이블 추천</h3>
          <p>내구성과 디자인을 모두 잡은 최고의 테이블을 소개합니다.</p>
          {/* 테이블 관련 가구 정보 출력 */}
          {selectedItems["Table"] && (
            <div className="furniture-details">
              {selectedItems["Table"].map((item) => (
                <div key={item.id} className="furniture-item">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>가격: {item.price}원</p>
                  <p>재고: {item.stock}개</p>
                  <img src={item.imageUrl} alt={item.name} width="200" />
                </div>
              ))}
            </div>
          )}
        </article>

        {/* 의자 */}
        <article id="chair" onClick={() => handleShowDetails("Chair")}>
          <h3>인기 의자 스타일</h3>
          <p>
            다양한 의자 스타일과 어떤 의자가 여러분의 집에 어울릴지
            확인해보세요.
          </p>
          {/* 의자 관련 가구 정보 출력 */}
          {selectedItems["Chair"] && (
            <div className="furniture-details">
              {selectedItems["Chair"].map((item) => (
                <div key={item.id} className="furniture-item">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>가격: {item.price}원</p>
                  <p>재고: {item.stock}개</p>
                  <img src={item.imageUrl} alt={item.name} width="200" />
                </div>
              ))}
            </div>
          )}
        </article>

        {/* 장식장 */}
        <article id="dbord" onClick={() => handleShowDetails("Cabinet")}>
          <h3>인기 장식장 추천</h3>
          <p>다양한 장식장 스타일과 트렌드를 확인하세요</p>
          {/* 장식장 관련 가구 정보 출력 */}
          {selectedItems["Cabinet"] && (
            <div className="furniture-details">
              {selectedItems["Cabinet"].map((item) => (
                <div key={item.id} className="furniture-item">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>가격: {item.price}원</p>
                  <p>재고: {item.stock}개</p>
                  <img src={item.imageUrl} alt={item.name} width="200" />
                </div>
              ))}
            </div>
          )}
        </article>
      </section>
    </main>
  );
}
