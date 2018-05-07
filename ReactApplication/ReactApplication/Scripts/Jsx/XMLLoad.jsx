
//var data = [
//  { id: 1, author: "Daniel Lo Nigro", text: "Hello ReactJS.NET World!" },
//  { id: 2, author: "Pete Hunt", text: "This is one comment" },
//  { id: 3, author: "Jordan Walke", text: "This is *another* comment" }
//];
//var Comment = React.createClass({
//    render: function () {
//        return (
//          <div className="comment">
//              <h3 className="commentKey">
//                  Children : {this.props.aas}
//              </h3>
//            <h3 className="commentAuthor">
//                Author : {this.props.author}
//            </h3>
//            <h3 className="commentChildren">
//                Children : {this.props.children}
//            </h3>
//          </div>
//      );
//    }
//});

//var CommentList = React.createClass({
//    render: function () {
//        var commentNodes = this.props.data.map(function (comment) {
//            return (
//              <Comment author={comment.author} aas={comment.id}>
//                  {comment.text}
//              </Comment>
//              );
//        });
//        console.log(commentNodes);
//        return (
//     <div className="commentList">
//         {commentNodes}
//     </div>
//    );


//    }

//});
//var CommentBox = React.createClass({
//    render: function () {
//        return (
//          <div className="commentBox">
//            <h1>Comments</h1>
//            <CommentList data={this.props.data} />
//          </div>
//      );
//    }
//});

//ReactDOM.render(<CommentBox data={data } />, document.getElementById('Propcontainer'));





//var data = [
//  { id: 1, author: "Daniel Lo Nigro", text: "Hello ReactJS.NET World!" },
//  { id: 2, author: "Pete Hunt", text: "This is one comment" },
//  { id: 3, author: "Jordan Walke", text: "This is *another* comment" }
//];
var Comment = React.createClass({
    render: function () {
        return (
          <div className="comment">
              <h3 className="commentKey">
                  Id : {this.props.aas}
              </h3>
      <h3 className="commentAuthor">
          Author : {this.props.author}
      </h3>
        <h3 className="commentChildren">
            Children : {this.props.children}
        </h3>
          </div>
      );
    }
});

var CommentList = React.createClass({
    render: function () {
        debugger;
        var commentNodes = this.props.data.map(function (comment) {
            return (
              <Comment author={comment.author} aas={comment.Id}>
                  {comment.text}
              </Comment>
              );
        });
        console.log(commentNodes);
        return (
        <div className="commentList">
            {commentNodes}
        </div>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function () {
        return { data: [] };
    },
    loadCommentFromServer: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var result = JSON.parse(xhr.responseText);
            this.setState({ data: result })
        }.bind(this);
        xhr.send();

        //$.ajax({
        //    url: this.props.url,
        //    dataType: 'json',
        //    success: function (data) {
        //        debugger;
        //        this.setState({ data: data })
        //        //this.setState(data);
        //    }.bind(this),
        //    error: function (xhr, status, err) {
        //        console.error(this.props.url, status, err.toString());
        //    }.bind(this)
        //});
    },
    handleCommentSubmit: function (comment) {
        var data = new FormData();
        data.append('author', comment.author);
        data.append('text', comment.text);

        var xhr = new XMLHttpRequest();
        xhr.open('post', this.props.submitUrl, true);
        xhr.onload = function () {
            this.loadCommentFromServer();
        }.bind(this);
        xhr.send(data);
    },
    componentDidMount: function () {
        this.loadCommentFromServer();
        //window.setInterval(this.loadCommentFromServer, this.props.pollInterval);
    },
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/> 

                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
              

            </div>
            );
    },
});
ReactDOM.render(<CommentBox url="/Home/Comments"  submitUrl="/Home/Comments/new"/>, document.getElementById('Propcontainer'));
//ReactDOM.render(<CommentBox url="/Home/Comments" pollInterval="{2000}" />, document.getElementById('Propcontainer'));



var CommentForm = React.createClass({
    getInitialState: function () {
        return { author: '', text: '' };
    },
    handleAuthorChange: function (e) {
        this.setState({ author: e.target.value });
    },
    handleTextChange: function (e) {
        this.setState({ author: e.target.value });
    },
    handleSubmit: function (e) {
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!author || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
        this.setState({ author: '', text: '' });
    },
    render: function () {
        return (
                <form className="commentForm" onSubmit={this.handleSubmit }> 
                    <input type="text" value={this.state.author} placeholder="Your Name"  onChange={this.handleAuthorChange }/>
                    <input type="text" value={this.state.text} placeholder="Say Somthing.."  onChange={this.handleTextChange }/>
                    <input type="submit" value="save" />
                </form>
            );
    }
});
