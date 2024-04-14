import loading from './spinner.gif'

import React from 'react'

export default function Spinner() {
  return (
    <div className='text-center' style={{zIndex: 2}}>
      <img src={loading} alt="loading" />
    </div>
  )
}

// export default class Spinner extends Component {
//   render() {
//     return (
//       <div className='text-center' style={{zIndex: 2}}>
//         <img src={loading} alt="loading" />
//       </div>
//     )
//   }
// }
