import React from "react"
import { useBird } from "../Game/Context"
import { BIRD_SIZE } from "../Game/Global"

export const BirdsFrame = () => {

  const { birdPosition } = useBird()

  const [birdFrame, setBirdFrame] = React.useState<number>(BIRD_SIZE)
  React.useEffect(() => {
    const intervalID = setInterval(() => {
      setBirdFrame(prev => prev == BIRD_SIZE ? -BIRD_SIZE : prev == -BIRD_SIZE ? -BIRD_SIZE * 2 : BIRD_SIZE)
    }, 800)
    return () => clearInterval(intervalID)
  }, [])


  return (
    <svg width={BIRD_SIZE * 3 + 4} style={{ position: 'absolute', left: birdFrame }} viewBox="0 0 192 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5965 3.74269H18.3392V7.48538H14.5965V3.74269Z" fill="black" />
      <path d="M18.3392 3.74269H22.0819V7.48538H18.3392V3.74269Z" fill="black" />
      <path d="M22.0819 0H25.8246V3.74269H22.0819V0Z" fill="black" />
      <path d="M25.8246 0H29.5673V3.74269H25.8246V0Z" fill="black" />
      <path d="M29.5673 0H33.3099V3.74269H29.5673V0Z" fill="black" />
      <path d="M33.3099 0H37.0526V3.74269H33.3099V0Z" fill="black" />
      <path d="M33.6842 3.74269H37.4269V7.48538H33.6842V3.74269Z" fill="black" />
      <path d="M29.9415 7.48538H33.6842V11.2281H29.9415V7.48538Z" fill="black" />
      <path d="M29.9415 11.2281H33.6842V14.9708H29.9415V11.2281Z" fill="black" />
      <path d="M33.6842 7.48538H37.4269V3.74269H44.9123V7.48538H48.655V11.2281H44.9123V18.7135H48.655V11.2281H52.3977V18.7135V22.4561H44.9123H41.1696V18.7135H37.4269V11.2281H33.6842V7.48538Z" fill="#FFFEFF" />
      <path d="M29.9415 14.9708H33.6842V18.7135H29.9415V14.9708Z" fill="black" />
      <path d="M33.6842 18.7135H37.4269V22.4561H33.6842V18.7135Z" fill="black" />
      <path d="M37.4269 18.7135H33.6842V11.2281H37.4269V18.7135H41.1696V22.4561H37.4269V18.7135Z" fill="#ADE1D9" />
      <path d="M44.9123 11.2281H48.655V14.9708H44.9123V11.2281Z" fill="black" />
      <path d="M44.9123 14.9708H48.655V18.7135H44.9123V14.9708Z" fill="black" />
      <path d="M37.0526 0H41.1696V3.74269H37.0526V0Z" fill="black" />
      <path d="M41.1696 0H44.9123V3.74269H41.1696V0Z" fill="black" />
      <path d="M44.9123 3.74269H48.655V7.48538H44.9123V3.74269Z" fill="black" />
      <path d="M48.655 7.48538H52.3977V11.2281H48.655V7.48538Z" fill="black" />
      <path d="M52.3977 11.2281H56.1404V14.9708H52.3977V11.2281Z" fill="black" />
      <path d="M52.3977 14.9708H56.1404V18.7135H52.3977V14.9708Z" fill="black" />
      <path d="M52.3977 18.7135H56.1404V22.4561H52.3977V18.7135Z" fill="black" />
      <path d="M37.4269 22.4561H41.1696V26.1988H37.4269V22.4561Z" fill="black" />
      <path d="M41.1696 22.4561H44.9123V26.1988H41.1696V22.4561Z" fill="black" />
      <path d="M44.9123 22.4561H48.655V26.1988H44.9123V22.4561Z" fill="black" />
      <path d="M48.655 22.4561H52.3977V26.1988H48.655V22.4561Z" fill="black" />
      <path d="M52.3977 22.4561H56.1404V26.1988H52.3977V22.4561Z" fill="black" />
      <path d="M56.1404 22.4561H60.2573V26.1988H56.1404V22.4561Z" fill="black" />
      <path d="M60.2573 26.1988H64V29.9415H60.2573V26.1988Z" fill="black" />
      <path d="M56.5146 29.9415H60.2573V33.6842H56.5146V29.9415Z" fill="black" />
      <path d="M56.5146 33.6842H60.2573V37.4269H56.5146V33.6842Z" fill="black" />
      <path d="M52.7719 29.9415H56.5146V33.6842H52.7719V29.9415Z" fill="black" />
      <path d="M49.0292 29.9415H52.7719V33.6842H49.0292V29.9415Z" fill="black" />
      <path d="M45.2866 29.9415H49.0292V33.6842H45.2866V29.9415Z" fill="black" />
      <path d="M41.5439 29.9415H45.2866V33.6842H41.5439V29.9415Z" fill="black" />
      <path d="M37.4269 29.9415H41.5439V33.6842H37.4269V29.9415Z" fill="black" />
      <path d="M33.6842 26.1988H37.4269V29.9415H33.6842V26.1988Z" fill="black" />
      <path d="M33.6842 29.9415H37.4269V26.1988H60.2573V29.9415H37.4269V33.6842H56.5146V37.4269H37.4269V33.6842H33.6842V29.9415Z" fill="#D40207" />
      <path d="M29.9415 29.9415H33.6842V33.6842H29.9415V29.9415Z" fill="black" />
      <path d="M33.6842 33.6842H37.4269V37.4269H33.6842V33.6842Z" fill="black" />
      <path d="M37.4269 37.4269H41.5439V41.9181H37.4269V37.4269Z" fill="black" />
      <path d="M41.5439 37.4269H45.2866V41.9181H41.5439V37.4269Z" fill="black" />
      <path d="M45.2866 37.4269H49.0292V41.9181H45.2866V37.4269Z" fill="black" />
      <path d="M49.0292 37.4269H52.7719V41.9181H49.0292V37.4269Z" fill="black" />
      <path d="M52.7719 37.4269H56.5146V41.9181H52.7719V37.4269Z" fill="black" />
      <path d="M33.6842 41.9181H37.8012V45.6608H33.6842V41.9181Z" fill="black" />
      <path d="M29.9415 41.9181H33.6842V45.6608H29.9415V41.9181Z" fill="black" />
      <path d="M26.1988 41.9181H29.9415V45.6608H26.1988V41.9181Z" fill="black" />
      <path d="M22.4561 41.9181H26.1988V45.6608H22.4561V41.9181Z" fill="black" />
      <path d="M18.7135 41.9181H22.4561V45.6608H18.7135V41.9181Z" fill="black" />
      <path d="M14.9708 38.1754H18.7135V41.9181H14.9708V38.1754Z" fill="black" />
      <path d="M11.2281 38.1754H14.9708V41.9181H11.2281V38.1754Z" fill="black" />
      <path d="M7.48538 34.4327H11.2281V38.1754H7.48538V34.4327Z" fill="black" />
      <path d="M7.48538 29.9415H11.2281V34.4327H7.48538V29.9415Z" fill="black" />
      <path d="M11.2281 29.9415H14.9708V33.6842H11.2281V29.9415Z" fill="black" />
      <path d="M14.9708 29.9415H18.7135V33.6842H14.9708V29.9415Z" fill="black" />
      <path d="M18.7135 26.1988H22.4561V29.9415H18.7135V26.1988Z" fill="black" />
      <path d="M18.7135 22.4561H22.4561V26.1988H18.7135V29.9415H7.48538V26.1988H3.74269V22.4561H7.48538V26.1988H18.7135V22.4561Z" fill="#F9D9A8" />
      <path d="M22.4561 22.4561H26.1988V26.1988H22.4561V22.4561Z" fill="black" />
      <path d="M22.4561 18.7135H26.1988V22.4561H22.4561V18.7135Z" fill="black" />
      <path d="M18.7135 14.9708H22.4561V18.7135H18.7135V14.9708Z" fill="black" />
      <path d="M3.74269 14.9708H18.7135V18.7135H22.4561V22.4561H18.7135V26.1988H7.48538V22.4561H3.74269V14.9708Z" fill="white" />
      <path d="M14.9708 11.2281H18.7135V14.9708H14.9708V11.2281Z" fill="black" />
      <path d="M10.8538 7.48538H14.5965V11.2281H10.8538V7.48538Z" fill="black" />
      <path d="M11.2281 11.2281H14.9708V14.9708H11.2281V11.2281Z" fill="black" />
      <path d="M7.48538 11.2281H11.2281V14.9708H7.48538V11.2281Z" fill="black" />
      <path d="M3.74269 11.2281H7.48538V14.9708H3.74269V11.2281Z" fill="black" />
      <path d="M0 14.9708H3.74269V19.462H0V14.9708Z" fill="black" />
      <path d="M0 19.462H3.74269V23.2047H0V19.462Z" fill="black" />
      <path d="M0 23.2047H3.74269V26.1988H0V23.2047Z" fill="black" />
      <path d="M3.74269 26.1988H7.48538V29.9415H3.74269V26.1988Z" fill="black" />
      <path d="M22.2316 3.74269H33.6842V7.48538H22.2316V11.2281H14.5965V7.48538H22.2316V3.74269Z" fill="#FDE4BB" />
      <path d="M22.0819 7.48538H29.9415V18.7135H33.6842V22.4561H37.4269V26.1988H33.6842V29.9415H22.4561V26.1988H26.1988V18.7135H22.4561V14.9708H18.7135V11.2281H22.0819V7.48538Z" fill="#FEC400" />
      <path d="M18.7135 29.9415H29.9415V33.6842H33.6842V37.4269H37.4269V41.9181H18.7135V38.1754H11.2281V33.6842H18.7135V29.9415Z" fill="#F57B00" />
      <path d="M78.8837 3.72093H82.6047V7.44186H78.8837V3.72093Z" fill="black" />
      <path d="M82.6047 3.72093H86.3256V7.44186H82.6047V3.72093Z" fill="black" />
      <path d="M86.3256 0H90.0465V3.72093H86.3256V0Z" fill="black" />
      <path d="M90.0465 0H93.7674V3.72093H90.0465V0Z" fill="black" />
      <path d="M93.7674 0H97.4884V3.72093H93.7674V0Z" fill="black" />
      <path d="M97.4884 0H101.209V3.72093H97.4884V0Z" fill="black" />
      <path d="M97.8605 3.72093H101.581V7.44186H97.8605V3.72093Z" fill="black" />
      <path d="M94.1395 7.44186H97.8605V11.1628H94.1395V7.44186Z" fill="black" />
      <path d="M94.1395 11.1628H97.8605V14.8837H94.1395V11.1628Z" fill="black" />
      <path d="M97.8605 7.44186H101.581V3.72093H109.023V7.44186H112.744V11.1628H109.023V18.6047H112.744V11.1628H116.465V18.6047V22.3256H109.023H105.302V18.6047H101.581V11.1628H97.8605V7.44186Z" fill="#FFFEFF" />
      <path d="M94.1395 14.8837H97.8605V18.6047H94.1395V14.8837Z" fill="black" />
      <path d="M97.8605 18.6047H101.581V22.3256H97.8605V18.6047Z" fill="black" />
      <path d="M101.581 18.6047H97.8605V11.1628H101.581V18.6047H105.302V22.3256H101.581V18.6047Z" fill="#ADE1D9" />
      <path d="M109.023 11.1628H112.744V14.8837H109.023V11.1628Z" fill="black" />
      <path d="M109.023 14.8837H112.744V18.6047H109.023V14.8837Z" fill="black" />
      <path d="M101.209 0H105.302V3.72093H101.209V0Z" fill="black" />
      <path d="M105.302 0H109.023V3.72093H105.302V0Z" fill="black" />
      <path d="M109.023 3.72093H112.744V7.44186H109.023V3.72093Z" fill="black" />
      <path d="M112.744 7.44186H116.465V11.1628H112.744V7.44186Z" fill="black" />
      <path d="M116.465 11.1628H120.186V14.8837H116.465V11.1628Z" fill="black" />
      <path d="M116.465 14.8837H120.186V18.6047H116.465V14.8837Z" fill="black" />
      <path d="M116.465 18.6047H120.186V22.3256H116.465V18.6047Z" fill="black" />
      <path d="M101.581 22.3256H105.302V26.0465H101.581V22.3256Z" fill="black" />
      <path d="M105.302 22.3256H109.023V26.0465H105.302V22.3256Z" fill="black" />
      <path d="M109.023 22.3256H112.744V26.0465H109.023V22.3256Z" fill="black" />
      <path d="M112.744 22.3256H116.465V26.0465H112.744V22.3256Z" fill="black" />
      <path d="M116.465 22.3256H120.186V26.0465H116.465V22.3256Z" fill="black" />
      <path d="M120.186 22.3256H124.279V26.0465H120.186V22.3256Z" fill="black" />
      <path d="M124.279 26.0465H128V29.7674H124.279V26.0465Z" fill="black" />
      <path d="M120.558 29.7674H124.279V33.4884H120.558V29.7674Z" fill="black" />
      <path d="M120.558 33.4884H124.279V37.2093H120.558V33.4884Z" fill="black" />
      <path d="M116.837 29.7674H120.558V33.4884H116.837V29.7674Z" fill="black" />
      <path d="M113.116 29.7674H116.837V33.4884H113.116V29.7674Z" fill="black" />
      <path d="M109.395 29.7674H113.116V33.4884H109.395V29.7674Z" fill="black" />
      <path d="M105.674 29.7674H109.395V33.4884H105.674V29.7674Z" fill="black" />
      <path d="M101.581 29.7674H105.674V33.4884H101.581V29.7674Z" fill="black" />
      <path d="M97.8605 26.0465H101.581V29.7674H97.8605V26.0465Z" fill="black" />
      <path d="M97.8605 29.7674H101.581V26.0465H124.279V29.7674H101.581V33.4884H120.558V37.2093H101.581V33.4884H97.8605V29.7674Z" fill="#D40207" />
      <path d="M94.1395 29.7674H97.8605V33.4884H94.1395V29.7674Z" fill="black" />
      <path d="M97.8605 33.4884H101.581V37.2093H97.8605V33.4884Z" fill="black" />
      <path d="M101.581 37.2093H105.674V41.6744H101.581V37.2093Z" fill="black" />
      <path d="M105.674 37.2093H109.395V41.6744H105.674V37.2093Z" fill="black" />
      <path d="M109.395 37.2093H113.116V41.6744H109.395V37.2093Z" fill="black" />
      <path d="M113.116 37.2093H116.837V41.6744H113.116V37.2093Z" fill="black" />
      <path d="M116.837 37.2093H120.558V41.6744H116.837V37.2093Z" fill="black" />
      <path d="M97.8605 41.6744H101.953V45.3953H97.8605V41.6744Z" fill="black" />
      <path d="M94.1395 41.6744H97.8605V45.3953H94.1395V41.6744Z" fill="black" />
      <path d="M90.4186 41.6744H94.1395V45.3953H90.4186V41.6744Z" fill="black" />
      <path d="M86.6977 41.6744H90.4186V45.3953H86.6977V41.6744Z" fill="black" />
      <path d="M82.9767 41.6744H86.6977V45.3953H82.9767V41.6744Z" fill="black" />
      <path d="M79.2558 37.9535H82.9767V41.6744H79.2558V37.9535Z" fill="black" />
      <path d="M75.5349 37.9535H79.2558V41.6744H75.5349V37.9535Z" fill="black" />
      <path d="M71.814 33.4884H75.5349V37.9535H71.814V33.4884Z" fill="black" />
      <path d="M75.1628 7.44186H78.8837V11.1628H75.1628V7.44186Z" fill="black" />
      <path d="M71.4419 11.1628H75.1628V14.8837H71.4419V11.1628Z" fill="black" />
      <path d="M67.7209 14.8837H71.4419V18.6047H67.7209V14.8837Z" fill="black" />
      <path d="M67.7209 18.6047H71.4419V22.3256H67.7209V18.6047Z" fill="black" />
      <path d="M71.4419 18.6047H75.1628V22.3256H71.4419V18.6047Z" fill="black" />
      <path d="M67.7209 26.0465H86.3256V29.7674H67.7209V26.0465Z" fill="#F8E3B6" />
      <path d="M67.7209 22.3256H86.3256V26.0465H82.6047V29.7674H71.4419V26.0465H67.7209V22.3256Z" fill="white" />
      <path d="M75.1628 18.6047H78.8837V22.3256H75.1628V18.6047Z" fill="black" />
      <path d="M78.8837 18.6047H82.6047V22.3256H78.8837V18.6047Z" fill="black" />
      <path d="M82.6047 18.6047H86.3256V22.3256H82.6047V18.6047Z" fill="black" />
      <path d="M86.3256 22.3256H90.0465V26.0465H86.3256V22.3256Z" fill="black" />
      <path d="M86.3256 26.0465H90.0465V29.7674H86.3256V26.0465Z" fill="black" />
      <path d="M82.9767 29.7674H86.6977V33.4884H82.9767V29.7674Z" fill="black" />
      <path d="M79.2558 29.7674H82.9767V33.4884H79.2558V29.7674Z" fill="black" />
      <path d="M75.5349 29.7674H79.2558V33.4884H75.5349V29.7674Z" fill="black" />
      <path d="M71.814 29.7674H75.5349V33.4884H71.814V29.7674Z" fill="black" />
      <path d="M67.7209 29.7674H71.814V33.4884H67.7209V29.7674Z" fill="black" />
      <path d="M64 26.0465H67.7209V29.7674H64V26.0465Z" fill="black" />
      <path d="M64 22.3256H67.7209V26.0465H64V22.3256Z" fill="black" />
      <path d="M86.4744 3.72093H97.8605V7.44186H86.4744V11.1628H78.8837V14.8837H75.1628V11.1628H78.8837V7.44186H86.4744V3.72093Z" fill="#FDE4BB" />
      <path d="M86.3256 7.44186H94.1395V18.6047H97.8605V22.3256H101.581V26.0465H97.8605V29.7674H90.0465V22.3256H86.3256V18.6047H71.4419V14.8837H78.8837V11.1628H86.3256V7.44186Z" fill="#FEC400" />
      <path d="M86.6977 29.7674H94.1395V33.4884H97.8605V37.2093H101.581V41.6744H82.9767V37.9535H75.5349V33.4884H86.6977V29.7674Z" fill="#F57B00" />
      <path d="M142.596 3.74269H146.339V7.48538H142.596V3.74269Z" fill="black" />
      <path d="M146.339 3.74269H150.082V7.48538H146.339V3.74269Z" fill="black" />
      <path d="M150.082 0H153.825V3.74269H150.082V0Z" fill="black" />
      <path d="M153.825 0H157.567V3.74269H153.825V0Z" fill="black" />
      <path d="M157.567 0H161.31V3.74269H157.567V0Z" fill="black" />
      <path d="M161.31 0H165.053V3.74269H161.31V0Z" fill="black" />
      <path d="M161.684 3.74269H165.427V7.48538H161.684V3.74269Z" fill="black" />
      <path d="M157.942 7.48538H161.684V11.2281H157.942V7.48538Z" fill="black" />
      <path d="M157.942 11.2281H161.684V14.9708H157.942V11.2281Z" fill="black" />
      <path d="M161.684 7.48538H165.427V3.74269H172.912V7.48538H176.655V11.2281H172.912V18.7135H176.655V11.2281H180.398V18.7135V22.4561H172.912H169.17V18.7135H165.427V11.2281H161.684V7.48538Z" fill="#FFFEFF" />
      <path d="M157.942 14.9708H161.684V18.7135H157.942V14.9708Z" fill="black" />
      <path d="M161.684 18.7135H165.427V22.4561H161.684V18.7135Z" fill="black" />
      <path d="M165.427 18.7135H161.684V11.2281H165.427V18.7135H169.17V22.4561H165.427V18.7135Z" fill="#ADE1D9" />
      <path d="M172.912 11.2281H176.655V14.9708H172.912V11.2281Z" fill="black" />
      <path d="M172.912 14.9708H176.655V18.7135H172.912V14.9708Z" fill="black" />
      <path d="M165.053 0H169.17V3.74269H165.053V0Z" fill="black" />
      <path d="M169.17 0H172.912V3.74269H169.17V0Z" fill="black" />
      <path d="M172.912 3.74269H176.655V7.48538H172.912V3.74269Z" fill="black" />
      <path d="M176.655 7.48538H180.398V11.2281H176.655V7.48538Z" fill="black" />
      <path d="M180.398 11.2281H184.14V14.9708H180.398V11.2281Z" fill="black" />
      <path d="M180.398 14.9708H184.14V18.7135H180.398V14.9708Z" fill="black" />
      <path d="M180.398 18.7135H184.14V22.4561H180.398V18.7135Z" fill="black" />
      <path d="M165.427 22.4561H169.17V26.1988H165.427V22.4561Z" fill="black" />
      <path d="M169.17 22.4561H172.912V26.1988H169.17V22.4561Z" fill="black" />
      <path d="M172.912 22.4561H176.655V26.1988H172.912V22.4561Z" fill="black" />
      <path d="M176.655 22.4561H180.398V26.1988H176.655V22.4561Z" fill="black" />
      <path d="M180.398 22.4561H184.14V26.1988H180.398V22.4561Z" fill="black" />
      <path d="M184.14 22.4561H188.257V26.1988H184.14V22.4561Z" fill="black" />
      <path d="M188.257 26.1988H192V29.9415H188.257V26.1988Z" fill="black" />
      <path d="M184.515 29.9415H188.257V33.6842H184.515V29.9415Z" fill="black" />
      <path d="M184.515 33.6842H188.257V37.4269H184.515V33.6842Z" fill="black" />
      <path d="M180.772 29.9415H184.515V33.6842H180.772V29.9415Z" fill="black" />
      <path d="M177.029 29.9415H180.772V33.6842H177.029V29.9415Z" fill="black" />
      <path d="M173.287 29.9415H177.029V33.6842H173.287V29.9415Z" fill="black" />
      <path d="M169.544 29.9415H173.287V33.6842H169.544V29.9415Z" fill="black" />
      <path d="M165.427 29.9415H169.544V33.6842H165.427V29.9415Z" fill="black" />
      <path d="M161.684 26.1988H165.427V29.9415H161.684V26.1988Z" fill="black" />
      <path d="M161.684 29.9415H165.427V26.1988H188.257V29.9415H165.427V33.6842H184.515V37.4269H165.427V33.6842H161.684V29.9415Z" fill="#D40207" />
      <path d="M157.942 29.9415H161.684V33.6842H157.942V29.9415Z" fill="black" />
      <path d="M161.684 33.6842H165.427V37.4269H161.684V33.6842Z" fill="black" />
      <path d="M165.427 37.4269H169.544V41.9181H165.427V37.4269Z" fill="black" />
      <path d="M169.544 37.4269H173.287V41.9181H169.544V37.4269Z" fill="black" />
      <path d="M173.287 37.4269H177.029V41.9181H173.287V37.4269Z" fill="black" />
      <path d="M177.029 37.4269H180.772V41.9181H177.029V37.4269Z" fill="black" />
      <path d="M180.772 37.4269H184.515V41.9181H180.772V37.4269Z" fill="black" />
      <path d="M161.684 41.9181H165.801V45.6608H161.684V41.9181Z" fill="black" />
      <path d="M157.942 41.9181H161.684V45.6608H157.942V41.9181Z" fill="black" />
      <path d="M154.199 41.9181H157.942V45.6608H154.199V41.9181Z" fill="black" />
      <path d="M150.456 41.9181H154.199V45.6608H150.456V41.9181Z" fill="black" />
      <path d="M146.713 41.9181H150.456V45.6608H146.713V41.9181Z" fill="black" />
      <path d="M142.971 38.1754H146.713V41.9181H142.971V38.1754Z" fill="black" />
      <path d="M139.228 38.1754H142.971V41.9181H139.228V38.1754Z" fill="black" />
      <path d="M131.743 38.1754H135.485V41.9181H131.743V38.1754Z" fill="black" />
      <path d="M138.854 7.48538H142.596V11.2281H138.854V7.48538Z" fill="black" />
      <path d="M135.111 11.2281H138.854V14.9708H135.111V11.2281Z" fill="black" />
      <path d="M131.368 14.9708H135.111V18.7135H131.368V14.9708Z" fill="black" />
      <path d="M131.368 18.7135H135.111V22.4561H131.368V18.7135Z" fill="black" />
      <path d="M131.368 22.4561H135.111V26.1988H131.368V22.4561Z" fill="black" />
      <path d="M135.111 22.4561H138.854V26.1988H135.111V22.4561Z" fill="black" />
      <path d="M146.713 26.1988H150.456V29.9415H146.713V26.1988Z" fill="#F8E3B6" />
      <path d="M131.743 26.1988H135.485V29.9415H131.743V26.1988Z" fill="#F8E3B6" />
      <path d="M139.228 33.6842H142.971V38.1754H139.228V33.6842Z" fill="#F8E3B6" />
      <path d="M138.854 22.4561H142.596V26.1988H138.854V22.4561Z" fill="black" />
      <path d="M135.111 26.1988H146.713V33.6842H139.228V38.1754H131.743V29.9415H135.111V26.1988Z" fill="white" />
      <path d="M142.596 22.4561H146.339V26.1988H142.596V22.4561Z" fill="black" />
      <path d="M146.339 22.4561H150.456V26.1988H146.339V22.4561Z" fill="black" />
      <path d="M150.456 26.1988H154.199V29.9415H150.456V26.1988Z" fill="black" />
      <path d="M146.713 29.9415H150.456V33.6842H146.713V29.9415Z" fill="black" />
      <path d="M142.971 33.6842H146.713V38.1754H142.971V33.6842Z" fill="black" />
      <path d="M135.485 38.1754H139.228V41.9181H135.485V38.1754Z" fill="black" />
      <path d="M128 34.4327H131.743V38.1754H128V34.4327Z" fill="black" />
      <path d="M128 29.9415H131.743V34.4327H128V29.9415Z" fill="black" />
      <path d="M128 26.1988H131.743V29.9415H128V26.1988Z" fill="black" />
      <path d="M150.232 3.74269H161.684V7.48538H150.232V11.2281H142.596V14.9708H138.854V11.2281H142.596V7.48538H150.232V3.74269Z" fill="#FDE4BB" />
      <path d="M150.082 7.48538H157.942V18.7135H161.684V22.4561H165.427V26.1988H161.684V29.9415H153.825V26.1988H150.456V22.4561H135.111V14.9708H142.596V11.2281H150.082V7.48538Z" fill="#FEC400" />
      <path d="M150.456 29.9415H157.942V33.6842H161.684V37.4269H165.427V41.9181H146.713V38.1754V33.6842H150.456V29.9415Z" fill="#F57B00" />
    </svg>

  )
}