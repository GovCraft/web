import React, { useEffect, useState } from 'react';
import { useId } from 'react'
import clsx from 'clsx'


export function Logomark({ invert = false, filled = true, ...props }) {
  let id = useId()
  const rectsCount = 11; // Total number of rects in the SVG

  const [opacities, setOpacities] = useState(Array(rectsCount).fill(1));

  useEffect(() => {
    // Set up the interval
    const interval = setInterval(() => {
      setOpacities(opacities => {
        const randomRectIndex = Math.floor(Math.random() * rectsCount);
        return opacities.map((opacity, index) =>
          index === randomRectIndex ? Math.random() : opacity
        );
      });
    }, 50); // Change opacity every 50 milliseconds

    // Set up the timeout to clear the interval after 3 seconds
    const timeout = setTimeout(() => {
      setOpacities(Array(rectsCount).fill(1)); // Reset all opacities to 1
      clearInterval(interval);
    }, 5000);

    // Cleanup function to clear the interval and timeout when component unmounts
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div {...props}>
      <svg viewBox="0 0 315.03 304.97" aria-hidden="true" {...props}>
        <g id="LogoMark">
          <g id="Mark">
            <rect style={{ opacity: opacities[0] }} x="48.08" y="18.11" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#cbd5e1]'} />
            <rect style={{ opacity: opacities[1] }} x="48.08" y="83.93" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#64748b]'} />
            <rect style={{ opacity: opacities[2] }} x="164.05" y="83.93" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#64748b]'} />
            <rect style={{ opacity: opacities[3] }} x="280.01" y="83.93" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#64748b]'} />
            <rect style={{ opacity: opacities[4] }} x="48.22" y="149.52" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#334155]'} />
            <rect style={{ opacity: opacities[5] }} x="48.22" y="215.34" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#0f172a]'} />
            <rect style={{ opacity: opacities[6] }} x="164.22" y="215.34" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#0f172]'} />
            <rect style={{ opacity: opacities[7] }} x="202.89" y="215.34" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#0f172]'} />
            <rect style={{ opacity: opacities[8] }} x="280.23" y="215.34" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#0f172]'} />
            <rect style={{ opacity: opacities[9] }} x="280.23" y="149.52" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#33415]'} />
            <rect style={{ opacity: opacities[10] }} x="202.76" y="18.11" width="34.8" height="59.24" className={invert ? 'fill-slate-200' : 'fill-[#cbd5e1]'} />
          </g>
        </g>
      </svg>

    </div>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <div
      {...props}
      className={'flex -ml-10 gap-x-5 scale-[.60]'}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        className={clsx(className, 'h-9')}
        invert={invert}
        filled={filled}
      />
      <div>
        <svg
          viewBox="0 0 1519.69 261.8"
          aria-hidden="true"
          className={clsx(fillOnHover && 'group/LogoText', className)}
        >

          <g id="LogoText">
            <path className={invert ? 'fill-slate-200' : 'fill-slate-950'} d="M0,130.55C0,51.8,54.25,0,142.1,0c74.2,0,123.9,36.05,131.6,89.6h-52.15c-7.35-30.45-38.85-48.3-79.45-48.3-57.4,0-90.3,34.65-90.3,89.25,0,57.4,35,89.6,89.25,89.6,51.45,0,81.9-24.15,85.4-64.05h-89.95v-33.6h141.75v18.55c0,78.4-60.2,120.4-137.9,120.4C53.55,261.46,0,209.65,0,130.55Z" />
            <path className={invert ? 'fill-slate-200' : 'fill-slate-950'} d="M285.25,165.2c0-59.85,43.75-96.6,110.25-96.6s110.25,36.05,110.25,96.6-43.4,96.6-110.25,96.6-110.25-36.4-110.25-96.6ZM456.05,165.2c0-35.7-22.4-58.1-60.55-58.1s-60.2,22.75-60.2,58.1,22.4,58.1,60.2,58.1,60.55-22.75,60.55-58.1Z" />
            <path className={invert ? 'fill-slate-200' : 'fill-slate-950'} d="M489.3,72.1h51.45l49.35,118.65,10.5,28.7h2.1l10.5-28.7,49.35-118.65h51.1l-82.95,186.2h-57.75l-83.65-186.2Z" />
            <path className={invert ? 'fill-slate-200' : 'fill-slate-950'} d="M695.44,164.85c0-59.5,44.1-96.25,109.9-96.25,58.8,0,98.35,28.35,102.2,70.35h-49.35c-5.6-20.3-25.9-31.85-53.2-31.85-37.1,0-59.85,23.1-59.85,57.75,0,37.1,22.4,58.1,59.5,58.1,26.95,0,48.65-12.6,54.25-33.25h49.7c-4.2,44.1-50.05,71.75-105.7,71.75-66.5,0-107.45-37.8-107.45-96.6Z" />
            <path className={invert ? 'fill-slate-200' : 'fill-slate-950'} d="M922.24,72.1h44.8l2.1,31.15h2.1c7.7-21,26.95-33.95,52.15-33.95,6.65,0,11.9.35,16.1,1.4v44.8c-5.25-1.05-11.55-1.75-17.15-1.75-30.1,0-49.35,15.4-50.4,49.7v94.85h-49.7V72.1Z" />
            <path className={invert ? 'fill-slate-200' : 'fill-slate-950'} d="M1033.19,165.2c0-59.15,37.1-96.25,92.05-96.25,37.1,0,61.95,14.35,72.8,35h2.45l1.4-31.85h47.25v186.2h-49.7v-33.25h-2.45c-11.55,22.4-39.2,36.75-71.75,36.75-54.95,0-92.05-37.8-92.05-96.6ZM1199.09,170.1v-11.2c0-28.35-21.7-51.8-58.8-51.8-33.95,0-57.05,20.65-57.05,58.1s22.75,58.45,57.05,58.45c37.1,0,58.8-24.15,58.8-53.55Z" />
            <path className={invert ? 'fill-slate-200' : 'fill-slate-950'} d="M1291.49,109.9h-33.95v-37.8h33.95v-16.1c0-36.4,22.75-52.85,65.1-52.85h31.15v33.25h-23.45c-15.75,0-22.75,6.65-22.75,21.35v14.35h43.05v37.8h-43.05v148.4h-50.05V109.9Z" />
            <path className={invert ? 'fill-slate-200' : 'fill-slate-950'} d="M1423.43,214.9v-105h-36.4v-37.8h36.4V22.4l49-9.45v59.15h47.25v37.8h-47.25v89.6c0,12.6,6.3,16.1,18.55,16.1h28.7v42.7h-48.3c-29.75,0-47.95-13.65-47.95-43.4Z" />
          </g>
        </svg>
      </div>
    </div>
  )
}
