using ReactApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactApplication.Controllers
{
    public class HomeController : Controller
    {
        private static IList<CommentModel> _comments;
        public HomeController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Id = 1,
                    author = "Daniel Lo Nigro",
                    text = "Hello ReactJS.NET World!"
                },
                new CommentModel
                {
                    Id = 2,
                    author = "Pete Hunt",
                    text = "This is one comment"
                },
                new CommentModel
                {
                    Id = 3,
                    author = "Jordan Walke1212122",
                    text = "This is *another* comment"
                },
            };
        }

        [Route("comments")]
        public ActionResult Comments()
        {
            return Json(_comments, JsonRequestBehavior.AllowGet);
        }


        [Route("comments/new")]
        [HttpPost]
        public ActionResult AddForm(CommentModel commentModel)
        {
            commentModel.Id = _comments.Count + 1;
            _comments.Add(commentModel);
            return Content("Success!");
        }

        public JsonResult GetName()
        {
            return Json(new { name = "World from server side" }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}