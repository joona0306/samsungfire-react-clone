import { useState } from "react";
import "../styles/modal.css";

const modalMenus = [
 {
  id: "contract",
  title: "계약관리",
  submenu: [
   {
    title: "보험계약",
    sub: [
     "계약내용 확인",
     "대리운전자보험계약 확인",
     "TM계약 녹취 확인/신청",
     "4세대 실손의료비 할인/할증 확인",
    ],
   },
   {
    title: "장기보험",
    sub: [
     "계약자 변경",
     "수익자 변경",
     "피보험자 직업 변경",
     "이륜차 알릴사항 변경",
     "자녀 등록(태아확정)",
     "소재지 변경",
     "연금보험료 변경",
     "연금납입한도 설정",
     "실손의료비 중지/재개 신청",
     "해외장기체류자 실손의료비 납입 중지 신청",
     "무사고 보험계약 전환",
     "완전판매모니터링",
    ],
   },
   {
    title: "자동차보험",
    sub: [
     "가입금액/특약 변경",
     "운전자 범위/연령 변경",
     "임시운전자 특약 가입",
     "임시운전자 특약 해지",
     "마일리지 특약 가입",
     "최종 주행거리 사진 등록",
     "자동차번호 등록",
    ],
   },
   {
    title: "여행보험",
    sub: ["여행보험 기간 변경", "여행보험 계약자 영문명 변경"],
   },
   {
    title: "납입",
    sub: [
     "보험료 납입",
     "연금(저축)보험료 추가 납입",
     "효력상실예정계약 보험료 납입",
     "보험료 납입방법 변경",
    ],
   },
   {
    title: "환급/해지",
    sub: [
     "환급내역 확인",
     "환급금 수령계좌 변경",
     "환급금/휴면보험금 신청",
     "중도인출 신청",
     "장기보험 해지",
     "자동차보험 양도/말소해지",
     "자동차보험 해지서류 제출",
     "청약철회/개시 전 취소",
    ],
   },
   {
    title: "펀드",
    sub: [
     "펀드상품 안내",
     "보유펀드 확인",
     "펀드매매",
     "출금가능금액 확인/출금",
     "펀드계좌 관리",
     "펀드 이용가이드",
     "펀드상품 수시공시",
    ],
   },
  ],
 },
 {
  id: "insurance",
  title: "보험상품",
  submenu: [
   { title: "보험가이드", sub: ["셀프 보장분석", "보험상품 한눈에 보기"] },
   { title: "자동차보험", sub: ["애니카 자동차보험"] },
   { title: "운전자/상해보험", sub: ["안전운전 파트너 플러스", "행복한 안심파트너"] },
   { title: "실손의료비보험", sub: ["Comming Soon"] },
   { title: "자녀보험", sub: ["Comming Soon"] },
   { title: "건강보험", sub: ["Comming Soon"] },
   { title: "치아보험", sub: ["Comming Soon"] },
   { title: "주택화재/풍수해보험", sub: ["Comming Soon"] },
   { title: "사업장화재/재물보험", sub: ["Comming Soon"] },
   { title: "연금보험", sub: ["Comming Soon"] },
   { title: "외국어 가입 상담(English/中文)", sub: ["Comming Soon"] },
  ],
 },
 {
  id: "reward",
  title: "보상",
  submenu: [
   { title: "질병/상해", sub: ["Comming Soon"] },
   { title: "자동차", sub: ["Comming Soon"] },
   { title: "반려동물", sub: ["Comming Soon"] },
   { title: "재물/배상책임", sub: ["Comming Soon"] },
   { title: "보상가이드", sub: ["Comming Soon"] },
  ],
 },
 {
  id: "loan",
  title: "대출",
  submenu: [
   { title: "보험계약대출", sub: ["Comming Soon"] },
   { title: "신용대출", sub: ["Comming Soon"] },
   { title: "담보대출", sub: ["Comming Soon"] },
   { title: "대출계약", sub: ["Comming Soon"] },
   { title: "금융소비자의 권리", sub: ["Comming Soon"] },
  ],
 },
 {
  id: "retirement",
  title: "퇴직연금",
  submenu: [
   { title: "퇴직연금계약", sub: ["Comming Soon"] },
   { title: "상품운용", sub: ["Comming Soon"] },
   { title: "개인형퇴직연금(IRP)", sub: ["Comming Soon"] },
   { title: "확정연금", sub: ["Comming Soon"] },
   { title: "확정기여형퇴직연금(DC)", sub: ["Comming Soon"] },
   { title: "실물이전", sub: ["Comming Soon"] },
   { title: "퇴직연금제도", sub: ["Comming Soon"] },
   { title: "고객지원", sub: ["Comming Soon"] },
   { title: "PLUS 서비스", sub: ["Comming Soon"] },
  ],
 },
 {
  id: "services",
  title: "혜택/서비스",
  submenu: [
   { title: "피크닉 서비스", sub: ["Comming Soon"] },
   { title: "애니포인트", sub: ["Comming Soon"] },
   { title: "헬스케어서비스", sub: ["Comming Soon"] },
   { title: "Car케어서비스", sub: ["Comming Soon"] },
   { title: "착!한생활서비스", sub: ["Comming Soon"] },
   { title: "생활부가서비스", sub: ["Comming Soon"] },
   { title: "라이프케어", sub: ["Comming Soon"] },
   { title: "소셜미디어", sub: ["Comming Soon"] },
   { title: "이벤트", sub: ["Comming Soon"] },
  ],
 },
 {
  id: "customer",
  title: "고객센터",
  submenu: [
   { title: "내정보", sub: ["Comming Soon"] },
   { title: "증명서", sub: ["Comming Soon"] },
   { title: "고객지원", sub: ["Comming Soon"] },
   { title: "공지사항", sub: ["Comming Soon"] },
   { title: "고객의소리", sub: ["Comming Soon"] },
   { title: "인증센터", sub: ["Comming Soon"] },
   { title: "홈페이지이용약관", sub: ["Comming Soon"] },
   { title: "개인정보보호", sub: ["Comming Soon"] },
  ],
 },
];

