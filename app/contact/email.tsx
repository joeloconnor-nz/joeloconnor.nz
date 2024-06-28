import { renderToString } from 'react-dom/server'

import { FormSchema } from './form-schema'

export interface ContactEmailProps {
  data: FormSchema
}

export function ContactEmail(props: ContactEmailProps) {
  const { data } = props

  return (
    <div>
      <p
        style={{
          fontFamily: 'sans-serif',
          fontSize: 14,
          whiteSpace: 'pre-wrap',
          marginBottom: 32,
        }}
      >
        {data.message}
      </p>
      <table>
        <tr
          style={{
            fontFamily: 'sans-serif',
            fontSize: 14,
            textAlign: 'left',
          }}
        >
          <th style={{ paddingRight: 5, paddingLeft: 15 }}>
            <b>Name: </b>
          </th>
          <td>{data.name}</td>
        </tr>
        <tr
          style={{
            fontFamily: 'sans-serif',
            fontSize: 14,
            textAlign: 'left',
          }}
        >
          <th style={{ paddingRight: 5, paddingLeft: 15 }}>
            <b>Email: </b>
          </th>
          <td>{data.email}</td>
        </tr>
      </table>
      <p
        style={{
          paddingLeft: 15,
          fontWeight: 'normal',
          marginTop: 16,
          fontStyle: 'italic',
        }}
      >
        Message sent via{' '}
        <a href="https://joeloconnor.nz/contact">joeloconnor.nz/contact</a>
      </p>
    </div>
  )
}

export function getContactEmailString(data: FormSchema): string {
  return renderToString(<ContactEmail data={data} />)
}
