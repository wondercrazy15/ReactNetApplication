
var EmployeeData = React.createClass({
    render: function () {
        return (
             <tr>
                 <td>{this.props.item.FirstName}</td>
                 <td>{this.props.item.LastName}</td>
                 <td>{this.props.item.EmailID}</td>
                 <td>{this.props.item.City}</td>
                 <td>{this.props.item.Country}</td>
                 <td><button type="button" className="btn btn-success">Edit</button></td>   

             </tr>);
    }
});

var EmployeeRecords = React.createClass({
    getInitialState: function () {
        return { items: [] }
    },
    componentDidMount: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.Url, true);
        xhr.onload = function () {
            var result = JSON.parse(xhr.responseText);
            this.setState({ items: result })
        }.bind(this);
        xhr.send();
    },
    //handleCompanyRemove: function (company) {
    //    debugger;
    //    //this.props.onCompanyRemove(company);
    //},
    render: function () {
        var Rows = [];
        this.state.items.forEach(function (item) {
            Rows.push(<EmployeeData item={item} key={item.EmployeeID }  />);
            //onCompanyDelete={ this.handleCompanyRemove}
        });
        return (
            <table className="table table-bordered table-responsive">
                <thead>
                    <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>EmailID</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Edit</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {Rows}
                </tbody>
            </table>
            )
    }
});
ReactDOM.render(<EmployeeRecords Url="/Employee/GetEmployee" />, document.getElementById("container"));