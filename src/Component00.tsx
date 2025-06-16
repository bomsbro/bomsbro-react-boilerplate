import React from "react";
import "./Component00.css";

function IcoPhoneFill() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16.42V19.956C21.0002 20.4813 20.594 20.9172 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.08277 3.40599 3.51871 2.99976 4.044 3H7.58C7.83697 2.99974 8.0523 3.19431 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.5589 14.6204 15.8001 14.5577 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.8073 15.9482 21.0013 16.1634 21.001 16.42H21Z" fill="white"/>
    </svg>
  );
}

export default function Component00() {
  return (
    <div className="component00-root">
      <div className="component00-bg-right" />
      <div className="component00-bg-mask">
        {/* 배경/마스크 SVG 등은 필요시 추가 */}
      </div>
      <div className="component00-bg-left" />
      <div className="component00-header">
        <span className="component00-header-blue">오영택택택</span>
        <span className="component00-header-black">드라이버님</span>
      </div>
      <div className="component00-greeting">안녕하세요?</div>
      <div className="component00-info">
        <div className="component00-info-row">
          <span className="component00-info-label">근무시간</span>
          <span className="component00-info-value">08:00 ~ 20:00</span>
        </div>
        <div className="component00-info-row">
          <span className="component00-info-label">휴식시간</span>
          <span className="component00-info-value">08:00 ~ 20:00</span>
        </div>
      </div>
      <div className="component00-customer">
        <div className="component00-customer-icon">
          <IcoPhoneFill />
        </div>
        <span className="component00-customer-text">고객센터</span>
      </div>
      <button className="component00-btn">체크리스트 시작</button>
      <div className="component00-arrow">
        <svg width="38" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="11.48" width="36" height="2.73" fill="white" />
          <path d="M24.087 0L38 12.6482L35.913 14.5455L22 1.89723L24.087 0Z" fill="white" />
          <path d="M22 23.5573L35.913 10.9091L38 12.8063L24.087 25.4545L22 23.5573Z" fill="white" />
        </svg>
      </div>
    </div>
  );
} 