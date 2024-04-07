const Header = () => {
  return (
    <>
      <header className="fixed sm:top-3 z-[1200] w-full pb-1 items-center transition duration-300 ease-out bg-opacity-100">
        <div className="flex items-center justify-between mx-auto max-w-7xl sm:border-[1.5px] sm:shadow-lg bg-white py-2 px-4 rounded-lg">
          <div className="flex items-center">
            <a aria-label="AmhexAfrica icon" href="/">
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
              Amhex Africa Experts
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
              <a href="https://wa.me/+254715137492?text=Hi!" target="_blank">
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
                        <p className="font-bold"> Amhex Africa Experts</p>
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
    </>
  );
};

export default Header;
