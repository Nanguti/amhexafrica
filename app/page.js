import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen antialiased bg-gray-50">
      <header className="fixed sm:top-3 z-[1200] w-full pb-1 items-center transition duration-300 ease-out bg-opacity-100">
        <div className="flex items-center justify-between mx-auto max-w-7xl sm:border-[1.5px] sm:shadow-lg bg-white py-2 px-4 rounded-lg">
          <div className="flex items-center">
            <a aria-label="now&me icon" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40.000000pt"
                height="40.000000pt"
                viewBox="0 0 1025.000000 1025.000000"
              >
                <g
                  transform="translate(0.000000,1025.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    className="fill-current"
                    d="M5902 7524 c-54 -38 -52 18 -52 -1174 0 -999 2 -1105 16 -1136 29 -61 46 -64 309 -64 265 0 282 3 334 66 17 22 173 269 345 549 173 281 320 511 327 513 9 1 138 -200 340 -530 236 -385 336 -540 363 -562 l38 -31 248 -3 c211 -3 254 -1 279 13 65 33 61 -36 61 1180 0 962 -2 1110 -15 1135 -30 58 -39 60 -282 60 l-223 0 -32 -29 -33 -29 -5 -649 c-4 -582 -7 -648 -21 -651 -11 -2 -96 129 -303 467 -320 523 -302 501 -416 501 -115 0 -96 22 -417 -501 -201 -329 -292 -469 -303 -467 -13 3 -16 77 -20 643 -5 677 -4 666 -52 699 -33 24 -453 23 -486 0z"
                  />
                  <path
                    className="fill-current"
                    d="M1173 7515 c-18 -8 -42 -29 -53 -47 -20 -33 -20 -48 -20 -1139 l0 -1106 23 -34 c36 -54 73 -61 297 -57 209 3 220 6 258 60 15 21 18 87 22 643 5 604 6 620 24 620 15 0 130 -163 447 -630 236 -346 440 -640 454 -652 40 -35 89 -43 265 -43 187 0 220 9 252 70 17 33 18 87 18 1130 0 1022 -1 1097 -18 1130 -31 62 -61 70 -280 70 -212 0 -246 -7 -279 -56 -17 -26 -18 -69 -23 -649 -5 -612 -5 -620 -25 -620 -15 0 -120 148 -445 629 -234 346 -438 639 -453 652 -15 13 -44 28 -65 33 -57 17 -360 13 -399 -4z"
                  />
                  <path
                    className="fill-current"
                    d="M4284 7505 c-593 -105 -983 -611 -951 -1235 20 -379 175 -689 450 -897 283 -214 667 -283 1043 -188 358 91 652 369 773 731 96 287 84 646 -30 915 -144 338 -431 578 -788 660 -115 27 -382 34 -497 14z m370 -555 c170 -43 294 -144 371 -303 131 -272 87 -594 -110 -793 -118 -120 -240 -169 -420 -168 -177 1 -310 56 -422 173 -157 163 -217 439 -147 680 59 207 230 373 427 416 92 20 211 18 301 -5z"
                  />
                  <path
                    fill="#FC7753"
                    d="M1815 4816 c-195 -38 -366 -155 -455 -311 -100 -175 -105 -391 -14 -573 44 -89 75 -122 113 -122 45 0 321 134 323 157 3 38 -3 55 -39 108 -63 95 -57 197 16 278 95 106 261 117 366 25 154 -135 96 -343 -133 -477 -37 -22 -182 -95 -322 -164 -272 -134 -338 -177 -415 -275 -202 -254 -191 -609 27 -846 199 -218 524 -297 826 -201 80 26 187 89 284 168 36 29 68 47 83 47 20 0 54 -29 150 -128 l123 -127 247 0 c244 0 247 0 265 22 10 13 16 31 13 40 -2 10 -230 247 -506 526 -386 390 -507 508 -526 507 -22 0 -277 -137 -313 -168 -10 -8 -18 -29 -18 -45 0 -25 19 -49 105 -137 114 -115 118 -125 85 -189 -39 -77 -137 -134 -230 -134 -169 0 -297 122 -308 297 -4 63 -1 78 21 122 49 97 153 170 397 277 188 83 221 100 308 160 186 128 286 297 299 502 10 178 -47 333 -173 465 -40 41 -101 92 -136 113 -133 79 -315 112 -463 83z"
                  />
                  <path
                    className="fill-current"
                    d="M3510 4793 c-75 -38 -70 43 -70 -1203 0 -1101 0 -1115 20 -1148 34 -55 65 -62 286 -62 216 0 246 6 277 59 16 27 17 83 17 649 0 341 3 627 6 636 3 9 15 16 25 16 23 0 21 2 348 -531 165 -271 250 -401 268 -410 40 -21 181 -19 213 4 14 9 151 223 306 475 245 399 284 457 305 457 l24 0 5 -641 c5 -624 6 -643 25 -664 42 -46 62 -50 277 -50 186 0 206 2 236 20 65 40 62 -23 62 1197 0 1239 5 1158 -70 1196 -31 16 -61 17 -277 15 l-241 -3 -43 -30 c-35 -25 -94 -114 -373 -568 -264 -429 -335 -537 -350 -535 -13 2 -121 170 -346 538 -275 449 -335 540 -370 565 l-42 30 -241 3 c-216 2 -246 1 -277 -15z"
                  />
                  <path
                    className="fill-current"
                    d="M7195 4795 c-388 -71 -697 -315 -834 -657 -74 -184 -100 -431 -67 -633 48 -288 205 -583 417 -779 349 -323 823 -390 1249 -176 219 110 405 289 503 485 37 75 87 222 87 258 0 38 -30 90 -62 110 -32 21 -418 70 -451 58 -26 -10 -67 -56 -67 -76 0 -29 -105 -158 -163 -202 -209 -155 -456 -176 -643 -55 -77 50 -92 68 -73 87 8 7 304 149 658 314 355 166 653 309 664 319 28 25 65 92 72 133 6 30 -2 52 -54 155 -178 350 -467 585 -806 655 -107 22 -321 24 -430 4z m270 -579 c68 -18 141 -57 194 -104 35 -30 44 -45 44 -70 0 -18 -4 -37 -10 -43 -18 -18 -712 -339 -733 -339 -36 0 -60 35 -60 89 0 212 124 385 323 450 104 34 165 38 242 17z"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="flex space-x-3 md:space-x-4 font-bold text-gray-900 items-center">
            <div className="relative group hidden lg:block">
              <span className="cursor-pointer flex items-center hover:text-primary">
                Services
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                >
                  <g clipPath="url(#caret-icon)">
                    <path
                      d="m13 6-5 5-5-5"
                      stroke="#FF6D42"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="caret-icon">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className="pt-8 absolute hidden w-32 opacity-animation">
                <div className="bg-white border-[0.5px] border-gray-200 p-4 w-max pt-4 -ml-32 rounded-xl shadow-xl">
                  <div className="flex flex-row justify-center p-4">
                    <div>
                      <p className="text-primary mb-4 cursor-default">
                        Get Help For:
                      </p>
                      <div className="grid grid-rows-6 grid-flow-col gap-x-4">
                        <div>
                          <a href="/services/anxiety">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Anxiety
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/stress">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Stress
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/sadness">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Sadness
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/confusion">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Confusion
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/feeling-lost">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Feeling Lost
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/feeling-alone">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Feeling Alone
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/trauma">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Trauma
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/burnout">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Burnout
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/societal-pressure">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Societal Pressure
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/inferiority-complex">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Inferiority Complex
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/exam-anxiety">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Exam Anxiety
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/social-anxiety">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Social Anxiety
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/panic-attacks">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Panic Attacks
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/peer-pressure">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Peer Pressure
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/toxic-workplace">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Toxic Workplace
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/imposter-syndrome">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Imposter Syndrome
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/lack-of-confidence">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Lack Of Confidence
                            </span>
                          </a>
                        </div>
                        <div>
                          <a href="/services/low-self-esteem">
                            <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-2 cursor-pointer">
                              Low Self-Esteem
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="h-[320px] border-[0.5px] border-gray-200 mx-8" />
                    <div>
                      <p className="text-primary mb-4 cursor-default max-w-[200px]">
                        Therapy for Mental Wellness
                      </p>
                      <div>
                        <a href="/services/marriage-counseling">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Marriage Counseling
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/relationship-counseling">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Relationship Counseling
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/depression-counseling">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Depression Counseling
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/lgbtq-therapy">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            LGBTQ Therapy
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/individual-therapy">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Individual Therapy
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/anxiety-therapy">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Anxiety Therapy
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/online-therapy">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Online Therapy
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="h-[320px] border-[0.5px] border-gray-200 mx-8" />
                    <div>
                      <p className="text-primary mb-4 cursor-default max-w-[200px]">
                        Coaching For Self-Improvement
                      </p>
                      <div>
                        <a href="/services/life-coaching">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Life Coaching
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/mindfulness-coaching">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Mindfulness Coaching
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/positivity-coaching">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Positivity Coaching
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/career-coaching">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Career Coaching
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/sexual-wellness-coaching">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Sexual Wellness Coaching
                          </span>
                        </a>
                      </div>
                      <div>
                        <a href="/services/mindset-transformation">
                          <span className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit my-3 cursor-pointer">
                            Mindset Transformation
                          </span>
                        </a>
                      </div>
                      <a href="/services">
                        <p className="text-primary font-medium underline cursor-pointer">
                          View All
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group hidden lg:block">
              <span className="cursor-pointer flex items-center hover:text-primary">
                Talk to Experts
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                >
                  <g clipPath="url(#caret-icon)">
                    <path
                      d="m13 6-5 5-5-5"
                      stroke="#FF6D42"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="caret-icon">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className="pt-8 absolute hidden group-hover:block w-32 opacity-animation">
                <div className="bg-white border-[0.5px] border-gray-200 p-4 w-max pt-4 rounded-xl shadow-xl">
                  <p className="text-primary mb-4 cursor-default">
                    Connect with
                  </p>
                  <div>
                    <a
                      href="/experts/listing?q=therapist"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit"
                    >
                      Therapist
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/experts/listing?q=relationship+coach"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit"
                    >
                      Relationship Coach
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/experts/listing?q=counselling+psychologist"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit"
                    >
                      Counseling Psychologist
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/experts/listing?q=clinical+psychologist"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit"
                    >
                      Clinical Psychologist
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/experts/listing?q=life+coach"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit"
                    >
                      Life Coach
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/experts/listing?q=mindfulness+coach"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit"
                    >
                      Mindfulness Coach
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/experts/listing?q=positivity+coach"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit"
                    >
                      Positivity Coach
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/experts/listing?q=career+coach"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit"
                    >
                      Career Coach
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/experts/listing?q=sexual+wellness+coach"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit"
                    >
                      Sexual Wellness Coach
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/experts/listing?q=mindset+transformation+coach"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit"
                    >
                      Mindset Transformation Coach
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/experts" className="hidden lg:block">
              Now&amp;Me Experts
            </a>
            <a href="/home" className="hidden lg:block">
              Community
            </a>
            <div className="relative group hidden lg:block">
              <span className="cursor-pointer flex items-center hover:text-primary">
                Blogs &amp; Resources
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                >
                  <g clipPath="url(#caret-icon)">
                    <path
                      d="m13 6-5 5-5-5"
                      stroke="#FF6D42"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="caret-icon">
                      <path fill="#fff" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className="pt-8 absolute hidden group-hover:block w-32 opacity-animation">
                <div className="bg-white border-[0.5px] border-gray-200 p-4 w-[120px] pt-4 rounded-xl shadow-xl">
                  <div>
                    <a
                      href="/blog"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit whitespace-nowrap"
                    >
                      Blogs
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/experts/assets"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit whitespace-nowrap"
                    >
                      Short Reads
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="/guides"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit whitespace-nowrap"
                    >
                      Guides
                    </a>
                    <div className="border-[0.5px] bg-gray-100 my-2" />
                  </div>
                  <div>
                    <a
                      href="https://shop.nowandme.com"
                      className="font-medium text-black hidden md:block hover:text-[#FF6D42] w-fit whitespace-nowrap"
                    >
                      Shop
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/employee-wellness-program" className="hidden lg:block">
              For Corporates
            </a>
            <div className="flex items-center space-x-2 !ml-5">
              <a href="https://wa.me/918826481781?text=Hi" target="_blank">
                <div className="bg-[#056162] rounded-xl flex justify-center items-center hover:scale-105 transform transition duration-200 cursor-pointer py-2 px-3">
                  <span className="flex justify-center items-center text-sm font-semibold text-white">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1.5"
                    >
                      <path
                        d="M19.55 5.41a9.816 9.816 0 0 0-7.01-2.91c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95l-1.4 5.14 5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01Zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.22-.16-.47-.28Z"
                        fill="#fff"
                      />
                    </svg>
                    Chat with us
                  </span>
                </div>
              </a>
              <div className="hidden lg:block">
                <div className="text-primary font-semibold border border-primary py-2.5 px-4 rounded-3xl cursor-pointer">
                  Sign Up
                </div>
              </div>
            </div>
            <section className="MOBILE-MENU flex lg:hidden justify-start items-between pr-4">
              <div className="HAMBURGER-ICON space-y-2 w-fit md:justify-start">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.25011 7C3.25011 6.58579 3.5859 6.25 4.00011 6.25H20.0001C20.4143 6.25 20.7501 6.58579 20.7501 7C20.7501 7.41421 20.4143 7.75 20.0001 7.75H4.00011C3.5859 7.75 3.25011 7.41421 3.25011 7ZM3.25011 12C3.25011 11.5858 3.5859 11.25 4.00011 11.25L20.0001 11.25C20.4143 11.25 20.7501 11.5858 20.7501 12C20.7501 12.4142 20.4143 12.75 20.0001 12.75L4.00011 12.75C3.5859 12.75 3.25011 12.4142 3.25011 12ZM4.00011 16.25C3.5859 16.25 3.25011 16.5858 3.25011 17C3.25011 17.4142 3.5859 17.75 4.00011 17.75H20.0001C20.4143 17.75 20.7501 17.4142 20.7501 17C20.7501 16.5858 20.4143 16.25 20.0001 16.25H4.00011Z"
                  />
                </svg>
              </div>
              <div className="hidden  bg-black w-full h-[100vh] z-10 fixed top-0 left-0 text-white text-[28px] font-bold flex flex-1 flex-col justify-between">
                <div className="absolute top-0 right-0 px-3 py-5 cursor-pointer">
                  <svg
                    className="h-6 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
                <ul className="flex p-6 flex-col items-left gap-5 justify-between min-h-[250px] overflow-y-auto mt-7">
                  <li>
                    <div className="flex items-center">
                      <button>
                        <p className="font-bold text-left">Services</p>
                      </button>
                      <div className="rotate-180 ml-1">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 3 24 24"
                          fill="none"
                        >
                          <g clipPath="url(#menu-icon)">
                            <path
                              d="M15 4.5 7.5 12l7.5 7.5"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="menu-icon">
                              <path fill="#fff" d="M24 24V0H0v24z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <button>
                        <p className="font-bold text-left">Talk to Experts</p>
                      </button>
                      <div className="rotate-180 ml-1">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 3 24 24"
                          fill="none"
                        >
                          <g clipPath="url(#menu-icon)">
                            <path
                              d="M15 4.5 7.5 12l7.5 7.5"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="menu-icon">
                              <path fill="#fff" d="M24 24V0H0v24z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a href="/experts">
                        <p className="font-bold">Now&amp;Me Experts</p>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a href="/home">
                        <p className="font-bold">Community</p>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <button>
                        <p className="font-bold text-left">
                          Blogs &amp; Resources
                        </p>
                      </button>
                      <div className="rotate-180 ml-1">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 3 24 24"
                          fill="none"
                        >
                          <g clipPath="url(#menu-icon)">
                            <path
                              d="M15 4.5 7.5 12l7.5 7.5"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="menu-icon">
                              <path fill="#fff" d="M24 24V0H0v24z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a href="/employee-wellness-program">
                        <p className="font-bold">For Corporates</p>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex flex-col gap-4">
                      <a
                        className="inline-flex flex-row items-center px-5 bg-x-orange-500 text-white font-semibold rounded-lg sm:rounded-full focus:outline-none focus:ring-3 focus:ring-x-orange-100 relative overflow-hidden py-2.5 text-base 
             "
                        href="/nemo"
                      >
                        AI Friend
                        <span>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                          >
                            <path
                              d="m19 1-1.26 2.75L15 5l2.74 1.26L19 9l1.25-2.74L23 5l-2.75-1.25M9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5M19 15l-1.26 2.74L15 19l2.74 1.25L19 23l1.25-2.75L23 19l-2.75-1.26"
                              fill="#fff"
                            />
                          </svg>
                        </span>
                      </a>
                      <div className="text-base bg-primary inline-block px-7 py-3 rounded-xl cursor-pointer">
                        Sign Up
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </header>
      <div className="bg-white">
        <div
          className="flex flex-col w-full"
          style={{ overscrollBehavior: "none" }}
        >
          <section
            className="pt-[80px] md:pt-[160px] pb-[76px]"
            style={{
              background:
                "linear-gradient(180deg, #FFEEE9 66.04%, rgba(255, 242, 238, 0.00) 100%)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full mx-auto max-w-7xl px-4">
              <div className="pr-0 md:pr-20 mt-4 md:mt-0">
                <h1 className="text-2xl md:text-[42px] font-bold text-[#171717] text-center md:text-left leading-[32px] md:leading-[63px]">
                  Build A Holistic Lifestyle With Now&amp;Me Therapy
                </h1>
                <div className="mt-7 flex flex-col gap-7">
                  <div className="flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={23}
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <g clipPath="url(#a11)">
                          <path
                            d="m22 11.883-2.49-2.765.39-3.701-3.642-.771L14.4 1.418 11 2.938l-.459 8.945L11 20.83l3.4 1.52 1.858-3.228 3.641-.77-.39-3.702L22 11.883Z"
                            fill="#FF6D42"
                          />
                          <path
                            d="M7.6 1.418 5.742 4.646l-3.641.77.39 3.702L0 11.883l2.49 2.766-.39 3.701 3.642.771L7.6 22.348l3.4-1.52V2.939l-3.4-1.52Z"
                            fill="#FF8662"
                          />
                          <path
                            d="m15.611 9.475-.963-.86L11 12.703l-.459 1.016.459.922 4.611-5.166Z"
                            fill="#F7F0EB"
                          />
                          <path
                            d="m7.165 10.912-.912.912 3.837 3.837.91-1.02v-1.938l-.963 1.08-2.872-2.871Z"
                            fill="#FFFBF5"
                          />
                        </g>
                        <defs>
                          <clipPath id="a11">
                            <path fill="#fff" d="M0 .883h22v22H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-[#171717BF] max-w-[500px]">
                      Understand yourself in ways you never thought you would by
                      talking to industry professionals.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={23}
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <g clipPath="url(#a11)">
                          <path
                            d="m22 11.883-2.49-2.765.39-3.701-3.642-.771L14.4 1.418 11 2.938l-.459 8.945L11 20.83l3.4 1.52 1.858-3.228 3.641-.77-.39-3.702L22 11.883Z"
                            fill="#FF6D42"
                          />
                          <path
                            d="M7.6 1.418 5.742 4.646l-3.641.77.39 3.702L0 11.883l2.49 2.766-.39 3.701 3.642.771L7.6 22.348l3.4-1.52V2.939l-3.4-1.52Z"
                            fill="#FF8662"
                          />
                          <path
                            d="m15.611 9.475-.963-.86L11 12.703l-.459 1.016.459.922 4.611-5.166Z"
                            fill="#F7F0EB"
                          />
                          <path
                            d="m7.165 10.912-.912.912 3.837 3.837.91-1.02v-1.938l-.963 1.08-2.872-2.871Z"
                            fill="#FFFBF5"
                          />
                        </g>
                        <defs>
                          <clipPath id="a11">
                            <path fill="#fff" d="M0 .883h22v22H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-[#171717BF] max-w-[500px]">
                      Get 24x7 online support, whether it is in the middle of a
                      hectic workday or when you can't sleep at night.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={23}
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <g clipPath="url(#a11)">
                          <path
                            d="m22 11.883-2.49-2.765.39-3.701-3.642-.771L14.4 1.418 11 2.938l-.459 8.945L11 20.83l3.4 1.52 1.858-3.228 3.641-.77-.39-3.702L22 11.883Z"
                            fill="#FF6D42"
                          />
                          <path
                            d="M7.6 1.418 5.742 4.646l-3.641.77.39 3.702L0 11.883l2.49 2.766-.39 3.701 3.642.771L7.6 22.348l3.4-1.52V2.939l-3.4-1.52Z"
                            fill="#FF8662"
                          />
                          <path
                            d="m15.611 9.475-.963-.86L11 12.703l-.459 1.016.459.922 4.611-5.166Z"
                            fill="#F7F0EB"
                          />
                          <path
                            d="m7.165 10.912-.912.912 3.837 3.837.91-1.02v-1.938l-.963 1.08-2.872-2.871Z"
                            fill="#FFFBF5"
                          />
                        </g>
                        <defs>
                          <clipPath id="a11">
                            <path fill="#fff" d="M0 .883h22v22H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-[#171717BF] max-w-[500px]">
                      Our experts are simply a click away; connect with them
                      anytime, anyday.
                    </p>
                  </div>
                </div>
                <div className="mt-10 hidden md:block">
                  <a href="https://wa.me/918826481781?text=Hi" target="_blank">
                    <button
                      className="px-5 bg-x-orange-500 text-white text-sm font-medium rounded-xl focus:outline-none focus:ring-3 focus:ring-x-orange-100 dark:focus:ring-0 relative overflow-hidden text-xl transform transition duration-200 hover:scale-[1.04] py-2.5 px-14 bg-[#056162] flex items-center py-3"
                      style={{ fontWeight: 600 }}
                    >
                      <svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1.5"
                      >
                        <path
                          d="M19.55 5.41a9.816 9.816 0 0 0-7.01-2.91c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95l-1.4 5.14 5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01Zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.22-.16-.47-.28Z"
                          fill="#fff"
                        />
                      </svg>
                      Chat with us
                    </button>
                  </a>
                </div>
              </div>
              <div className="my-[50px] md:my-0">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27670%27%20height=%27509%27/%3e"
                    />
                  </span>
                  <img
                    alt="hero_cta_image"
                    srcSet="/hero_banner.webp"
                    src="/hero_banner.webp"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="mb-10 block md:hidden mx-6">
              <a href="https://wa.me/918826481781?text=Hi" target="_blank">
                <button
                  className="px-5 bg-x-orange-500 text-white text-sm font-medium rounded-xl focus:outline-none focus:ring-3 focus:ring-x-orange-100 dark:focus:ring-0 relative overflow-hidden text-xl transform transition duration-200 hover:scale-[1.04] w-full bg-[#056162] flex items-center justify-center py-3"
                  style={{ fontWeight: 600 }}
                >
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    className="mr-1.5"
                  >
                    <path
                      d="M19.55 5.41a9.816 9.816 0 0 0-7.01-2.91c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95l-1.4 5.14 5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01Zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.22-.16-.47-.28Z"
                      fill="#fff"
                    />
                  </svg>
                  Chat with us
                </button>
              </a>
            </div>
          </section>
          <section className="flex flex-col md:my-14 w-full mx-auto max-w-7xl px-5">
            <p className="font-bold text-2xl md:text-4xl text-center">
              <span>Why</span> <span className="text-primary">Now&amp;Me?</span>
            </p>
            <p className="text-center font-normal text-lg mt-5 self-center max-w-[900px] text-gray-700">
              A therapeutic relationship is built on trust and confidence. At
              Now&amp;Me, we provide you with the right expert who can help you
              feel safe and comfortable in your mental health journey.
            </p>
            <div className="mt-14 flex items-center justify-center flex-wrap gap-10 sm:gap-x-16 md:gap-x-28 gap-y-12 md:gap-y-20">
              <div className="flex flex-col justify-center items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <path
                      d="M58.812 20.291H7.784V16.19L54.793 4.591l4.02 15.7Z"
                      fill="#FFCEBB"
                    />
                    <path
                      d="M35 20.291h23.812l-4.019-15.7L35 9.475v10.816Z"
                      fill="#FFCEBB"
                    />
                    <path
                      d="M59.746 65.409H0v-49.22h59.746a6.16 6.16 0 0 1 6.152 6.153v36.914a6.16 6.16 0 0 1-6.152 6.153Z"
                      fill="#FF8662"
                    />
                    <path
                      d="M59.746 16.19H35v49.219h24.746a6.16 6.16 0 0 0 6.152-6.153V22.342a6.16 6.16 0 0 0-6.152-6.152Z"
                      fill="#FF6D42"
                    />
                    <path
                      d="M70 50.37H34.316a6.16 6.16 0 0 1-6.152-6.153v-6.836a6.16 6.16 0 0 1 6.152-6.152H70v19.14Z"
                      fill="#FFCEBB"
                    />
                    <path
                      d="M37.734 43.534A2.738 2.738 0 0 1 35 40.799a2.738 2.738 0 0 1 2.734-2.734 2.738 2.738 0 0 1 2.735 2.734 2.738 2.738 0 0 1-2.735 2.735Z"
                      fill="#FF6D42"
                    />
                  </svg>
                </div>
                <p className="font-medium text-lg mt-4 text-center">
                  Prices Start At ₹35
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <g clipPath="url(#a1)">
                      <path
                        d="m70 35-7.924-8.798 1.24-11.779L51.73 11.97 45.82 1.702 35 6.537 33.54 35 35 63.463l10.818 4.835L51.73 58.03l11.587-2.453-1.24-11.779L70 35Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m24.182 1.702-5.91 10.268-11.588 2.454 1.24 11.778L0 35l7.924 8.798-1.24 11.779L18.27 58.03l5.91 10.268L35 63.463V6.537L24.182 1.702Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m49.673 27.336-3.064-2.734L35 37.608l-1.46 3.232L35 43.775l14.673-16.439Z"
                        fill="#fff"
                      />
                      <path
                        d="m22.8 31.907-2.904 2.904L32.104 47.02 35 43.775v-6.167l-3.065 3.434-9.135-9.135Z"
                        fill="#fff"
                      />
                    </g>
                    <defs>
                      <clipPath id="a1">
                        <path fill="#fff" d="M0 0h70v70H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-medium text-lg mt-4 text-center">
                  Verified Experts
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <path
                      d="M53.457 30.919c0 10.178-8.28 18.457-18.457 18.457H16.543v-4.102c1.835 0 3.437-1.25 3.941-2.958a18.435 18.435 0 0 1-3.941-11.397c0-10.178 8.28-18.457 18.457-18.457 10.178 0 18.457 8.28 18.457 18.457Z"
                      fill="#FFCEBB"
                    />
                    <path
                      d="M53.457 30.919c0-10.178-8.28-18.457-18.457-18.457v36.914c10.178 0 18.457-8.28 18.457-18.457Z"
                      fill="#FFCEBB"
                    />
                    <path
                      d="M60.102 39.82c-2.995 8.53-10.172 14.97-18.95 16.98-.565.162-1.14.285-1.722.369l-.248-1.517a2.69 2.69 0 0 1 1.967-3.035h.003c6.006-1.697 11.07-5.827 13.904-11.396a3.46 3.46 0 0 1 4.257-1.687l.788.285Z"
                      fill="#FF6D42"
                    />
                    <path
                      d="m60.142 22.018-.82.287c-1.64.616-3.445-.122-4.224-1.681C51.372 13.444 43.826 8.36 35 8.36c-8.532 0-16.201 4.717-20.057 12.305-.82 1.518-2.625 2.215-4.224 1.64l-.82-.287a18.3 18.3 0 0 1 .533-1.353C14.615 10.657 24.254 4.259 35 4.218c11.681 0 21.531 7.59 25.142 17.8Z"
                      fill="#FF8662"
                    />
                    <path
                      d="M13.754 23.413c.33-.944.727-1.862 1.19-2.748H6.151A6.144 6.144 0 0 0 0 26.817v8.204a6.144 6.144 0 0 0 6.152 6.152h8.422l-.86-2.666c-1.683-5.127-1.642-10.336.04-15.094Zm25.044 29.733a.333.333 0 0 1-.05.003h-.016c-1.19.206-2.42.329-3.691.329-3.405 0-6.193 2.748-6.193 6.152A6.144 6.144 0 0 0 35 65.782a6.144 6.144 0 0 0 6.152-6.152v-7.014c-.77.203-1.542.406-2.354.53Z"
                      fill="#FF6D42"
                    />
                    <path
                      d="M24.746 28.868h4.102v4.102h-4.102v-4.102Zm8.203 0h4.102v4.102h-4.102v-4.102Z"
                      fill="#FF8662"
                    />
                    <path
                      d="M41.152 28.868h4.102v4.102h-4.102v-4.102Z"
                      fill="#FF6D42"
                    />
                    <path
                      d="M38.74 53.15h-.008a21.69 21.69 0 0 1-3.691.328c-.014 0-.027.004-.041.004v12.3a6.144 6.144 0 0 0 6.152-6.152v-7.014c-.768.202-1.537.405-2.345.528a.446.446 0 0 1-.067.005Z"
                      fill="#FF8662"
                    />
                    <path
                      d="m60.143 22.018-.821.287c-1.64.616-3.445-.122-4.224-1.681C51.372 13.444 43.826 8.36 35 8.36V4.218c11.681 0 21.531 7.59 25.143 17.8ZM35 28.868h2.05v4.102H35v-4.102Z"
                      fill="#FF6D42"
                    />
                    <path
                      d="M70 26.817a6.144 6.144 0 0 0-6.153-6.152h-8.75l1.19 2.79c.451 1.188.78 2.46.984 3.731.616 3.815.247 7.711-1.025 11.239l-1.148 2.748h8.75A6.144 6.144 0 0 0 70 35.02v-8.203Z"
                      fill="#FF8662"
                    />
                  </svg>
                </div>
                <p className="font-medium text-lg mt-4 text-center">
                  Instant Availability
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <g clipPath="url(#a4)">
                      <path
                        d="M59.749 10.251C53.139 3.641 44.349 0 35 0v4.102c17.038 0 30.898 13.86 30.898 30.898S52.038 65.898 35 65.898 4.102 52.038 4.102 35c0-7.974 3-15.487 8.467-21.25l2.946 2.946-.002-8.807-8.806-.001 2.96 2.961C3.428 17.387 0 25.93 0 35c0 9.349 3.64 18.138 10.251 24.749C16.861 66.359 25.651 70 35 70c9.349 0 18.138-3.64 24.749-10.251C66.359 53.139 70 44.349 70 35c0-9.349-3.64-18.138-10.251-24.749Z"
                        fill="#FF8662"
                      />
                      <path
                        d="M28.574 5.469a2.738 2.738 0 0 1-2.734-2.735A2.738 2.738 0 0 1 28.574 0a2.737 2.737 0 0 1 2.735 2.734 2.737 2.737 0 0 1-2.735 2.735Zm-8.066 2.597a2.738 2.738 0 0 1-2.735-2.734 2.738 2.738 0 0 1 2.735-2.734 2.738 2.738 0 0 1 2.734 2.734 2.738 2.738 0 0 1-2.734 2.734Zm39.241 2.185C53.139 3.641 44.349 0 35 0v4.102c17.038 0 30.898 13.86 30.898 30.898S52.038 65.898 35 65.898V70c9.349 0 18.138-3.64 24.749-10.251C66.359 53.139 70 44.349 70 35c0-9.349-3.64-18.138-10.251-24.749Z"
                        fill="#FF8662"
                      />
                      <path
                        d="M34.657 43.18v-3.404h-6.375v-3.268l7.54-9.551h2.491v9.551h2.01v3.268h-2.01v3.404h-3.656Zm-2.742-6.672h3.154v-4.067l-3.154 4.067Zm24.175-6.17v12.865h-3.267v-5.141h-5.781v5.141h-3.29V30.34h3.29v4.844h5.78V30.34h3.268Z"
                        fill="#FF8662"
                      />
                      <path
                        d="M13.91 43.203c0-10.117 7.929-7.086 7.929-11.288 0-1.222-.853-1.873-1.965-1.873-1.827 0-3.459 1.592-3.657 1.805l-2.285-2.422c.244-.29 2.565-2.628 6.444-2.628 3.846 0 5.621 2.096 5.621 5.073 0 5.363-6.946 5.09-6.946 8.043h6.969v3.29H13.91Zm20.747-.023v-3.404h-6.375v-3.268l7.54-9.551h2.491v9.551h2.01v3.268h-2.01v3.404h-3.656Zm-2.742-6.672h3.154v-4.067l-3.154 4.067Z"
                        fill="#FF6D42"
                      />
                    </g>
                    <defs>
                      <clipPath id="a4">
                        <path fill="#fff" d="M0 0h70v70H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-medium text-lg mt-4 text-center">
                  Available 24/7
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 70 70"
                    fill="none"
                  >
                    <g clipPath="url(#a5)">
                      <path
                        d="M0 0v53.185L8.714 41.39H41.39V0H0Z"
                        fill="#FFCEBB"
                      />
                      <path
                        d="M49.305 16.815 37.001 37.511l12.304 20.694h11.981L70 70V16.815H49.305Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="M28.61 16.815h20.695v41.39H28.61v-41.39Z"
                        fill="#FF8662"
                      />
                      <path
                        d="M14.305 6.663c-4.214 0-7.642 3.428-7.642 7.642v20.55h4.102v-8.551h7.08v8.55h4.102V14.306c0-4.214-3.428-7.642-7.642-7.642Zm-3.54 15.54v-7.898a3.545 3.545 0 0 1 3.54-3.54 3.545 3.545 0 0 1 3.54 3.54v7.897h-7.08Zm43.042 14.091v-4.102h-4.502l-2.051 2.05 2.05 2.052h4.503Zm5.574 5.573a5.58 5.58 0 0 1-5.574 5.574h-4.502l-2.051 2.05 2.05 2.052h4.503c5.335 0 9.675-4.34 9.675-9.676h-4.101Z"
                        fill="#fff"
                      />
                      <path
                        d="M44.948 47.441a5.58 5.58 0 0 1-5.574-5.574 5.58 5.58 0 0 1 5.574-5.573h4.357v-4.102h-4.357a2.309 2.309 0 0 1-2.306-2.306 2.309 2.309 0 0 1 2.306-2.306h4.357v-4.102h-4.357a6.415 6.415 0 0 0-6.407 6.408c0 1.422.466 2.736 1.252 3.8-2.713 1.716-4.52 4.74-4.52 8.181 0 5.335 4.34 9.676 9.675 9.676h4.357V47.44h-4.357Z"
                        fill="#fff"
                      />
                    </g>
                    <defs>
                      <clipPath id="a5">
                        <path fill="#fff" d="M0 0h70v70H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-medium text-lg mt-4 text-center">
                  Multiple Languages
                </p>
              </div>
            </div>
          </section>
          <section className="my-20 z-10">
            <div className="flex flex-col items-center ">
              <p className="text-2xl md:text-4xl text-[#171717] text-center mb-5 font-bold">
                Client <span className="text-primary">Testimonials</span>
              </p>
              <p className="text-base text-[#515151] text-center mb-10 mx-auto max-w-[650px]">
                You do not have to take our word for it. Read through the
                testimonials of users who transformed themselves with the
                guidance of Now&amp;Me Experts.
              </p>
            </div>
            <div className="relative flex overflow-x-scroll no-scrollbar md:overflow-x-hidden overflow-y-hidden">
              <div className="flex animate-marquee  z-30">
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Made me feel happy again
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        From crying everyday to feeling like myself again, you
                        have given me so much, Now&amp;Me
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">All in one app</h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        It’s my first time in this app and it’s quite cool!
                        could use this as a venting app or diary :]
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        thunderthor
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        So happy I came across this app
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        My past experiences with therapists made me scared to
                        take therapy but I am glad I took that leap of faith
                        with Now&amp;Me.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        This app saved me
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Yesterday I was crying a lot because I felt alone. Then
                        i downloaded this app and i am glad to have new family.
                        Thanks all of you
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        old_hobby
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Changed my life for the best
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I cannot imagine not taking therapy now; it has changed
                        my life in ways I can never express, and this was only
                        possible because of Now&amp;Me.{" "}
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        I consider myself so lucky
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Vrunda, I feel lucky to come across someone who has so
                        much caring and understanding. Wishing you all the best.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        swift_honey
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        My comfort place
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        This app has become my comfort place whenever I feel
                        lonely i came here ,just write my thoughts and you guys
                        always make me feel supported… thankyou for that
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">So grateful</h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Bro this app helped me so much I just want to thank all
                        of you for the help
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        sirresram
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Extremely grateful for this app
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I love the community I have over here. These people
                        don’t even know me and still are there to listen my
                        rant, my feelings. Extremely grateful for this app.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Never felt so loved
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Feel so validated because of her, just what i needed at
                        this point of my life. Thnx now&amp;me and vrinda
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        better_eye
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Will recommend my friends
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I will definitely recommend this wonderful app to my
                        friends; it made me happy again. Thank you so much.{" "}
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1 flex animate-marquee2  z-30">
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Made me feel happy again
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        From crying everyday to feeling like myself again, you
                        have given me so much, Now&amp;Me
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">All in one app</h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        It’s my first time in this app and it’s quite cool!
                        could use this as a venting app or diary :]
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        thunderthor
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        So happy I came across this app
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        My past experiences with therapists made me scared to
                        take therapy but I am glad I took that leap of faith
                        with Now&amp;Me.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        This app saved me
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Yesterday I was crying a lot because I felt alone. Then
                        i downloaded this app and i am glad to have new family.
                        Thanks all of you
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        old_hobby
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Changed my life for the best
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I cannot imagine not taking therapy now; it has changed
                        my life in ways I can never express, and this was only
                        possible because of Now&amp;Me.{" "}
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        I consider myself so lucky
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Vrunda, I feel lucky to come across someone who has so
                        much caring and understanding. Wishing you all the best.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        swift_honey
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        My comfort place
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        This app has become my comfort place whenever I feel
                        lonely i came here ,just write my thoughts and you guys
                        always make me feel supported… thankyou for that
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">So grateful</h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Bro this app helped me so much I just want to thank all
                        of you for the help
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        sirresram
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Extremely grateful for this app
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I love the community I have over here. These people
                        don’t even know me and still are there to listen my
                        rant, my feelings. Extremely grateful for this app.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Never felt so loved
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Feel so validated because of her, just what i needed at
                        this point of my life. Thnx now&amp;me and vrinda
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        better_eye
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-6">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Will recommend my friends
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I will definitely recommend this wonderful app to my
                        friends; it made me happy again. Thank you so much.{" "}
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex overflow-x-scroll no-scrollbar md:overflow-x-hidden overflow-y-hidden">
              <div className="flex animate-reversemarquee  z-30">
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        My special place
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        There is something about this app that makes me want to
                        come back everyday. Special place for me.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        bhav210
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Best decision ever
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Taking therapy from this app was the best decision I
                        ever made.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Lovely bunch of people
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I appreciate the honesty of the people on this app. I
                        have had some beautiful conversations that have helped
                        me immensely. Great app
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        shreya__3
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        This app made me feel so warm
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I never knew a therapist’s presence could actually make
                        me so warm from inside. Thank you, Now&amp;Me.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Helped me when I had no one
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I love to talk and when I moved cities, there was no one
                        to talk to and that did not work well with me. But
                        thanks to now&amp;me, I can talk as much as I want to
                        and be me again.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        lean_yacht_2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        A true blessing
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        This app is a blessing from me, helped me so much,
                        especially in covid times.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Made me feel so calm
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Very humble and he gave me support when i needed it most
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        lean_animal
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Wonderful people
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Connecting with people on this app was absolutely
                        amazing. Thank you to everyone who I met on this app.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Quite different from what I have seen otherwise
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Generally therapy sessions take place once or twice a
                        week. But I am happy that I found a place that is so
                        therapeutic and I can come here everyday
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        funny_rain
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Therapists are pure gems
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I am in awe of how therapists handle their jobs and help
                        us connect with ourselves without any judgment. Thank
                        you, Now&amp;Me.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Amazing community
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        This app made me connect with such heartwarming people.
                        Thank you.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1 flex animate-reversemarquee2  z-30">
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        My special place
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        There is something about this app that makes me want to
                        come back everyday. Special place for me.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        bhav210
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Best decision ever
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Taking therapy from this app was the best decision I
                        ever made.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Lovely bunch of people
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I appreciate the honesty of the people on this app. I
                        have had some beautiful conversations that have helped
                        me immensely. Great app
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        shreya__3
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        This app made me feel so warm
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I never knew a therapist’s presence could actually make
                        me so warm from inside. Thank you, Now&amp;Me.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Helped me when I had no one
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I love to talk and when I moved cities, there was no one
                        to talk to and that did not work well with me. But
                        thanks to now&amp;me, I can talk as much as I want to
                        and be me again.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        lean_yacht_2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        A true blessing
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        This app is a blessing from me, helped me so much,
                        especially in covid times.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Made me feel so calm
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Very humble and he gave me support when i needed it most
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        lean_animal
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Wonderful people
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Connecting with people on this app was absolutely
                        amazing. Thank you to everyone who I met on this app.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Quite different from what I have seen otherwise
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        Generally therapy sessions take place once or twice a
                        week. But I am happy that I found a place that is so
                        therapeutic and I can come here everyday
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        funny_rain
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between null">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Therapists are pure gems
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        I am in awe of how therapists handle their jobs and help
                        us connect with ourselves without any judgment. Thank
                        you, Now&amp;Me.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-10">
                  <div className="p-6 rounded-2xl border border-gray-200 shadow-lg w-[350px] min-h-[300px] flex flex-col justify-between bg-gradient-to-br to-[rgba(23,23,23,0.2) from-[rgba(255,185,164,0.2)] to-[rgba(255,109,66,0)]">
                    <div className="">
                      <div className="flex flex-row items-center justify-start">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            fill="#FF6D42"
                          />
                        </svg>
                      </div>
                      <h5 className="font-bold text-xl mt-3">
                        Amazing community
                      </h5>
                      <p className="text-base font-normal text-gray-500 mt-6">
                        This app made me connect with such heartwarming people.
                        Thank you.
                      </p>
                    </div>
                    <div className="">
                      <span className="text-lg font-medium italic">
                        anonymous
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <a href="/experts/listing">
                <button
                  className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden transform transition duration-200 hover:scale-[1.04] py-3.5 px-12 rounded-xl py-3"
                  style={{ fontWeight: 600, fontSize: 20 }}
                >
                  Talk To Expert
                </button>
              </a>
            </div>
          </section>
          <section className="w-full max-w-7xl mx-auto px-4 my-10">
            <div className="text-2xl md:text-4xl text-center mb-12 font-bold">
              <span className="text-[#171717]">
                We've Got You Covered For Every
              </span>{" "}
              <span className="text-primary">Concern And Problem</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 md:gap-12">
              <div className="flex flex-col justify-between ">
                <a href="/services/anxiety">
                  <img
                    className="w-[300px] h-[220px] object-cover rounded-xl"
                    src="https://res.cloudinary.com/nowandme/image/upload/v1699332226/landing/services/card/anxiety_d8xaxw.webp"
                    alt="Anxiety image"
                  />
                </a>
                <div className="md:h-full flex flex-col justify-between">
                  <div>
                    <a href="/services/anxiety">
                      <p className="mt-3 text-xl font-semibold text-center">
                        Anxiety
                      </p>
                    </a>
                    <p className="mt-2 text-[#525252] text-center hidden md:block px-2">
                      Are negative thoughts taking you away from reality? Talk
                      to renowned experts and feel better right away.
                    </p>
                  </div>
                  <div className="mt-4 text-center mx-2 md:mx-6 hidden md:block">
                    <a href="/services/anxiety">
                      <button className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-base md:text-lg bg-[#FF6D42] font-semibold py-2.5 w-full transform transition duration-200 hover:scale-[1.04] flex items-center justify-center py-3">
                        <span className="mr-1">Know More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g clipPath="url(#star-icon)">
                            <path
                              d="M6.75 3.375 12.375 9 6.75 14.625"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="star-icons">
                              <path fill="#fff" d="M0 18V0h18v18z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <a href="/services/stress">
                  <img
                    className="w-[300px] h-[220px] object-cover rounded-xl"
                    src="https://res.cloudinary.com/nowandme/image/upload/v1699332231/landing/services/card/stress_cne4w8.webp"
                    alt="Stress image"
                  />
                </a>
                <div className="md:h-full flex flex-col justify-between">
                  <div>
                    <a href="/services/stress">
                      <p className="mt-3 text-xl font-semibold text-center">
                        Stress
                      </p>
                    </a>
                    <p className="mt-2 text-[#525252] text-center hidden md:block px-2">
                      Has stress made you stop living your life to the fullest?
                      Connect with top industry professionals and get back the
                      joys of life today.
                    </p>
                  </div>
                  <div className="mt-4 text-center mx-2 md:mx-6 hidden md:block">
                    <a href="/services/stress">
                      <button className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-base md:text-lg bg-[#FF6D42] font-semibold py-2.5 w-full transform transition duration-200 hover:scale-[1.04] flex items-center justify-center py-3">
                        <span className="mr-1">Know More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g clipPath="url(#star-icon)">
                            <path
                              d="M6.75 3.375 12.375 9 6.75 14.625"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="star-icons">
                              <path fill="#fff" d="M0 18V0h18v18z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <a href="/services/sadness">
                  <img
                    className="w-[300px] h-[220px] object-cover rounded-xl"
                    src="https://res.cloudinary.com/nowandme/image/upload/v1699332230/landing/services/card/sadness_eylxtc.webp"
                    alt="Sadness image"
                  />
                </a>
                <div className="md:h-full flex flex-col justify-between">
                  <div>
                    <a href="/services/sadness">
                      <p className="mt-3 text-xl font-semibold text-center">
                        Sadness
                      </p>
                    </a>
                    <p className="mt-2 text-[#525252] text-center hidden md:block px-2">
                      Not in the mood to feel your happy self? Share your
                      thoughts and concerns with experts and feel lighter
                      instantly.
                    </p>
                  </div>
                  <div className="mt-4 text-center mx-2 md:mx-6 hidden md:block">
                    <a href="/services/sadness">
                      <button className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-base md:text-lg bg-[#FF6D42] font-semibold py-2.5 w-full transform transition duration-200 hover:scale-[1.04] flex items-center justify-center py-3">
                        <span className="mr-1">Know More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g clipPath="url(#star-icon)">
                            <path
                              d="M6.75 3.375 12.375 9 6.75 14.625"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="star-icons">
                              <path fill="#fff" d="M0 18V0h18v18z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <a href="/services/confusion">
                  <img
                    className="w-[300px] h-[220px] object-cover rounded-xl"
                    src="https://res.cloudinary.com/nowandme/image/upload/v1699332226/landing/services/card/confusion_lqaxfo.webp"
                    alt="Confusion image"
                  />
                </a>
                <div className="md:h-full flex flex-col justify-between">
                  <div>
                    <a href="/services/confusion">
                      <p className="mt-3 text-xl font-semibold text-center">
                        Confusion
                      </p>
                    </a>
                    <p className="mt-2 text-[#525252] text-center hidden md:block px-2">
                      Not sure where life is headed? Consult industry experts
                      and get the answers to your questions right away.{" "}
                    </p>
                  </div>
                  <div className="mt-4 text-center mx-2 md:mx-6 hidden md:block">
                    <a href="/services/confusion">
                      <button className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-base md:text-lg bg-[#FF6D42] font-semibold py-2.5 w-full transform transition duration-200 hover:scale-[1.04] flex items-center justify-center py-3">
                        <span className="mr-1">Know More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g clipPath="url(#star-icon)">
                            <path
                              d="M6.75 3.375 12.375 9 6.75 14.625"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="star-icons">
                              <path fill="#fff" d="M0 18V0h18v18z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <a href="/services/feeling-lost">
                  <img
                    className="w-[300px] h-[220px] object-cover rounded-xl"
                    src="https://res.cloudinary.com/nowandme/image/upload/v1699332227/landing/services/card/feeling-lost_k0pv4s.webp"
                    alt="Feeling lost image"
                  />
                </a>
                <div className="md:h-full flex flex-col justify-between">
                  <div>
                    <a href="/services/feeling-lost">
                      <p className="mt-3 text-xl font-semibold text-center">
                        Feeling lost
                      </p>
                    </a>
                    <p className="mt-2 text-[#525252] text-center hidden md:block px-2">
                      Not feeling connected with your inner self? Text experts
                      that help you feel peaceful in the unknown and take life
                      as it comes.
                    </p>
                  </div>
                  <div className="mt-4 text-center mx-2 md:mx-6 hidden md:block">
                    <a href="/services/feeling-lost">
                      <button className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-base md:text-lg bg-[#FF6D42] font-semibold py-2.5 w-full transform transition duration-200 hover:scale-[1.04] flex items-center justify-center py-3">
                        <span className="mr-1">Know More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g clipPath="url(#star-icon)">
                            <path
                              d="M6.75 3.375 12.375 9 6.75 14.625"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="star-icons">
                              <path fill="#fff" d="M0 18V0h18v18z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <a href="/services/feeling-alone">
                  <img
                    className="w-[300px] h-[220px] object-cover rounded-xl"
                    src="https://res.cloudinary.com/nowandme/image/upload/v1699332227/landing/services/card/feeling-alone_bo7pwk.webp"
                    alt="Feeling alone image"
                  />
                </a>
                <div className="md:h-full flex flex-col justify-between">
                  <div>
                    <a href="/services/feeling-alone">
                      <p className="mt-3 text-xl font-semibold text-center">
                        Feeling alone
                      </p>
                    </a>
                    <p className="mt-2 text-[#525252] text-center hidden md:block px-2">
                      Not understanding your feelings? Feel like crying
                      relentlessly? Connect with industry experts who create an
                      atmosphere of unconditional support and bond with
                      yourself.
                    </p>
                  </div>
                  <div className="mt-4 text-center mx-2 md:mx-6 hidden md:block">
                    <a href="/services/feeling-alone">
                      <button className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-base md:text-lg bg-[#FF6D42] font-semibold py-2.5 w-full transform transition duration-200 hover:scale-[1.04] flex items-center justify-center py-3">
                        <span className="mr-1">Know More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g clipPath="url(#star-icon)">
                            <path
                              d="M6.75 3.375 12.375 9 6.75 14.625"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="star-icons">
                              <path fill="#fff" d="M0 18V0h18v18z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <a href="/services/trauma">
                  <img
                    className="w-[300px] h-[220px] object-cover rounded-xl"
                    src="https://res.cloudinary.com/nowandme/image/upload/v1699332233/landing/services/card/trauma_qc3btw.webp"
                    alt="Trauma image"
                  />
                </a>
                <div className="md:h-full flex flex-col justify-between">
                  <div>
                    <a href="/services/trauma">
                      <p className="mt-3 text-xl font-semibold text-center">
                        Trauma
                      </p>
                    </a>
                    <p className="mt-2 text-[#525252] text-center hidden md:block px-2">
                      Not able to find the root cause of triggers? Connect with
                      experienced professionals and take a deep dive within
                      yourself right away.
                    </p>
                  </div>
                  <div className="mt-4 text-center mx-2 md:mx-6 hidden md:block">
                    <a href="/services/trauma">
                      <button className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-base md:text-lg bg-[#FF6D42] font-semibold py-2.5 w-full transform transition duration-200 hover:scale-[1.04] flex items-center justify-center py-3">
                        <span className="mr-1">Know More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g clipPath="url(#star-icon)">
                            <path
                              d="M6.75 3.375 12.375 9 6.75 14.625"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="star-icons">
                              <path fill="#fff" d="M0 18V0h18v18z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <a href="/services/burnout">
                  <img
                    className="w-[300px] h-[220px] object-cover rounded-xl"
                    src="https://res.cloudinary.com/nowandme/image/upload/v1699332226/landing/services/card/burnout_dtz7py.webp"
                    alt="Burnout image"
                  />
                </a>
                <div className="md:h-full flex flex-col justify-between">
                  <div>
                    <a href="/services/burnout">
                      <p className="mt-3 text-xl font-semibold text-center">
                        Burnout
                      </p>
                    </a>
                    <p className="mt-2 text-[#525252] text-center hidden md:block px-2">
                      Has work been feeling like a drag lately? Take a break and
                      rejuvenate by connecting with professionals who can help
                      you maintain a steady work-life balance.
                    </p>
                  </div>
                  <div className="mt-4 text-center mx-2 md:mx-6 hidden md:block">
                    <a href="/services/burnout">
                      <button className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-base md:text-lg bg-[#FF6D42] font-semibold py-2.5 w-full transform transition duration-200 hover:scale-[1.04] flex items-center justify-center py-3">
                        <span className="mr-1">Know More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <g clipPath="url(#star-icon)">
                            <path
                              d="M6.75 3.375 12.375 9 6.75 14.625"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="star-icons">
                              <path fill="#fff" d="M0 18V0h18v18z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/services">
              <div className="mt-12 text-center text-xl font-semibold text underline decoration-solid text-primary cursor-pointer transform transition duration-200 hover:scale-[1.06]">
                View All Services
              </div>
            </a>
          </section>
          <section className="w-full max-w-7xl mx-auto px-4 mt-20 mb-10">
            <p className="font-bold text-2xl md:text-4xl text-[#171717] text-center max-w-[700px] mx-auto md:leading-[45px]">
              A Qualified <span className="text-primary">Panel Of Experts</span>{" "}
              {/* */}Dedicated To Helping You Feel Like A Whole
            </p>
            <div className="overflow-x-scroll max-w-5xl mx-auto no-scrollbar">
              <div className="mt-6 flex gap-4 items-center lg:justify-center">
                <div
                  className="border rounded-xl text-sm md:text-base py-3.5 px-5 cursor-pointer whitespace-nowrap my-3  text-primary border-primary font-bold"
                  style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  Relationship Coach
                </div>
                <div
                  className="border rounded-xl text-sm md:text-base py-3.5 px-5 cursor-pointer whitespace-nowrap my-3  text-[#171717BF] border-[#17171733] font-medium"
                  style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  Counselling Psychologist
                </div>
                <div
                  className="border rounded-xl text-sm md:text-base py-3.5 px-5 cursor-pointer whitespace-nowrap my-3  text-[#171717BF] border-[#17171733] font-medium"
                  style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  Clinical Psychologist
                </div>
                <div
                  className="border rounded-xl text-sm md:text-base py-3.5 px-5 cursor-pointer whitespace-nowrap my-3  text-[#171717BF] border-[#17171733] font-medium"
                  style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  Life Coach
                </div>
                <div
                  className="border rounded-xl text-sm md:text-base py-3.5 px-5 cursor-pointer whitespace-nowrap my-3  text-[#171717BF] border-[#17171733] font-medium"
                  style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  Therapist
                </div>
              </div>
              <div className="flex gap-4 items-center lg:justify-center">
                <div
                  className="border rounded-xl text-sm md:text-base py-3.5 px-5 cursor-pointer whitespace-nowrap my-3  text-[#171717BF] border-[#17171733] font-medium"
                  style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  Positivity Coach
                </div>
                <div
                  className="border rounded-xl text-sm md:text-base py-3.5 px-5 cursor-pointer whitespace-nowrap my-3  text-[#171717BF] border-[#17171733] font-medium"
                  style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  Career Coach
                </div>
                <div
                  className="border rounded-xl text-sm md:text-base py-3.5 px-5 cursor-pointer whitespace-nowrap my-3  text-[#171717BF] border-[#17171733] font-medium"
                  style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  Sexual Wellness Coach
                </div>
                <div
                  className="border rounded-xl text-sm md:text-base py-3.5 px-5 cursor-pointer whitespace-nowrap my-3  text-[#171717BF] border-[#17171733] font-medium"
                  style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)" }}
                >
                  Mindset Transformation Coach
                </div>
              </div>
            </div>
            <div className="overflow-x-scroll no-scrollbar">
              <div className="mt-12 flex 2xl:grid 2xl:grid-cols-4 gap-x-5 md:gap-x-12">
                <div className="">
                  <div>
                    <img
                      className="!object-cover !rounded-[14px] !m-0 !lg:max-w-full !w-[280px]"
                      src="https://res.cloudinary.com/nowandme/image/upload/user_profile_pic/nrfbmw2mlvokztmetyoi"
                      alt="Nandani A.'s image"
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-base md:text-lg font-semibold text-[#000000D9]">
                        Nandani A.
                      </div>
                      <div className="text-xs md:text-sm font-medium py-1 px-2 rounded-[5px] bg-[#FFEFE9] flex items-center text-[#171717] gap-1.5">
                        4.3
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.82 6.848a1.153 1.153 0 0 0-1.026-.801l-4.176-.288-1.547-3.903a1.153 1.153 0 0 0-1.069-.731 1.153 1.153 0 0 0-1.069.731L6.358 5.78l-4.148.267a1.16 1.16 0 0 0-1.027.801 1.181 1.181 0 0 0 .366 1.273l3.192 2.7-.95 3.734a1.3 1.3 0 0 0 .493 1.378 1.266 1.266 0 0 0 1.413.042l3.298-2.088h.014l3.55 2.243c.183.118.395.181.613.183a1.16 1.16 0 0 0 1.11-1.463l-1.005-4.085 3.178-2.644a1.181 1.181 0 0 0 .366-1.273Z"
                            fill="#FF6D42"
                            fillOpacity="0.84"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col !space-y-1 !md:space-y-2 mt-2 md:mt-3">
                      <div className="text-xs md:text-sm font-medium text-[#171717] text-left">
                        Counselling Psychologist
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        2 years of Experience
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        310 Sessions booked
                      </div>
                    </div>
                    <div className="mt-4 md:mt-5">
                      <a
                        className="!no-underline"
                        href="/experts/listing/YG1rQI0BpuZyigvdhrJK/u/nandani"
                      >
                        <div className="rounded-lg text-center text-white transform transition duration-200 hover:bg-[#037c57] !py-2.5 w-full whitespace-nowrap text-sm md:text-base font-semibold bg-[#059669]">
                          View Details
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <img
                      className="!object-cover !rounded-[14px] !m-0 !lg:max-w-full !w-[280px]"
                      src="https://res.cloudinary.com/nowandme/image/upload/user_profile_pic/ydzge613shjofvns6tv7"
                      alt="Amola B.'s image"
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-base md:text-lg font-semibold text-[#000000D9]">
                        Amola B.
                      </div>
                      <div className="text-xs md:text-sm font-medium py-1 px-2 rounded-[5px] bg-[#FFEFE9] flex items-center text-[#171717] gap-1.5">
                        4.4
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.82 6.848a1.153 1.153 0 0 0-1.026-.801l-4.176-.288-1.547-3.903a1.153 1.153 0 0 0-1.069-.731 1.153 1.153 0 0 0-1.069.731L6.358 5.78l-4.148.267a1.16 1.16 0 0 0-1.027.801 1.181 1.181 0 0 0 .366 1.273l3.192 2.7-.95 3.734a1.3 1.3 0 0 0 .493 1.378 1.266 1.266 0 0 0 1.413.042l3.298-2.088h.014l3.55 2.243c.183.118.395.181.613.183a1.16 1.16 0 0 0 1.11-1.463l-1.005-4.085 3.178-2.644a1.181 1.181 0 0 0 .366-1.273Z"
                            fill="#FF6D42"
                            fillOpacity="0.84"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col !space-y-1 !md:space-y-2 mt-2 md:mt-3">
                      <div className="text-xs md:text-sm font-medium text-[#171717] text-left">
                        Counseling Psychologist
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        2 years of Experience
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        448 Sessions booked
                      </div>
                    </div>
                    <div className="mt-4 md:mt-5">
                      <a
                        className="!no-underline"
                        href="/experts/listing/ATlsTIsBR0GIilnSTz8D/u/amola"
                      >
                        <div className="rounded-lg text-center text-white transform transition duration-200 hover:bg-[#037c57] !py-2.5 w-full whitespace-nowrap text-sm md:text-base font-semibold bg-[#059669]">
                          View Details
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <img
                      className="!object-cover !rounded-[14px] !m-0 !lg:max-w-full !w-[280px]"
                      src="https://res.cloudinary.com/nowandme/image/upload/user_profile_pic/wy3p1ga4vxroapinln4n"
                      alt="Arshiya A.'s image"
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-base md:text-lg font-semibold text-[#000000D9]">
                        Arshiya A.
                      </div>
                      <div className="text-xs md:text-sm font-medium py-1 px-2 rounded-[5px] bg-[#FFEFE9] flex items-center text-[#171717] gap-1.5">
                        4.7
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.82 6.848a1.153 1.153 0 0 0-1.026-.801l-4.176-.288-1.547-3.903a1.153 1.153 0 0 0-1.069-.731 1.153 1.153 0 0 0-1.069.731L6.358 5.78l-4.148.267a1.16 1.16 0 0 0-1.027.801 1.181 1.181 0 0 0 .366 1.273l3.192 2.7-.95 3.734a1.3 1.3 0 0 0 .493 1.378 1.266 1.266 0 0 0 1.413.042l3.298-2.088h.014l3.55 2.243c.183.118.395.181.613.183a1.16 1.16 0 0 0 1.11-1.463l-1.005-4.085 3.178-2.644a1.181 1.181 0 0 0 .366-1.273Z"
                            fill="#FF6D42"
                            fillOpacity="0.84"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col !space-y-1 !md:space-y-2 mt-2 md:mt-3">
                      <div className="text-xs md:text-sm font-medium text-[#171717] text-left">
                        Relationship Coach
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        3 years of Experience
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        330 Sessions booked
                      </div>
                    </div>
                    <div className="mt-4 md:mt-5">
                      <a
                        className="!no-underline"
                        href="/experts/listing/sN-B94wB3Pa7ZWWbaKoY/u/arshiya"
                      >
                        <div className="rounded-lg text-center text-white transform transition duration-200 hover:bg-[#037c57] !py-2.5 w-full whitespace-nowrap text-sm md:text-base font-semibold bg-[#059669]">
                          View Details
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <img
                      className="!object-cover !rounded-[14px] !m-0 !lg:max-w-full !w-[280px]"
                      src="https://res.cloudinary.com/nowandme/image/upload/user_profile_pic/kcq2kqmlfavv39t5zkyk"
                      alt="Gaurav R.'s image"
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-base md:text-lg font-semibold text-[#000000D9]">
                        Gaurav R.
                      </div>
                      <div className="text-xs md:text-sm font-medium py-1 px-2 rounded-[5px] bg-[#FFEFE9] flex items-center text-[#171717] gap-1.5">
                        3.7
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.82 6.848a1.153 1.153 0 0 0-1.026-.801l-4.176-.288-1.547-3.903a1.153 1.153 0 0 0-1.069-.731 1.153 1.153 0 0 0-1.069.731L6.358 5.78l-4.148.267a1.16 1.16 0 0 0-1.027.801 1.181 1.181 0 0 0 .366 1.273l3.192 2.7-.95 3.734a1.3 1.3 0 0 0 .493 1.378 1.266 1.266 0 0 0 1.413.042l3.298-2.088h.014l3.55 2.243c.183.118.395.181.613.183a1.16 1.16 0 0 0 1.11-1.463l-1.005-4.085 3.178-2.644a1.181 1.181 0 0 0 .366-1.273Z"
                            fill="#FF6D42"
                            fillOpacity="0.84"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col !space-y-1 !md:space-y-2 mt-2 md:mt-3">
                      <div className="text-xs md:text-sm font-medium text-[#171717] text-left">
                        Life Coach
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        8 years of Experience
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        1830 Sessions booked
                      </div>
                    </div>
                    <div className="mt-4 md:mt-5">
                      <a
                        className="!no-underline"
                        href="/experts/listing/o_6NSYYBa_PrdUmYsy9U/u/gaurav"
                      >
                        <div className="rounded-lg text-center text-white transform transition duration-200 hover:bg-[#037c57] !py-2.5 w-full whitespace-nowrap text-sm md:text-base font-semibold bg-[#059669]">
                          View Details
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex 2xl:grid 2xl:grid-cols-4 gap-x-5 md:gap-x-12">
                <div className="">
                  <div>
                    <img
                      className="!object-cover !rounded-[14px] !m-0 !lg:max-w-full !w-[280px]"
                      src="https://res.cloudinary.com/nowandme/image/upload/user_profile_pic/tfrj7ob5mahobyh5apny"
                      alt="Dr. Shakti K.'s image"
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-base md:text-lg font-semibold text-[#000000D9]">
                        Dr. Shakti K.
                      </div>
                      <div className="text-xs md:text-sm font-medium py-1 px-2 rounded-[5px] bg-[#FFEFE9] flex items-center text-[#171717] gap-1.5">
                        3.9
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.82 6.848a1.153 1.153 0 0 0-1.026-.801l-4.176-.288-1.547-3.903a1.153 1.153 0 0 0-1.069-.731 1.153 1.153 0 0 0-1.069.731L6.358 5.78l-4.148.267a1.16 1.16 0 0 0-1.027.801 1.181 1.181 0 0 0 .366 1.273l3.192 2.7-.95 3.734a1.3 1.3 0 0 0 .493 1.378 1.266 1.266 0 0 0 1.413.042l3.298-2.088h.014l3.55 2.243c.183.118.395.181.613.183a1.16 1.16 0 0 0 1.11-1.463l-1.005-4.085 3.178-2.644a1.181 1.181 0 0 0 .366-1.273Z"
                            fill="#FF6D42"
                            fillOpacity="0.84"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col !space-y-1 !md:space-y-2 mt-2 md:mt-3">
                      <div className="text-xs md:text-sm font-medium text-[#171717] text-left">
                        Clinical Psychologist
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        9 years of Experience
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        617 Sessions booked
                      </div>
                    </div>
                    <div className="mt-4 md:mt-5">
                      <a
                        className="!no-underline"
                        href="/experts/listing/wP4fx4cBa_PrdUmYQS_P/u/shakti"
                      >
                        <div className="rounded-lg text-center text-white transform transition duration-200 hover:bg-[#037c57] !py-2.5 w-full whitespace-nowrap text-sm md:text-base font-semibold bg-[#059669]">
                          View Details
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <img
                      className="!object-cover !rounded-[14px] !m-0 !lg:max-w-full !w-[280px]"
                      src="https://res.cloudinary.com/nowandme/image/upload/user_profile_pic/wmoby1ovfhbqeezvlmgh"
                      alt="Niharika S.'s image"
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-base md:text-lg font-semibold text-[#000000D9]">
                        Niharika S.
                      </div>
                      <div className="text-xs md:text-sm font-medium py-1 px-2 rounded-[5px] bg-[#FFEFE9] flex items-center text-[#171717] gap-1.5">
                        4.5
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.82 6.848a1.153 1.153 0 0 0-1.026-.801l-4.176-.288-1.547-3.903a1.153 1.153 0 0 0-1.069-.731 1.153 1.153 0 0 0-1.069.731L6.358 5.78l-4.148.267a1.16 1.16 0 0 0-1.027.801 1.181 1.181 0 0 0 .366 1.273l3.192 2.7-.95 3.734a1.3 1.3 0 0 0 .493 1.378 1.266 1.266 0 0 0 1.413.042l3.298-2.088h.014l3.55 2.243c.183.118.395.181.613.183a1.16 1.16 0 0 0 1.11-1.463l-1.005-4.085 3.178-2.644a1.181 1.181 0 0 0 .366-1.273Z"
                            fill="#FF6D42"
                            fillOpacity="0.84"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col !space-y-1 !md:space-y-2 mt-2 md:mt-3">
                      <div className="text-xs md:text-sm font-medium text-[#171717] text-left">
                        Counselling Psychologist
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        1 years of Experience
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        435 Sessions booked
                      </div>
                    </div>
                    <div className="mt-4 md:mt-5">
                      <a
                        className="!no-underline"
                        href="/experts/listing/rt-B94wB3Pa7ZWWbZ6r5/u/niharika"
                      >
                        <div className="rounded-lg text-center text-white transform transition duration-200 hover:bg-[#037c57] !py-2.5 w-full whitespace-nowrap text-sm md:text-base font-semibold bg-[#059669]">
                          View Details
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <img
                      className="!object-cover !rounded-[14px] !m-0 !lg:max-w-full !w-[280px]"
                      src="https://res.cloudinary.com/nowandme/image/upload/user_profile_pic/vrgk4m5jpyid0lhqtpzw"
                      alt="Archana J.'s image"
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-base md:text-lg font-semibold text-[#000000D9]">
                        Archana J.
                      </div>
                      <div className="text-xs md:text-sm font-medium py-1 px-2 rounded-[5px] bg-[#FFEFE9] flex items-center text-[#171717] gap-1.5">
                        4.1
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.82 6.848a1.153 1.153 0 0 0-1.026-.801l-4.176-.288-1.547-3.903a1.153 1.153 0 0 0-1.069-.731 1.153 1.153 0 0 0-1.069.731L6.358 5.78l-4.148.267a1.16 1.16 0 0 0-1.027.801 1.181 1.181 0 0 0 .366 1.273l3.192 2.7-.95 3.734a1.3 1.3 0 0 0 .493 1.378 1.266 1.266 0 0 0 1.413.042l3.298-2.088h.014l3.55 2.243c.183.118.395.181.613.183a1.16 1.16 0 0 0 1.11-1.463l-1.005-4.085 3.178-2.644a1.181 1.181 0 0 0 .366-1.273Z"
                            fill="#FF6D42"
                            fillOpacity="0.84"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col !space-y-1 !md:space-y-2 mt-2 md:mt-3">
                      <div className="text-xs md:text-sm font-medium text-[#171717] text-left">
                        Life Coach
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        5 years of Experience
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        437 Sessions booked
                      </div>
                    </div>
                    <div className="mt-4 md:mt-5">
                      <a
                        className="!no-underline"
                        href="/experts/listing/7zn8mIoBR0GIilnS8j5r/u/archana"
                      >
                        <div className="rounded-lg text-center text-white transform transition duration-200 hover:bg-[#037c57] !py-2.5 w-full whitespace-nowrap text-sm md:text-base font-semibold bg-[#059669]">
                          View Details
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <img
                      className="!object-cover !rounded-[14px] !m-0 !lg:max-w-full !w-[280px]"
                      src="https://res.cloudinary.com/nowandme/image/upload/user_profile_pic/mvbjn3opzrfhb1wxngaf"
                      alt="Shiwanika D.'s image"
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-base md:text-lg font-semibold text-[#000000D9]">
                        Shiwanika D.
                      </div>
                      <div className="text-xs md:text-sm font-medium py-1 px-2 rounded-[5px] bg-[#FFEFE9] flex items-center text-[#171717] gap-1.5">
                        4.6
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.82 6.848a1.153 1.153 0 0 0-1.026-.801l-4.176-.288-1.547-3.903a1.153 1.153 0 0 0-1.069-.731 1.153 1.153 0 0 0-1.069.731L6.358 5.78l-4.148.267a1.16 1.16 0 0 0-1.027.801 1.181 1.181 0 0 0 .366 1.273l3.192 2.7-.95 3.734a1.3 1.3 0 0 0 .493 1.378 1.266 1.266 0 0 0 1.413.042l3.298-2.088h.014l3.55 2.243c.183.118.395.181.613.183a1.16 1.16 0 0 0 1.11-1.463l-1.005-4.085 3.178-2.644a1.181 1.181 0 0 0 .366-1.273Z"
                            fill="#FF6D42"
                            fillOpacity="0.84"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col !space-y-1 !md:space-y-2 mt-2 md:mt-3">
                      <div className="text-xs md:text-sm font-medium text-[#171717] text-left">
                        Counseling Psychologist
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        8 years of Experience
                      </div>
                      <div className="text-xs md:text-sm text-[#000000BF]">
                        637 Sessions booked
                      </div>
                    </div>
                    <div className="mt-4 md:mt-5">
                      <a
                        className="!no-underline"
                        href="/experts/listing/BDmLTIsBR0GIilnS3D9n/u/shiwanika"
                      >
                        <div className="rounded-lg text-center text-white transform transition duration-200 hover:bg-[#037c57] !py-2.5 w-full whitespace-nowrap text-sm md:text-base font-semibold bg-[#059669]">
                          View Details
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/experts/listing">
              <div className="mt-12 text-center text-xl font-semibold text underline decoration-solid text-primary cursor-pointer transform transition duration-200 hover:scale-[1.06]">
                View All Experts
              </div>
            </a>
          </section>
          <div className="w-full max-w-7xl mx-auto mt-20 mb-10 px-4">
            <div className="bg-[#DFFDFF] rounded-[18px] flex flex-col lg:flex-row item-center gap-10 overflow-hidden">
              <div className="px-6 md:px-8 lg:pr-0 flex flex-col items-center lg:block py-6">
                <p className="font-bold text-2xl md:text-4xl text-[#171717] leading-[36px] md:leading-[40px] lg:leading-[48px] xl:leading-[56px] text-center lg:text-left">
                  How Can Now&amp;Me Experts Help You?
                </p>
                <p className="my-3 lg:my-5 font-medium text-base text-[#525252] text-center lg:text-left">
                  With anxiety and stress on the rise, the Now&amp;Me experts
                  take full ownership of instantly helping users and making them
                  at peace with themselves in a short period of time.
                </p>
                <a href="/experts/listing">
                  <button
                    className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-xl !bg-[#32B8C1] px-8 transform transition duration-200 hover:scale-[1.06] mt-4 lg:mt-0 py-3"
                    style={{ fontWeight: 600 }}
                  >
                    Talk To Expert
                  </button>
                </a>
              </div>
              <div className="flex items-center flex-wrap gap-2 justify-center lg:hidden px-6 max-w-[500px] mx-auto">
                <div
                  className="rounded-lg py-1 px-2 flex items-center bg-white gap-1"
                  style={{
                    boxShadow:
                      "0px 5.78232px 19.2744px 0px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <p>Anxiety</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <g clipPath="url(#tick-icon)">
                      <path
                        d="m16.987 9.122-1.851-2.055.29-2.751-2.707-.573-1.38-2.399-2.527 1.13-.341 6.648.34 6.648 2.528 1.129 1.38-2.398 2.707-.573-.29-2.751 1.85-2.055Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m6.285 1.344-1.38 2.399-2.707.573.29 2.75L.637 9.123l1.85 2.055-.29 2.75 2.707.574 1.38 2.398 2.528-1.13V2.475l-2.527-1.13Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m12.239 7.332-.716-.64-2.711 3.039-.341.755.34.685 3.428-3.84Z"
                        fill="#F7F0EB"
                      />
                      <path
                        d="m5.962 8.4-.678.678 2.852 2.851.676-.758v-1.44l-.716.802L5.962 8.4Z"
                        fill="#FFFBF5"
                      />
                    </g>
                    <defs>
                      <clipPath id="tick-icon">
                        <path fill="#fff" d="M.637.947h16.35v16.35H.637z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="rounded-lg py-1 px-2 flex items-center bg-white gap-1"
                  style={{
                    boxShadow:
                      "0px 5.78232px 19.2744px 0px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <p>Meditation</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <g clipPath="url(#tick-icon)">
                      <path
                        d="m16.987 9.122-1.851-2.055.29-2.751-2.707-.573-1.38-2.399-2.527 1.13-.341 6.648.34 6.648 2.528 1.129 1.38-2.398 2.707-.573-.29-2.751 1.85-2.055Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m6.285 1.344-1.38 2.399-2.707.573.29 2.75L.637 9.123l1.85 2.055-.29 2.75 2.707.574 1.38 2.398 2.528-1.13V2.475l-2.527-1.13Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m12.239 7.332-.716-.64-2.711 3.039-.341.755.34.685 3.428-3.84Z"
                        fill="#F7F0EB"
                      />
                      <path
                        d="m5.962 8.4-.678.678 2.852 2.851.676-.758v-1.44l-.716.802L5.962 8.4Z"
                        fill="#FFFBF5"
                      />
                    </g>
                    <defs>
                      <clipPath id="tick-icon">
                        <path fill="#fff" d="M.637.947h16.35v16.35H.637z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="rounded-lg py-1 px-2 flex items-center bg-white gap-1"
                  style={{
                    boxShadow:
                      "0px 5.78232px 19.2744px 0px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <p>Career</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <g clipPath="url(#tick-icon)">
                      <path
                        d="m16.987 9.122-1.851-2.055.29-2.751-2.707-.573-1.38-2.399-2.527 1.13-.341 6.648.34 6.648 2.528 1.129 1.38-2.398 2.707-.573-.29-2.751 1.85-2.055Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m6.285 1.344-1.38 2.399-2.707.573.29 2.75L.637 9.123l1.85 2.055-.29 2.75 2.707.574 1.38 2.398 2.528-1.13V2.475l-2.527-1.13Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m12.239 7.332-.716-.64-2.711 3.039-.341.755.34.685 3.428-3.84Z"
                        fill="#F7F0EB"
                      />
                      <path
                        d="m5.962 8.4-.678.678 2.852 2.851.676-.758v-1.44l-.716.802L5.962 8.4Z"
                        fill="#FFFBF5"
                      />
                    </g>
                    <defs>
                      <clipPath id="tick-icon">
                        <path fill="#fff" d="M.637.947h16.35v16.35H.637z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="rounded-lg py-1 px-2 flex items-center bg-white gap-1"
                  style={{
                    boxShadow:
                      "0px 5.78232px 19.2744px 0px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <p>Relationship</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <g clipPath="url(#tick-icon)">
                      <path
                        d="m16.987 9.122-1.851-2.055.29-2.751-2.707-.573-1.38-2.399-2.527 1.13-.341 6.648.34 6.648 2.528 1.129 1.38-2.398 2.707-.573-.29-2.751 1.85-2.055Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m6.285 1.344-1.38 2.399-2.707.573.29 2.75L.637 9.123l1.85 2.055-.29 2.75 2.707.574 1.38 2.398 2.528-1.13V2.475l-2.527-1.13Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m12.239 7.332-.716-.64-2.711 3.039-.341.755.34.685 3.428-3.84Z"
                        fill="#F7F0EB"
                      />
                      <path
                        d="m5.962 8.4-.678.678 2.852 2.851.676-.758v-1.44l-.716.802L5.962 8.4Z"
                        fill="#FFFBF5"
                      />
                    </g>
                    <defs>
                      <clipPath id="tick-icon">
                        <path fill="#fff" d="M.637.947h16.35v16.35H.637z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="rounded-lg py-1 px-2 flex items-center bg-white gap-1"
                  style={{
                    boxShadow:
                      "0px 5.78232px 19.2744px 0px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <p>Loneliness</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <g clipPath="url(#tick-icon)">
                      <path
                        d="m16.987 9.122-1.851-2.055.29-2.751-2.707-.573-1.38-2.399-2.527 1.13-.341 6.648.34 6.648 2.528 1.129 1.38-2.398 2.707-.573-.29-2.751 1.85-2.055Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m6.285 1.344-1.38 2.399-2.707.573.29 2.75L.637 9.123l1.85 2.055-.29 2.75 2.707.574 1.38 2.398 2.528-1.13V2.475l-2.527-1.13Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m12.239 7.332-.716-.64-2.711 3.039-.341.755.34.685 3.428-3.84Z"
                        fill="#F7F0EB"
                      />
                      <path
                        d="m5.962 8.4-.678.678 2.852 2.851.676-.758v-1.44l-.716.802L5.962 8.4Z"
                        fill="#FFFBF5"
                      />
                    </g>
                    <defs>
                      <clipPath id="tick-icon">
                        <path fill="#fff" d="M.637.947h16.35v16.35H.637z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="rounded-lg py-1 px-2 flex items-center bg-white gap-1"
                  style={{
                    boxShadow:
                      "0px 5.78232px 19.2744px 0px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <p>Depression</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <g clipPath="url(#tick-icon)">
                      <path
                        d="m16.987 9.122-1.851-2.055.29-2.751-2.707-.573-1.38-2.399-2.527 1.13-.341 6.648.34 6.648 2.528 1.129 1.38-2.398 2.707-.573-.29-2.751 1.85-2.055Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m6.285 1.344-1.38 2.399-2.707.573.29 2.75L.637 9.123l1.85 2.055-.29 2.75 2.707.574 1.38 2.398 2.528-1.13V2.475l-2.527-1.13Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m12.239 7.332-.716-.64-2.711 3.039-.341.755.34.685 3.428-3.84Z"
                        fill="#F7F0EB"
                      />
                      <path
                        d="m5.962 8.4-.678.678 2.852 2.851.676-.758v-1.44l-.716.802L5.962 8.4Z"
                        fill="#FFFBF5"
                      />
                    </g>
                    <defs>
                      <clipPath id="tick-icon">
                        <path fill="#fff" d="M.637.947h16.35v16.35H.637z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="rounded-lg py-1 px-2 flex items-center bg-white gap-1"
                  style={{
                    boxShadow:
                      "0px 5.78232px 19.2744px 0px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <p>Motivation</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <g clipPath="url(#tick-icon)">
                      <path
                        d="m16.987 9.122-1.851-2.055.29-2.751-2.707-.573-1.38-2.399-2.527 1.13-.341 6.648.34 6.648 2.528 1.129 1.38-2.398 2.707-.573-.29-2.751 1.85-2.055Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m6.285 1.344-1.38 2.399-2.707.573.29 2.75L.637 9.123l1.85 2.055-.29 2.75 2.707.574 1.38 2.398 2.528-1.13V2.475l-2.527-1.13Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m12.239 7.332-.716-.64-2.711 3.039-.341.755.34.685 3.428-3.84Z"
                        fill="#F7F0EB"
                      />
                      <path
                        d="m5.962 8.4-.678.678 2.852 2.851.676-.758v-1.44l-.716.802L5.962 8.4Z"
                        fill="#FFFBF5"
                      />
                    </g>
                    <defs>
                      <clipPath id="tick-icon">
                        <path fill="#fff" d="M.637.947h16.35v16.35H.637z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="rounded-lg py-1 px-2 flex items-center bg-white gap-1"
                  style={{
                    boxShadow:
                      "0px 5.78232px 19.2744px 0px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <p>Stress</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <g clipPath="url(#tick-icon)">
                      <path
                        d="m16.987 9.122-1.851-2.055.29-2.751-2.707-.573-1.38-2.399-2.527 1.13-.341 6.648.34 6.648 2.528 1.129 1.38-2.398 2.707-.573-.29-2.751 1.85-2.055Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m6.285 1.344-1.38 2.399-2.707.573.29 2.75L.637 9.123l1.85 2.055-.29 2.75 2.707.574 1.38 2.398 2.528-1.13V2.475l-2.527-1.13Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m12.239 7.332-.716-.64-2.711 3.039-.341.755.34.685 3.428-3.84Z"
                        fill="#F7F0EB"
                      />
                      <path
                        d="m5.962 8.4-.678.678 2.852 2.851.676-.758v-1.44l-.716.802L5.962 8.4Z"
                        fill="#FFFBF5"
                      />
                    </g>
                    <defs>
                      <clipPath id="tick-icon">
                        <path fill="#fff" d="M.637.947h16.35v16.35H.637z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="rounded-lg py-1 px-2 flex items-center bg-white gap-1"
                  style={{
                    boxShadow:
                      "0px 5.78232px 19.2744px 0px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <p>Burnout</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <g clipPath="url(#tick-icon)">
                      <path
                        d="m16.987 9.122-1.851-2.055.29-2.751-2.707-.573-1.38-2.399-2.527 1.13-.341 6.648.34 6.648 2.528 1.129 1.38-2.398 2.707-.573-.29-2.751 1.85-2.055Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m6.285 1.344-1.38 2.399-2.707.573.29 2.75L.637 9.123l1.85 2.055-.29 2.75 2.707.574 1.38 2.398 2.528-1.13V2.475l-2.527-1.13Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m12.239 7.332-.716-.64-2.711 3.039-.341.755.34.685 3.428-3.84Z"
                        fill="#F7F0EB"
                      />
                      <path
                        d="m5.962 8.4-.678.678 2.852 2.851.676-.758v-1.44l-.716.802L5.962 8.4Z"
                        fill="#FFFBF5"
                      />
                    </g>
                    <defs>
                      <clipPath id="tick-icon">
                        <path fill="#fff" d="M.637.947h16.35v16.35H.637z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="rounded-lg py-1 px-2 flex items-center bg-white gap-1"
                  style={{
                    boxShadow:
                      "0px 5.78232px 19.2744px 0px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  <p>Mindfulness</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={18}
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <g clipPath="url(#tick-icon)">
                      <path
                        d="m16.987 9.122-1.851-2.055.29-2.751-2.707-.573-1.38-2.399-2.527 1.13-.341 6.648.34 6.648 2.528 1.129 1.38-2.398 2.707-.573-.29-2.751 1.85-2.055Z"
                        fill="#FF6D42"
                      />
                      <path
                        d="m6.285 1.344-1.38 2.399-2.707.573.29 2.75L.637 9.123l1.85 2.055-.29 2.75 2.707.574 1.38 2.398 2.528-1.13V2.475l-2.527-1.13Z"
                        fill="#FF8662"
                      />
                      <path
                        d="m12.239 7.332-.716-.64-2.711 3.039-.341.755.34.685 3.428-3.84Z"
                        fill="#F7F0EB"
                      />
                      <path
                        d="m5.962 8.4-.678.678 2.852 2.851.676-.758v-1.44l-.716.802L5.962 8.4Z"
                        fill="#FFFBF5"
                      />
                    </g>
                    <defs>
                      <clipPath id="tick-icon">
                        <path fill="#fff" d="M.637.947h16.35v16.35H.637z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/nowandme/image/upload/v1699432507/landing/nm_help_igahxa.webp"
                className="hidden lg:block object-contain max-w-[700px] h-full"
              />
              <img
                src="https://res.cloudinary.com/nowandme/image/upload/v1698929913/landing/nmhelp_mobile_my8svq.webp"
                className="h-full block lg:hidden px-6"
              />
            </div>
          </div>
          <div className="my-20 max-w-7xl w-full md:mx-auto">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-2xl md:text-4xl text-center">
                How It Works
              </p>
              <svg
                width={149}
                height={11}
                viewBox="0 0 149 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-8"
              >
                <path
                  d="M1.67188 9.3999C8.47091 1.6097 14.254 2.49642 19.8471 2.40267C27.6614 2.27169 29.4813 6.82827 34.7211 8.40847C40.8343 10.252 46.0658 6.57986 50.3153 5.33616C52.7986 4.60937 55.2927 4.14208 57.8344 4.20629C61.2436 4.29242 64.3176 7.7547 67.6538 8.64751C70.9373 9.52621 73.9298 8.81145 77.0033 7.05887C78.3838 6.27169 79.7089 5.34577 81.1075 4.61336C82.8666 3.69219 84.8003 3.23567 86.7383 3.04276M86.7383 3.04276C87.6873 2.9483 88.6373 2.91704 89.5684 2.92537M86.7383 3.04276C87.6284 2.96911 88.5845 2.92261 89.5684 2.92537M89.5684 2.92537C90.0742 2.9299 90.5744 2.94611 91.0658 2.97022M89.5684 2.92537C92.1615 2.93266 94.9479 3.28217 97.2279 4.37882C98.6523 5.06391 100.01 5.94486 101.418 6.68529C104.554 8.3338 107.57 8.94785 110.82 7.95964C114.122 6.95557 117.068 3.39238 120.472 3.19205C123.01 3.04269 125.519 3.42612 128.028 4.06923C132.32 5.16977 138.15 9.6473 146.672 3.55006"
                  stroke="#FF6D42"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="hidden md:flex items-center justify-center mt-16">
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col items-center justify-center md:items-start">
                  <div className="flex w-full xs:w-auto px-4">
                    <span className="text-xl font-medium">
                      0{/* */}1{/* */}.
                    </span>
                    <div className="flex flex-col ml-3 max-w-[264px]">
                      <span className="text-xl font-medium">
                        Find Online Experts
                      </span>
                      <p className="text-sm mt-2">
                        Take your pick from our panel of mental health &amp;
                        self-improvement experts
                      </p>
                    </div>
                  </div>
                  <div className="mt-10">
                    <img
                      src="https://res.cloudinary.com/nowandme/image/upload/v1684331127/landing/find_online_exp_webp_x22fgt.webp"
                      alt="detail image"
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center md:items-start">
                  <div className="flex w-full xs:w-auto px-4">
                    <span className="text-xl font-medium">
                      0{/* */}2{/* */}.
                    </span>
                    <div className="flex flex-col ml-3 max-w-[264px]">
                      <span className="text-xl font-medium">Chat or Call</span>
                      <p className="text-sm mt-2">
                        Initiate an instant chat or call with the expert for a
                        price as low as ₹7/min
                      </p>
                    </div>
                  </div>
                  <div className="mt-10">
                    <img
                      src="https://res.cloudinary.com/nowandme/image/upload/v1684331127/landing/chat_or_call_webp_inmcg7.webp"
                      alt="detail image"
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center md:items-start">
                  <div className="flex w-full xs:w-auto px-4">
                    <span className="text-xl font-medium">
                      0{/* */}3{/* */}.
                    </span>
                    <div className="flex flex-col ml-3 max-w-[264px]">
                      <span className="text-xl font-medium">
                        Connect Instantly
                      </span>
                      <p className="text-sm mt-2">
                        Share your thoughts, get support, and feel better
                      </p>
                    </div>
                  </div>
                  <div className="mt-10">
                    <img
                      src="https://res.cloudinary.com/nowandme/image/upload/v1684331127/landing/connect_instantly_webp_yroisl.webp"
                      alt="detail image"
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center mt-10">
              <a href="https://nowandme.sng.link/Dqsa0/4x5h?pcn=main_landing&pscn=how-it-works&_smtype=3">
                <button
                  className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-lg bg-primary px-8 transform transition duration-200 hover:scale-[1.06] mt-4 lg:mt-0 py-3"
                  style={{ fontWeight: 600 }}
                >
                  Download App Now
                </button>
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <div className="how-it-works-embla">
              <div className="how-it-works-embla__viewport">
                <div
                  className="how-it-works-embla__container"
                  style={{ transform: "translate3d(0%, 0px, 0px)" }}
                >
                  <div className="how-it-works-embla__slide">
                    <div className="flex flex-col items-center justify-center md:items-start">
                      <div className="flex w-full xs:w-auto px-4">
                        <span className="text-xl font-medium">
                          0{/* */}1{/* */}.
                        </span>
                        <div className="flex flex-col ml-3 max-w-[264px]">
                          <span className="text-xl font-medium">
                            Find Online Experts
                          </span>
                          <p className="text-sm mt-2">
                            Take your pick from our panel of mental health &amp;
                            self-improvement experts
                          </p>
                        </div>
                      </div>
                      <div className="mt-10">
                        <img
                          src="https://res.cloudinary.com/nowandme/image/upload/v1684331127/landing/find_online_exp_webp_x22fgt.webp"
                          alt="detail image"
                          loading="lazy"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="how-it-works-embla__slide">
                    <div className="flex flex-col items-center justify-center md:items-start">
                      <div className="flex w-full xs:w-auto px-4">
                        <span className="text-xl font-medium">
                          0{/* */}2{/* */}.
                        </span>
                        <div className="flex flex-col ml-3 max-w-[264px]">
                          <span className="text-xl font-medium">
                            Chat or Call
                          </span>
                          <p className="text-sm mt-2">
                            Initiate an instant chat or call with the expert for
                            a price as low as ₹7/min
                          </p>
                        </div>
                      </div>
                      <div className="mt-10">
                        <img
                          src="https://res.cloudinary.com/nowandme/image/upload/v1684331127/landing/chat_or_call_webp_inmcg7.webp"
                          alt="detail image"
                          loading="lazy"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="how-it-works-embla__slide">
                    <div className="flex flex-col items-center justify-center md:items-start">
                      <div className="flex w-full xs:w-auto px-4">
                        <span className="text-xl font-medium">
                          0{/* */}3{/* */}.
                        </span>
                        <div className="flex flex-col ml-3 max-w-[264px]">
                          <span className="text-xl font-medium">
                            Connect Instantly
                          </span>
                          <p className="text-sm mt-2">
                            Share your thoughts, get support, and feel better
                          </p>
                        </div>
                      </div>
                      <div className="mt-10">
                        <img
                          src="https://res.cloudinary.com/nowandme/image/upload/v1684331127/landing/connect_instantly_webp_yroisl.webp"
                          alt="detail image"
                          loading="lazy"
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-3 items-center justify-center mt-4 ">
              <button
                className="how-it-works-embla__dot how-it-works-embla__dot--selected"
                type="button"
              />
            </div>
            <div className="mt-8 mb-24 md:mb-0 px-4 text-center">
              <a
                href="https://nowandme.sng.link/Dqsa0/4x5h?pcn=main_landing&pscn=how-it-works&_smtype=3"
                target="_blank"
              >
                <button
                  className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-xl bg-primary px-8 transform transition duration-200 hover:scale-[1.06] mt-4 lg:mt-0 py-3"
                  style={{ fontWeight: 600 }}
                >
                  Download App Now
                </button>
              </a>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto px-4 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 gap-10 items-center bg-[#FFEBFF] rounded-[18px] mt-10 overflow-hidden">
              <div className="relative order-last lg:order-none flex flex-col items-center lg:block overflow-hidden mt-2 lg:mt-0">
                <img
                  src="https://res.cloudinary.com/nowandme/image/upload/v1695647645/assets/Hero_Section_Image_q3cckd.png"
                  width={630}
                  height={358}
                  className="relative z-10"
                />
                <div className="absolute top-0 block lg:hidden z-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={310}
                    height={232}
                    viewBox="0 0 328 232"
                    fill="none"
                  >
                    <path
                      d="M331.951 236.564c0 6.049.309 12.113 0 18.147-.648 10.302-4.699 14.364-15.76 15.925a57.385 57.385 0 0 1-10.664 0c-4.272-.236-8.529-.633-12.771-1.09a21.52 21.52 0 0 1-5.199-1.118c-3.108-1.133-5.067-3.253-4.964-6.8 0-2.855 0-5.695.191-8.551.472-11.185 1.194-22.37 1.385-33.571.221-13.716.471-27.448-.147-41.209a292.206 292.206 0 0 0-9.221-58.459c-2.091-8.256-3.859-16.557-7.512-24.416a117.3 117.3 0 0 0-25.04-34.91 79.37 79.37 0 0 0-47.251-22.563c-29.356-3.429-56.62 2.944-80.658 20.885a132.914 132.914 0 0 0-38.87 45.536 361.862 361.862 0 0 0-32.405 87.688c-2.946 12.981-5.568 26.036-8.072 39.105-1.075 5.578-1.473 11.288-2.268 16.925-.501 3.444-2.122 5.195-5.553 5.387-7.998.441-16.026.839-23.936-.942-3.918-.898-5.214-2.252-5.744-5.99-1.723-12.348-3.034-24.785-2.268-37.236.618-10.302 1.87-20.605 3.402-30.745 1.473-9.655 3.358-19.251 5.583-28.758 3.652-15.689 10.546-30.157 17.793-44.433 16.806-33.085 41.094-59.665 71.275-80.947a114.941 114.941 0 0 1 49.947-19.957C158.056 2.244 172.83.243 187.839.89c33.097 1.472 61.009 13.923 83.118 38.884 18.323 20.693 30.828 44.698 40.564 70.307a289.465 289.465 0 0 1 14.347 49.054c2.165 11.332 3.579 22.812 4.964 34.277.928 7.756 1.399 15.601 1.738 23.416.279 6.564 0 13.157 0 19.736h-.619Z"
                      fill="#FBD7FB"
                    />
                  </svg>
                </div>
                <div className="absolute top-0 hidden lg:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={565}
                    height={351}
                    viewBox="0 0 565 351"
                    fill="none"
                  >
                    <path
                      d="M562.73 337.832c0 12.617.645 25.265 0 37.851-1.352 21.489-9.8 29.962-32.873 33.216-7.399.69-14.845.69-22.243 0-8.91-.491-17.789-1.32-26.637-2.272a44.963 44.963 0 0 1-10.845-2.333c-6.483-2.364-10.569-6.784-10.354-14.183 0-5.955 0-11.88.4-17.835.983-23.331 2.488-46.662 2.887-70.024.461-28.611.984-57.252-.307-85.955a609.45 609.45 0 0 0-19.232-121.934c-4.363-17.222-8.05-34.536-15.669-50.93a244.705 244.705 0 0 0-52.229-72.816 165.556 165.556 0 0 0-98.558-47.06c-61.231-7.153-118.099 6.14-168.238 43.56a277.234 277.234 0 0 0-81.078 94.981A754.803 754.803 0 0 0-39.836 245c-6.144 27.076-11.613 54.305-16.836 81.566-2.243 11.634-3.072 23.545-4.731 35.303-1.045 7.183-4.424 10.836-11.583 11.235-16.682.921-33.426 1.75-49.924-1.964-8.172-1.873-10.876-4.697-11.982-12.495-3.595-25.756-6.329-51.696-4.731-77.667 1.29-21.489 3.901-42.977 7.097-64.129 3.072-20.138 7.004-40.153 11.644-59.984 7.619-32.725 21.997-62.902 37.113-92.679C-48.715-4.824 1.947-60.266 64.898-104.655a239.757 239.757 0 0 1 104.181-41.628c30.938-4.635 61.753-8.81 93.059-7.459 69.034 3.07 127.254 29.04 173.369 81.105 38.219 43.162 64.303 93.231 84.611 146.647a603.91 603.91 0 0 1 29.924 102.317c4.516 23.638 7.465 47.583 10.353 71.497 1.936 16.178 2.919 32.54 3.626 48.841.583 13.692 0 27.445 0 41.167h-1.291Z"
                      fill="#FBD7FB"
                    />
                  </svg>
                </div>
                <div className="absolute top-0 hidden lg:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={427}
                    height={351}
                    viewBox="0 0 427 351"
                    fill="none"
                  >
                    <path
                      d="M-25.764 322.698c-1.69-39.57 7.035-78.711 16.19-117.759a384.21 384.21 0 0 1 34.932-94.613C54.545 55.929 94.7 12.398 151.045-14.709c76.807-36.838 164.091-18.818 217.917 41.382a190.565 190.565 0 0 1 40.493 74.689A397.497 397.497 0 0 1 425 245.461c-2.734 34.781-6.144 69.501-9.216 104.221-.738 8.135-1.322 16.301-2.52 24.344-1.198 8.043-5.96 12.095-14.317 12.709-20.215 1.473-39.939-2.088-59.878-4.851-8.603-1.228-12.689-7.398-14.225-15.165a150.756 150.756 0 0 1-2.519-20.997c-2.366-42.64-3.963-85.342-7.005-127.921-2.181-31.097-6.359-62.041-20.584-90.529-6.329-12.648-13.18-24.989-23.81-34.72-23.749-21.766-50.754-24.16-79.88-12.924a97.83 97.83 0 0 0-50.416 43.622 454.899 454.899 0 0 0-49.494 122.211c-7.62 32.448-12.996 65.418-19.57 98.081a81.67 81.67 0 0 1-5.439 19.156 19.623 19.623 0 0 1-9.83 9.639 161.343 161.343 0 0 1-61.446 7.398 18.991 18.991 0 0 1-12.375-4.582 18.968 18.968 0 0 1-6.397-11.534 73.998 73.998 0 0 1-1.72-13.201c-.308-8.933-.123-17.805-.123-27.72Z"
                      fill="#FBD7FB"
                    />
                  </svg>
                </div>
                <div className="absolute top-10 hidden lg:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={190}
                    height={232}
                    viewBox="0 0 190 232"
                    fill="none"
                  >
                    <path
                      d="M115.553 78.847c-7.435 3.407-9.832 9.854-12.719 15.687-12.044 24.374-19.632 50.315-26.79 76.408-5.807 21.059-11.614 42.119-17.697 63.086-3.072 10.56-6.882 13.353-17.39 13.63-8.187.416-16.39.416-24.577 0-11.614-.829-18.127-9.455-15.761-20.814 9.616-46.477 20.676-92.556 38.741-136.639 10.323-25.203 22.766-49.117 40.554-69.961a75.837 75.837 0 0 1 17.42-15.35c14.163-8.657 28.019-3.99 41.107 3.377 17.942 10.192 28.603 26.462 36.345 45.004 7.189 17.314 10.047 35.702 12.289 54.06 5.868 47.214.953 94.06-7.035 140.66-2.028 11.758-6.145 15.349-18.065 14.643-11.122-.675-22.151-2.333-33.181-3.745a13.794 13.794 0 0 1-12.596-12.279 56.732 56.732 0 0 1-.553-14.428c1.905-21.06 4.332-42.057 6.144-63.116 1.813-21.06 3.656-41.382 4.363-62.103a35.365 35.365 0 0 0-2.165-15.24 35.394 35.394 0 0 0-8.434-12.88Z"
                      fill="#FBD7FB"
                    />
                  </svg>
                </div>
              </div>
              <div className="px-6 md:px-8 lg:pr-10 xl:pr-20 flex flex-col items-center lg:block pt-8 lg:pt-4 pb-0 lg:pb-4">
                <p className="font-bold text-2xl md:text-3xl xl:text-4xl text-[#171717] leading-[36px] md:leading-[40px] lg:leading-[48px] xl:leading-[56px] text-center lg:text-left">
                  Give Your Self-Care Journey A Whole New Twist
                </p>
                <p className="my-3 lg:my-5 font-medium text-base text-[#525252] text-center lg:text-left">
                  Cultivate a healthier and happier lifestyle by inculcating
                  Now&amp;Me resources into your everyday routine and taking
                  your healing journey to a whole new level.
                </p>
                <a href="/experts/assets">
                  <button
                    className="px-4 text-white text-sm font-medium rounded-lg bg-primary focus:outline-none focus:ring-3 dark:focus:ring-0 relative overflow-hidden text-xl !bg-[#B94BB9] px-8 transform transition duration-200 hover:scale-[1.06] mt-4 lg:mt-0 py-3"
                    style={{ fontWeight: 600 }}
                  >
                    Explore Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <section className="flex flex-col mt-20 mb-10">
            <p className="font-bold text-2xl md:text-4xl text-center">
              Our Proven Results
            </p>
            <div className="my-10 grid grid-cols-2 md:flex md:justify-center md:items-start md:flex-wrap gap-5 w-full mx-auto max-w-7xl px-5">
              <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[140px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                <div className="flex flex-row justify-center items-center">
                  <svg
                    className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <path
                      d="M39.5699 18.7322C39.5699 21.7896 38.6633 24.5939 37.103 26.9343C35.9596 28.6396 34.4724 30.087 32.7368 31.1836C31.0011 32.2802 29.0553 33.0018 27.0243 33.302C26.3074 33.4286 25.5695 33.4918 24.8104 33.4918C24.0513 33.4918 23.3134 33.4286 22.5965 33.302C20.5655 33.0018 18.6197 32.2802 16.8841 31.1836C15.1484 30.087 13.6612 28.6396 12.5178 26.9343C10.8991 24.506 10.0403 21.6506 10.0509 18.7322C10.0509 10.5723 16.6505 3.97266 24.8104 3.97266C32.9703 3.97266 39.5699 10.5723 39.5699 18.7322Z"
                      stroke="#FF6D42"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.9115 38.4695L41.4802 39.298C40.7107 39.4892 40.1077 40.0839 39.9413 40.8699L39.2134 43.9926C39.1242 44.3759 38.9323 44.7263 38.6592 45.0046C38.3862 45.2829 38.0427 45.4781 37.6673 45.5685C37.2918 45.6589 36.8992 45.6408 36.5332 45.5163C36.1673 45.3918 35.8424 45.1658 35.595 44.8635L25.6755 33.2226L15.7559 44.8848C15.5085 45.187 15.1836 45.413 14.8177 45.5375C14.4517 45.662 14.0591 45.6801 13.6836 45.5898C13.3082 45.4994 12.9647 45.3041 12.6917 45.0258C12.4186 44.7475 12.2267 44.3971 12.1375 44.0138L11.4096 40.8912C11.3212 40.5091 11.1304 40.1597 10.8586 39.8821C10.5868 39.6045 10.2448 39.4096 9.87074 39.3192L6.43945 38.4908C6.07995 38.4027 5.74981 38.2187 5.48284 37.9575C5.21587 37.6963 5.02166 37.3672 4.9201 37.0041C4.81854 36.641 4.81327 36.2569 4.90485 35.891C4.99643 35.5252 5.18155 35.1908 5.44126 34.922L13.5516 26.6374C14.6792 28.3554 16.146 29.8136 17.8579 30.9184C19.5697 32.0232 21.4888 32.7501 23.4919 33.0527C24.199 33.1801 24.9268 33.2439 25.6755 33.2439C26.4241 33.2439 27.1519 33.1801 27.859 33.0527C31.9973 32.4366 35.5534 30.0362 37.7993 26.6374L45.9096 34.922C47.0534 36.0691 46.4919 38.0871 44.9115 38.4695ZM26.8816 11.9376L28.1085 14.4442C28.2749 14.7841 28.7116 15.124 29.1067 15.1877L31.3319 15.5701C32.746 15.8037 33.0787 16.8659 32.0597 17.9068L30.3337 19.6699C30.0425 19.9673 29.8762 20.5408 29.9802 20.9657L30.4793 23.1537C30.8744 24.8743 29.9802 25.5541 28.4829 24.6406L26.4033 23.3873C26.1921 23.2722 25.9564 23.212 25.717 23.212C25.4777 23.212 25.242 23.2722 25.0308 23.3873L22.9512 24.6406C21.4539 25.5328 20.5597 24.8743 20.9548 23.1537L21.4539 20.9657C21.5371 20.5621 21.3915 19.9673 21.1004 19.6699L19.3744 17.9068C18.3554 16.8659 18.6881 15.825 20.1022 15.5701L22.3273 15.1877C22.7017 15.124 23.1384 14.7841 23.3047 14.4442L24.5317 11.9376C25.1348 10.5781 26.2161 10.5781 26.8816 11.9376Z"
                      stroke="#FF6D42"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                    270K+
                  </p>
                </div>
                <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                  Expert Chat &amp; Call Minutes
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[140px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                <div className="flex flex-row justify-center items-center">
                  <svg
                    className="w-[35px] h-[35px] md:w-[49px] md:h-[50px]"
                    viewBox="0 0 49 50"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5376_9349)">
                      <path
                        d="M25.8967 6.03062L30.3431 16.6269C30.4507 16.884 30.6265 17.1069 30.8514 17.2715C31.0764 17.4361 31.3421 17.5362 31.6197 17.5609L43.0008 18.5448C43.3027 18.569 43.5907 18.6823 43.8283 18.8703C44.0658 19.0583 44.2423 19.3126 44.3353 19.6009C44.4284 19.8892 44.4338 20.1986 44.3509 20.49C44.268 20.7814 44.1006 21.0416 43.8697 21.2378L35.2354 28.7697C35.0255 28.954 34.8695 29.1918 34.7839 29.4577C34.6983 29.7236 34.6863 30.0077 34.7492 30.2799L37.337 41.4848C37.4054 41.7774 37.3862 42.0838 37.2817 42.3655C37.1772 42.6473 36.9921 42.8922 36.7495 43.0695C36.5069 43.2468 36.2174 43.3488 35.9172 43.3628C35.617 43.3768 35.3193 43.3021 35.0612 43.1481L25.2804 37.2145C25.0427 37.07 24.7699 36.9936 24.4918 36.9936C24.2136 36.9936 23.9408 37.07 23.7032 37.2145L13.9223 43.1481C13.6642 43.3021 13.3666 43.3768 13.0663 43.3628C12.7661 43.3488 12.4767 43.2468 12.234 43.0695C11.9914 42.8922 11.8063 42.6473 11.7018 42.3655C11.5974 42.0838 11.5781 41.7774 11.6465 41.4848L14.2343 30.2799C14.2972 30.0077 14.2852 29.7236 14.1996 29.4577C14.114 29.1918 13.958 28.954 13.7481 28.7697L5.1138 21.2378C4.88297 21.0416 4.71551 20.7814 4.63263 20.49C4.54976 20.1986 4.55517 19.8892 4.6482 19.6009C4.74123 19.3126 4.9177 19.0583 5.15526 18.8703C5.39282 18.6823 5.68081 18.569 5.98279 18.5448L17.3638 17.5609C17.6415 17.5362 17.9071 17.4361 18.1321 17.2715C18.3571 17.1069 18.5329 16.884 18.6405 16.6269L23.0868 6.03062C23.2056 5.75666 23.4019 5.5234 23.6515 5.35955C23.9011 5.1957 24.1932 5.1084 24.4918 5.1084C24.7904 5.1084 25.0824 5.1957 25.3321 5.35955C25.5817 5.5234 25.7779 5.75666 25.8967 6.03062Z"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5376_9349">
                        <rect
                          width={49}
                          height={49}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                    4.6
                  </p>
                </div>
                <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                  Average Expert Rating
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[140px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                <div className="flex flex-row justify-center items-center">
                  <svg
                    className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5376_9359)">
                      <path
                        d="M10.924 39.076C9.16305 37.3151 10.3306 33.6152 9.43484 31.4485C8.50461 29.2109 5.09375 27.3926 5.09375 25C5.09375 22.6074 8.50461 20.7891 9.43484 18.5515C10.3306 16.3867 9.16305 12.6849 10.924 10.924C12.6849 9.16305 16.3867 10.3306 18.5515 9.43484C20.7986 8.50461 22.6074 5.09375 25 5.09375C27.3926 5.09375 29.2109 8.50461 31.4485 9.43484C33.6152 10.3306 37.3151 9.16305 39.076 10.924C40.837 12.6849 39.6694 16.3848 40.5652 18.5515C41.4954 20.7986 44.9062 22.6074 44.9062 25C44.9062 27.3926 41.4954 29.2109 40.5652 31.4485C39.6694 33.6152 40.837 37.3151 39.076 39.076C37.3151 40.837 33.6152 39.6694 31.4485 40.5652C29.2109 41.4954 27.3926 44.9062 25 44.9062C22.6074 44.9062 20.7891 41.4954 18.5515 40.5652C16.3867 39.6694 12.6849 40.837 10.924 39.076Z"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.3438 26.5312L21.9375 31.125L32.6562 20.4062"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5376_9359">
                        <rect
                          width={49}
                          height={49}
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                    21,600+
                  </p>
                </div>
                <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                  Sessions Done
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[140px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                <div className="flex flex-row justify-center items-center">
                  <svg
                    className="w-[35px] h-[35px] md:w-[49px] md:h-[50px]"
                    width={49}
                    height={50}
                    viewBox="0 0 49 50"
                    fill="none"
                  >
                    <path
                      d="M44.4082 12.21L26.0332 30.585L18.377 22.9287L4.5957 36.71"
                      stroke="#FF6D42"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.4062 24.46V12.21H32.1562"
                      stroke="#FF6D42"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                    3.5L+
                  </p>
                </div>
                <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                  App Downloads
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[140px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                <div className="flex flex-row justify-center items-center">
                  <svg
                    className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5430_12639)">
                      <path
                        d="M25.0013 43.3753L42.1053 26.0262C43.9003 24.2312 44.9088 21.7966 44.9088 19.2581C44.9088 16.7196 43.9003 14.285 42.1053 12.49C40.3103 10.695 37.8757 9.68652 35.3372 9.68652C32.7987 9.68652 30.3641 10.695 28.5691 12.49L25.0013 15.8128L21.4335 12.49C19.6384 10.695 17.2039 9.68652 14.6653 9.68652C12.1268 9.68652 9.69222 10.695 7.8972 12.49C6.10218 14.285 5.09375 16.7196 5.09375 19.2581C5.09375 21.7966 6.10218 24.2312 7.8972 26.0262L25.0013 43.3753Z"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5430_12639">
                        <rect
                          width={49}
                          height={49}
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                    5Mn+
                  </p>
                </div>
                <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                  Lives Touched
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[140px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                <div className="flex flex-row justify-center items-center">
                  <svg
                    className="w-[35px] h-[35px] md:w-[49px] md:h-[50px]"
                    viewBox="0 0 49 50"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5430_12642)">
                      <path
                        d="M24.5 43.375C34.6482 43.375 42.875 35.1482 42.875 25C42.875 14.8518 34.6482 6.625 24.5 6.625C14.3518 6.625 6.125 14.8518 6.125 25C6.125 35.1482 14.3518 43.375 24.5 43.375Z"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.8438 25.0002C16.8438 32.1703 19.3952 38.5748 23.4052 42.8948C23.5445 43.0463 23.7137 43.1673 23.9021 43.25C24.0906 43.3328 24.2942 43.3755 24.5 43.3755C24.7058 43.3755 24.9094 43.3328 25.0979 43.25C25.2863 43.1673 25.4555 43.0463 25.5948 42.8948C29.6048 38.5748 32.1562 32.1703 32.1562 25.0002C32.1562 17.8302 29.6048 11.4257 25.5948 7.10567C25.4555 6.95415 25.2863 6.8332 25.0979 6.75046C24.9094 6.66772 24.7058 6.625 24.5 6.625C24.2942 6.625 24.0906 6.66772 23.9021 6.75046C23.7137 6.8332 23.5445 6.95415 23.4052 7.10567C19.3952 11.4257 16.8438 17.8302 16.8438 25.0002Z"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.17188 18.875H41.8317"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.17188 31.125H41.8317"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5430_12642">
                        <rect
                          width={49}
                          height={49}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                    190
                  </p>
                </div>
                <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                  Countries Trust Us
                </p>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#FFF6F3] px-4 h-[140px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                <div className="flex flex-row justify-center items-center">
                  <svg
                    className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5430_12658)">
                      <path
                        d="M27.017 27.576C20.9073 17.3913 29.0536 7.20849 46.3663 8.22677C47.3941 25.5395 37.2017 33.6857 27.017 27.576Z"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.4343 29.6841C21.7984 22.4106 15.9796 15.1372 3.61286 15.8626C2.88551 28.2294 10.1609 34.0481 17.4343 29.6841Z"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.2188 23.4688L23.4688 35.7188"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M38.7812 15.8125L27.0576 27.5361C25.9198 28.6737 25.0172 30.0242 24.4015 31.5107C23.7857 32.9971 23.4687 34.5903 23.4688 36.1992V41.8438"
                        stroke="#FF6D42"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5430_12658">
                        <rect
                          width={49}
                          height={49}
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                    100+
                  </p>
                </div>
                <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                  Mental Health &amp; Self care experts
                </p>
              </div>
            </div>
            <div className="bg-[#FFE7DE] h-[217px] mt-20 flex flex-col md:flex-row justify-center items-center relative">
              <svg
                width={152}
                height={185}
                viewBox="0 0 152 185"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0 hidden md:block"
              >
                <path
                  d="M5.53-49.929 3.144-36.43l2.389-13.498c11.784 2.083 26.45 4.677 41.123 21.193C61.329-12.221 62.178 2.649 62.86 14.597c.574 10.041.988 17.296 9.329 26.684 8.34 9.387 15.495 10.651 25.399 12.404 11.784 2.083 26.45 4.676 41.122 21.191 14.674 16.516 15.522 31.384 16.205 43.332.573 10.042.987 17.297 9.327 26.684 8.341 9.388 15.494 10.652 25.393 12.403l-4.775 26.998c-11.78-2.082-26.44-4.676-41.113-21.191-14.674-16.516-15.522-31.383-16.204-43.331-.573-10.042-.987-17.297-9.328-26.685-8.34-9.388-15.496-10.651-25.4-12.404C81.03 78.6 66.366 76.006 51.694 59.491 37.02 42.976 36.17 28.107 35.489 16.16c-.573-10.043-.987-17.297-9.328-26.686C17.821-19.913 10.664-21.178.76-22.93l4.77-26.999Z"
                  fill="#FF6D42"
                  fillOpacity="0.1"
                />
              </svg>
              <p className="font-medium text-xl text-[#171717] text-center px-5 mb-5 md:mb-0">
                We're proud to be recognized and certified by
              </p>
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27233%27%20height=%2764%27/%3e"
                  />
                </span>
                <img
                  alt="startupIndia_image"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
                <noscript>
                  &lt;img alt="startupIndia_image"
                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684323306%2Flanding%2Fstartupindia_webp_rc42fv.webp&amp;amp;w=256&amp;amp;q=75
                  1x,
                  /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684323306%2Flanding%2Fstartupindia_webp_rc42fv.webp&amp;amp;w=640&amp;amp;q=75
                  2x"
                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684323306%2Flanding%2Fstartupindia_webp_rc42fv.webp&amp;amp;w=640&amp;amp;q=75"
                  decoding="async" data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  loading="lazy"/&gt;
                </noscript>
              </span>
              <svg
                width={156}
                height={179}
                viewBox="0 0 156 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 left-0 hidden md:block"
              >
                <path
                  d="m-28.47.071-2.386 13.498L-28.467.072c11.784 2.083 26.45 4.677 41.123 21.193C27.329 37.779 28.178 52.649 28.86 64.597c.574 10.041.988 17.296 9.329 26.684 8.34 9.387 15.495 10.652 25.399 12.404 11.784 2.083 26.45 4.676 41.122 21.191 14.674 16.516 15.522 31.384 16.205 43.332.573 10.042.987 17.297 9.327 26.684 8.341 9.388 15.494 10.652 25.393 12.403l-4.775 26.998c-11.78-2.082-26.44-4.676-41.113-21.191-14.674-16.516-15.522-31.383-16.204-43.331-.573-10.042-.987-17.297-9.328-26.685-8.34-9.387-15.496-10.651-25.4-12.404-11.784-2.083-26.449-4.676-41.121-21.191C3.02 92.976 2.17 78.107 1.489 66.159.916 56.117.502 48.863-7.839 39.474c-8.34-9.387-15.497-10.652-25.401-12.404L-28.47.071Z"
                  fill="#FF6D42"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </section>
          <div className="mt-20">
            <section className="">
              <p className="font-bold text-2xl md:text-4xl text-center mb-[60px]">
                We’re Featured On
              </p>
              <div className="grid grid-cols-2 md:flex flex-row flex-wrap justify-center align-center sm:px-5 gap-x-20 gap-y-8  w-full max-w-7xl mx-auto my-20 md:my-8">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.vogue.in/wellness/content/verified-mental-health-helplines-and-services-pan-india-suicide-helplines-therapists-counsellors"
                  className="flex items-center justify-center mx-2 md:mx-0 transition hover:text-gray-500 text-gray-400 rounded-lg p-4}"
                  aria-label="“This platform allows you to share your experiences anonymously with compassionate strangers.”"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={145}
                    height={40}
                    viewBox="0 0 145 40"
                    fill="none"
                  >
                    <path
                      d="M30.8154 2.4375V2.78925H33.8337L26.1563 27.7391L17.0634 2.78925H20.0567V2.4375H7.87109V2.78925H11.0769L23.6639 37.2763L34.4849 2.78925H37.3911V2.4375H30.8154Z"
                      fill="currentColor"
                    />
                    <path
                      d="M85.0169 1.83523V13.821H84.741C84.2275 11.4611 83.5012 9.16463 82.2367 7.08113C80.7332 4.64668 78.3414 1.91074 75.2225 1.91074C68.0589 1.91074 67.4078 14.7749 67.4078 19.6819C67.4078 24.0754 67.7584 28.6058 69.3488 32.7223C70.4637 35.6077 72.0793 37.0271 75.0726 37.0271C77.4522 37.0271 79.9816 35.8222 81.2469 33.7511C81.5722 33.2109 81.5978 32.6091 81.5978 31.993V22.7315H78.4657V22.3681H89.9257V22.7315H87.2458V36.587H87.0077C86.3314 35.4577 85.2672 34.7167 83.902 34.7167C82.9129 34.7167 81.9478 35.0684 81.0842 35.546L80.307 35.9723C78.5543 36.7511 76.8765 37.315 74.9347 37.315C66.0423 37.315 61.3086 27.8144 61.3086 19.9337C61.3086 14.1726 63.4999 8.00941 68.159 4.40771C70.2486 2.79229 72.779 1.59961 75.4706 1.59961C76.5233 1.59961 77.5624 1.92593 78.5389 2.31494L79.2536 2.59098C80.0668 2.89186 80.9567 3.1815 81.8329 3.1815C82.9232 3.1815 83.8999 2.46538 84.7389 1.83819H85.0163L85.0169 1.83523Z"
                      fill="currentColor"
                    />
                    <path
                      d="M87.7315 2.43752H99.9557V2.78907H96.7125V29.3832C96.7125 33.5492 100.995 36.085 104.74 36.085C108.772 36.085 112.166 33.2728 112.166 29.145V2.78946H108.334V2.43772H137.081V14.7748H136.843C136.479 11.5112 135.854 8.15995 133.612 5.61273C131.345 3.03928 128.263 2.78927 125.095 2.78927H121.676V18.6527C122.377 18.728 123.091 18.7785 123.805 18.7785C128.1 18.7785 129.215 15.8162 129.404 12.1514H129.717V26.0698H129.404C128.865 22.7443 127.399 19.1789 123.504 19.1789C122.89 19.1789 122.289 19.2174 121.676 19.2677V36.2352H126.798C129.453 36.2352 132.096 35.081 133.975 33.2239C135.577 31.6412 136.692 29.5843 137.08 27.3632C137.293 26.1207 137.394 24.8533 137.456 23.5977H137.73V36.587H113.07V36.2352H115.938V2.78749H112.677V29.2436C112.677 34.7154 107.493 37.1383 102.633 37.1383C97.1352 37.1383 91.0734 34.4652 91.0734 28.1649V2.7873H87.7305V2.43555L87.7315 2.43752Z"
                      fill="currentColor"
                    />
                    <path
                      d="M54.2525 19.6437C54.2525 14.6614 52.4736 2.2121 45.7484 2.2121C38.9981 2.2121 37.2444 14.6484 37.2444 19.6437C37.2444 24.6392 39.0107 37.0883 45.7484 37.0883C52.4736 37.0883 54.2523 24.6252 54.2523 19.6431M45.7247 37.6029C41.6795 37.6029 37.8095 35.3304 35.3047 32.2312C32.4491 28.7041 31.0586 24.149 31.0586 19.6429C31.0586 15.3131 32.3362 10.958 34.9787 7.5067C37.5838 4.11834 41.5032 1.69531 45.8635 1.69531C49.8707 1.69531 53.7164 3.99254 56.1832 7.05459C59.0266 10.5812 60.4415 15.149 60.4415 19.6553C60.4415 23.9724 59.1515 28.3273 56.5212 31.7787C53.9397 35.1425 50.0438 37.6031 45.7249 37.6031"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.forbes.com/profile/nowme/?list=30under30-asia-consumer-technology/&sh=395e16def1df"
                  className="flex items-center justify-center mx-2 md:mx-0 transition hover:text-gray-500 text-gray-400 rounded-lg p-4}"
                  aria-label="“Forbes 30 Under 30 - Asia - Consumer Technology (2023).”"
                >
                  <svg
                    className="h-9 sm:h-16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 180 60"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="m169.733 29.57-1.47.4c-1.413-4.8-3.78-6.874-7.122-6.874-2.348 0-4 1.547-4 4 0 2.348 1.948 3.6 7.18 5.728 4.83 1.776 6.835 3.952 6.835 7.752 0 5.785-4.544 9.413-12 9.413-3.6 0-7.656-.802-9.948-1.718l-.286-8.038 1.413-.286c2.12 5.5 4.83 7.58 8.363 7.58 3.055 0 4.66-2.12 4.66-4.296s-1.24-3.437-6.014-5.155c-4.544-1.5-7.656-3.437-7.656-8.267 0-4.754 4.18-8.783 11.303-8.783 3.36 0 6.415.573 8.42 1.5zm-30.76 2.52c.172-3.78-.592-9.24-3.704-9.24-3.2 0-4.945 5.098-5.002 9.47zm-2.94-11.074c7.828 0 11.6 5.728 11.666 13.25h-17.604c-.057 6.663 3.475 11.704 10.08 11.704 2.883 0 4.544-.802 6.3-2.062l.82.916c-1.947 2.635-5.957 5.155-11.303 5.155-8.592 0-14.55-5.9-14.55-14.224-.02-7.523 4.87-14.74 14.587-14.74m-25.39 13.94c-.172-5.957-2.348-10.673-6.53-10.673-.993 0-1.757.172-2.94.573l.344 22.893c.42.172 1.413.286 2.12.286 4.067 0 7.007-5.747 7.007-13.08m8.726-.458c0 9.413-5.957 15.484-16.02 15.484-3.6 0-7.313-.573-10.54-1.317.286-3.78.286-27.2 0-31.6-.286-2.3-.936-3.38-2.7-3.6l-1.184-.115v-1.05L101.34 10a488.144 488.144 0 0 0-.172 13.08c2.177-1.088 4.18-1.718 6.893-1.718 6.473 0 11.303 5.5 11.303 13.136M87.728 29.38c-3.838-2.52-7.962-1.432-8.783 0-.363 4.4-.286 11.2.057 14.683.172 2.3.82 3.265 2.597 3.437l2.348.23v1.5H66.4v-1.5l1.356-.23c1.7-.172 2.3-1.146 2.406-3.437.42-3.723.535-11.532 0-15.828-.115-2.463-.706-3.38-2.406-3.6l-1.356-.172v-1.03l12.544-2.406-.172 6.415c2.94-6.644 8.783-7.446 11.952-5.67zm-41.165 6.148c0 7.007 1.9 12.735 5.7 12.735 4.124 0 5.308-5.613 5.308-12.735S55.747 22.85 51.87 22.85c-4.143 0-5.308 5.442-5.308 12.678m19.895-.115c0 8.038-5.308 14.568-14.778 14.568-9.317 0-14.014-6.205-14.014-14.34 0-7.98 5.308-14.625 14.778-14.625 9.317 0 14.014 6.243 14.014 14.396M42.076 21.6l-1.947.573c-1.642-5.632-4.544-8.84-9.547-8.84h-6.53c-.363 3.742-.535 9.527-.363 15.77l4.353-.23c2.94 0 4.18-2.12 4.888-5.212h1.642v13.02H32.93c-.706-3.15-1.947-5.3-4.888-5.46l-4.353-.057c0 4.64.057 8.6.363 11.017.286 3.437 1.24 5.002 3.76 5.327l2.368.23v1.5H8.854v-1.5l1.776-.23c2.463-.344 3.475-1.9 3.76-5.327.477-5.613.592-17.604 0-24.267-.286-3.55-1.298-4.983-3.76-5.27l-1.776-.286V10.81H42.02z"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.gqindia.com/live-well/content/covid-19-and-mental-health-how-to-manage-self-esteem-with-pay-cuts-job-loss-and-no-social-life"
                  className="flex items-center justify-center mx-2 md:mx-0 transition hover:text-gray-500 text-gray-400 rounded-lg p-4}"
                  aria-label="“Now&Me – a widely popular online platform can offer necessary support if you feel mentally exhausted.”"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={84}
                    height={40}
                    viewBox="0 0 84 40"
                    fill="none"
                  >
                    <path
                      d="M64.7407 22.1374L63.7921 20.8573H52.4889L57.0833 27.4975C52.306 28.4347 47.7916 24.4346 47.8487 19.783C47.9173 15.0285 51.746 11.4741 56.3405 11.5084C61.3806 11.5313 66.3979 16.96 64.7407 22.1374ZM71.5181 30.2976C71.5181 30.2976 74.8668 25.9203 74.8897 20.2287C74.9125 9.03976 67.0837 1.77094 56.1347 1.74808C49.8031 1.73665 44.42 4.8339 41.1628 9.34834C42.5114 11.2684 43.3114 13.1313 43.6314 14.3542H38.6256C38.3741 15.1428 38.1684 15.9543 38.0312 16.7886H44.2143C44.3629 17.7029 44.4315 18.6401 44.4315 19.5887C44.4315 23.4174 43.2314 26.9718 41.1856 29.8976C44.3743 34.4806 49.6545 37.8065 56.2147 37.8065C60.5692 37.8065 63.6321 35.955 64.1922 35.6578L65.3465 37.1779H76.4669L71.5181 30.2976Z"
                      fill="currentColor"
                    />
                    <path
                      d="M27.5022 25.2804H32.108C32.108 25.4862 29.7537 27.7834 26.2107 27.7834C22.3134 27.7834 17.9018 24.709 17.8104 19.7831C17.719 14.6744 22.1305 11.3371 26.2107 11.4743C29.5137 11.5885 30.7708 12.5371 32.6223 14.3544C32.6223 14.3544 35.2853 14.3544 37.994 14.3658H43.617C43.297 13.1315 42.5084 11.28 41.1483 9.3599C41.0341 9.19989 40.9198 9.03988 40.7941 8.87988C38.0854 5.26832 33.3766 1.62248 26.0621 1.59963C17.4675 1.5882 10.8387 7.33697 8.65579 14.3658C8.63293 14.4458 8.59864 14.5372 8.57578 14.6172C8.57578 14.6286 8.57578 14.6286 8.56435 14.6286C8.11862 16.2058 7.86719 17.863 7.86719 19.5774C7.87862 21.2232 8.09577 22.7889 8.48435 24.2747C9.86726 29.4063 13.456 33.635 18.1875 35.9094C18.2333 35.9322 18.2676 35.9437 18.3018 35.9665C18.3247 35.978 18.3476 35.9894 18.3818 36.0008C20.7705 37.0866 23.4449 37.6923 26.3021 37.7152C32.3366 37.6694 37.6739 34.7093 40.9655 30.1949C41.0341 30.1035 41.0912 30.0006 41.1598 29.9092C43.2056 26.9834 44.4056 23.429 44.4056 19.6003C44.4056 18.6402 44.3256 17.7145 44.1885 16.8002H27.5022V25.2804Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://yourstory.com/socialstory/2020/08/graduates-online-platform-talk-mental-health/amp?utm_pageloadtype=scroll"
                  className="flex items-center justify-center mx-2 md:mx-0 transition hover:text-gray-500 text-gray-400 rounded-lg p-4}"
                  aria-label="“Now&Me provides a safe space for people to talk about their mental health, feelings, and thoughts, and express their emotions.”"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={197}
                    height={40}
                    viewBox="0 0 197 40"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.1678 37.2044V25.5373L10.1328 2.00192H15.9532L20.1539 18.0442H20.2552L24.4559 2.00192H29.7702L22.7351 25.5373V37.2044H17.1678ZM36.3497 10.0985V29.1078C36.3497 31.6223 37.4631 32.5778 39.2345 32.5778C41.0059 32.5778 42.1194 31.6223 42.1194 29.1078V10.0985C42.1194 7.58403 41.0059 6.62853 39.2345 6.62853C37.4631 6.62853 36.3497 7.58403 36.3497 10.0985ZM30.7824 28.7558V10.4505C30.7824 4.81812 33.7685 1.59961 39.2345 1.59961C44.7006 1.59961 47.6867 4.81812 47.6867 10.4505V28.7558C47.6867 34.3882 44.7006 37.6067 39.2345 37.6067C33.7685 37.6067 30.7824 34.3882 30.7824 28.7558ZM51.0271 2.00192H56.5944V29.1581C56.5944 31.6726 57.7078 32.5778 59.4792 32.5778C61.2506 32.5778 62.3641 31.6726 62.3641 29.1581V2.00192H67.6277V28.8061C67.6277 34.4385 64.7934 37.657 59.3274 37.657C53.8613 37.657 51.0271 34.4385 51.0271 28.8061V2.00192ZM88.7328 37.2044H83.0643C82.7606 36.2992 82.5582 35.746 82.5582 32.8795V27.3477C82.5582 24.0789 81.4447 22.872 78.9141 22.872H76.9909V37.2044H71.4236V2.00192H79.8251C85.5949 2.00192 88.0748 4.66726 88.0748 10.0985V12.8644C88.0748 16.4852 86.9108 18.7985 84.4308 19.9552V20.0558C87.2144 21.2124 88.1254 23.8275 88.1254 27.4986V32.9298C88.1254 34.6396 88.1761 35.8969 88.7328 37.2044ZM79.6733 7.03085H76.9909V17.843H79.1672C81.2422 17.843 82.5075 16.9378 82.5075 14.1216V10.6517C82.5075 8.13721 81.6471 7.03085 79.6733 7.03085ZM91.0609 10.4505C91.0609 4.81812 93.8446 1.59961 99.26 1.59961C104.675 1.59961 107.459 4.81812 107.459 10.4505V11.5569H102.195V10.0985C102.195 7.58403 101.183 6.62853 99.4118 6.62853C97.6404 6.62853 96.6282 7.58403 96.6282 10.0985C96.6282 12.6632 97.7417 14.5742 101.386 17.7424C106.042 21.8159 107.51 24.7327 107.51 28.7558C107.51 34.3882 104.675 37.6067 99.2094 37.6067C93.7433 37.6067 90.9091 34.3882 90.9091 28.7558V26.5933H96.1727V29.1078C96.1727 31.6223 97.2862 32.5275 99.0576 32.5275C100.829 32.5275 101.942 31.6223 101.942 29.1078C101.942 26.5431 100.829 24.6321 97.1849 21.4639C92.5287 17.3904 91.0609 14.4736 91.0609 10.4505ZM109.079 7.03085V2.00192H126.287V7.03085H120.466V37.2044H114.899V7.03085H109.079ZM133.828 10.0985V29.1078C133.828 31.6223 134.941 32.5778 136.713 32.5778C138.484 32.5778 139.598 31.6223 139.598 29.1078V10.0985C139.598 7.58403 138.484 6.62853 136.713 6.62853C134.941 6.62853 133.828 7.58403 133.828 10.0985ZM128.261 28.7558V10.4505C128.261 4.81812 131.247 1.59961 136.713 1.59961C142.179 1.59961 145.165 4.81812 145.165 10.4505V28.7558C145.165 34.3882 142.179 37.6067 136.713 37.6067C131.247 37.6067 128.261 34.3882 128.261 28.7558ZM166.067 37.2044H160.399C160.095 36.2992 159.893 35.746 159.893 32.8795V27.3477C159.893 24.0789 158.779 22.872 156.249 22.872H154.326V37.2044H148.758V2.00192H157.16C162.93 2.00192 165.41 4.66726 165.41 10.0985V12.8644C165.41 16.4852 164.245 18.7985 161.765 19.9552V20.0558C164.549 21.2124 165.46 23.8275 165.46 27.4986V32.9298C165.46 34.6396 165.511 35.8969 166.067 37.2044ZM157.008 7.03085H154.326V17.843H156.502C158.577 17.843 159.842 16.9378 159.842 14.1216V10.6517C159.842 8.13721 158.982 7.03085 157.008 7.03085ZM173.811 37.2044V25.5373L166.776 2.00192H172.596L176.797 18.0442H176.898L181.099 2.00192H186.413L179.378 25.5373V37.2044H173.811Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://techcrunch.com/2020/04/26/tech-for-good-during-covid-19-therapy-for-nurses-baby-food-and-an-online-diary/"
                  className="flex items-center justify-center mx-2 md:mx-0 transition hover:text-gray-500 text-gray-400 rounded-lg p-4}"
                  aria-label="“A discussion forum for people to share their highs and lows with others, with the option to post anonymously.”"
                >
                  <svg
                    className="h-6 sm:h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 64 32"
                  >
                    <g fill="currentColor" clipPath="url(#techcrunch)">
                      <path d="M32 0v10.667H21.333V32H10.667V10.667H0V0h32ZM64 0H42.667v10.667H64V0ZM64 21.333V32H32V10.667h10.667v10.666H64Z" />
                    </g>
                    <defs>
                      <clipPath id="techcrunch">
                        <path fill="#fff" d="M0 0h64v32H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://timesofindia.indiatimes.com/india/collective-healing-in-times-of-resistance/articleshow/73241958.cms"
                  className="flex items-center justify-center mx-2 md:mx-0 transition hover:text-gray-500 text-gray-400 rounded-lg p-4}"
                  aria-label="“Now&Me provides a safe space for people to talk about their mental health, feelings, and thoughts, and express their emotions.”"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={95}
                    height={40}
                    viewBox="0 0 95 40"
                    fill="none"
                  >
                    <path
                      d="M7.66967 3.37848H35.892L36.1603 11.9163H34.9651C34.3797 9.23395 33.6316 7.49203 32.721 6.69058C31.8266 5.87278 29.9321 5.46388 27.0375 5.46388H24.2567V31.1756C24.2567 33.122 24.5575 34.3323 25.1592 34.8066C25.7609 35.2646 27.0781 35.5672 29.1108 35.7144V36.6222H14.5484V35.7144C16.6624 35.5508 17.9796 35.1992 18.5 34.6594C19.0204 34.1197 19.2806 32.7621 19.2806 30.5868V5.46388H16.4998C13.7353 5.46388 11.8489 5.8646 10.8407 6.66605C9.84875 7.46749 9.1007 9.21759 8.59659 11.9163H7.37695L7.66967 3.37848Z"
                      fill="currentColor"
                    />
                    <path
                      d="M43.5025 20.0126C43.5025 25.2956 44.5352 29.2047 46.6004 31.7399C48.6657 34.2587 51.2025 35.5181 54.2109 35.5181C57.1543 35.5181 59.6668 34.2914 61.7483 31.838C63.846 29.3683 64.8949 25.4264 64.8949 20.0126C64.8949 14.5333 63.8379 10.5751 61.7239 8.13809C59.6098 5.70104 57.1055 4.48251 54.2109 4.48251C51.2188 4.48251 48.6819 5.75011 46.6004 8.2853C44.5352 10.8041 43.5025 14.7132 43.5025 20.0126ZM37.8434 20.0126C37.8434 14.6478 39.5184 10.3462 42.8683 7.10766C45.9418 4.14722 49.7227 2.66699 54.2109 2.66699C58.7154 2.66699 62.5044 4.15539 65.5779 7.1322C68.9116 10.3543 70.5784 14.6478 70.5784 20.0126C70.5784 25.4592 68.8547 29.7935 65.4072 33.0157C62.3174 35.8943 58.5854 37.3337 54.2109 37.3337C49.5275 37.3337 45.641 35.7389 42.5512 32.5495C39.4127 29.2947 37.8434 25.1157 37.8434 20.0126Z"
                      fill="currentColor"
                    />
                    <path
                      d="M73.2616 35.7144C75.2944 35.5672 76.6116 35.2646 77.2132 34.8066C77.8149 34.3323 78.1158 33.122 78.1158 31.1756V8.82505C78.1158 6.97681 77.8149 5.791 77.2132 5.26761C76.6116 4.72786 75.2944 4.40891 73.2616 4.31078V3.37848H88.0436V4.31078C86.0109 4.40891 84.6937 4.72786 84.092 5.26761C83.4903 5.791 83.1895 6.97681 83.1895 8.82505V31.1756C83.1895 33.122 83.4903 34.3323 84.092 34.8066C84.6937 35.2646 86.0109 35.5672 88.0436 35.7144V36.6222H73.2616V35.7144Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.newindianexpress.com/lifestyle/health/2022/jul/10/social-media-for-healthy-mind-community-based-mental-health-platform-nowme-tells-us-more-2474042.html"
                  className="flex items-center justify-center mx-2 md:mx-0 transition hover:text-gray-500 text-gray-400 rounded-lg p-4}"
                  aria-label="“Now&Me provides a safe space for people to talk about their mental health, feelings, and thoughts, and express their emotions.”"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={320}
                    height={64}
                    viewBox="0 0 4049.000000 400.000000"
                  >
                    <g
                      transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M1447 3847 c-225 -277 -241 -309 -241 -467 1 -107 21 -174 77 -257 20 -28 297 -283 717 -658 506 -451 691 -622 709 -655 33 -59 40 -173 16 -255 -14 -51 -15 -60 -2 -72 13 -13 32 7 153 157 175 215 190 238 216 323 25 83 21 214 -8 287 -41 105 -70 133 -755 745 -371 331 -687 617 -702 635 -57 67 -71 200 -33 306 14 40 8 64 -15 64 -4 0 -64 -69 -132 -153z" />
                      <path d="M7066 3909 c-209 -49 -383 -92 -387 -96 -4 -5 -10 -24 -14 -44 l-7 -35 146 -69 c80 -38 146 -70 146 -72 0 -2 -178 -724 -395 -1604 -217 -879 -395 -1603 -395 -1609 0 -6 89 -10 253 -10 l252 0 84 338 c46 185 99 389 118 452 116 386 341 773 617 1057 172 178 317 277 424 290 42 5 53 2 72 -17 45 -45 31 -117 -169 -840 -209 -756 -225 -826 -219 -984 5 -135 27 -194 97 -259 66 -62 127 -80 246 -75 85 3 100 7 178 46 101 50 201 139 315 281 82 102 212 284 212 296 0 8 -17 23 -58 52 -16 11 -26 13 -30 6 -4 -6 -45 -54 -92 -107 -133 -151 -235 -226 -309 -226 -40 0 -55 29 -48 94 3 28 93 382 200 786 108 404 201 764 207 800 18 98 15 239 -6 307 -25 79 -90 145 -163 167 -69 20 -195 21 -275 0 -89 -22 -228 -94 -331 -171 -227 -169 -508 -504 -686 -817 -23 -42 -44 -74 -45 -73 -2 2 122 503 275 1115 l279 1112 -57 -1 c-32 -1 -219 -39 -435 -90z" />
                      <path d="M17267 3910 c-208 -49 -380 -90 -381 -92 -2 -1 -6 -20 -10 -41 l-7 -37 143 -71 c79 -38 144 -74 146 -78 2 -6 -123 -509 -209 -844 l-10 -38 -37 29 c-99 78 -212 112 -379 112 -244 0 -470 -81 -694 -250 -306 -229 -542 -567 -673 -960 -84 -253 -120 -521 -98 -733 14 -143 32 -212 82 -313 124 -253 391 -335 659 -200 247 125 545 464 763 869 33 62 57 101 53 87 -3 -14 -30 -119 -60 -235 -93 -363 -103 -495 -49 -616 31 -69 73 -111 138 -140 103 -45 231 -35 359 29 120 60 307 260 476 510 24 35 41 65 39 67 -1 2 -20 17 -41 34 l-38 30 -90 -104 c-124 -144 -212 -215 -293 -237 -41 -11 -48 -10 -64 5 -11 12 -16 31 -15 60 1 23 178 758 392 1634 215 876 391 1597 391 1602 0 26 -134 4 -493 -79z m-566 -1242 c68 -31 131 -86 165 -144 l25 -43 -31 -118 c-213 -801 -618 -1491 -966 -1644 -71 -31 -168 -32 -211 -1 -77 55 -113 172 -113 372 0 387 141 848 359 1177 73 110 201 248 287 309 167 119 350 154 485 92z" />
                      <path d="M18406 3804 c-97 -30 -159 -84 -203 -179 -24 -51 -28 -73 -28 -145 0 -69 5 -93 23 -127 35 -66 79 -110 140 -140 49 -24 69 -28 142 -28 71 0 94 4 140 26 80 37 125 81 162 157 29 59 33 76 33 147 0 71 -4 89 -30 140 -67 131 -230 194 -379 149z" />
                      <path d="M36715 3665 c-525 -84 -835 -430 -835 -929 0 -189 37 -358 107 -486 43 -80 58 -99 136 -178 154 -157 333 -244 847 -407 228 -73 346 -159 384 -280 25 -78 19 -240 -11 -306 -54 -119 -155 -179 -315 -187 -295 -14 -433 105 -463 401 l-7 67 -369 0 -369 0 0 -62 c0 -35 7 -104 15 -154 38 -236 127 -411 282 -554 90 -83 197 -144 337 -191 181 -62 267 -73 536 -73 207 0 247 2 340 22 228 50 391 134 530 272 166 167 252 373 266 640 11 205 -20 377 -97 537 -39 81 -64 117 -128 185 -161 170 -339 261 -763 388 -314 94 -440 165 -491 278 -17 38 -22 67 -22 147 0 90 3 106 28 157 16 32 45 71 65 88 101 83 337 94 456 21 81 -50 128 -132 150 -260 l12 -76 362 -3 362 -2 0 27 c0 47 -29 220 -46 281 -27 96 -63 173 -120 259 -123 185 -314 303 -589 364 -121 27 -458 35 -590 14z" />
                      <path d="M39095 3665 c-255 -40 -463 -140 -608 -294 -177 -188 -258 -453 -229 -749 16 -157 35 -228 92 -348 124 -258 386 -426 900 -579 254 -76 377 -140 437 -229 44 -64 57 -114 57 -221 1 -125 -21 -183 -94 -257 -48 -48 -68 -60 -130 -79 -62 -19 -88 -21 -184 -16 -184 8 -284 63 -345 190 -27 55 -36 93 -57 245 l-5 32 -369 0 -370 0 0 -46 c0 -86 31 -258 63 -354 113 -333 358 -530 757 -611 125 -26 427 -36 565 -20 454 54 754 279 881 661 27 81 28 95 32 312 3 206 2 235 -18 315 -43 175 -148 345 -274 444 -149 117 -346 208 -651 299 -361 107 -472 169 -526 293 -27 62 -32 197 -10 262 46 136 166 202 350 193 112 -6 175 -29 234 -86 61 -58 90 -126 112 -264 l6 -38 361 0 361 0 -6 78 c-39 500 -343 808 -862 871 -117 14 -369 12 -470 -4z" />
                      <path d="M24160 2005 l0 -1635 990 0 990 0 0 300 0 300 -600 0 -600 0 0 400 0 400 450 0 450 0 0 280 0 280 -450 0 -450 0 0 355 0 355 565 0 565 0 0 300 0 300 -955 0 -955 0 0 -1635z" />
                      <path d="M26220 3637 c0 -2 175 -360 390 -795 l389 -792 -414 -837 c-228 -460 -415 -838 -415 -840 0 -1 177 -3 393 -3 l392 0 260 589 c143 324 263 586 266 583 3 -4 123 -269 265 -589 l259 -583 436 0 437 0 -417 852 -417 851 368 779 c202 428 368 781 368 783 0 3 -176 4 -391 3 l-390 -3 -223 -518 c-123 -284 -225 -519 -227 -521 -2 -3 -105 226 -228 507 -124 282 -229 518 -234 525 -7 9 -107 12 -438 12 -236 0 -429 -1 -429 -3z" />
                      <path d="M28950 2006 l0 -1636 385 0 385 0 0 605 0 605 174 0 c501 0 788 76 993 264 183 167 263 396 263 749 0 434 -108 687 -367 857 -125 83 -268 132 -478 166 -82 13 -214 17 -727 21 l-628 5 0 -1636z m1182 1033 c101 -22 180 -77 220 -153 63 -122 65 -457 3 -576 -25 -49 -84 -109 -129 -132 -75 -38 -137 -49 -323 -55 l-183 -6 0 467 0 466 180 0 c98 0 203 -5 232 -11z" />
                      <path d="M31290 2006 l0 -1636 385 0 385 0 0 640 0 641 111 -3 112 -3 287 -635 288 -635 406 -3 c223 -1 406 1 406 5 0 5 -147 323 -328 708 l-327 700 81 38 c168 80 276 185 350 342 68 144 79 212 79 475 0 243 -9 310 -59 444 -92 244 -299 414 -601 494 -190 50 -249 54 -932 59 l-643 5 0 -1636z m1235 1021 c184 -52 255 -167 255 -412 0 -224 -57 -342 -195 -406 -77 -36 -177 -49 -371 -49 l-154 0 0 446 0 447 208 -6 c133 -3 225 -11 257 -20z" />
                      <path d="M33770 2005 l0 -1635 990 0 990 0 0 300 0 300 -600 0 -600 0 0 400 0 400 450 0 450 0 0 280 0 280 -450 0 -450 0 0 355 0 355 565 0 565 0 0 300 0 300 -955 0 -955 0 0 -1635z" />
                      <path d="M3750 3625 c0 -4 -63 -229 -140 -501 -77 -272 -140 -499 -140 -505 0 -5 29 -9 64 -9 l64 0 97 153 c252 393 396 562 550 640 103 51 146 59 372 64 l211 5 -8 -38 c-5 -22 -133 -626 -285 -1343 -152 -717 -286 -1329 -297 -1360 -44 -118 -129 -166 -349 -197 l-118 -17 -11 -56 c-6 -31 -14 -64 -16 -73 -5 -17 33 -18 704 -18 l710 0 17 70 c10 39 16 72 14 74 -2 2 -58 11 -124 20 -197 28 -256 71 -254 190 0 40 98 526 282 1401 l283 1340 224 0 c241 0 276 -6 338 -52 70 -52 94 -136 143 -498 17 -126 33 -247 36 -268 l6 -38 65 3 66 3 128 495 c70 272 128 501 128 508 0 9 -283 12 -1380 12 -759 0 -1380 -2 -1380 -5z" />
                      <path d="M11621 3559 c-7 -38 -11 -72 -10 -73 2 -2 48 -11 103 -20 122 -20 179 -44 206 -88 18 -28 21 -44 17 -108 -6 -99 -520 -2516 -548 -2576 -45 -95 -111 -129 -311 -162 l-102 -17 -12 -55 c-7 -30 -13 -63 -14 -72 0 -17 38 -18 663 -18 l663 0 12 60 c7 34 15 67 18 74 4 9 -18 16 -79 25 -117 16 -182 37 -220 70 -64 58 -69 22 222 1394 144 675 271 1253 283 1285 27 75 89 136 160 157 29 9 99 23 155 32 l103 16 9 36 c6 20 13 53 17 74 l6 37 -664 0 -665 0 -12 -71z" />
                      <path d="M839 3093 c-74 -92 -146 -185 -162 -208 -94 -137 -86 -372 17 -508 17 -23 339 -317 715 -652 775 -692 736 -650 735 -795 -1 -52 -7 -101 -17 -126 -15 -42 -9 -65 18 -63 17 0 297 356 326 414 75 150 53 353 -52 481 -19 23 -331 306 -694 629 -363 323 -672 601 -687 619 -57 65 -75 196 -42 306 13 44 13 54 2 61 -7 5 -16 9 -19 9 -3 0 -66 -75 -140 -167z" />
                      <path d="M20796 2775 l-189 -114 -47 43 c-220 197 -627 196 -967 -2 -446 -261 -792 -796 -883 -1368 -32 -200 -30 -446 5 -591 26 -105 86 -221 146 -282 142 -144 360 -171 561 -70 93 47 143 84 242 179 155 149 289 330 436 590 45 80 79 136 76 125 -3 -11 -16 -60 -30 -110 -75 -274 -106 -480 -87 -582 31 -167 122 -250 287 -261 178 -11 329 75 512 290 81 96 242 318 242 334 0 12 -63 64 -77 64 -4 -1 -24 -21 -43 -46 -57 -74 -243 -250 -288 -273 -23 -11 -57 -21 -76 -21 -47 0 -60 25 -53 99 9 100 363 1530 448 1811 44 146 82 273 85 283 5 15 -2 17 -53 17 -56 -1 -64 -5 -247 -115z m-479 -115 c64 -32 120 -87 153 -150 l18 -35 -53 -185 c-228 -793 -577 -1404 -891 -1561 -167 -83 -289 -25 -330 157 -13 63 -16 109 -11 248 13 405 143 822 358 1146 91 139 250 293 357 349 152 78 282 88 399 31z" />
                      <path d="M9920 2839 c-91 -14 -261 -72 -350 -120 -448 -242 -795 -783 -860 -1341 -18 -149 -8 -368 20 -478 87 -336 308 -532 642 -570 102 -12 239 -1 343 26 82 22 267 113 340 168 98 74 241 223 337 350 l90 120 -33 28 c-63 53 -61 53 -117 -15 -208 -257 -446 -388 -677 -374 -285 17 -445 252 -445 650 0 51 3 108 6 128 l6 35 87 18 c273 55 599 148 771 220 238 100 421 247 504 405 51 97 69 183 64 312 -3 98 -6 111 -41 181 -59 121 -167 203 -322 243 -74 20 -277 27 -365 14z m143 -160 c53 -14 112 -71 134 -127 24 -61 23 -221 0 -312 -64 -244 -245 -420 -567 -551 -108 -44 -350 -119 -383 -119 -13 0 -11 17 10 118 70 336 225 655 403 832 138 137 280 193 403 159z" />
                      <path d="M13150 2753 c-212 -53 -387 -97 -388 -99 -2 -1 -6 -20 -9 -41 l-4 -38 134 -75 135 -75 -253 -1015 c-140 -558 -254 -1021 -255 -1027 0 -10 57 -13 254 -13 l254 0 90 367 c50 203 106 415 125 473 91 277 237 555 421 800 95 127 286 323 386 394 137 99 253 132 296 85 37 -41 25 -100 -170 -814 -101 -374 -193 -718 -203 -765 -12 -59 -18 -126 -18 -220 1 -117 4 -141 22 -182 51 -110 140 -168 274 -176 230 -14 392 116 722 575 l37 51 -39 31 c-21 17 -43 31 -47 31 -5 -1 -26 -22 -46 -48 -62 -79 -196 -211 -251 -247 -65 -43 -126 -55 -152 -29 -14 15 -16 28 -11 73 3 31 94 387 201 791 108 404 203 780 211 835 46 299 -58 455 -304 455 -123 0 -221 -30 -355 -108 -251 -146 -553 -475 -782 -852 -41 -68 -75 -121 -75 -117 0 8 276 1038 285 1065 10 28 -116 6 -485 -85z" />
                      <path d="M18111 2751 c-321 -81 -386 -100 -392 -116 -20 -51 -14 -58 124 -135 l133 -74 -182 -731 c-101 -401 -191 -777 -200 -835 -22 -139 -16 -286 15 -355 51 -116 149 -175 292 -175 214 0 388 138 661 523 l71 101 -38 33 c-21 18 -41 33 -45 33 -3 0 -32 -32 -65 -71 -83 -100 -216 -223 -268 -248 -89 -43 -147 -14 -133 66 6 32 128 527 471 1911 l43 172 -52 -1 c-29 0 -218 -43 -435 -98z" />
                      <path d="M21740 2753 c-212 -53 -387 -97 -388 -99 -2 -1 -6 -20 -9 -41 l-5 -38 134 -74 134 -74 -253 -1016 c-139 -559 -253 -1022 -253 -1028 0 -10 57 -13 253 -13 l252 0 89 358 c125 505 173 647 307 902 238 454 632 859 854 878 49 4 54 2 70 -22 33 -50 16 -128 -174 -825 -100 -365 -190 -714 -202 -774 -27 -143 -24 -308 7 -378 51 -112 140 -170 271 -177 210 -11 375 104 620 432 149 200 145 190 102 226 -19 16 -39 29 -44 30 -6 0 -29 -24 -53 -53 -79 -100 -226 -235 -283 -262 -101 -46 -136 -27 -126 69 3 28 93 382 200 786 108 404 201 764 208 800 17 94 15 235 -5 303 -23 80 -90 149 -165 171 -68 20 -195 21 -271 1 -278 -72 -616 -373 -909 -810 -48 -72 -105 -161 -125 -198 -21 -37 -39 -67 -41 -67 -2 0 2 21 10 48 8 26 71 259 140 517 69 259 130 482 135 498 l9 27 -52 0 c-31 -1 -207 -39 -437 -97z" />
                      <path d="M229 2337 c-158 -196 -181 -233 -205 -330 -30 -113 -2 -259 68 -363 12 -19 286 -270 608 -557 775 -691 797 -712 822 -761 29 -57 36 -165 14 -240 -18 -61 -15 -90 8 -84 22 5 294 346 326 408 74 146 61 337 -32 467 -18 25 -341 321 -717 657 -567 506 -689 619 -710 660 -33 64 -39 146 -17 236 17 70 16 90 -7 90 -7 0 -78 -82 -158 -183z" />
                    </g>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.dnaindia.com/health/report-empathy-can-light-the-way-for-mental-health-patients-says-bani-singh-of-nowme-2946955"
                  className="flex items-center justify-center mx-2 md:mx-0 transition hover:text-gray-500 text-gray-400 rounded-lg p-4}"
                  aria-label="“Now&Me provides a safe space for people to talk about their mental health, feelings, and thoughts, and express their emotions.”"
                >
                  <svg
                    id="Layer_1"
                    x={0}
                    y={0}
                    viewBox="0 0 463.02 211.22"
                    xmlSpace="preserve"
                    width="70.02"
                    height="60.22"
                  >
                    <style
                      type="text/css"
                      id="style2"
                      dangerouslySetInnerHTML={{
                        __html: ".st0{fill:currentColor}",
                      }}
                    />
                    <g id="g14" transform="translate(-21.98 -42.76)">
                      <path
                        className="st0"
                        d="M22 42.76c1.14.06 2.28.17 3.41.17 25.55.01 51.09-.05 76.64.03 16.36.05 30.69 5.46 42.69 16.72 12.52 11.75 19.79 26.08 19.95 43.33.27 30.35.45 60.71-.06 91.05-.47 28.01-22.19 53.28-49.85 58.01-10.31 1.76-21 1.33-31.76 1.91V206.9h11.35c11.62-.01 18.73-7.11 18.74-18.77.01-26.57.02-53.14 0-79.7-.01-11.46-7.16-18.53-18.69-18.54-6.08-.01-12.16.11-18.23-.05-2.36-.06-2.93.68-2.93 2.99.06 52.17.05 104.34.05 156.51v4.08H21.98C22 183.18 22 112.97 22 42.76Z"
                        id="path6"
                      />
                      <path
                        className="st0"
                        d="M375.25 42.89h52.2c2.2 0 4.43.22 6.6-.06 2.76-.36 3.72.68 4.32 3.34 15.38 68.43 30.86 136.84 46.31 205.26.13.58.2 1.16.32 1.9h-50.64c-1.01-4.66-2.04-9.35-3.04-14.04-1.33-6.28-2.69-12.55-3.89-18.85-.37-1.96-1.25-2.49-3.19-2.48-10.04.09-20.09.04-30.13.04h-3.18c2.4-14.47 4.74-28.65 7.13-43.07h23.01c-5.39-27.4-10.7-54.44-16.02-81.49-.27 0-.54-.01-.81-.01-9.79 53.24-19.57 106.48-29.38 159.85h-48.1c16.18-70.16 32.31-140.19 48.49-210.39z"
                        id="path8"
                      />
                      <path
                        className="st0"
                        d="M180.32 42.89h2.96c12.51 0 25.02.04 37.52-.05 1.86-.01 2.77.58 3.59 2.22 22.72 45.52 45.5 91.01 68.26 136.51 8.85 17.68 17.72 35.34 26.48 53.06.85 1.72 1.23 3.81 1.32 5.75.19 4.2.06 8.42.06 12.9-1.1.06-2.03.16-2.95.16-11.36.01-22.73-.04-34.09.05-1.94.02-2.92-.57-3.81-2.32-16.54-32.71-33.15-65.38-49.75-98.05-.39-.77-.8-1.52-1.78-2.21V253.3h-47.82c.01-70.01.01-139.98.01-210.41z"
                        id="path10"
                      />
                      <path
                        className="st0"
                        d="M272.24 42.98h48.08v172.85l-2.44-4.88c-14.82-29.62-29.65-59.22-44.41-88.87-.75-1.5-1.17-3.32-1.18-5-.07-23.56-.05-47.13-.05-70.69v-3.41z"
                        id="path12"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.outlookindia.com/website/story/outlook-spotlight-this-startup-is-asking-people-to-share-their-biggest-insecurities/408391"
                  className="flex items-center justify-center mx-2 md:mx-0 transition hover:text-gray-500 text-gray-400 rounded-lg p-4}"
                  aria-label="“Now&Me provides a safe space for people to talk about their mental health, feelings, and thoughts, and express their emotions.”"
                >
                  <svg
                    version={1.0}
                    xmlns="http://www.w3.org/2000/svg"
                    width={200}
                    height={60}
                    viewBox="0 0 1091.000000 200.000000"
                  >
                    <g
                      transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M895 1899 c-328 -35 -602 -221 -726 -494 -60 -134 -74 -211 -73 -415 0 -216 15 -286 88 -435 154 -312 498 -492 901 -472 330 17 588 149 744 382 145 216 187 531 110 814 -94 347 -389 579 -789 621 -107 11 -142 11 -255 -1z m228 -418 c49 -30 84 -105 98 -210 14 -103 6 -590 -10 -642 -16 -51 -51 -100 -91 -127 -29 -20 -45 -23 -95 -20 -79 5 -119 33 -154 107 l-26 56 -3 310 c-4 337 2 400 45 473 46 80 154 104 236 53z" />
                      <path d="M5080 990 l0 -870 300 0 300 0 0 870 0 870 -300 0 -300 0 0 -870z" />
                      <path d="M9200 990 l0 -870 285 0 285 0 2 269 3 270 179 -270 179 -269 313 0 c173 0 314 2 314 5 0 2 -108 156 -241 341 -132 186 -243 343 -245 349 -3 6 97 138 221 293 124 155 225 284 225 287 0 3 -138 5 -307 5 l-308 -1 -165 -246 -165 -247 -3 477 -2 477 -285 0 -285 0 0 -870z" />
                      <path d="M4074 1585 l-68 -184 -111 -3 -110 -3 -3 -162 -2 -162 102 -3 103 -3 5 -325 c5 -311 6 -328 28 -383 46 -113 160 -207 293 -242 132 -36 391 -7 519 57 l65 33 3 152 3 153 -26 -10 c-15 -6 -55 -10 -89 -10 -84 0 -141 30 -173 90 -22 41 -23 53 -23 267 l0 223 155 0 155 0 0 165 0 165 -155 0 -155 0 0 185 0 185 -224 0 -224 0 -68 -185z" />
                      <path d="M6385 1403 c-232 -49 -404 -174 -496 -358 -90 -181 -90 -399 -2 -585 72 -152 239 -278 438 -332 112 -30 402 -33 515 -4 268 69 432 212 501 436 18 59 23 99 24 185 0 131 -14 193 -67 303 -88 180 -268 309 -500 356 -98 20 -317 20 -413 -1z m274 -308 c16 -8 37 -31 47 -52 17 -34 19 -63 19 -288 0 -222 -2 -254 -18 -283 -57 -104 -205 -87 -237 27 -5 20 -10 140 -10 266 0 203 3 235 19 271 10 23 29 49 42 58 29 20 101 21 138 1z" />
                      <path d="M8080 1405 c-165 -34 -278 -92 -386 -200 -127 -125 -184 -265 -184 -450 0 -311 166 -524 485 -621 85 -26 101 -28 280 -28 166 0 200 3 270 22 262 73 429 228 490 457 21 79 21 250 0 330 -31 119 -79 202 -168 289 -112 111 -240 175 -411 205 -81 15 -296 12 -376 -4z m279 -321 c48 -40 53 -73 49 -349 -3 -242 -4 -251 -26 -282 -52 -73 -165 -66 -209 12 -22 39 -23 49 -23 288 0 270 4 295 55 335 41 32 114 30 154 -4z" />
                      <path d="M2127 1393 c-11 -11 -8 -892 4 -963 23 -141 116 -265 234 -309 69 -26 197 -28 276 -5 138 41 272 149 345 279 l39 70 3 -173 2 -172 300 0 300 0 0 640 0 640 -300 0 -300 0 0 -348 c0 -319 -2 -354 -19 -405 -40 -114 -104 -177 -183 -177 -43 0 -76 33 -89 87 -5 21 -9 219 -9 441 l0 402 -298 0 c-164 0 -302 -3 -305 -7z" />
                    </g>
                  </svg>
                </a>
              </div>
            </section>
          </div>
          <section className="flex relative flex-col md:flex-row justify-between items-center md:my-24 w-full mx-auto max-w-7xl px-5">
            <div>
              <p className="font-bold text-2xl md:text-4xl text-center md:text-left max-w-[600px] leading-[2.5rem] md:leading-[3.5rem]">
                <span className="leading-0">
                  Make Now&amp;Me Community Your Safe Haven
                </span>
              </p>
              <p className="font-regular text-base text-gray-700 max-w-[450px] mt-4 text-center md:text-left leading-[1.5rem]">
                Become part of a safe and supportive online community and share
                your feelings and thoughts with like-minded people without any
                fear or judgement, anonymously.
              </p>
              <div className="block md:hidden">
                <div className="flex justify-center">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27365%27%20height=%27350%27/%3e"
                      />
                    </span>
                    <img
                      alt="hero_cta_image"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                    <noscript>
                      &lt;img alt="hero_cta_image"
                      srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684330202%2Flanding%2Fdon_t_feellike_webp_y5zsyx.webp&amp;amp;w=384&amp;amp;q=75
                      1x,
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684330202%2Flanding%2Fdon_t_feellike_webp_y5zsyx.webp&amp;amp;w=750&amp;amp;q=75
                      2x"
                      src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684330202%2Flanding%2Fdon_t_feellike_webp_y5zsyx.webp&amp;amp;w=750&amp;amp;q=75"
                      decoding="async" data-nimg="intrinsic"
                      style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                      loading="lazy"/&gt;
                    </noscript>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex flex-col">
                    <div className="flex items-center my-2">
                      <svg
                        width={40}
                        height={41}
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.837 1.068a1.15 1.15 0 0 0-1.674 0l-2.07 2.195a.85.85 0 0 1-.966.192L13.375 2.22a1.15 1.15 0 0 0-1.546.64l-1.072 2.82a.85.85 0 0 1-.82.547L6.922 6.14A1.15 1.15 0 0 0 5.74 7.322l.088 3.015a.85.85 0 0 1-.547.82l-2.82 1.072a1.15 1.15 0 0 0-.64 1.546l1.235 2.752a.85.85 0 0 1-.192.966l-2.195 2.07a1.15 1.15 0 0 0 0 1.674l2.195 2.07a.85.85 0 0 1 .192.966L1.82 27.025a1.15 1.15 0 0 0 .64 1.546l2.82 1.072a.85.85 0 0 1 .547.82l-.088 3.015a1.15 1.15 0 0 0 1.183 1.183l3.016-.088a.85.85 0 0 1 .819.547l1.072 2.82a1.15 1.15 0 0 0 1.546.64l2.752-1.236a.85.85 0 0 1 .967.193l2.07 2.194a1.15 1.15 0 0 0 1.673 0l2.07-2.194a.85.85 0 0 1 .966-.193l2.752 1.236a1.15 1.15 0 0 0 1.546-.64l1.072-2.82a.85.85 0 0 1 .82-.547l3.015.088a1.15 1.15 0 0 0 1.183-1.183l-.088-3.016a.85.85 0 0 1 .547-.819l2.82-1.072a1.15 1.15 0 0 0 .64-1.546l-1.235-2.752a.85.85 0 0 1 .192-.967l2.194-2.07a1.15 1.15 0 0 0 0-1.673l-2.194-2.07a.85.85 0 0 1-.192-.966l1.235-2.752a1.15 1.15 0 0 0-.64-1.546l-2.82-1.072a.85.85 0 0 1-.547-.82l.088-3.015a1.15 1.15 0 0 0-1.183-1.183l-3.016.088a.85.85 0 0 1-.819-.547l-1.072-2.82a1.15 1.15 0 0 0-1.546-.64l-2.752 1.235a.85.85 0 0 1-.967-.192l-2.07-2.195Z"
                          fill="#FFEDE8"
                          stroke="#171717"
                          strokeWidth="0.3"
                        />
                        <circle
                          cx="20.001"
                          cy="20.4"
                          r="12.727"
                          fill="#FFC4AE"
                        />
                        <path
                          d="M10.055 23.4v-5.602h4v1.121h-2.742v1.192h2.496v1.12h-2.496V23.4h-1.258Zm8.254-2.129 1.351 2.05v.079h-1.473l-1.207-1.977h-.785V23.4h-1.258v-5.602H17.5c.57 0 1.034.175 1.39.524.347.346.52.767.52 1.262 0 .393-.096.74-.289 1.039a1.7 1.7 0 0 1-.812.648Zm-2.114-2.352v1.383h1.239c.231 0 .404-.069.52-.207a.764.764 0 0 0 .167-.504.73.73 0 0 0-.168-.48c-.12-.128-.293-.192-.52-.192h-1.238Zm4.102 4.48v-5.6h4v1.12h-2.742v1.032h2.496v1.12h-2.496v1.216h2.742V23.4h-4Zm4.883 0v-5.6h4v1.12h-2.742v1.032h2.496v1.12h-2.497v1.216h2.743V23.4h-4Z"
                          fill="#FF6D42"
                        />
                      </svg>
                      <p className="ml-3 font-medium">Free of cost</p>
                    </div>
                    <div className="flex items-center my-2">
                      <svg
                        width={40}
                        height={41}
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.15 20.25V4.55h32.7v15.7H4.15Z"
                          fill="#FFEDE8"
                          stroke="#000"
                          strokeWidth="0.3"
                        />
                        <circle cx="11.5" cy="12.9" r="2.5" fill="#FFC4AE" />
                        <circle cx="20.5" cy="12.9" r="2.5" fill="#FFC4AE" />
                        <circle cx="29.5" cy="12.9" r="2.5" fill="#FFC4AE" />
                        <path
                          d="M20.5 33.105c-4.495 0-9.016-2.697-13.307-8.153 4.635-5.466 8.9-8.162 13.177-8.162 4.28 0 8.63 2.697 13.435 8.163-4.29 5.455-8.81 8.152-13.305 8.152Z"
                          fill="#FFC4AE"
                          stroke="#000"
                          strokeWidth="0.3"
                        />
                        <circle
                          cx="20.5"
                          cy="25.208"
                          r="6.081"
                          fill="#FFEDE8"
                          stroke="#000"
                          strokeWidth="0.3"
                        />
                        <circle
                          cx="20.496"
                          cy="25.207"
                          r="2.769"
                          fill="#FFC4AE"
                        />
                        <path
                          d="m8.04 12.4 25.614 23.884"
                          stroke="#FF6D42"
                          strokeWidth={2}
                        />
                      </svg>
                      <p className="ml-3 font-medium">
                        Express your thoughts anonymously
                      </p>
                    </div>
                    <div className="flex items-center my-2">
                      <svg
                        width={40}
                        height={42}
                        viewBox="0 0 40 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M38.115 34.26c.994 1.478 1.465 3.353 1.493 4.989H20.173c.466-3.185 1.536-5.075 2.813-6.172 1.3-1.117 2.838-1.432 4.234-1.431h6.08c2.221 0 3.793 1.096 4.815 2.614Z"
                          fill="#FFC4AE"
                          stroke="#000"
                          strokeWidth="0.3"
                        />
                        <path
                          d="M24.587 25.898h.15v-2.443c0-1.227.633-2.14 1.602-2.753.972-.615 2.28-.92 3.596-.912 1.317.008 2.625.33 3.598.95.97.616 1.603 1.523 1.603 2.715v2.443h.15c.228 0 .4.111.52.291.123.185.189.441.189.705 0 .265-.066.52-.19.705a.603.603 0 0 1-.52.292h-.15v.15c0 .498-.19 1.05-.52 1.602a7.079 7.079 0 0 1-1.318 1.573c-1.065.964-2.367 1.642-3.361 1.642-1.01 0-2.315-.462-3.368-1.304-1.05-.84-1.831-2.042-1.831-3.513v-.15h-.15a.603.603 0 0 1-.52-.292 1.296 1.296 0 0 1-.19-.705c0-.264.066-.52.19-.704a.603.603 0 0 1 .52-.292Z"
                          fill="#FFEDE8"
                          stroke="#000"
                          strokeWidth="0.3"
                        />
                        <path
                          d="M8.964 29.642h7.55c2.771 0 4.733 1.383 6.008 3.295 1.248 1.871 1.834 4.248 1.861 6.313H.173c.576-4.026 1.911-6.416 3.512-7.805 1.623-1.407 3.541-1.803 5.28-1.803Z"
                          fill="#FFC4AE"
                          stroke="#000"
                          strokeWidth="0.3"
                        />
                        <path
                          d="M5.664 22.092h.15V19.11c0-1.53.79-2.669 1.994-3.43 1.208-.763 2.83-1.141 4.46-1.13 1.63.01 3.252.407 4.462 1.176 1.205.767 1.994 1.896 1.994 3.384v2.98h.15c.296 0 .518.145.671.376.157.236.24.559.24.89 0 .332-.083.655-.24.89-.153.231-.375.376-.67.376h-.15v.15c0 .624-.239 1.31-.647 1.996-.408.684-.981 1.357-1.636 1.95-1.317 1.193-2.933 2.037-4.174 2.037-1.256 0-2.875-.575-4.18-1.618-1.302-1.042-2.274-2.536-2.274-4.365v-.15h-.15c-.296 0-.518-.145-.672-.376-.157-.235-.24-.558-.24-.89 0-.331.083-.654.24-.89.154-.23.376-.375.672-.375ZM16 13V4.4h16V13h-3.892l-3.892 3.4-4.108-3.4H16Z"
                          fill="#FFEDE8"
                          stroke="#000"
                          strokeWidth="0.3"
                        />
                        <path
                          d="m18 6.9 4.118 3.5L31.5.9"
                          stroke="#FF6D42"
                          strokeWidth="2.5"
                        />
                      </svg>
                      <p className="ml-3 font-medium">
                        Connect with like-minded people
                      </p>
                    </div>
                    <div className="flex items-center my-2">
                      <svg
                        width={40}
                        height={41}
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.15 32.75v-7.2h27.7v7.2H4.15Z"
                          fill="#FFEDE8"
                          stroke="#000"
                          strokeWidth="0.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M7 25.4v-4h23v4H7Z" fill="#FFC4AE" />
                        <path
                          d="M4.15 21.75v-7.2h27.7v7.2H4.15Z"
                          fill="#FFEDE8"
                          stroke="#000"
                          strokeWidth="0.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M7 14.4v-4h23v4H7Z" fill="#FFC4AE" />
                        <path
                          d="M4.15 10.75v-7.2h27.7v7.2H4.15Z"
                          fill="#FFEDE8"
                          stroke="#000"
                          strokeWidth="0.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx={27}
                          cy="29.4"
                          r="7.85"
                          fill="#FFEDE8"
                          stroke="#000"
                          strokeWidth="0.3"
                        />
                        <path
                          d="m24 27.4 3.5 3.5 9.5-9.5"
                          stroke="#FF6D42"
                          strokeWidth="2.5"
                        />
                      </svg>
                      <p className="ml-3 font-medium">
                        Kept safe by AI &amp; humans 24x7
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-8 text-[#17171733]" />
                <div className="">
                  <div>
                    <p className="font-medium text-lg text-center">
                      Loved &amp; Supported by
                    </p>
                    <div className="flex justify-center items-center mt-6">
                      <div className="flex flex-col items-center">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27114%27%20height=%2742%27/%3e"
                            />
                          </span>
                          <img
                            alt="2 Lakh+ people"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                          <noscript>
                            &lt;img alt="2 Lakh+ people"
                            srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F40Lakh_webp_krjptm.webp&amp;amp;w=128&amp;amp;q=75
                            1x,
                            /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F40Lakh_webp_krjptm.webp&amp;amp;w=256&amp;amp;q=75
                            2x"
                            src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F40Lakh_webp_krjptm.webp&amp;amp;w=256&amp;amp;q=75"
                            decoding="async" data-nimg="intrinsic"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                            loading="lazy"/&gt;
                          </noscript>
                        </span>
                        <p className="font-semibold text-xl">
                          <span className="text-primary">2 Lakh+</span> people
                        </p>
                      </div>
                      <div className="border-l-[1px] border-[#17171733] mx-5 h-16" />
                      <div className="flex flex-col items-center">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27138%27%20height=%2742%27/%3e"
                            />
                          </span>
                          <img
                            alt="180+ countries"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                          <noscript>
                            &lt;img alt="180+ countries"
                            srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F180countries_webp_chbn9t.webp&amp;amp;w=256&amp;amp;q=75
                            1x,
                            /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F180countries_webp_chbn9t.webp&amp;amp;w=384&amp;amp;q=75
                            2x"
                            src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F180countries_webp_chbn9t.webp&amp;amp;w=384&amp;amp;q=75"
                            decoding="async" data-nimg="intrinsic"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                            loading="lazy"/&gt;
                          </noscript>
                        </span>
                        <p className="font-semibold text-xl">
                          <span className="text-primary">180+</span> countries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 hidden md:block">
                <div className="flex flex-col">
                  <div className="flex items-center my-2">
                    <svg
                      width={40}
                      height={41}
                      viewBox="0 0 40 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.837 1.068a1.15 1.15 0 0 0-1.674 0l-2.07 2.195a.85.85 0 0 1-.966.192L13.375 2.22a1.15 1.15 0 0 0-1.546.64l-1.072 2.82a.85.85 0 0 1-.82.547L6.922 6.14A1.15 1.15 0 0 0 5.74 7.322l.088 3.015a.85.85 0 0 1-.547.82l-2.82 1.072a1.15 1.15 0 0 0-.64 1.546l1.235 2.752a.85.85 0 0 1-.192.966l-2.195 2.07a1.15 1.15 0 0 0 0 1.674l2.195 2.07a.85.85 0 0 1 .192.966L1.82 27.025a1.15 1.15 0 0 0 .64 1.546l2.82 1.072a.85.85 0 0 1 .547.82l-.088 3.015a1.15 1.15 0 0 0 1.183 1.183l3.016-.088a.85.85 0 0 1 .819.547l1.072 2.82a1.15 1.15 0 0 0 1.546.64l2.752-1.236a.85.85 0 0 1 .967.193l2.07 2.194a1.15 1.15 0 0 0 1.673 0l2.07-2.194a.85.85 0 0 1 .966-.193l2.752 1.236a1.15 1.15 0 0 0 1.546-.64l1.072-2.82a.85.85 0 0 1 .82-.547l3.015.088a1.15 1.15 0 0 0 1.183-1.183l-.088-3.016a.85.85 0 0 1 .547-.819l2.82-1.072a1.15 1.15 0 0 0 .64-1.546l-1.235-2.752a.85.85 0 0 1 .192-.967l2.194-2.07a1.15 1.15 0 0 0 0-1.673l-2.194-2.07a.85.85 0 0 1-.192-.966l1.235-2.752a1.15 1.15 0 0 0-.64-1.546l-2.82-1.072a.85.85 0 0 1-.547-.82l.088-3.015a1.15 1.15 0 0 0-1.183-1.183l-3.016.088a.85.85 0 0 1-.819-.547l-1.072-2.82a1.15 1.15 0 0 0-1.546-.64l-2.752 1.235a.85.85 0 0 1-.967-.192l-2.07-2.195Z"
                        fill="#FFEDE8"
                        stroke="#171717"
                        strokeWidth="0.3"
                      />
                      <circle cx="20.001" cy="20.4" r="12.727" fill="#FFC4AE" />
                      <path
                        d="M10.055 23.4v-5.602h4v1.121h-2.742v1.192h2.496v1.12h-2.496V23.4h-1.258Zm8.254-2.129 1.351 2.05v.079h-1.473l-1.207-1.977h-.785V23.4h-1.258v-5.602H17.5c.57 0 1.034.175 1.39.524.347.346.52.767.52 1.262 0 .393-.096.74-.289 1.039a1.7 1.7 0 0 1-.812.648Zm-2.114-2.352v1.383h1.239c.231 0 .404-.069.52-.207a.764.764 0 0 0 .167-.504.73.73 0 0 0-.168-.48c-.12-.128-.293-.192-.52-.192h-1.238Zm4.102 4.48v-5.6h4v1.12h-2.742v1.032h2.496v1.12h-2.496v1.216h2.742V23.4h-4Zm4.883 0v-5.6h4v1.12h-2.742v1.032h2.496v1.12h-2.497v1.216h2.743V23.4h-4Z"
                        fill="#FF6D42"
                      />
                    </svg>
                    <p className="ml-3 font-medium">Free of cost</p>
                  </div>
                  <div className="flex items-center my-2">
                    <svg
                      width={40}
                      height={41}
                      viewBox="0 0 40 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.15 20.25V4.55h32.7v15.7H4.15Z"
                        fill="#FFEDE8"
                        stroke="#000"
                        strokeWidth="0.3"
                      />
                      <circle cx="11.5" cy="12.9" r="2.5" fill="#FFC4AE" />
                      <circle cx="20.5" cy="12.9" r="2.5" fill="#FFC4AE" />
                      <circle cx="29.5" cy="12.9" r="2.5" fill="#FFC4AE" />
                      <path
                        d="M20.5 33.105c-4.495 0-9.016-2.697-13.307-8.153 4.635-5.466 8.9-8.162 13.177-8.162 4.28 0 8.63 2.697 13.435 8.163-4.29 5.455-8.81 8.152-13.305 8.152Z"
                        fill="#FFC4AE"
                        stroke="#000"
                        strokeWidth="0.3"
                      />
                      <circle
                        cx="20.5"
                        cy="25.208"
                        r="6.081"
                        fill="#FFEDE8"
                        stroke="#000"
                        strokeWidth="0.3"
                      />
                      <circle
                        cx="20.496"
                        cy="25.207"
                        r="2.769"
                        fill="#FFC4AE"
                      />
                      <path
                        d="m8.04 12.4 25.614 23.884"
                        stroke="#FF6D42"
                        strokeWidth={2}
                      />
                    </svg>
                    <p className="ml-3 font-medium">
                      Express your thoughts anonymously
                    </p>
                  </div>
                  <div className="flex items-center my-2">
                    <svg
                      width={40}
                      height={42}
                      viewBox="0 0 40 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M38.115 34.26c.994 1.478 1.465 3.353 1.493 4.989H20.173c.466-3.185 1.536-5.075 2.813-6.172 1.3-1.117 2.838-1.432 4.234-1.431h6.08c2.221 0 3.793 1.096 4.815 2.614Z"
                        fill="#FFC4AE"
                        stroke="#000"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M24.587 25.898h.15v-2.443c0-1.227.633-2.14 1.602-2.753.972-.615 2.28-.92 3.596-.912 1.317.008 2.625.33 3.598.95.97.616 1.603 1.523 1.603 2.715v2.443h.15c.228 0 .4.111.52.291.123.185.189.441.189.705 0 .265-.066.52-.19.705a.603.603 0 0 1-.52.292h-.15v.15c0 .498-.19 1.05-.52 1.602a7.079 7.079 0 0 1-1.318 1.573c-1.065.964-2.367 1.642-3.361 1.642-1.01 0-2.315-.462-3.368-1.304-1.05-.84-1.831-2.042-1.831-3.513v-.15h-.15a.603.603 0 0 1-.52-.292 1.296 1.296 0 0 1-.19-.705c0-.264.066-.52.19-.704a.603.603 0 0 1 .52-.292Z"
                        fill="#FFEDE8"
                        stroke="#000"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M8.964 29.642h7.55c2.771 0 4.733 1.383 6.008 3.295 1.248 1.871 1.834 4.248 1.861 6.313H.173c.576-4.026 1.911-6.416 3.512-7.805 1.623-1.407 3.541-1.803 5.28-1.803Z"
                        fill="#FFC4AE"
                        stroke="#000"
                        strokeWidth="0.3"
                      />
                      <path
                        d="M5.664 22.092h.15V19.11c0-1.53.79-2.669 1.994-3.43 1.208-.763 2.83-1.141 4.46-1.13 1.63.01 3.252.407 4.462 1.176 1.205.767 1.994 1.896 1.994 3.384v2.98h.15c.296 0 .518.145.671.376.157.236.24.559.24.89 0 .332-.083.655-.24.89-.153.231-.375.376-.67.376h-.15v.15c0 .624-.239 1.31-.647 1.996-.408.684-.981 1.357-1.636 1.95-1.317 1.193-2.933 2.037-4.174 2.037-1.256 0-2.875-.575-4.18-1.618-1.302-1.042-2.274-2.536-2.274-4.365v-.15h-.15c-.296 0-.518-.145-.672-.376-.157-.235-.24-.558-.24-.89 0-.331.083-.654.24-.89.154-.23.376-.375.672-.375ZM16 13V4.4h16V13h-3.892l-3.892 3.4-4.108-3.4H16Z"
                        fill="#FFEDE8"
                        stroke="#000"
                        strokeWidth="0.3"
                      />
                      <path
                        d="m18 6.9 4.118 3.5L31.5.9"
                        stroke="#FF6D42"
                        strokeWidth="2.5"
                      />
                    </svg>
                    <p className="ml-3 font-medium">
                      Connect with like-minded people
                    </p>
                  </div>
                  <div className="flex items-center my-2">
                    <svg
                      width={40}
                      height={41}
                      viewBox="0 0 40 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.15 32.75v-7.2h27.7v7.2H4.15Z"
                        fill="#FFEDE8"
                        stroke="#000"
                        strokeWidth="0.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M7 25.4v-4h23v4H7Z" fill="#FFC4AE" />
                      <path
                        d="M4.15 21.75v-7.2h27.7v7.2H4.15Z"
                        fill="#FFEDE8"
                        stroke="#000"
                        strokeWidth="0.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M7 14.4v-4h23v4H7Z" fill="#FFC4AE" />
                      <path
                        d="M4.15 10.75v-7.2h27.7v7.2H4.15Z"
                        fill="#FFEDE8"
                        stroke="#000"
                        strokeWidth="0.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx={27}
                        cy="29.4"
                        r="7.85"
                        fill="#FFEDE8"
                        stroke="#000"
                        strokeWidth="0.3"
                      />
                      <path
                        d="m24 27.4 3.5 3.5 9.5-9.5"
                        stroke="#FF6D42"
                        strokeWidth="2.5"
                      />
                    </svg>
                    <p className="ml-3 font-medium">
                      Kept safe by AI &amp; humans 24x7
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 mb-24 md:mb-0">
                <button className="px-5 bg-x-orange-500 text-white text-sm font-medium rounded-xl focus:outline-none focus:ring-3 focus:ring-x-orange-100 dark:focus:ring-0 relative overflow-hidden px-5 min-w-[300px] bg-x-orange-500 text-white text-lg font-medium rounded-lg focus:outline-none focus:ring-3 focus:ring-x-orange-100 dark:focus:ring-0 relative overflow-hidden disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed w-full md:w-auto py-3 transform transition duration-200 hover:scale-[1.04] py-3">
                  Join Community
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27365%27%20height=%27350%27/%3e"
                  />
                </span>
                <img
                  alt="hero_cta_image"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
                <noscript>
                  &lt;img alt="hero_cta_image"
                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684330202%2Flanding%2Fdon_t_feellike_webp_y5zsyx.webp&amp;amp;w=384&amp;amp;q=75
                  1x,
                  /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684330202%2Flanding%2Fdon_t_feellike_webp_y5zsyx.webp&amp;amp;w=750&amp;amp;q=75
                  2x"
                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684330202%2Flanding%2Fdon_t_feellike_webp_y5zsyx.webp&amp;amp;w=750&amp;amp;q=75"
                  decoding="async" data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  loading="lazy"/&gt;
                </noscript>
              </span>
              <div className="mt-10">
                <div>
                  <p className="font-medium text-lg text-center">
                    Loved &amp; Supported by
                  </p>
                  <div className="flex justify-center items-center mt-6">
                    <div className="flex flex-col items-center">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            style={{
                              display: "block",
                              maxWidth: "100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                            }}
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27114%27%20height=%2742%27/%3e"
                          />
                        </span>
                        <img
                          alt="2 Lakh+ people"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                        <noscript>
                          &lt;img alt="2 Lakh+ people"
                          srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F40Lakh_webp_krjptm.webp&amp;amp;w=128&amp;amp;q=75
                          1x,
                          /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F40Lakh_webp_krjptm.webp&amp;amp;w=256&amp;amp;q=75
                          2x"
                          src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F40Lakh_webp_krjptm.webp&amp;amp;w=256&amp;amp;q=75"
                          decoding="async" data-nimg="intrinsic"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                          loading="lazy"/&gt;
                        </noscript>
                      </span>
                      <p className="font-semibold text-xl">
                        <span className="text-primary">2 Lakh+</span> people
                      </p>
                    </div>
                    <div className="border-l-[1px] border-[#17171733] mx-5 h-16" />
                    <div className="flex flex-col items-center">
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            style={{
                              display: "block",
                              maxWidth: "100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                            }}
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27138%27%20height=%2742%27/%3e"
                          />
                        </span>
                        <img
                          alt="180+ countries"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                        <noscript>
                          &lt;img alt="180+ countries"
                          srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F180countries_webp_chbn9t.webp&amp;amp;w=256&amp;amp;q=75
                          1x,
                          /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F180countries_webp_chbn9t.webp&amp;amp;w=384&amp;amp;q=75
                          2x"
                          src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1684329299%2Flanding%2F180countries_webp_chbn9t.webp&amp;amp;w=384&amp;amp;q=75"
                          decoding="async" data-nimg="intrinsic"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                          loading="lazy"/&gt;
                        </noscript>
                      </span>
                      <p className="font-semibold text-xl">
                        <span className="text-primary">180+</span> countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col md:mt-10 mb-10 md:mb-0">
            <p className="font-bold text-2xl md:text-4xl text-center">
              Our Latest Articles
            </p>
            <div className="flex justify-center">
              <div className="flex overflow-x-scroll mt-10 gap-x-5 md:gap-x-10 px-5 hide-scroll-bar ">
                <div className="w-[350px] ">
                  <a href="/blog/how-to-not-take-things-personally">
                    <img
                      src="https://res.cloudinary.com/nowandme/image/upload/blog/o92nxttm8mrtrlxub5xh"
                      className="w-[350px] h-52 rounded-xl object-cover"
                      decoding="async"
                      alt="How to Not Take Things Personally: 11 Tips From a Therapist"
                      loading="lazy"
                    />
                  </a>
                  <div className="flex items-center mt-4 sm:mt-6 flex-wrap">
                    <span className="bg-[#F3E7FF] text-[#8C1AF5] font-medium mr-3 my-1 rounded-3xl py-1 px-3">
                      Life
                    </span>
                  </div>
                  <div className="w-[350px]">
                    <a href="/blog/how-to-not-take-things-personally">
                      <p className="text-xl sm:text-[22px] leading-6 sm:leading-9 mt-4 font-medium">
                        How to Not Take Things Personally: 11 Tips From a
                        Therapist
                      </p>
                      <p className="text-base leading-6 sm:leading-7 mt-3 mb-8">
                        Learn how to not take things personally with these 11
                        expert tips from therapists. Improve your ment...
                      </p>
                    </a>
                  </div>
                </div>
                <div className="w-[350px] ">
                  <a href="/blog/manipulation-tactics">
                    <img
                      src="https://res.cloudinary.com/nowandme/image/upload/blog/bz4iacudwd6x7mxtzu5p"
                      className="w-[350px] h-52 rounded-xl object-cover"
                      decoding="async"
                      alt="14 Manipulation Tactics Abusers Use"
                      loading="lazy"
                    />
                  </a>
                  <div className="flex items-center mt-4 sm:mt-6 flex-wrap">
                    <span className="bg-[#FFF2F8] text-[#E18BB2] font-medium mr-3 my-1 rounded-3xl py-1 px-3">
                      Relationships
                    </span>
                  </div>
                  <div className="w-[350px]">
                    <a href="/blog/manipulation-tactics">
                      <p className="text-xl sm:text-[22px] leading-6 sm:leading-9 mt-4 font-medium">
                        14 Manipulation Tactics Abusers Use
                      </p>
                      <p className="text-base leading-6 sm:leading-7 mt-3 mb-8">
                        Learn to identify and defend against 15 common
                        manipulation tactics used by abusers. Empower yoursel...
                      </p>
                    </a>
                  </div>
                </div>
                <div className="w-[350px] ">
                  <a href="/blog/can-anxiety-kill-you">
                    <img
                      src="https://res.cloudinary.com/nowandme/image/upload/blog/kmqryeb8urue2borvuwv"
                      className="w-[350px] h-52 rounded-xl object-cover"
                      decoding="async"
                      alt="Can Anxiety Kill You?"
                      loading="lazy"
                    />
                  </a>
                  <div className="flex items-center mt-4 sm:mt-6 flex-wrap">
                    <span className="bg-[#FFEAE9] text-[#E44335] font-medium mr-3 my-1 rounded-3xl py-1 px-3">
                      Anxiety
                    </span>
                  </div>
                  <div className="w-[350px]">
                    <a href="/blog/can-anxiety-kill-you">
                      <p className="text-xl sm:text-[22px] leading-6 sm:leading-9 mt-4 font-medium">
                        Can Anxiety Kill You?
                      </p>
                      <p className="text-base leading-6 sm:leading-7 mt-3 mb-8">
                        Learn about the potential effects of anxiety on your
                        health, and whether it can be life-threatening....
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <a href="/blog">
                <button className="px-5 bg-x-orange-500 text-white text-sm font-medium rounded-xl focus:outline-none focus:ring-3 focus:ring-x-orange-100 dark:focus:ring-0 relative overflow-hidden px-5 min-w-[300px] bg-x-orange-500 text-white text-lg font-medium rounded-lg focus:outline-none focus:ring-3 focus:ring-x-orange-100 dark:focus:ring-0 relative overflow-hidden disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed w-full md:w-auto py-3 transform transition duration-200 hover:scale-[1.04] mt-4 py-3">
                  View all Articles
                </button>
              </a>
            </div>
          </section>
          <section className="w-full mx-auto max-w-7xl mt-10 md:mt-28 px-5 ">
            <p className="font-bold text-2xl md:text-4xl text-center ">
              Frequently asked questions
            </p>
            <p className="mt-3 font-normal text-lg text-gray-700 text-center ">
              Browse through the most frequently asked questions.
            </p>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-1"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      What is Now&amp;Me and what does it offer?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-3"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      How can Now&amp;Me help me with my mental health?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-5"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Who are Now&amp;Me experts?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-7"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      What is Experts by Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-9"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Is Now&amp;Me a free platform to use?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-11"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Can I talk to therapists on Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-13"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      How do I create an account on Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-15"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Can I remain anonymous while using Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-17"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Can I share my personal stories and experiences on
                      Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-19"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      How can I connect with others on Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-21"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Is Now&amp;Me an app?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-23"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Can I message other users privately on Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-25"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      How can I find relevant discussions and communities on
                      Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-27"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Is there a limit to the number of posts I can make on
                      Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-29"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      How can I engage with others' posts and provide support?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-31"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Are there any age restrictions for using Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-33"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Is there a moderation team that ensures the safety of
                      users on Now&amp;Me?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left text-gray-400"
                    id="headlessui-disclosure-button-35"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      Can I talk on Now&amp;Me in multiple languages?
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <span className="text-primary font-normal text-2xl">
                        +
                      </span>
                    </span>
                  </button>
                </dt>
              </div>
            </dl>
            <div className="mt-32 mb-10 flex flex-col items-center">
              <div className="font-semibold text-2xl md:text-4xl max-w-[900px] md:leading-[3rem] tracking-wide relative">
                <div className="absolute -top-7 custom-top-offset sm:-top-52 lg:-top-52">
                  <img
                    src="https://res.cloudinary.com/nowandme/image/upload/v1685614833/landing/quote-bg_zajwsr.webp"
                    className="w-full h-full "
                    loading="lazy"
                    alt="quote gradient background"
                  />
                </div>
                <p>
                  <svg
                    width={38}
                    height={39}
                    viewBox="0 0 38 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.293 16.233c-.353 0-.692.054-1.03.103.11-.367.222-.74.403-1.077.18-.487.462-.91.743-1.336.234-.46.647-.773.951-1.167.318-.383.752-.638 1.096-.956.337-.333.779-.499 1.13-.733.368-.21.688-.444 1.03-.554l.853-.352.75-.312-.768-3.068-.945.228c-.302.076-.671.164-1.09.27-.43.08-.887.297-1.397.494-.504.225-1.086.377-1.628.738-.545.345-1.173.634-1.727 1.096-.537.477-1.185.89-1.663 1.496-.522.567-1.038 1.162-1.439 1.84-.464.646-.779 1.355-1.112 2.057-.3.701-.543 1.418-.74 2.115a19.112 19.112 0 0 0-.608 3.859 19.722 19.722 0 0 0 .044 2.766c.024.323.068.636.1.853l.04.266.04-.01a7.125 7.125 0 1 0 6.967-8.616Zm17.417 0c-.353 0-.692.054-1.03.103.11-.367.222-.74.403-1.077.18-.487.462-.91.742-1.336.235-.46.648-.773.952-1.167.318-.383.752-.638 1.095-.956.338-.333.78-.499 1.131-.733.367-.21.687-.444 1.03-.554l.853-.352.75-.312-.768-3.068-.945.228c-.302.076-.671.164-1.091.27-.43.08-.887.297-1.396.494-.502.227-1.087.377-1.628.74-.545.345-1.173.633-1.728 1.096-.536.476-1.184.89-1.662 1.494-.523.567-1.039 1.162-1.44 1.84-.463.646-.778 1.355-1.11 2.057a17.313 17.313 0 0 0-.742 2.115 19.108 19.108 0 0 0-.608 3.859 19.713 19.713 0 0 0 .044 2.766c.024.323.069.636.1.853l.04.266.041-.01a7.126 7.126 0 1 0 6.967-8.616Z"
                      fill="#FF6D42"
                    />
                  </svg>
                  When we deny our emotion, it owns us. When we own our emotion,
                  we can rebuild and find our way through the pain.
                </p>
              </div>
              <p className="mt-4 font-medium text-lg text-[#171717BF] max-w-[900px] w-full">
                – BRENÉ BROWN
              </p>
            </div>
          </section>
          <div className="mt-10 md:mt-16 bg-[#FFE7DE] relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-0">
              <div className="flex flex-col items-center md:items-start justify-center py-5 xl:py-14 px-5 xl:px-0">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27103%27%20height=%2764%27/%3e"
                    />
                  </span>
                  <img
                    alt="user_group_img"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                  <noscript>
                    &lt;img alt="user_group_img"
                    srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1689594853%2Fres%2Fgroup_img_rbpdau.png&amp;amp;w=128&amp;amp;q=75
                    1x,
                    /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1689594853%2Fres%2Fgroup_img_rbpdau.png&amp;amp;w=256&amp;amp;q=75
                    2x"
                    src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1689594853%2Fres%2Fgroup_img_rbpdau.png&amp;amp;w=256&amp;amp;q=75"
                    decoding="async" data-nimg="intrinsic"
                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                    loading="lazy"/&gt;
                  </noscript>
                </span>
                <p className="font-bold text-2xl md:text-2xl lg:text-4xl mt-4 lg:leading-[47px] text-center md:text-left">
                  8434{/* */} users have benefited
                  <br />
                  from FREE CHAT last month
                </p>
                <p className="font-medium text-[#171717BF] text-lg mt-3 max-w-[350px] text-left hidden xl:block">
                  Start your mental health improvement journey now!
                </p>
                <a href="/experts/listing">
                  <div className="mt-6 transition duration-200 hover:scale-[1.06] px-16 bg-primary text-white text-base font-semibold rounded-xl outline-none py-3 text-center">
                    Start Free Chat
                  </div>
                </a>
              </div>
              <div className="flex md:hidden items-end">
                <div />
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27560%27%20height=%27400%27/%3e"
                    />
                  </span>
                  <img
                    alt="start_free_chat_cta_image"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                  <noscript>
                    &lt;img alt="start_free_chat_cta_image"
                    srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1706530742%2Fres%2FStartFreeChatFooter_j2sq5l.webp&amp;amp;w=640&amp;amp;q=75
                    1x,
                    /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1706530742%2Fres%2FStartFreeChatFooter_j2sq5l.webp&amp;amp;w=1200&amp;amp;q=75
                    2x"
                    src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1706530742%2Fres%2FStartFreeChatFooter_j2sq5l.webp&amp;amp;w=1200&amp;amp;q=75"
                    decoding="async" data-nimg="intrinsic"
                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                    loading="lazy"/&gt;
                  </noscript>
                </span>
              </div>
              <div className="hidden md:flex items-end xl:absolute xl:right-0 xl:bottom-0 xl:top-0 xl:overflow-hidden">
                <div />
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27845%27%20height=%27430%27/%3e"
                    />
                  </span>
                  <img
                    alt="start_free_chat_cta_image"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="object-contain"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                  <noscript>
                    &lt;img alt="start_free_chat_cta_image"
                    srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1706522876%2Fres%2Ffree_chat_c4yldn.webp&amp;amp;w=1080&amp;amp;q=75
                    1x,
                    /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1706522876%2Fres%2Ffree_chat_c4yldn.webp&amp;amp;w=1920&amp;amp;q=75
                    2x"
                    src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fnowandme%2Fimage%2Fupload%2Fv1706522876%2Fres%2Ffree_chat_c4yldn.webp&amp;amp;w=1920&amp;amp;q=75"
                    decoding="async" data-nimg="intrinsic"
                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                    class="object-contain" loading="lazy"/&gt;
                  </noscript>
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              zIndex: 9999,
              inset: 16,
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
      <footer className="pt-8 md:pt-12  undefined">
        <div className="grid gap-x-4 gap-y-8 relative px-6 mx-auto overflow-hidden flex-nowrap lg:grid-cols-9">
          <div className="flex flex-col justify-center items-center lg:col-span-2 ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60.000000pt"
                height="60.000000pt"
                viewBox="0 0 1025.000000 1025.000000"
              >
                <g
                  transform="translate(0.000000,1025.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    className="fill-current "
                    d="M5902 7524 c-54 -38 -52 18 -52 -1174 0 -999 2 -1105 16 -1136 29 -61 46 -64 309 -64 265 0 282 3 334 66 17 22 173 269 345 549 173 281 320 511 327 513 9 1 138 -200 340 -530 236 -385 336 -540 363 -562 l38 -31 248 -3 c211 -3 254 -1 279 13 65 33 61 -36 61 1180 0 962 -2 1110 -15 1135 -30 58 -39 60 -282 60 l-223 0 -32 -29 -33 -29 -5 -649 c-4 -582 -7 -648 -21 -651 -11 -2 -96 129 -303 467 -320 523 -302 501 -416 501 -115 0 -96 22 -417 -501 -201 -329 -292 -469 -303 -467 -13 3 -16 77 -20 643 -5 677 -4 666 -52 699 -33 24 -453 23 -486 0z"
                  />
                  <path
                    className="fill-current "
                    d="M1173 7515 c-18 -8 -42 -29 -53 -47 -20 -33 -20 -48 -20 -1139 l0 -1106 23 -34 c36 -54 73 -61 297 -57 209 3 220 6 258 60 15 21 18 87 22 643 5 604 6 620 24 620 15 0 130 -163 447 -630 236 -346 440 -640 454 -652 40 -35 89 -43 265 -43 187 0 220 9 252 70 17 33 18 87 18 1130 0 1022 -1 1097 -18 1130 -31 62 -61 70 -280 70 -212 0 -246 -7 -279 -56 -17 -26 -18 -69 -23 -649 -5 -612 -5 -620 -25 -620 -15 0 -120 148 -445 629 -234 346 -438 639 -453 652 -15 13 -44 28 -65 33 -57 17 -360 13 -399 -4z"
                  />
                  <path
                    className="fill-current "
                    d="M4284 7505 c-593 -105 -983 -611 -951 -1235 20 -379 175 -689 450 -897 283 -214 667 -283 1043 -188 358 91 652 369 773 731 96 287 84 646 -30 915 -144 338 -431 578 -788 660 -115 27 -382 34 -497 14z m370 -555 c170 -43 294 -144 371 -303 131 -272 87 -594 -110 -793 -118 -120 -240 -169 -420 -168 -177 1 -310 56 -422 173 -157 163 -217 439 -147 680 59 207 230 373 427 416 92 20 211 18 301 -5z"
                  />
                  <path
                    fill="#FC7753"
                    d="M1815 4816 c-195 -38 -366 -155 -455 -311 -100 -175 -105 -391 -14 -573 44 -89 75 -122 113 -122 45 0 321 134 323 157 3 38 -3 55 -39 108 -63 95 -57 197 16 278 95 106 261 117 366 25 154 -135 96 -343 -133 -477 -37 -22 -182 -95 -322 -164 -272 -134 -338 -177 -415 -275 -202 -254 -191 -609 27 -846 199 -218 524 -297 826 -201 80 26 187 89 284 168 36 29 68 47 83 47 20 0 54 -29 150 -128 l123 -127 247 0 c244 0 247 0 265 22 10 13 16 31 13 40 -2 10 -230 247 -506 526 -386 390 -507 508 -526 507 -22 0 -277 -137 -313 -168 -10 -8 -18 -29 -18 -45 0 -25 19 -49 105 -137 114 -115 118 -125 85 -189 -39 -77 -137 -134 -230 -134 -169 0 -297 122 -308 297 -4 63 -1 78 21 122 49 97 153 170 397 277 188 83 221 100 308 160 186 128 286 297 299 502 10 178 -47 333 -173 465 -40 41 -101 92 -136 113 -133 79 -315 112 -463 83z"
                  />
                  <path
                    className="fill-current "
                    d="M3510 4793 c-75 -38 -70 43 -70 -1203 0 -1101 0 -1115 20 -1148 34 -55 65 -62 286 -62 216 0 246 6 277 59 16 27 17 83 17 649 0 341 3 627 6 636 3 9 15 16 25 16 23 0 21 2 348 -531 165 -271 250 -401 268 -410 40 -21 181 -19 213 4 14 9 151 223 306 475 245 399 284 457 305 457 l24 0 5 -641 c5 -624 6 -643 25 -664 42 -46 62 -50 277 -50 186 0 206 2 236 20 65 40 62 -23 62 1197 0 1239 5 1158 -70 1196 -31 16 -61 17 -277 15 l-241 -3 -43 -30 c-35 -25 -94 -114 -373 -568 -264 -429 -335 -537 -350 -535 -13 2 -121 170 -346 538 -275 449 -335 540 -370 565 l-42 30 -241 3 c-216 2 -246 1 -277 -15z"
                  />
                  <path
                    className="fill-current "
                    d="M7195 4795 c-388 -71 -697 -315 -834 -657 -74 -184 -100 -431 -67 -633 48 -288 205 -583 417 -779 349 -323 823 -390 1249 -176 219 110 405 289 503 485 37 75 87 222 87 258 0 38 -30 90 -62 110 -32 21 -418 70 -451 58 -26 -10 -67 -56 -67 -76 0 -29 -105 -158 -163 -202 -209 -155 -456 -176 -643 -55 -77 50 -92 68 -73 87 8 7 304 149 658 314 355 166 653 309 664 319 28 25 65 92 72 133 6 30 -2 52 -54 155 -178 350 -467 585 -806 655 -107 22 -321 24 -430 4z m270 -579 c68 -18 141 -57 194 -104 35 -30 44 -45 44 -70 0 -18 -4 -37 -10 -43 -18 -18 -712 -339 -733 -339 -36 0 -60 35 -60 89 0 212 124 385 323 450 104 34 165 38 242 17z"
                  />
                </g>
              </svg>
            </div>
            <p className="text-3xl  font-extrabold my-3">Get the app</p>
            <div className="flex lg:flex-col gap-y-4 gap-x-4 md:gap-x-8 justify-center ">
              <a
                href="https://nowandme.sng.link/Dqsa0/srwb/7mon"
                target="_blank"
                rel="noreferrer"
                aria-label="Download on the App Store"
              >
                <svg
                  viewBox="0 0 540 156"
                  fill="none"
                  className="w-full h-full sm:w-[180px] cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M537 138.009c0 8.314-6.874 15.048-15.377 15.048H18.397C9.9 153.057 3 146.323 3 138.009V18.011C3 9.7 9.899 2.943 18.397 2.943H521.62c8.507 0 15.377 6.758 15.377 15.068L537 138.008Z"
                    fill="#000"
                  />
                  <path
                    d="M520 3.125c9.26 0 16.795 7.347 16.795 16.375v117c0 9.029-7.535 16.375-16.795 16.375H20c-9.26 0-16.795-7.346-16.795-16.375v-117C3.205 10.472 10.74 3.125 20 3.125h500ZM520 0H20C9.005 0 0 8.78 0 19.5v117C0 147.22 9.005 156 20 156h500c10.995 0 20-8.78 20-19.5v-117C540 8.78 530.995 0 520 0Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M120.512 77.158c-.116-12.57 10.556-18.685 11.044-18.97-6.044-8.592-15.412-9.766-18.704-9.86-7.868-.806-15.5 4.591-19.508 4.591-4.088 0-10.26-4.512-16.912-4.38-8.56.13-16.568 4.961-20.96 12.465-9.064 15.3-2.304 37.783 6.38 50.15 4.344 6.057 9.42 12.819 16.064 12.581 6.5-.261 8.928-4.04 16.772-4.04 7.772 0 10.052 4.04 16.828 3.888 6.976-.109 11.368-6.084 15.56-12.195 5.02-6.942 7.036-13.779 7.116-14.13-.164-.054-13.548-5.035-13.68-20.1Zm-12.8-36.965c3.496-4.262 5.888-10.062 5.224-15.947-5.06.219-11.388 3.413-15.032 7.582-3.224 3.674-6.104 9.695-5.36 15.358 5.684.413 11.52-2.796 15.168-6.993Zm88.488-1.158c0 4.59-1.412 8.046-4.232 10.366-2.612 2.141-6.324 3.214-11.132 3.214-2.384 0-4.424-.102-6.132-.304V27.23c2.228-.351 4.628-.53 7.22-.53 4.58 0 8.032.97 10.36 2.913 2.608 2.195 3.916 5.335 3.916 9.422Zm-4.42.113c0-2.976-.808-5.257-2.424-6.848-1.616-1.587-3.976-2.383-7.084-2.383-1.32 0-2.444.086-3.376.265V49.25c.516.078 1.46.113 2.832.113 3.208 0 5.684-.87 7.428-2.609 1.744-1.74 2.624-4.274 2.624-7.605Zm27.856 3.896c0 2.828-.828 5.144-2.484 6.962-1.736 1.868-4.036 2.8-6.908 2.8-2.768 0-4.972-.893-6.616-2.687-1.64-1.79-2.46-4.048-2.46-6.77 0-2.847.844-5.184 2.54-6.997 1.696-1.814 3.976-2.722 6.848-2.722 2.768 0 4.992.893 6.676 2.683 1.6 1.74 2.404 3.986 2.404 6.731Zm-4.348.133c0-1.697-.376-3.151-1.124-4.364-.88-1.467-2.132-2.2-3.76-2.2-1.684 0-2.964.733-3.844 2.2-.752 1.213-1.124 2.69-1.124 4.438 0 1.697.376 3.151 1.124 4.364.908 1.466 2.172 2.2 3.804 2.2 1.6 0 2.856-.745 3.76-2.239.776-1.236 1.164-2.703 1.164-4.4Zm35.772-9.173-5.9 18.385h-3.84l-2.444-7.984a58.522 58.522 0 0 1-1.516-5.94h-.076a42.593 42.593 0 0 1-1.516 5.94l-2.596 7.984h-3.884l-5.548-18.385h4.308l2.132 8.74a94.31 94.31 0 0 1 1.28 5.9h.076c.312-1.536.828-3.494 1.556-5.861l2.676-8.775h3.416l2.564 8.588a68.924 68.924 0 0 1 1.512 6.053h.116c.284-1.892.712-3.908 1.28-6.053l2.288-8.588h4.116v-.004Zm21.732 18.385H268.6v-10.53c0-3.245-1.264-4.867-3.8-4.867-1.244 0-2.248.444-3.028 1.337-.772.893-1.164 1.946-1.164 3.151v10.905h-4.192V39.257c0-1.614-.052-3.365-.152-5.26h3.684l.196 2.874h.116c.488-.894 1.216-1.63 2.172-2.22 1.136-.686 2.408-1.033 3.8-1.033 1.76 0 3.224.554 4.388 1.665 1.448 1.361 2.172 3.393 2.172 6.092V52.39Zm11.56 0h-4.188v-26.82h4.188v26.82Zm24.68-9.345c0 2.828-.828 5.144-2.484 6.962-1.736 1.868-4.04 2.8-6.908 2.8-2.772 0-4.976-.893-6.616-2.687-1.64-1.79-2.46-4.048-2.46-6.77 0-2.847.844-5.184 2.54-6.997 1.696-1.814 3.976-2.722 6.844-2.722 2.772 0 4.992.893 6.68 2.683 1.6 1.74 2.404 3.986 2.404 6.731Zm-4.352.133c0-1.697-.376-3.151-1.124-4.364-.876-1.467-2.132-2.2-3.756-2.2-1.688 0-2.968.733-3.844 2.2-.752 1.213-1.124 2.69-1.124 4.438 0 1.697.376 3.151 1.124 4.364.908 1.466 2.172 2.2 3.804 2.2 1.6 0 2.852-.745 3.756-2.239.78-1.236 1.164-2.703 1.164-4.4Zm24.64 9.212h-3.764l-.312-2.118h-.116c-1.288 1.689-3.124 2.535-5.508 2.535-1.78 0-3.22-.558-4.304-1.665-.984-1.006-1.476-2.258-1.476-3.744 0-2.247.96-3.959 2.892-5.144 1.928-1.186 4.64-1.767 8.132-1.74v-.343c0-2.422-1.304-3.63-3.916-3.63-1.86 0-3.5.455-4.916 1.36l-.852-2.683c1.752-1.057 3.916-1.587 6.468-1.587 4.928 0 7.4 2.535 7.4 7.605v6.77c0 1.837.092 3.3.272 4.384Zm-4.352-6.318v-2.836c-4.624-.078-6.936 1.159-6.936 3.705 0 .96.264 1.677.804 2.157s1.228.718 2.048.718c.92 0 1.78-.285 2.564-.85.788-.57 1.272-1.291 1.452-2.177a3.37 3.37 0 0 0 .068-.717Zm28.172 6.318h-3.72l-.196-2.953h-.116c-1.188 2.247-3.212 3.37-6.056 3.37-2.272 0-4.164-.87-5.664-2.61-1.5-1.738-2.248-3.997-2.248-6.77 0-2.975.812-5.385 2.444-7.226 1.58-1.716 3.516-2.574 5.82-2.574 2.532 0 4.304.83 5.312 2.496h.08V25.568h4.196v21.868c0 1.79.048 3.44.148 4.953Zm-4.344-7.754V41.57c0-.53-.04-.96-.116-1.287a4.634 4.634 0 0 0-1.516-2.476c-.78-.667-1.72-1.003-2.804-1.003-1.564 0-2.788.605-3.688 1.818-.892 1.213-1.344 2.76-1.344 4.652 0 1.818.428 3.292 1.288 4.427.908 1.209 2.132 1.813 3.664 1.813 1.376 0 2.476-.503 3.312-1.513.808-.932 1.204-2.055 1.204-3.365Zm40.196-1.591c0 2.828-.828 5.144-2.484 6.962-1.736 1.868-4.032 2.8-6.908 2.8-2.764 0-4.968-.893-6.616-2.687-1.64-1.79-2.46-4.048-2.46-6.77 0-2.847.844-5.184 2.54-6.997 1.696-1.814 3.976-2.722 6.852-2.722 2.764 0 4.992.893 6.672 2.683 1.6 1.74 2.404 3.986 2.404 6.731Zm-4.344.133c0-1.697-.376-3.151-1.124-4.364-.884-1.467-2.132-2.2-3.764-2.2-1.68 0-2.96.733-3.844 2.2-.752 1.213-1.124 2.69-1.124 4.438 0 1.697.376 3.151 1.124 4.364.908 1.466 2.172 2.2 3.804 2.2 1.6 0 2.86-.745 3.764-2.239.772-1.236 1.164-2.703 1.164-4.4Zm26.884 9.212h-4.188v-10.53c0-3.245-1.264-4.867-3.804-4.867-1.244 0-2.248.444-3.024 1.337-.776.893-1.164 1.946-1.164 3.151v10.905h-4.196V39.257c0-1.614-.048-3.365-.148-5.26h3.68l.196 2.874H399c.492-.894 1.22-1.63 2.172-2.22 1.14-.686 2.408-1.033 3.804-1.033 1.756 0 3.22.554 4.384 1.665 1.452 1.361 2.172 3.393 2.172 6.092V52.39Zm28.212-15.323h-4.616v8.93c0 2.27.82 3.405 2.444 3.405.752 0 1.376-.062 1.868-.19l.108 3.1c-.828.304-1.916.456-3.256.456-1.656 0-2.944-.491-3.876-1.474-.936-.983-1.4-2.637-1.4-4.957v-9.27h-2.756v-3.062h2.756v-3.37l4.108-1.209V34h4.616v3.066h.004Zm22.192 15.323h-4.196V41.937c0-3.296-1.264-4.945-3.796-4.945-1.944 0-3.272.955-4 2.866a5.016 5.016 0 0 0-.196 1.47v11.057h-4.188V25.568h4.188v11.08h.08c1.32-2.016 3.212-3.022 5.664-3.022 1.736 0 3.172.554 4.312 1.665 1.42 1.385 2.132 3.444 2.132 6.166v10.932Zm22.892-10.062c0 .733-.056 1.35-.156 1.852H472.1c.056 1.818.656 3.202 1.82 4.161 1.064.858 2.436 1.287 4.116 1.287 1.86 0 3.556-.288 5.084-.87l.656 2.84c-1.788.757-3.892 1.135-6.328 1.135-2.92 0-5.22-.839-6.884-2.516-1.672-1.677-2.5-3.927-2.5-6.75 0-2.773.772-5.082 2.328-6.923 1.624-1.966 3.82-2.948 6.592-2.948 2.712 0 4.772.982 6.164 2.948 1.124 1.56 1.68 3.49 1.68 5.784Zm-4-1.057c.032-1.213-.244-2.258-.812-3.14-.728-1.135-1.836-1.704-3.336-1.704-1.368 0-2.484.554-3.336 1.665-.696.886-1.108 1.942-1.244 3.179h8.728ZM214.58 122.866h-9.084l-4.976-15.246h-17.296l-4.74 15.246h-8.844l17.136-51.902h10.584l17.22 51.902Zm-15.56-21.642-4.5-13.552c-.476-1.385-1.368-4.645-2.684-9.777h-.16c-.524 2.207-1.368 5.467-2.528 9.777l-4.42 13.552h14.292Zm59.628 2.469c0 6.365-1.764 11.396-5.292 15.089-3.16 3.288-7.084 4.93-11.768 4.93-5.056 0-8.688-1.771-10.9-5.312h-.16v19.715H222V97.761c0-4.001-.108-8.108-.316-12.32h7.5l.476 5.932h.16c2.844-4.47 7.16-6.7 12.952-6.7 4.528 0 8.308 1.743 11.332 5.234 3.032 3.494 4.544 8.088 4.544 13.786Zm-8.688.304c0-3.642-.84-6.645-2.528-9.009-1.844-2.464-4.32-3.697-7.424-3.697-2.104 0-4.016.687-5.724 2.04-1.712 1.365-2.832 3.147-3.356 5.355-.264 1.03-.396 1.872-.396 2.535v6.24c0 2.722.856 5.019 2.568 6.895 1.712 1.876 3.936 2.812 6.672 2.812 3.212 0 5.712-1.209 7.5-3.619 1.792-2.415 2.688-5.597 2.688-9.552Zm52.836-.304c0 6.365-1.764 11.396-5.296 15.089-3.156 3.288-7.08 4.93-11.764 4.93-5.056 0-8.688-1.771-10.896-5.312h-.16v19.715h-8.528V97.761c0-4.001-.108-8.108-.316-12.32h7.5l.476 5.932h.16c2.84-4.47 7.156-6.7 12.952-6.7 4.524 0 8.304 1.743 11.336 5.234 3.02 3.494 4.536 8.088 4.536 13.786Zm-8.688.304c0-3.642-.844-6.645-2.532-9.009-1.844-2.464-4.312-3.697-7.42-3.697-2.108 0-4.016.687-5.728 2.04-1.712 1.365-2.828 3.147-3.352 5.355-.26 1.03-.396 1.872-.396 2.535v6.24c0 2.722.856 5.019 2.56 6.895 1.712 1.872 3.936 2.812 6.68 2.812 3.212 0 5.712-1.209 7.5-3.619 1.792-2.415 2.688-5.597 2.688-9.552Zm58.048 4.314c0 4.415-1.572 8.006-4.728 10.779-3.468 3.031-8.296 4.544-14.5 4.544-5.728 0-10.32-1.077-13.796-3.233l1.976-6.931c3.744 2.208 7.852 3.315 12.328 3.315 3.212 0 5.712-.709 7.508-2.121 1.788-1.412 2.68-3.307 2.68-5.671 0-2.106-.736-3.88-2.212-5.319-1.468-1.439-3.92-2.777-7.344-4.013-9.32-3.39-13.976-8.354-13.976-14.883 0-4.266 1.632-7.765 4.9-10.487 3.256-2.726 7.6-4.087 13.032-4.087 4.844 0 8.868.823 12.08 2.465l-2.132 6.778c-3-1.591-6.392-2.387-10.188-2.387-3 0-5.344.722-7.024 2.157-1.42 1.283-2.132 2.847-2.132 4.7 0 2.05.812 3.747 2.444 5.081 1.42 1.232 4 2.566 7.744 4.005 4.58 1.798 7.944 3.9 10.108 6.31 2.156 2.403 3.232 5.41 3.232 8.998Zm28.196-16.63h-9.4v18.17c0 4.622 1.656 6.931 4.976 6.931 1.524 0 2.788-.129 3.788-.387l.236 6.315c-1.68.612-3.892.92-6.632.92-3.368 0-6-1.002-7.9-3.003-1.892-2.005-2.844-5.366-2.844-10.089V91.673h-5.6v-6.24h5.6v-6.852l8.376-2.465v9.317h9.4v6.248Zm42.412 12.164c0 5.753-1.688 10.476-5.056 14.169-3.532 3.802-8.22 5.698-14.064 5.698-5.632 0-10.116-1.821-13.46-5.464-3.344-3.643-5.016-8.241-5.016-13.783 0-5.799 1.72-10.55 5.172-14.242 3.444-3.698 8.092-5.546 13.936-5.546 5.632 0 10.164 1.821 13.584 5.468 3.272 3.537 4.904 8.104 4.904 13.7Zm-8.848.269c0-3.451-.756-6.411-2.288-8.88-1.788-2.987-4.344-4.477-7.656-4.477-3.428 0-6.032 1.494-7.82 4.477-1.532 2.473-2.288 5.48-2.288 9.036 0 3.452.756 6.412 2.288 8.877 1.844 2.987 4.42 4.477 7.744 4.477 3.256 0 5.812-1.521 7.656-4.555 1.572-2.516 2.364-5.507 2.364-8.955Zm36.568-11.36a15.177 15.177 0 0 0-2.688-.23c-3 0-5.32 1.103-6.952 3.315-1.42 1.95-2.132 4.414-2.132 7.39v19.637h-8.524l.08-25.639c0-4.313-.108-8.24-.32-11.782h7.428l.312 7.16h.236c.9-2.46 2.32-4.442 4.264-5.928 1.9-1.337 3.952-2.004 6.164-2.004.788 0 1.5.055 2.132.152v7.929Zm38.14 9.629c0 1.49-.1 2.745-.312 3.771h-25.584c.1 3.697 1.336 6.525 3.712 8.475 2.156 1.743 4.944 2.617 8.368 2.617 3.788 0 7.244-.589 10.352-1.771l1.336 5.772c-3.632 1.544-7.92 2.313-12.868 2.313-5.952 0-10.624-1.708-14.024-5.121-3.392-3.412-5.092-7.995-5.092-13.744 0-5.643 1.58-10.342 4.744-14.09 3.312-4.002 7.788-6.002 13.42-6.002 5.532 0 9.72 2 12.564 6.002 2.252 3.178 3.384 7.11 3.384 11.778Zm-8.132-2.157c.056-2.465-.5-4.594-1.656-6.392-1.476-2.313-3.744-3.467-6.796-3.467-2.788 0-5.056 1.127-6.788 3.389-1.42 1.798-2.264 3.955-2.524 6.466h17.764v.004Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a
                href="https://nowandme.sng.link/Dqsa0/fblg/s4pc"
                target="_blank"
                rel="noreferrer"
                aria-label="Get it on Google Play"
              >
                <svg
                  viewBox="0 0 540 156"
                  className="w-full h-full sm:w-[180px] cursor-pointer"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M520 156H20c-10.995 0-20-8.78-20-19.5v-117C0 8.78 9.005 0 20 0h500c10.995 0 20 8.78 20 19.5v117c0 10.72-9.005 19.5-20 19.5Z"
                    fill="#000"
                  />
                  <path
                    d="M520 3.125c9.26 0 16.795 7.347 16.795 16.375v117c0 9.029-7.535 16.375-16.795 16.375H20c-9.26 0-16.795-7.346-16.795-16.375v-117C3.205 10.472 10.74 3.125 20 3.125h500ZM520 0H20C9.005 0 0 8.78 0 19.5v117C0 147.22 9.005 156 20 156h500c10.995 0 20-8.78 20-19.5v-117C540 8.78 530.995 0 520 0Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M41.74 29.401c-1.175 1.2-1.855 3.067-1.855 5.485v86.248c0 2.418.68 4.285 1.855 5.484l.29.264L91.6 78.57v-1.14L42.03 29.118l-.29.283Z"
                    fill="url(#pa)"
                  />
                  <path
                    d="M108.105 94.682 91.6 78.57v-1.14l16.525-16.112.37.21 19.57 10.856c5.585 3.08 5.585 8.15 0 11.251l-19.57 10.838-.39.21Z"
                    fill="url(#pb)"
                  />
                  <path
                    d="M108.495 94.473 91.6 78l-49.86 48.618c1.855 1.902 4.88 2.131 8.32.229l58.435-32.374"
                    fill="url(#pc)"
                  />
                  <path
                    d="M108.495 61.527 50.06 29.153c-3.44-1.882-6.465-1.653-8.32.248L91.6 78l16.895-16.473Z"
                    fill="url(#pd)"
                  />
                  <path
                    d="M189.67 39.95c0 3.257-1 5.865-2.97 7.81-2.265 2.306-5.215 3.467-8.83 3.467-3.455 0-6.405-1.18-8.825-3.506-2.425-2.36-3.635-5.255-3.635-8.721s1.21-6.362 3.635-8.702c2.42-2.345 5.37-3.524 8.825-3.524 1.72 0 3.36.346 4.925.99 1.56.648 2.83 1.525 3.75 2.607l-2.09 2.058c-1.605-1.848-3.79-2.76-6.585-2.76-2.52 0-4.705.858-6.56 2.589-1.835 1.735-2.755 3.983-2.755 6.742 0 2.76.92 5.026 2.755 6.762 1.855 1.71 4.04 2.588 6.56 2.588 2.675 0 4.925-.877 6.7-2.608 1.17-1.145 1.835-2.725 2.01-4.743h-8.71V38.18h11.62c.14.61.18 1.2.18 1.77Zm18.435-9.769H197.19v7.41h9.84v2.818h-9.84v7.41h10.915v2.871H194.1V27.31h14.005v2.871Zm13.01 20.509h-3.09V30.181h-6.695V27.31h16.485v2.871h-6.7v20.51Zm18.63 0V27.31h3.085v23.38h-3.085Zm16.76 0h-3.065V30.181h-6.72V27.31h16.505v2.871h-6.72v20.51Zm37.93-3.008c-2.365 2.365-5.295 3.544-8.79 3.544-3.515 0-6.445-1.18-8.81-3.544-2.36-2.36-3.535-5.255-3.535-8.682 0-3.427 1.175-6.323 3.535-8.682 2.365-2.365 5.295-3.545 8.81-3.545 3.475 0 6.405 1.18 8.77 3.564 2.38 2.38 3.555 5.255 3.555 8.663 0 3.427-1.175 6.323-3.535 8.682Zm-15.315-1.96c1.78 1.75 3.945 2.628 6.525 2.628 2.56 0 4.745-.877 6.505-2.627 1.775-1.75 2.675-3.998 2.675-6.723 0-2.725-.9-4.972-2.675-6.723-1.76-1.75-3.945-2.627-6.505-2.627-2.58 0-4.745.877-6.525 2.627-1.775 1.75-2.675 3.998-2.675 6.723 0 2.725.9 4.972 2.675 6.723Zm23.185 4.968V27.31h3.75l11.66 18.183h.135L317.715 41V27.31h3.085v23.38h-3.22l-12.21-19.08h-.135l.135 4.514V50.69h-3.065Z"
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="0.16"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M272.54 84.835c-9.395 0-17.07 6.971-17.07 16.589 0 9.541 7.675 16.585 17.07 16.585 9.415 0 17.09-7.044 17.09-16.585 0-9.618-7.675-16.59-17.09-16.59Zm0 26.642c-5.155 0-9.59-4.149-9.59-10.053 0-5.981 4.435-10.057 9.59-10.057s9.61 4.076 9.61 10.057c0 5.904-4.455 10.053-9.61 10.053Zm-37.245-26.642c-9.415 0-17.07 6.971-17.07 16.589 0 9.541 7.655 16.585 17.07 16.585 9.41 0 17.07-7.044 17.07-16.585 0-9.618-7.66-16.59-17.07-16.59Zm0 26.642c-5.16 0-9.61-4.149-9.61-10.053 0-5.981 4.45-10.057 9.61-10.057 5.155 0 9.59 4.076 9.59 10.057 0 5.904-4.435 10.053-9.59 10.053Zm-44.32-21.558v7.05h17.265c-.505 3.939-1.855 6.834-3.925 8.853-2.52 2.437-6.445 5.143-13.34 5.143-10.625 0-18.945-8.361-18.945-18.72 0-10.36 8.32-18.72 18.945-18.72 5.745 0 9.925 2.189 13.01 5.026l5.095-4.968c-4.315-4.017-10.055-7.102-18.105-7.102-14.57 0-26.815 11.558-26.815 25.764s12.245 25.764 26.815 25.764c7.875 0 13.79-2.515 18.44-7.234 4.765-4.646 6.25-11.179 6.25-16.453 0-1.638-.14-3.145-.39-4.403h-24.3Zm181.23 5.465c-1.405-3.71-5.74-10.55-14.57-10.55-8.75 0-16.035 6.724-16.035 16.59 0 9.292 7.21 16.585 16.875 16.585 7.815 0 12.325-4.646 14.18-7.351l-5.8-3.769c-1.935 2.76-4.57 4.588-8.38 4.588-3.785 0-6.5-1.692-8.24-5.026l22.755-9.18-.785-1.887Zm-23.2 5.524c-.195-6.396 5.095-9.672 8.885-9.672 2.97 0 5.49 1.448 6.33 3.52l-15.215 6.152ZM330.51 117h7.48V68.25h-7.48V117Zm-12.25-28.47h-.25c-1.68-1.94-4.885-3.695-8.945-3.695-8.52 0-16.31 7.293-16.31 16.643 0 9.297 7.79 16.531 16.31 16.531 4.06 0 7.265-1.769 8.945-3.768h.25v2.379c0 6.342-3.475 9.75-9.08 9.75-4.57 0-7.405-3.218-8.575-5.923l-6.505 2.647c1.875 4.397 6.84 9.808 15.08 9.808 8.77 0 16.17-5.031 16.17-17.272V85.844h-7.09v2.686Zm-8.555 22.947c-5.155 0-9.47-4.207-9.47-9.999 0-5.845 4.315-10.11 9.47-10.11 5.08 0 9.085 4.265 9.085 10.11 0 5.792-4.005 9.999-9.085 9.999Zm97.52-43.227h-17.89V117h7.46V98.529h10.43c8.285 0 16.41-5.845 16.41-15.142 0-9.292-8.145-15.137-16.41-15.137Zm.195 23.498h-10.625V75.03h10.625c5.57 0 8.75 4.51 8.75 8.356 0 3.773-3.18 8.36-8.75 8.36Zm46.115-7.006c-5.39 0-10.995 2.32-13.3 7.464l6.62 2.706c1.425-2.706 4.045-3.584 6.815-3.584 3.87 0 7.795 2.267 7.855 6.27v.511c-1.35-.76-4.24-1.886-7.795-1.886-7.13 0-14.395 3.827-14.395 10.969 0 6.532 5.84 10.739 12.405 10.739 5.02 0 7.79-2.208 9.53-4.777h.255v3.768h7.205v-18.7c0-8.644-6.62-13.48-15.195-13.48Zm-.9 26.715c-2.44 0-5.84-1.18-5.84-4.129 0-3.773 4.24-5.221 7.91-5.221 3.285 0 4.825.707 6.82 1.638-.585 4.514-4.57 7.712-8.89 7.712ZM494.98 85.81l-8.575 21.133h-.255l-8.865-21.133h-8.045l13.32 29.533-7.6 16.433h7.795L503.28 85.81h-8.3ZM427.735 117h7.48V68.25h-7.48V117Z"
                    fill="#fff"
                  />
                  <defs>
                    <linearGradient
                      id="pa"
                      x1="87.199"
                      y1="122.032"
                      x2="21.768"
                      y2="54.924"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0FF" />
                      <stop offset="0.007" stopColor="#00A1FF" />
                      <stop offset="0.26" stopColor="#00BEFF" />
                      <stop offset="0.512" stopColor="#00D2FF" />
                      <stop offset="0.76" stopColor="#00DFFF" />
                      <stop offset={1} stopColor="#00E3FF" />
                    </linearGradient>
                    <linearGradient
                      id="pb"
                      x1="135.337"
                      y1="77.995"
                      x2="38.55"
                      y2="77.995"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE000" />
                      <stop offset="0.409" stopColor="#FFBD00" />
                      <stop offset="0.775" stopColor="orange" />
                      <stop offset={1} stopColor="#FF9C00" />
                    </linearGradient>
                    <linearGradient
                      id="pc"
                      x1="99.308"
                      y1="69.045"
                      x2="10.579"
                      y2="-21.959"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF3A44" />
                      <stop offset={1} stopColor="#C31162" />
                    </linearGradient>
                    <linearGradient
                      id="pd"
                      x1="29.189"
                      y1="155.313"
                      x2="68.811"
                      y2="114.676"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#32A071" />
                      <stop offset="0.069" stopColor="#2DA771" />
                      <stop offset="0.476" stopColor="#15CF74" />
                      <stop offset="0.801" stopColor="#06E775" />
                      <stop offset={1} stopColor="#00F076" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="flex items-center mt-6 space-x-3">
              <a
                href="https://instagram.com/nowandme"
                target="_blank"
                rel="noreferrer"
                aria-label="instagram"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
                    stroke="#808080"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M21.5 4.5H10.5C7.18629 4.5 4.5 7.18629 4.5 10.5V21.5C4.5 24.8137 7.18629 27.5 10.5 27.5H21.5C24.8137 27.5 27.5 24.8137 27.5 21.5V10.5C27.5 7.18629 24.8137 4.5 21.5 4.5Z"
                    stroke="#808080"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z"
                    fill="#808080"
                  />
                </svg>
              </a>
              <a
                href="https://in.linkedin.com/company/nowandme"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"
                    fill="#808080"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC4OxDV6X7SBCb7YD2C5NwPA"
                target="_blank"
                rel="noreferrer"
                aria-label="youtube"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 16L14 12V20L20 16Z"
                    stroke="#808080"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 16C3 19.7194 3.38427 21.9017 3.67638 23.0233C3.75447 23.3296 3.90442 23.6129 4.11382 23.8497C4.32322 24.0866 4.58603 24.2701 4.88049 24.3851C9.0651 25.9932 16 25.949 16 25.949C16 25.949 22.9348 25.9932 27.1195 24.3851C27.4139 24.2701 27.6767 24.0866 27.8861 23.8498C28.0955 23.6129 28.2455 23.3296 28.3236 23.0233C28.6157 21.9017 29 19.7194 29 16C29 12.2805 28.6157 10.0982 28.3236 8.97663C28.2455 8.67031 28.0956 8.387 27.8862 8.15018C27.6768 7.91336 27.414 7.72985 27.1195 7.61484C22.9349 6.00674 16 6.0509 16 6.0509C16 6.0509 9.06518 6.00675 4.88053 7.61482C4.58607 7.72983 4.32325 7.91334 4.11385 8.15016C3.90446 8.38698 3.7545 8.67029 3.67641 8.97661C3.38428 10.0982 3 12.2805 3 16Z"
                    stroke="#808080"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/nowandme"
                target="_blank"
                rel="noreferrer"
                aria-label="twitter"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 11.0004C16.0001 9.85156 16.3957 8.73783 17.1204 7.84641C17.845 6.95498 18.8545 6.34023 19.9791 6.10551C21.1036 5.87078 22.2747 6.0304 23.2954 6.55752C24.3162 7.08464 25.1243 7.94712 25.5839 8.99996L30 9L25.9672 13.0328C25.7046 17.089 23.9081 20.8933 20.9426 23.6731C17.977 26.4529 14.0647 27.9999 10 28C6 28 5 26.5 5 26.5C5 26.5 9 25 11 22C11 22 3 18 5 7C5 7 10 12 15.9983 13L16 11.0004Z"
                    stroke="#808080"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid lg:col-span-7 ">
            <div className="flex justify-around flex-col sm:flex-row space-y-6 sm:space-y-0">
              <div>
                <div className="hidden sm:block">
                  <div className="flex flex-col space-y-1  text-[#171717BF] ">
                    <a className="text-[#171717] font-bold" href="/services">
                      Services
                    </a>
                    <a
                      className="text-[#171717] font-bold"
                      href="/experts/listing"
                    >
                      Now&amp;Me Experts
                    </a>
                    <a href="/blog" className="text-[#171717] font-bold">
                      Blogs
                    </a>
                    <a
                      className="text-[#171717] font-bold"
                      href="/experts/assets"
                    >
                      Short Reads
                    </a>
                    <a className="text-[#171717] font-bold" href="/guides">
                      Guides
                    </a>
                    <a
                      className="text-[#171717] font-bold"
                      href="/gift-therapy"
                    >
                      Gift Therapy
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-[#171717]">
                  Talk to Experts
                </span>
                <div className="flex flex-col mt-2 space-y-1 text-[#171717BF]">
                  <a href="/experts/listing?q=relationship+coach">
                    Relationship Coach
                  </a>
                  <a href="/experts/listing?q=career+coach">Career Coach</a>
                  <a href="/experts/listing?q=life+coach">Life Coach</a>
                  <a href="/experts/listing?q=mindfulness+coach">
                    Mindfulness Coach
                  </a>
                  <a href="/experts/listing?q=counselling+psychologist">
                    Counselling Psychologist
                  </a>
                </div>
              </div>
              <div className="mt-8 hidden sm:block">
                <span className="font-bold text-[#171717]">Community</span>
                <div className="flex flex-col mt-2 space-y-1  text-[#171717BF]">
                  <a href="/home">Community Feed</a>
                  <a href="/community-guidelines">Guidelines</a>
                  <a href="/anonymity">Anonymity</a>
                  <a href="/tags">Tags</a>
                </div>
              </div>
              <div className="sm:ml-8 hidden sm:block ">
                <span className="font-bold text-[#171717]">Company</span>
                <div className="flex flex-col mt-2 space-y-1 text-[#171717BF]">
                  <a href="/about">About</a>
                  <a href="/terms">Terms</a>
                  <a href="/privacy">Privacy</a>
                  <a href="/careers">
                    Join Team{/* */}{" "}
                    <span className="text-[#FF6D42] bg-[#FEF1ED] rounded-full px-3 py-1 font-semibold">
                      Hiring
                    </span>
                  </a>
                  <a href="/employee-wellness-program">
                    Corporate Partnerships{/* */}{" "}
                    <span className="text-[#FF6D42] bg-[#FEF1ED] rounded-full px-3 py-1 font-semibold">
                      New
                    </span>
                  </a>
                  <a href="/press">Press</a>
                  <a href="/terms-for-experts">Expert T&amp;C</a>
                  <a href="/refund-and-cancellation-policy">Refund Policy</a>
                  <a href="/become-an-expert">
                    Join as an Expert{/* */}{" "}
                    <span className="text-[#FF6D42] bg-[#FEF1ED] rounded-full px-3 py-1 font-semibold">
                      Hiring
                    </span>
                  </a>
                </div>
              </div>
              <div className="sm:ml-8 hidden sm:block">
                <div>
                  <span className="font-bold text-[#171717]">Directory</span>
                  <div className="flex flex-col mt-2 space-y-1 text-[#171717BF]">
                    <a href="/blog">Blog</a>
                    <a target="_blank" href="https://shop.nowandme.com/">
                      Shop Merch
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <span className="font-bold text-[#171717]">Support</span>
                  <div className="flex flex-col mt-2 space-y-1 text-[#171717BF]">
                    <a href="/tags/feedback">Feedback</a>
                    <a href="/contact">Contact</a>
                    <a href="/faq">FAQ</a>
                  </div>
                </div>
              </div>
              <div className="flex sm:hidden">
                <div className="">
                  <div className="sm:ml-8">
                    <div className="">
                      <div className="flex flex-col space-y-1  text-[#171717BF] ">
                        <a
                          className="text-[#171717] font-bold"
                          href="/services"
                        >
                          Services
                        </a>
                        <a
                          className="text-[#171717] font-bold"
                          href="/experts/listing"
                        >
                          Now&amp;Me Experts
                        </a>
                        <a href="/blog" className="text-[#171717] font-bold">
                          Blogs
                        </a>
                        <a
                          className="text-[#171717] font-bold"
                          href="/experts/assets"
                        >
                          Short Reads
                        </a>
                        <a className="text-[#171717] font-bold" href="/guides">
                          Guides
                        </a>
                        <a
                          className="text-[#171717] font-bold"
                          href="/gift-therapy"
                        >
                          Gift Therapy
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="sm:ml-8 mt-6">
                    <span className="font-bold text-[#171717]">Company</span>
                    <div className="flex flex-col mt-2 space-y-1 text-[#171717BF]">
                      <a href="/about">About</a>
                      <a href="/terms">Terms</a>
                      <a href="/privacy">Privacy</a>
                      <a href="/careers">
                        Join Team{/* */}{" "}
                        <span className="text-[#FF6D42] bg-[#FEF1ED] rounded-full px-3 py-1 font-semibold">
                          Hiring
                        </span>
                      </a>
                      <a href="/employee-wellness-program">
                        Corporate Partnerships{/* */}{" "}
                        <span className="text-[#FF6D42] bg-[#FEF1ED] rounded-full px-3 py-1 font-semibold">
                          New
                        </span>
                      </a>
                      <a href="/press">Press</a>
                      <a href="/terms-for-experts">Expert T&amp;C</a>
                      <a href="/refund-and-cancellation-policy">
                        Refund Policy
                      </a>
                      <a href="/become-an-expert">
                        Join as an Expert{/* */}{" "}
                        <span className="text-[#FF6D42] bg-[#FEF1ED] rounded-full px-3 py-1 font-semibold">
                          Hiring
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="sm:ml-8 mt-6">
                    <span className="font-bold text-[#171717]">Community</span>
                    <div className="flex flex-col mt-2 space-y-1 text-[#171717BF]">
                      <a href="/home">Community Feed</a>
                      <a href="/community-guidelines">Guidelines</a>
                      <a href="/anonymity">Anonymity</a>
                      <a href="/tags">Tags</a>
                    </div>
                  </div>
                </div>
                <div className="ml-12">
                  <div className="">
                    <span className="font-bold text-[#171717]">
                      Talk to Experts
                    </span>
                    <div className="flex flex-col mt-2 space-y-1 text-[#171717BF]">
                      <a href="/experts/listing?q=relationship+coach">
                        Relationship Coach
                      </a>
                      <a href="/experts/listing?q=career+coach">Career Coach</a>
                      <a href="/experts/listing?q=life+coach">Life Coach</a>
                      <a href="/experts/listing?q=mindfulness+coach">
                        Mindfulness Coach
                      </a>
                      <a href="/experts/listing?q=counselling+psychologist">
                        Counselling Psychologist
                      </a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="font-bold text-[#171717]">Directory</span>
                    <div className="flex flex-col mt-2 space-y-1 text-[#171717BF]">
                      <a href="/blog">Blog</a>
                      <a target="_blank" href="https://shop.nowandme.com/">
                        Shop Merch
                      </a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="font-bold text-[#171717]">Support</span>
                    <div className="flex flex-col mt-2 space-y-1 text-[#171717BF]">
                      <a href="/tags/feedback">Feedback</a>
                      <a href="/contact">Contact</a>
                      <a href="/faq">FAQ</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-5 md:px-0 mt-20">
          <div className="text-center text-x-orange-500 max-w-2xl px-6 py-4 bg-x-orange-500 bg-opacity-10 text-sm sm:text-base rounded-lg sm:rounded-xl">
            ⓘ Now&amp;Me is not a crisis or suicide helpline. If you or anyone
            you know requires immediate help, please reach out to the nearest
            emergency services.
            <br /> You can find professional help in your country{/* */}{" "}
            <a
              className="border-b border-x-orange-500 hover:font-medium"
              href="https://www.iasp.info/crisis-centres-helplines"
              target="_blank"
              rel="noreferrer"
            >
              here.
            </a>
          </div>
        </div>
        <div className="py-2 my-8 sm:mb-0 mx-5 xl:mx-auto text-center border-black border-t-[0.5px]  max-w-7xl">
          <p className="text-normal text-gray-700  my-6">
            ©{/* */}2024{/* */} Now&amp;Me Enterprises Pvt. Ltd. – All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
