using ReactApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactApplication.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddEmployee()
        {
            return View();
        }

        [HttpPost]
        public bool AddEmployee(EmployeeModel employeeModel)
        {
            try
            {
                ReactDemoEntities dbContext = new ReactDemoEntities();
                Employee employee = new Employee();
                employee.FirstName = employeeModel.FirstName;
                employee.LastName = employeeModel.LastName;
                employee.EmailID = employeeModel.EmailID;
                employee.City = employeeModel.City;
                employee.Country = employeeModel.Country;
                dbContext.Employees.Add(employee);
                dbContext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public JsonResult GetEmployee()
        {
            ReactDemoEntities dbContext = new ReactDemoEntities();
            List<EmployeeModel> employeeModel = new List<EmployeeModel>();
            var result = dbContext.Employees.ToList();
            foreach (var item in result)
            {
                employeeModel.Add(new EmployeeModel()
                {
                    EmployeeID = item.EmployeeID,
                    FirstName = item.FirstName,
                    LastName = item.LastName,
                    City = item.City,
                    Country = item.Country,
                    EmailID = item.EmailID
                });
            }
            return Json(employeeModel, JsonRequestBehavior.AllowGet);
        }

    }
}