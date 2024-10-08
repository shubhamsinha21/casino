import React from "react";

const Footer = () => {
  return (
    <div className="w-full ">
      <footer className="bg-bg-primary dark:bg-[#030303] lg:py-10 py-5 border-t border-[#E7C980] ">
        <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex flex-col items-center justify-center gap-8">
                <img src="/logo.svg" className="" alt="FlowBite Logo" />
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M29.3334 15.9993C29.3334 8.63935 23.3601 2.66602 16.0001 2.66602C8.64008 2.66602 2.66675 8.63935 2.66675 15.9993C2.66675 22.4527 7.25341 27.826 13.3334 29.066V19.9993H10.6667V15.9993H13.3334V12.666C13.3334 10.0927 15.4267 7.99935 18.0001 7.99935H21.3334V11.9993H18.6667C17.9334 11.9993 17.3334 12.5993 17.3334 13.3327V15.9993H21.3334V19.9993H17.3334V29.266C24.0667 28.5993 29.3334 22.9193 29.3334 15.9993Z"
                        fill="url(#paint0_linear_126_11013)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_126_11013"
                          x1="2.66675"
                          y1="15.952"
                          x2="29.3334"
                          y2="15.952"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#E7C980" />
                          <stop offset="1" stop-color="#9E8253" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                    >
                      <path
                        d="M16.828 2.58362C17.7706 2.58 18.7132 2.58948 19.6555 2.61204L19.9061 2.62108C20.1954 2.63141 20.4808 2.64433 20.8257 2.65983C22.2001 2.72441 23.1378 2.94141 23.9606 3.26045C24.8131 3.58854 25.5313 4.03287 26.2494 4.75104C26.9061 5.39636 27.4143 6.17697 27.7387 7.03858C28.0578 7.86137 28.2748 8.80041 28.3393 10.1747C28.3548 10.5183 28.3678 10.8051 28.3781 11.0944L28.3858 11.345C28.4088 12.2869 28.4187 13.229 28.4156 14.1712L28.4168 15.1347V16.8268C28.42 17.7694 28.4101 18.712 28.3871 19.6543L28.3794 19.9049C28.3691 20.1942 28.3561 20.4797 28.3406 20.8245C28.2761 22.1989 28.0565 23.1366 27.7387 23.9594C27.4153 24.8219 26.907 25.6032 26.2494 26.2482C25.6035 26.9048 24.8225 27.413 23.9606 27.7375C23.1378 28.0566 22.2001 28.2736 20.8257 28.3382C20.4808 28.3537 20.1954 28.3666 19.9061 28.3769L19.6555 28.3847C18.7132 28.4076 17.7706 28.4175 16.828 28.4144L15.8644 28.4157H14.1736C13.2311 28.4188 12.2885 28.4089 11.3462 28.386L11.0956 28.3782C10.789 28.3671 10.4824 28.3542 10.1759 28.3395C8.80159 28.2749 7.86384 28.0553 7.03976 27.7375C6.17781 27.4138 5.39707 26.9055 4.75222 26.2482C4.09482 25.6028 3.58613 24.8217 3.26163 23.9594C2.94259 23.1366 2.72559 22.1989 2.66101 20.8245C2.64662 20.518 2.63371 20.2115 2.62226 19.9049L2.6158 19.6543C2.59199 18.712 2.58122 17.7694 2.58351 16.8268V14.1712C2.5799 13.229 2.58938 12.2869 2.61193 11.345L2.62097 11.0944C2.6313 10.8051 2.64422 10.5183 2.65972 10.1747C2.7243 8.79912 2.9413 7.86266 3.26034 7.03858C3.58503 6.17655 4.09471 5.39615 4.75351 4.75233C5.39791 4.09455 6.17817 3.5854 7.03976 3.26045C7.86384 2.94141 8.8003 2.72441 10.1759 2.65983L11.0956 2.62108L11.3462 2.61462C12.288 2.59082 13.2302 2.58005 14.1723 2.58233L16.828 2.58362ZM15.5002 9.04195C14.6445 9.02985 13.7949 9.18794 13.0008 9.50704C12.2067 9.82614 11.4839 10.2999 10.8745 10.9007C10.2651 11.5016 9.78119 12.2176 9.4509 13.0071C9.1206 13.7966 8.95051 14.6438 8.95051 15.4996C8.95051 16.3554 9.1206 17.2027 9.4509 17.9922C9.78119 18.7817 10.2651 19.4977 10.8745 20.0986C11.4839 20.6994 12.2067 21.1731 13.0008 21.4922C13.7949 21.8113 14.6445 21.9694 15.5002 21.9573C17.213 21.9573 18.8557 21.2769 20.0669 20.0657C21.2781 18.8546 21.9585 17.2119 21.9585 15.499C21.9585 13.7861 21.2781 12.1434 20.0669 10.9323C18.8557 9.72109 17.213 9.04195 15.5002 9.04195ZM15.5002 11.6253C16.0149 11.6158 16.5264 11.709 17.0047 11.8994C17.483 12.0898 17.9186 12.3736 18.286 12.7342C18.6534 13.0949 18.9453 13.5251 19.1445 13.9998C19.3438 14.4745 19.4465 14.9842 19.4466 15.499C19.4466 16.0138 19.3441 16.5235 19.145 16.9983C18.9459 17.473 18.6542 17.9034 18.2869 18.2641C17.9197 18.6249 17.4842 18.9088 17.0059 19.0994C16.5276 19.29 16.0162 19.3833 15.5015 19.374C14.4738 19.374 13.4881 18.9657 12.7614 18.239C12.0347 17.5123 11.6265 16.5267 11.6265 15.499C11.6265 14.4713 12.0347 13.4857 12.7614 12.759C13.4881 12.0323 14.4738 11.624 15.5015 11.624L15.5002 11.6253ZM22.2814 7.10445C21.8647 7.12113 21.4706 7.2984 21.1817 7.59912C20.8928 7.89985 20.7314 8.30071 20.7314 8.71775C20.7314 9.13478 20.8928 9.53564 21.1817 9.83637C21.4706 10.1371 21.8647 10.3144 22.2814 10.331C22.7096 10.331 23.1203 10.1609 23.4231 9.85814C23.7259 9.55534 23.896 9.14467 23.896 8.71645C23.896 8.28824 23.7259 7.87756 23.4231 7.57477C23.1203 7.27198 22.7096 7.10187 22.2814 7.10187V7.10445Z"
                        fill="url(#paint0_linear_126_11015)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_126_11015"
                          x1="2.58276"
                          y1="15.4856"
                          x2="28.4174"
                          y2="15.4856"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#E7C980" />
                          <stop offset="1" stop-color="#9E8253" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 px-10 sm:gap-40 sm:grid-cols-2 lg:px-0">
              <div className="flex flex-col items-start justify-start gap-6">
                <h1 className="text-lg font-extrabold leading-normal uppercase lg:text-xl  gradient-text">
                  Quick Links
                </h1>
                <ul className="text-[#ABABAB] font-bold text-left">
                  <li className="mb-4 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                    <a href="#">Packages</a>
                    <span className="block max-w-0 group-hover:max-w-full h-1 rounded-lg bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] transition-all duration-500"></span>
                  </li>
                  <li className="mb-4 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                    <a href="#" className="hover:underline">
                      Gallery
                    </a>
                    <span className="block max-w-0 group-hover:max-w-full h-1 rounded-lg bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] transition-all duration-500"></span>
                  </li>
                  <li className="mb-4 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                    <a href="#" className="hover:underline">
                      Reviews
                    </a>
                    <span className="block max-w-0 group-hover:max-w-full h-1 rounded-lg bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] transition-all duration-500"></span>
                  </li>
                  <li className="mb-4 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                    <a href="#" className="hover:underline">
                      About us
                    </a>
                    <span className="block max-w-0 group-hover:max-w-full h-1 rounded-lg bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] transition-all duration-500"></span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-start gap-6">
                <h1 className="text-lg font-extrabold leading-normal text-left uppercase lg:text-xl  gradient-text">
                  Need Help ?
                </h1>
                <ul className="text-[#ABABAB] font-bold text-left">
                  <li className="mb-4 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                    <a href="#" className="hover:underline ">
                      FAQ
                    </a>
                    <span className="block max-w-0 group-hover:max-w-full h-1 rounded-lg bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] transition-all duration-500"></span>
                  </li>
                  <li className="mb-4 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                    <span className="block max-w-0 group-hover:max-w-full h-1 rounded-lg bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] transition-all duration-500"></span>
                  </li>
                  <li className="mb-4 transition-all duration-300 group hover:scale-105 hover:translate-x-3">
                    <a href="#" className="hover:underline">
                      Cancellation Policy
                    </a>
                    <span className="block max-w-0 group-hover:max-w-full h-1 rounded-lg bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] transition-all duration-500"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
