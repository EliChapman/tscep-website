import * as React from "react";
const SvgPrevButton = (props) => (
  <svg id="prev-button"
    width={41}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#prev-button_svg__a)">
      <g id="prev-button-box" filter="url(#prev-button_svg__b)">
        <rect x={4} y={3} width={30} height={6} rx={3} />
      </g>
      <g id="prev-button-text" filter="url(#prev-button_svg__c)">
        <path d="M15.415 6.606h-.95v-.383h.95c.184 0 .333-.03.447-.088a.549.549 0 0 0 .25-.244.767.767 0 0 0 .08-.357.76.76 0 0 0-.08-.344.595.595 0 0 0-.25-.259.878.878 0 0 0-.447-.1h-.84V8h-.47V4.445h1.31c.269 0 .496.047.681.14a.984.984 0 0 1 .423.385c.096.163.144.35.144.56 0 .227-.048.422-.144.583a.92.92 0 0 1-.422.368 1.665 1.665 0 0 1-.682.125Zm2.227-.833V8h-.452V5.358h.44l.012.415Zm.825-.43-.002.42a1.143 1.143 0 0 0-.22-.02.726.726 0 0 0-.276.05.571.571 0 0 0-.203.137.658.658 0 0 0-.131.21c-.031.08-.052.167-.062.263l-.126.074c0-.16.015-.31.046-.45.033-.14.082-.263.149-.37a.728.728 0 0 1 .254-.255.713.713 0 0 1 .571-.058Zm1.465 2.706a1.3 1.3 0 0 1-.5-.093 1.135 1.135 0 0 1-.384-.266 1.182 1.182 0 0 1-.244-.405 1.486 1.486 0 0 1-.085-.513v-.103c0-.214.031-.406.095-.573.063-.17.15-.313.259-.43a1.11 1.11 0 0 1 .37-.266c.139-.06.282-.09.43-.09.19 0 .352.032.489.097a.89.89 0 0 1 .339.274c.088.115.153.252.195.41.043.156.064.327.064.513v.202h-1.973v-.369h1.521v-.034a1.124 1.124 0 0 0-.073-.341.614.614 0 0 0-.195-.274.57.57 0 0 0-.367-.107.615.615 0 0 0-.505.256.96.96 0 0 0-.144.31 1.57 1.57 0 0 0-.051.422v.103c0 .125.017.243.05.354a.907.907 0 0 0 .155.288c.068.083.15.148.246.195.098.048.209.071.332.071.16 0 .295-.032.406-.097.11-.066.207-.153.29-.262l.274.218c-.057.086-.13.168-.218.246a1.037 1.037 0 0 1-.324.19 1.258 1.258 0 0 1-.452.074Zm2.324-.457.723-2.234h.461L22.49 8h-.302l.068-.408Zm-.603-2.234.745 2.246.051.396h-.303l-.957-2.642h.464Z" />
      </g>
    </g>
    <defs>
      <filter
        id="prev-button_svg__a"
        x={0}
        y={3}
        width={38}
        height={14}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_2"
          result="shape"
        />
      </filter>
      <filter
        id="prev-button_svg__b"
        x={3}
        y={0}
        width={38}
        height={14}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={3} dy={1} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_2"
          result="shape"
        />
      </filter>
      <filter
        id="prev-button_svg__c"
        x={14.104}
        y={4.445}
        width={17.336}
        height={11.604}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={4} dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_2"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgPrevButton;

