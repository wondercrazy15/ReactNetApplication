
var AddEmployee = React.createClass({
    SaveClick: function () {
        var data = new FormData();
        data.append('FirstName', this.refs.FirstName.value)
        data.append('LastName', this.refs.LastName.value);
        data.append('EmailID', this.refs.EmailID.value);
        data.append('City', this.refs.City.value);
        data.append('Country', this.refs.Country.value);

        var xhr = new XMLHttpRequest();
        xhr.open('post', this.props.Url, true);
        xhr.onload = function () {
            var result = xhr.responseText;
            if (result == "True") {
                window.location.href = "/Employee/Index";
                // Use Reactjs page redirection;
                //this.props.router.push('/Employee/Index');
            }

        }.bind(this);
        xhr.send(data);
    },
    render: function () {
        return (
            <div className="form-horizontal">
                <div className="form-group">
                     <label class="control-label col-sm-2">FirstName:</label>
                    <div class="col-sm-10">
                       <input ref="FirstName" className="form-control" placeholder="Enter FirstName" />
                    </div>
                </div>
                  <div className="form-group">
                     <label class="control-label col-sm-2">LastName:</label>
                    <div class="col-sm-10">
                       <input ref="LastName" className="form-control" placeholder="Enter LastName" />
                    </div>
                  </div>
                  <div className="form-group">
                     <label class="control-label col-sm-2">Email:</label>
                    <div class="col-sm-10">
                       <input ref="EmailID" className="form-control" placeholder="Enter Email" />
                    </div>
                  </div>
                  <div className="form-group">
                     <label class="control-label col-sm-2">City:</label>
                    <div class="col-sm-10">
                       <input ref="City" className="form-control" placeholder="Enter City" />
                    </div>
                  </div>
                  <div className="form-group">
                     <label class="control-label col-sm-2">Country:</label>
                    <div class="col-sm-10">
                       <input ref="Country" className="form-control" placeholder="Enter Country" />
                    </div>
                  </div>
                 <div className="form-group">
                     <label class="control-label col-sm-2"></label>
                    <div class="col-sm-10">
                       <button className="btn btn-success" onClick={this.SaveClick}>Submit</button>
                    </div>
                 </div>
            </div>
         );
    }
});
ReactDOM.render(<AddEmployee Url="/Employee/AddEmployee" />, document.getElementById('AddEmployeeContainer'));