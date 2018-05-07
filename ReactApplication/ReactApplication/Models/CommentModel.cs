using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApplication.Models
{
    public class CommentModel
    {
        public int Id { get; set; }
        public string author { get; set; }
        public string text { get; set; }
    }
}