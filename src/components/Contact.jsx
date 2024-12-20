const Contact =() => {
    return (
        <div > 
            <h1 className=" font-bold  text-2xl text-center p-2 m-2"> Contact Us Page</h1>
            <form>
                <input type="text"
                 className=" border border-black p-2 m-2" 
                 placeholder="Name"
               />
                <input type="text"
                 className=" border border-black p-2 m-2"
                 placeholder="MAssage"
               />
                <button 
                    className= "border border-black p-2 m-2 bg-green-200 rounded-lg">
                     Submit 
                </button>
            </form>
           
        </div>
    );
};

export default Contact;