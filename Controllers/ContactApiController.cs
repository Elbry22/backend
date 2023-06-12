using ContactUsBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ContactUsBackend.Controllers
{
    public class ContactApiController : ApiController
    {
        [HttpGet]
        [Route("api/ContactApiController/GetAllData")]
        public HttpResponseMessage GetAllData()
        {
            using (contact_usEntities2 dbcontext = new contact_usEntities2())
            {
                return Request.CreateResponse(HttpStatusCode.OK, dbcontext.contacts.Where(e => e.Flag_show == 0).ToList());
            }
        }

        [HttpGet]
        [Route("api/ContactApiController/Get/{id}")]
        public HttpResponseMessage Get(int id)
        {
            using (contact_usEntities2 dbcontext = new contact_usEntities2())
            {
                var emp = dbcontext.contacts.FirstOrDefault(e => e.id == id);
                if (emp != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, emp);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "User with Id " + id + " not found in database");
                }
            }
        }


        [HttpPost]
        [Route("api/ContactApiController/Post")]
        public HttpResponseMessage Post([FromBodyAttribute] contact contact)
        {
            using (contact_usEntities2 dbcontext = new contact_usEntities2())
            {
                if (contact != null)
                {
                    dbcontext.contacts.Add(contact);
                    dbcontext.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Created, contact);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Please provide input data to send massage");
                }
            }

        }

        [HttpPost]
        [Route("api/ContactApiController/reply")]
        public HttpResponseMessage reply([FromBodyAttribute] contact contact)
        {
            using (contact_usEntities2 dbcontext = new contact_usEntities2())
            {
                if (contact != null)
                {
                    var cont = dbcontext.contacts.Where(x => x.id == contact.id).FirstOrDefault();
                    cont.Flag_show = 1;
                   // dbcontext.contacts.updata();
                    dbcontext.SaveChanges();
                    return Request.CreateErrorResponse(HttpStatusCode.OK,"succeed");
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Please provide input data to send massage");
                }
            }

        }

    }
}
