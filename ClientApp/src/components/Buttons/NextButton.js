const SvgNextButton = (props) => (
  <svg
    id="next-button"
    width={279}
    height={98}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="next-button-box" filter="url(#next-button_svg__a)">
      <rect width={270} height={90} rx={24} />
    </g>
    <g id="next-button-text" filter="url(#next-button_svg__b)">
      <path d="M111.242 23.344V66h-5.683L84.084 33.1V66H78.43V23.344h5.654l21.562 32.988V23.344h5.596Zm22.354 43.242c-2.207 0-4.209-.371-6.006-1.113a13.612 13.612 0 0 1-4.6-3.194c-1.269-1.367-2.246-2.988-2.929-4.863-.684-1.875-1.026-3.926-1.026-6.152v-1.23c0-2.579.381-4.874 1.143-6.886.761-2.03 1.797-3.75 3.105-5.156 1.309-1.406 2.793-2.47 4.453-3.193a12.792 12.792 0 0 1 5.157-1.084c2.265 0 4.218.39 5.859 1.172 1.66.781 3.018 1.875 4.072 3.281 1.055 1.387 1.836 3.027 2.344 4.922.508 1.875.762 3.926.762 6.152v2.432h-23.672V47.25h18.252v-.41a13.508 13.508 0 0 0-.879-4.102 7.374 7.374 0 0 0-2.344-3.281c-1.074-.86-2.539-1.289-4.394-1.289-1.231 0-2.364.264-3.399.791-1.035.508-1.924 1.27-2.666 2.285-.742 1.016-1.318 2.256-1.728 3.72-.411 1.466-.616 3.155-.616 5.07v1.23c0 1.504.205 2.92.616 4.248.429 1.308 1.045 2.46 1.845 3.457a8.86 8.86 0 0 0 2.959 2.343c1.172.567 2.5.85 3.985.85 1.914 0 3.535-.39 4.863-1.172 1.328-.781 2.49-1.826 3.486-3.135l3.282 2.608c-.684 1.035-1.553 2.021-2.608 2.959-1.055.937-2.353 1.7-3.896 2.285-1.524.586-3.33.879-5.42.879ZM155.92 34.3l6.943 11.543 7.032-11.543h6.357l-10.371 15.644L176.574 66h-6.269l-7.325-11.895L155.656 66h-6.299l10.664-16.055-10.341-15.644h6.24Zm39.375 0v4.16h-17.139V34.3h17.139Zm-11.338-7.705h5.42v31.552c0 1.075.166 1.885.498 2.432.332.547.762.908 1.289 1.084a5.342 5.342 0 0 0 1.699.264c.449 0 .918-.04 1.407-.117.507-.098.888-.176 1.142-.235l.029 4.424c-.429.137-.996.264-1.699.38-.683.138-1.513.206-2.49.206-1.328 0-2.549-.264-3.662-.791s-2.002-1.406-2.666-2.637c-.645-1.25-.967-2.93-.967-5.039V26.596Z" />
    </g>
    <defs>
      <filter
        id="next-button_svg__a"
        x={0}
        y={0}
        width={279}
        height={98}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={5} dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_3" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_3"
          result="shape"
        />
      </filter>
      <filter
        id="next-button_svg__b"
        x={78.43}
        y={23.344}
        width={125.012}
        height={51.242}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_3" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_3"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgNextButton;

