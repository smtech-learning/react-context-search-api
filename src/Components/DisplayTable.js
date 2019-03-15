import React, { Component } from 'react'

class DisplayTable extends Component {
  render(props) {
    return (
        <div class="container">
        <h2>Receipe List</h2> 
        <p>The .table-bordered class adds borders to a table:</p>            
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th> 
              <th>Email</th>
            </tr>
          </thead>
            <tbody>
            {this.props.val.map((data, index) => {
              console.log('respons eis : ' + data);
                return (
                    <tr key={index}>
                        <td>{data.title}</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                  </tr>
                )
            })}
           
          </tbody>
        </table>
      </div>
      
    )
  }
}

export default DisplayTable;
