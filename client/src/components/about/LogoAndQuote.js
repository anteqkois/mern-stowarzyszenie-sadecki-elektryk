import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { WidthDeviceContext } from '../../context/Context';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const StyledLogo = styled.svg`
  width: 100vw;
  overflow: visible;
  margin-bottom: 300px;
`;

const StyledQuote = styled.h2`
  font-size: 400px;
  padding: 0.6em 2em;
  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke-width: 8px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.accent};
`;

const LogoAndQuote = () => {
  const { isMobile } = useContext(WidthDeviceContext);

  const quote = useRef(null);
  
  const logo = useRef(null);
  const largeGear = useRef(null);
  const smalGear = useRef(null);
  const underLighting = useRef(null);
  const lighting = useRef(null);
  const text = useRef(null);
  const curveText = useRef(null);

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  //Naprawić error pojawiający się przy przejściu z widoki desktopu na mobile
  useEffect(() => {
    !isMobile && handleQuoteAnimation();
    !isMobile && handleTextAnimation();
  }, [isMobile]);
  
  const handleTextAnimation = () => {

    gsap.set(largeGear.current, { scale: 1.5, x: 1000, y: 500, opacity: 0 });
    gsap.set(smalGear.current, { scale: 1.5, x: 1000, y: -500, opacity: 0 });
    gsap.set(underLighting.current, { scale: 1.5, x: -1000,y: 1000, opacity: 0 });
    gsap.set(lighting.current, { scale: 1.5, x: 1000,y: -1000, opacity: 0 });
    gsap.set(text.current, { opacity: 0 });
    gsap.set(curveText.current, { opacity: 0 });

    const tl = gsap.timeline({ default: { ease: 'none' } });

    tl.addLabel('gearAnimation', 0)
      .to(
        largeGear.current,
        { scale: 1, x: 0, y: 0, opacity: 1},
        'gearAnimation',
      )
      .to(
        smalGear.current,
        { scale: 1, x: 0, y: 0, opacity: 1 },
        'gearAnimation',
      )
      .to(
        underLighting.current,
        {
          scale: 1,
          x: 0,
          y: 0,
          opacity: 1,
        },
        'gearAnimation',
      )
      .to(
        lighting.current,
        { scale: 1, x: 0, y: 0, opacity: 1 },
        'gearAnimation',
      )
      .addLabel('textAnimation', 1)
      .to(text.current, { opacity: 1}, 'textAnimation')
      .to(curveText.current, { opacity: 1 }, 'textAnimation');

    ScrollTrigger.create({
      animation: tl,
      trigger: logo.current,
      start: 'top 200px',
      pin: true,
      scrub: 0.5,
      end: '1400px',
    });
  };

  const handleQuoteAnimation = () => {
    gsap.set(quote.current, { scale: 0.5 });

    const tl = gsap.timeline({ default: { ease: 'none' } });

    tl.to(quote.current, { scale: 1, x: '-=700', duration: 1 })
      .to(quote.current, {
        x: `+=${-quote.current.scrollWidth + 1800}`,
        duration: 8,
      })
      .to(quote.current, {
        scale: 0.5,
        x: '+=8500',
        duration: 1,
      });

    ScrollTrigger.create({
      animation: tl,
      trigger: quote.current,
      start: 'top 250px',
      pin: true,
      scrub: 0.5,
      end: quote.current.scrollWidth,
      // onLeave: ()=>{
      //   handleTextAnimation();
      // }
    });
  };

  return (
    <>
      <StyledQuote ref={quote}>
        ,,Założyliśmy stowarzyszenie, bo łączy nas solidarność interesów,
        wspólność celów i potrzeb.”
      </StyledQuote>
      <StyledLogo
        ref={logo}
        width="493"
        height="558"
        viewBox="0 0 493 568"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="logo">
          <path
            ref={underLighting}
            id="underLighting"
            d="M177.734 380.694C158.456 379.524 156.997 377.725 146.5 375.5L240.5 254L127 274L231.5 151C236.5 154.5 238.127 154.591 252.5 168.5L192 240L284.5 218.5C286.547 225.042 286.138 223.268 288 230L177.734 380.694Z"
            fill="#173F42"
          />
          <path
            ref={smalGear}
            id="smalGear"
            d="M316.969 164.36L373.5 122.5C382.699 130.83 387.951 137.674 392.5 148.5L355.5 173.5C361.298 185.06 365.405 193.26 368.423 205.772L412.815 198.812C415.684 204.054 419.498 216.187 417.929 231.428L374.429 236.428C375.874 251.571 376.167 255.545 374.5 272L417.697 287.625C417.865 297.877 417.819 308.037 411.5 325.5L341.028 298.663C346.627 239.518 344.207 210.911 316.969 164.36Z"
            fill="black"
          />
          <g id="lightingAndText">
            <path
              ref={lighting}
              id="lighting"
              d="M361 0L280 8.5L64.5 314L175 290L31.5 478.5L21 458L0 544L76.5 501L54 496L241.5 253.5L128 273.5L361 0Z"
              fill="black"
            />
            <path
              ref={text}
              id="text"
              d="M138.476 244.514C137.882 244.052 137.255 243.905 136.594 244.071C135.938 244.229 135.023 244.699 133.847 245.479C132.671 246.26 131.657 246.857 130.804 247.27C128.036 248.618 125.715 248.564 123.842 247.108C122.909 246.383 122.298 245.474 122.008 244.383C121.717 243.279 121.761 242.076 122.141 240.776C122.513 239.469 123.182 238.196 124.147 236.954C125.088 235.744 126.146 234.829 127.321 234.208C128.502 233.58 129.7 233.312 130.916 233.403C132.123 233.489 133.24 233.93 134.265 234.727L131.118 238.775C130.432 238.241 129.735 238.04 129.028 238.17C128.326 238.293 127.697 238.713 127.14 239.43C126.576 240.154 126.291 240.855 126.286 241.53C126.278 242.192 126.521 242.715 127.014 243.099C127.446 243.435 128.019 243.509 128.733 243.322C129.44 243.129 130.435 242.598 131.718 241.727C132.993 240.851 134.137 240.206 135.15 239.794C137.613 238.79 139.766 239.004 141.609 240.437C143.081 241.581 143.806 243.036 143.783 244.799C143.761 246.563 142.997 248.412 141.492 250.347C140.431 251.712 139.227 252.76 137.878 253.493C136.527 254.212 135.209 254.523 133.923 254.426C132.636 254.316 131.437 253.83 130.327 252.966L133.492 248.896C134.394 249.597 135.241 249.884 136.032 249.757C136.822 249.617 137.624 249.022 138.439 247.974C138.961 247.303 139.229 246.664 139.243 246.057C139.256 245.436 139 244.921 138.476 244.514ZM144.946 217.147L141.017 222.201L154.721 232.855L151.565 236.914L137.861 226.26L134.004 231.221L130.87 228.785L141.812 214.711L144.946 217.147ZM163.399 205.035C165.041 206.311 166.257 207.746 167.048 209.338C167.839 210.93 168.14 212.556 167.951 214.215C167.76 215.86 167.108 217.4 165.993 218.834C164.878 220.268 163.561 221.285 162.043 221.886C160.517 222.481 158.898 222.614 157.187 222.285C155.481 221.949 153.822 221.179 152.21 219.975L151.262 219.238C149.612 217.955 148.393 216.524 147.603 214.946C146.813 213.354 146.512 211.728 146.701 210.069C146.895 208.402 147.553 206.848 148.674 205.406C149.783 203.98 151.111 202.972 152.659 202.381C154.207 201.791 155.848 201.676 157.585 202.036C159.319 202.383 160.999 203.181 162.624 204.432L163.399 205.035ZM159.484 208.615C157.811 207.314 156.323 206.61 155.022 206.501C153.72 206.379 152.664 206.838 151.855 207.879C150.272 209.914 150.962 212.177 153.926 214.666L155.154 215.639C156.804 216.922 158.285 217.634 159.597 217.776C160.909 217.918 161.985 217.45 162.824 216.37C163.621 215.345 163.8 214.216 163.36 212.984C162.921 211.751 161.887 210.496 160.258 209.217L159.484 208.615ZM177.608 190.458L168.551 180.318L171.68 176.293L185.739 192.957L182.467 197.167L171.115 191.96L178.996 201.631L175.733 205.829L156.107 196.323L159.245 192.287L171.305 198.564L162.545 188.043L165.224 184.597L177.608 190.458ZM194.291 175.466L189.967 181.029L192.357 184.446L188.985 188.783L176.948 169.516L179.915 165.7L201.591 172.569L198.201 176.929L194.291 175.466ZM187.588 177.621L190.402 174.001L183.15 171.276L187.588 177.621ZM202.12 159.621L200.412 161.819L206.356 166.44L203.2 170.499L186.362 157.408L191.514 150.782C193.066 148.785 194.723 147.568 196.485 147.132C198.247 146.696 199.937 147.107 201.556 148.366C202.728 149.277 203.514 150.271 203.913 151.348C204.318 152.418 204.367 153.644 204.06 155.025L213.582 156.787L213.755 156.922L210.375 161.271L202.12 159.621ZM197.278 159.382L199.274 156.815C199.873 156.044 200.122 155.31 200.021 154.612C199.918 153.902 199.504 153.264 198.779 152.701C198.055 152.138 197.335 151.894 196.621 151.969C195.899 152.039 195.241 152.455 194.648 153.218L192.652 155.786L197.278 159.382ZM216.279 147.232L222.537 139.183L225.659 141.611L215.464 154.725L213.324 153.062L207.999 136.045L201.724 144.117L198.59 141.68L208.759 128.601L210.84 130.219L216.279 147.232ZM223.008 125.355L218.109 116.574L221.517 112.191L228.09 126.003L234.138 130.705L230.937 134.822L224.889 130.12L209.891 127.144L213.281 122.784L223.008 125.355ZM242.088 111.244C241.494 110.782 240.867 110.635 240.206 110.801C239.551 110.959 238.635 111.429 237.459 112.209C236.283 112.99 235.269 113.587 234.416 114C231.648 115.348 229.327 115.295 227.454 113.838C226.521 113.113 225.91 112.205 225.62 111.113C225.329 110.009 225.373 108.806 225.753 107.506C226.125 106.2 226.794 104.926 227.759 103.685C228.7 102.474 229.758 101.559 230.933 100.938C232.114 100.31 233.312 100.042 234.528 100.133C235.735 100.219 236.852 100.66 237.877 101.457L234.73 105.505C234.044 104.971 233.347 104.77 232.64 104.9C231.938 105.023 231.309 105.443 230.752 106.16C230.188 106.884 229.904 107.585 229.898 108.26C229.89 108.922 230.133 109.445 230.626 109.829C231.058 110.165 231.631 110.239 232.345 110.052C233.052 109.859 234.047 109.328 235.33 108.457C236.605 107.581 237.749 106.936 238.762 106.524C241.225 105.52 243.378 105.734 245.221 107.167C246.693 108.311 247.418 109.766 247.395 111.529C247.373 113.293 246.609 115.142 245.104 117.077C244.044 118.442 242.839 119.49 241.49 120.223C240.139 120.942 238.821 121.253 237.535 121.156C236.248 121.046 235.049 120.56 233.939 119.696L237.104 115.626C238.006 116.327 238.853 116.614 239.644 116.487C240.434 116.347 241.236 115.752 242.051 114.704C242.573 114.033 242.841 113.394 242.855 112.787C242.868 112.166 242.612 111.651 242.088 111.244ZM252.405 100.766L258.663 92.7169L261.785 95.1444L251.589 108.259L249.45 106.595L244.125 89.5785L237.849 97.6506L234.715 95.214L244.884 82.1345L246.966 83.7529L252.405 100.766ZM264.855 76.4712L259.892 82.8549L263.904 85.9747L269.767 78.4346L272.889 80.8622L263.871 92.4615L247.033 79.3706L256.069 67.7482L259.203 70.1848L253.323 77.748L256.873 80.5082L261.836 74.1246L264.855 76.4712ZM285.755 64.3133L282.617 68.3494L267.5 66.1708L277.978 74.3167L274.822 78.3758L257.984 65.285L261.14 61.2258L276.248 63.4159L265.77 55.2701L268.917 51.2225L285.755 64.3133ZM291.761 56.5882L288.614 60.6358L271.776 47.5449L274.923 43.4973L291.761 56.5882ZM295.586 36.9436L290.623 43.3272L294.636 46.4471L300.498 38.907L303.62 41.3345L294.602 52.9338L277.764 39.8429L286.8 28.2205L289.934 30.6571L284.054 38.2203L287.604 40.9806L292.567 34.5969L295.586 36.9436Z"
              fill="white"
              fill-opacity="0.8"
            />
          </g>
          <g id="largeGearAndText">
            <path
              ref={largeGear}
              id="largeGear"
              d="M146.5 375.502L79.9987 461.5C109.879 475.033 161.966 482.717 198.499 480.747L190.33 432.209C241.779 426.002 265.163 410.84 296.5 377L331 419C345.152 404.84 358.881 388.408 368.5 371.502C378.277 354.316 385.299 335.448 389.5 317L341.029 298.663C348.683 244.71 344.557 210.077 316.97 164.359L359.999 132.501C342.472 106.48 318.362 80.5543 300 70.4998L231.5 151C255.865 168.311 279.631 196.903 288 231.002C294.781 263.104 290.045 290.678 274.5 318.002C259.496 345.543 234.268 368.801 203.88 378.348C182.803 382.258 167.09 380.595 146.5 375.502Z"
              fill="#FB030F"
            />
            <g ref={curveText} id="curveText">
              <path
                id="S"
                d="M174.906 409.636C174.894 408.884 174.617 408.302 174.073 407.891C173.54 407.479 172.601 407.058 171.256 406.63C169.912 406.201 168.811 405.783 167.955 405.376C165.171 404.061 163.761 402.217 163.725 399.844C163.707 398.663 164.033 397.617 164.703 396.709C165.382 395.79 166.348 395.072 167.6 394.555C168.852 394.028 170.264 393.753 171.836 393.729C173.369 393.705 174.745 393.958 175.964 394.486C177.193 395.014 178.152 395.781 178.842 396.786C179.531 397.782 179.885 398.929 179.905 400.228L174.778 400.306C174.765 399.437 174.486 398.767 173.942 398.297C173.408 397.826 172.686 397.598 171.778 397.612C170.86 397.626 170.136 397.842 169.605 398.26C169.084 398.669 168.828 399.185 168.838 399.81C168.846 400.357 169.146 400.85 169.739 401.291C170.332 401.721 171.369 402.164 172.851 402.621C174.332 403.067 175.551 403.556 176.506 404.088C178.831 405.381 180.011 407.195 180.046 409.528C180.075 411.393 179.394 412.869 178.004 413.955C176.614 415.04 174.694 415.602 172.243 415.639C170.515 415.665 168.943 415.382 167.527 414.788C166.121 414.184 165.054 413.351 164.325 412.288C163.605 411.214 163.235 409.975 163.213 408.569L168.369 408.49C168.386 409.633 168.692 410.473 169.286 411.011C169.89 411.539 170.856 411.793 172.184 411.772C173.034 411.759 173.7 411.569 174.182 411.2C174.675 410.821 174.916 410.3 174.906 409.636Z"
                fill="#FCD500"
              />
              <path
                id="&#196;&#132;"
                d="M195.66 391.555L207.137 411.184L205.594 411.457C204.91 411.965 204.434 412.416 204.167 412.81C203.911 413.212 203.826 413.659 203.913 414.149C204.019 414.745 204.36 414.992 204.937 414.89C205.225 414.839 205.542 414.694 205.886 414.455L206.863 416.781C206.236 417.328 205.475 417.681 204.581 417.839C203.523 418.027 202.623 417.898 201.88 417.455C201.146 417.009 200.696 416.315 200.53 415.373C200.308 414.123 200.675 413.002 201.63 412.009L199.779 408.44L192.841 409.667L192.323 413.805L186.914 414.762L190.9 392.398L195.66 391.555ZM193.36 405.544L197.875 404.745L194.322 397.861L193.36 405.544Z"
                fill="#FCD500"
              />
              <path
                id="D"
                d="M214.572 409.096L207.494 388.977L213.975 386.697C215.753 386.071 217.494 385.914 219.197 386.226C220.898 386.528 222.404 387.277 223.715 388.472C225.031 389.655 226.015 391.157 226.666 392.978L226.992 393.903C227.64 395.746 227.83 397.537 227.562 399.277C227.301 401.005 226.606 402.533 225.479 403.861C224.358 405.177 222.929 406.146 221.191 406.768L214.572 409.096ZM213.662 391.015L218.11 403.659L219.796 403.066C221.187 402.576 222.082 401.708 222.481 400.459C222.877 399.202 222.732 397.597 222.045 395.644L221.739 394.773C221.055 392.829 220.166 391.496 219.073 390.773C217.98 390.05 216.72 389.939 215.292 390.442L213.662 391.015Z"
                fill="#FCD500"
              />
              <path
                id="E"
                d="M245.822 385.712L238.682 389.507L241.068 393.996L249.501 389.512L251.358 393.005L238.385 399.901L228.373 381.069L241.372 374.159L243.235 377.664L234.776 382.161L236.887 386.132L244.027 382.336L245.822 385.712Z"
                fill="#FCD500"
              />
              <path
                id="C"
                d="M267.566 372.757C268.396 373.989 268.858 375.282 268.951 376.636C269.039 377.982 268.736 379.302 268.043 380.596C267.357 381.884 266.332 383.034 264.968 384.048C262.719 385.719 260.402 386.302 258.02 385.797C255.637 385.292 253.453 383.703 251.467 381.03L250.838 380.184C249.592 378.506 248.793 376.825 248.441 375.139C248.092 373.441 248.212 371.842 248.803 370.345C249.388 368.84 250.402 367.552 251.844 366.48C253.921 364.937 255.999 364.245 258.076 364.405C260.148 364.557 261.983 365.529 263.583 367.321L259.467 370.379C258.661 369.36 257.842 368.806 257.011 368.718C256.179 368.631 255.258 368.962 254.246 369.714C253.219 370.477 252.752 371.42 252.845 372.543C252.937 373.667 253.598 375.08 254.827 376.783L255.726 377.994C257.083 379.82 258.28 380.957 259.317 381.403C260.362 381.843 261.445 381.647 262.566 380.814C263.515 380.109 264.074 379.347 264.244 378.528C264.413 377.708 264.153 376.801 263.462 375.805L267.566 372.757Z"
                fill="#FCD500"
              />
              <path
                id="K"
                d="M277.486 362.303L277.673 365.429L281.704 369.352L278.118 373.036L262.835 358.16L266.421 354.476L273.16 361.035L272.464 357.864L270.876 349.899L275.31 345.343L277.043 357.088L290.593 360.22L286.343 364.586L277.486 362.303Z"
                fill="#FCD500"
              />
              <path
                id="I"
                d="M298.51 349.845L295.418 353.935L278.403 341.076L281.494 336.985L298.51 349.845Z"
                fill="#FCD500"
              />
              <path
                id="E_2"
                d="M312.522 303.549L309.631 311.1L314.378 312.918L317.793 303.998L321.486 305.412L316.233 319.133L296.315 311.507L301.579 297.759L305.286 299.178L301.861 308.125L306.06 309.733L308.952 302.182L312.522 303.549Z"
                fill="#FCD500"
              />
              <path
                id="L"
                d="M320.992 292.02L322.989 283.296L326.844 284.178L323.701 297.915L302.91 293.158L304.057 288.145L320.992 292.02Z"
                fill="#FCD500"
              />
              <path
                id="E_3"
                d="M320.225 261.917L319.545 269.974L324.61 270.402L325.413 260.885L329.354 261.217L328.118 275.858L306.866 274.064L308.104 259.395L312.059 259.729L311.254 269.275L315.735 269.653L316.415 261.596L320.225 261.917Z"
                fill="#FCD500"
              />
              <path
                id="K_2"
                d="M321.068 246.652L323.516 248.604L329.129 248.232L329.469 253.362L308.188 254.772L307.848 249.641L317.231 249.02L314.409 247.416L307.426 243.269L307.005 236.925L316.895 243.493L328.287 235.515L328.69 241.596L321.068 246.652Z"
                fill="#FCD500"
              />
              <path
                id="T"
                d="M306.425 215.43L307.84 221.673L324.769 217.836L325.905 222.851L308.976 226.687L310.365 232.816L306.494 233.694L302.553 216.307L306.425 215.43Z"
                fill="#FCD500"
              />
              <path
                id="R"
                d="M311.064 199.555L312.095 202.14L319.088 199.35L320.994 204.125L301.184 212.029L298.074 204.233C297.136 201.883 296.925 199.839 297.44 198.098C297.955 196.358 299.164 195.108 301.069 194.348C302.448 193.798 303.703 193.623 304.834 193.823C305.962 194.015 307.044 194.592 308.081 195.556L314.417 188.234L314.621 188.152L316.662 193.268L311.064 199.555ZM308.408 203.611L307.203 200.59C306.841 199.683 306.334 199.097 305.681 198.832C305.016 198.561 304.257 198.596 303.404 198.936C302.552 199.276 301.977 199.773 301.681 200.428C301.376 201.086 301.402 201.864 301.761 202.762L302.966 205.782L308.408 203.611Z"
                fill="#FCD500"
              />
              <path
                id="Y"
                d="M296.487 180.127L286.523 181.483L283.686 176.711L298.945 175.632L305.53 171.718L308.195 176.2L301.61 180.115L293.365 192.992L290.543 188.245L296.487 180.127Z"
                fill="#FCD500"
              />
              <path
                id="K_3"
                d="M287.01 159.395L290.138 159.539L294.466 155.945L297.751 159.9L281.343 173.527L278.058 169.572L285.293 163.563L282.066 163.92L273.978 164.658L269.916 159.768L281.778 159.285L286.323 146.141L290.217 150.829L287.01 159.395Z"
                fill="#FCD500"
              />
            </g>
          </g>
        </g>
      </StyledLogo>
    </>
  );
};

export default LogoAndQuote;
