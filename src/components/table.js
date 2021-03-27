import React from 'react';

const Resume = React.forwardRef((props, ref) => {
    return (
        <table style={{ background: 'red' }} ref={ref}>
            <thead>
                <th>column 1</th>
                <th>column 2</th>
                <th>column 3</th>
            </thead>
            <tbody>
                <tr>
                    <td>data 1</td>
                    <td>data 2</td>
                    <td>data 3</td>
                </tr>
            </tbody>
        </table>
    )
})

export default Resume;