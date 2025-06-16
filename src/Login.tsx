import React from 'react';

function ImgInfo() {
  return (
    <div className="relative size-full" data-name="img/info" id="node-0_11480">
      <div className="absolute left-0 size-9 top-0" data-name="ico_info" id="node-0_11481">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <g id="ico_info">
            <circle cx="18" cy="18" id="Oval" r="16.65" stroke="black" strokeWidth="2.7" />
            <path clipRule="evenodd" d="M19.2375 21.0591L19.1931 21.756H16.3518C16.3518 20.6897 16.4776 19.8405 16.7292 19.2083C16.9808 18.5762 17.4414 17.9535 18.111 17.3404C18.7806 16.7273 19.2264 16.2284 19.4484 15.8438C19.6704 15.4591 19.7814 15.0535 19.7814 14.627C19.7814 13.3398 19.2042 12.6962 18.0499 12.6962C17.5024 12.6962 17.064 12.8695 16.7347 13.2161C16.4055 13.5626 16.2334 14.0405 16.2186 14.6499H13C13.0148 13.1951 13.4717 12.0565 14.3707 11.2339C15.2697 10.4113 16.4961 10 18.0499 10C19.6186 10 20.8357 10.3903 21.7014 11.171C22.5671 11.9517 23 13.0542 23 14.4785C23 15.1259 22.8594 15.7371 22.5782 16.3122C22.2971 16.8872 21.805 17.5251 21.1021 18.2258L20.2031 19.1055C19.6408 19.6615 19.3189 20.3127 19.2375 21.0591ZM19.1321 26.5087C18.8028 26.8362 18.3681 27 17.828 27C17.2878 27 16.8531 26.8362 16.5239 26.5087C16.1946 26.1812 16.03 25.7661 16.03 25.2634C16.03 24.7531 16.1983 24.3323 16.535 24.001C16.8716 23.6697 17.3026 23.504 17.828 23.504C18.3533 23.504 18.7843 23.6697 19.121 24.001C19.4576 24.3323 19.626 24.7531 19.626 25.2634C19.626 25.7661 19.4613 26.1812 19.1321 26.5087Z" fill="black" fillRule="evenodd" id="?" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ImgCancel() {
  return (
    <div className="relative size-full" data-name="img/cancel" id="node-0_11487">
      <div className="absolute h-9 left-0 top-0 w-14" data-name="ico_number_cancel" id="node-0_11488">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 36">
          <g id="ico_number_cancel">
            <path d="M18.6667 36L1.49301 19.4397C0.677373 18.6532 0.677372 17.3468 1.49301 16.5603L18.6667 0H54C55.1046 0 56 0.895431 56 2V34C56 35.1046 55.1046 36 54 36H18.6667Z" fill="white" id="í©ì¹ê¸°_5" />
            <g id="ê·¸ë£¹_2197">
              <path d="M30.5365 13.4389L39.79 22.3982" id="ì _6" stroke="#465FF2" strokeLinecap="round" strokeWidth="3" />
              <path d="M39.79 13.4389L30.5365 22.3982" id="ì _7" stroke="#465FF2" strokeLinecap="round" strokeWidth="3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcoCloseBlack() {
  return (
    <div className="relative size-full" data-name="ico/close/black" id="node-0_10822">
      <div className="absolute flex inset-[-14.818%] items-center justify-center">
        <div className="flex-none rotate-[45deg] size-11">
          <div className="relative size-full" data-name="Combined Shape" id="node-0_10825">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
              <path clipRule="evenodd" d="M24 0H20V20H0V24H20V44H24V24H44V20H24V0Z" fill="#121212" fillRule="evenodd" id="Combined Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <div className="login-bg">
      {/* ... Figma 레이아웃 코드 ... */}
      {/* 위의 Figma 코드 전체를 여기에 붙여넣기 (필요시 CSS 변환) */}
      {/* 실제 구현에서는 Tailwind 대신 CSS 클래스 사용, 아래는 예시 */}
      <div className="login-mask" />
      <div className="login-panel" />
      <div className="login-title">
        <p>드라이버 인증번호를</p>
        <p>입력하세요</p>
      </div>
      <div className="login-info-icon">
        <ImgInfo />
      </div>
      <div className="login-desc">
        <p>초기 비밀번호는 드라이버님의</p>
        <p>휴대전화번호 뒷 4자리입니다.</p>
      </div>
      <div className="login-cancel-icon">
        <ImgCancel />
      </div>
      <div className="login-dialog-title">
        <span>인증번호 입력</span>
        <IcoCloseBlack />
      </div>
      {/* ... 나머지 Figma 구조도 필요시 추가 ... */}
    </div>
  );
}

// CSS는 src/App.css 또는 별도 Login.css에 추가 필요 