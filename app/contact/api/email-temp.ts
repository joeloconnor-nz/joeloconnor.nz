import { ContactFormData } from '@/contact/form-data';

// Due to a known limitation, we can't use renderToString.
// Remove this file and use /email.tsx when this issue has been resolved https://github.com/vercel/next.js/issues/43810
export function getContactEmailString(data: ContactFormData): string {
    return `
<div>
    <p style="font-family: sans-serif; font-size: 14px; white-space: pre-wrap; marginBottom: 32px;">${data.message}</p>
    <table>
        <tr style="font-family: sans-serif; font-size: 14px; text-align: left;">
            <th style="padding-right: 5px; padding-left: 15px;">
                <b>Name: </b>
            </th>
            <td>${data.name}</td>
        </tr>
        <tr style="font-family: sans-serif; font-size: 14px; text-align: left;">
            <th style="padding-right: 5px; padding-left: 15px;">
                <b>Email: </b>
            </th>
            <td>${data.email}</td>
        </tr>
    </table>
    <p style="padding-left: 15px; font-weight: normal; margin-top: 16px; font-style: italic;">
        Message sent via <a href="https://joeloconnor.nz/contact">joeloconnor.nz/contact</a>
    </p>
</div>
`;
}