const navMenus = [
 { id: "contract", label: "계약관리" },
 { id: "insurance", label: "보험상품" },
 { id: "reward", label: "보상" },
 { id: "loan", label: "대출" },
 { id: "retirement", label: "퇴직연금" },
 { id: "services", label: "혜택/서비스" },
 { id: "customer", label: "고객센터" },
];

const Modal = ({ isOpen, onClose }) => {
 // 현재 활성화된 탭 상태
 const [activeNav, setActiveNav] = useState("contract");
 // 아코디언 상태
 const [openIndex, setOpenIndex] = useState(null);

 // 모달 내비게이션 클릭 시 스타일 변경
 const handleNavClick = (id) => {
  setActiveNav(id);
 };
 // 아코디언 클릭
 const handleDepth2Click = (menuId, idx) => {
  if (activeNav !== menuId) {
   setActiveNav(menuId);
   setOpenIndex(idx);
  } else {
   setOpenIndex(openIndex === idx ? null : idx);
  }
 };

 return (
  <div
   className="modal-wrap"
   style={{
    right: isOpen ? "0" : "-100%",
   }}
  >
   <div className="modal-inner">
    {/* 모달 헤더 */}
    <div className="modal-header">
     <h3 className="modal-nav-logo">
      <div className="logo">
       <a href="#">
        <span>삼성화재</span>
       </a>
      </div>
      <div className="login-btn">
       <a href="#">
        <span>로그인</span>
       </a>
      </div>
     </h3>
    </div>
    {/* 모달 닫기 버튼 */}
    <div className="modal-close-btn" onClick={onClose}></div>
    {/* 모달 메뉴 */}
    <div className="modal-menu-wrap">
     {/* 모달 검색 */}
     <div className="modal-searchbar">
      <input type="text" placeholder="삼성화재 메뉴 검색" />
     </div>
     {/* 모달 메뉴 리스트 */}
     <div className="modal-menu">
      <div className="modal-menu-nav">
       <ul>
        {navMenus.map((nav) => (
         <li key={nav.id} className={activeNav === nav.id ? "on" : ""}>
          <a
           href={`#${nav.id}`}
           onClick={() => {
            handleNavClick(nav.id);
           }}
          >
           {nav.label}
          </a>
         </li>
        ))}
       </ul>
      </div>
      <div className="modal-menu-list">
       {modalMenus.map((menu, menuIdx) => (
        <div id={menu.id} key={menu.id} style={{ paddingTop: menuIdx === 0 ? 0 : "4rem" }}>
         <h4>{menu.title}</h4>
         <ul className="modal-submenu depth2">
          {menu.submenu.map((item, idx) => (
           <li
            key={item.title}
            className={activeNav === menu.id && openIndex === idx ? "open" : ""}
            onClick={(e) => {
             e.preventDefault();
             setActiveNav(menu.id);
             handleDepth2Click(menu.id, idx);
            }}
            style={{ cursor: "pointer" }}
           >
            <a href="#">{item.title}</a>
            <ul
             className="depth3"
             style={{
              height: activeNav === menu.id && openIndex === idx ? `${item.sub.length * 44}px` : 0,
              overflow: "hidden",
              transition: "height 0.3s",
             }}
             onClick={(e) => e.stopPropagation()}
            >
             {item.sub.map((subTitle) => (
              <li key={subTitle}>
               <a href="#">{subTitle}</a>
              </li>
             ))}
            </ul>
           </li>
          ))}
         </ul>
        </div>
       ))}
      </div>
     </div>
     {/* 모달 푸터 */}
     <div className="modal-footer">
      <div className="modal-footer-inner">
       <a href="#">회사소개</a>
       <a href="#">공시실</a>
       <a href="#">소비자포털</a>
       <a href="#">RC(보험설계사)</a>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Modal;
