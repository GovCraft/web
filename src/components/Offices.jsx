import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-slate-300' : 'text-slate-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-slate-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      {/* <li>
        <Office name="Washington" invert={invert}>
          7001 Seaview Ave NW Ste 160-858
          <br />
          Seattle, WA 98117
        </Office>
      </li> */}
      <li>
        <Office name="Texas" invert={invert}>
        5629 Tanglewood Dr.
        <br />
          Corpus Christi, TX 78412
          <br />
          1 (888) 822-9006
        </Office>
      </li>
    </ul>
  )
}
