
const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-12'>
      <h1 className="py-4 font-bold text-4xl text-center text-[#001b5e]"> Contact </h1>
      <form action="https://getform.io/f/1a92f12a-3173-492f-99ee-d110d6f11e89" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Name</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-300 " type="text" name="name" />
            </div>
            <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone</label>
                <input className="border-2 rounded-lg p-3 flex border-gray-300 "   type="text" name="phone"/>
            </div>
        </div>
        <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300 "  type="text" name="email" />
        </div>
        <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300 " type="text" name="subject"/>
        </div>
        <div  className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea className=" border-2 rounded-lg border-gray-300" rows='6' name="message" />
        </div>
        <button className="bg-[#001b5e] w-full p-4 text-gray-100 mt-4 rounded-lg"> Send Message </button>
      </form>
    </div>
  )
};

export default Contact;
