const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">This is Contact Page</h1>
      <form>
        <input
          type="text"
          className="border border-black outline-none p-2 m-2 rounded-md "
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black outline-none p-2 m-2 rounded-md "
          placeholder="message"
        />
        <button className="border border-black outline-none p-2 m-2 rounded-md bg-black text-white ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
