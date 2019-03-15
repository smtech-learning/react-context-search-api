import React from 'react'

const  DisplayTemplate = (props) => {
  return (
    <div class="container" style={{ padding: 10+'px'}}>
        <h2>Receipe List</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Receipe Name</th>
              
            </tr>
          </thead>
            <tbody>
            {props.val.map((data) => {
                return (
                    <tr>
                    <td> {data.publisher}</td>
                       
                  </tr>
                )
            })}
           
          </tbody>
        </table>
      </div>
  )
}
export default DisplayTemplate;

