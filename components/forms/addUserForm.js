import { BiPlus } from "react-icons/bi"
import { useReducer } from "react"




const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}



export default function AddUserForm () {
    
    const[formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length === 0) return console.log("Don't have form data")
        console.log(formData)
    }
    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4">
            <div className="input-type">
                <input type="text"  name="firstname" className="border w-full px-5 py-5 focus:outline-none rounded-md" placeholder="Nama Proker"/>
            </div>
            <div className="input-type">
                <input type="text"  name="lastname" className="border w-full px-5 py-5 focus:outline-none rounded-md" placeholder="Total Anggaran"/>
            </div>
            <div className="input-type">
                <input type="text"  name="email" className="border w-full px-5 py-5 focus:outline-none rounded-md" placeholder="Ketua Panitia"/>
            </div>
            {/* <div className="input-type">
                <input type="text"  name="salary" className="border w-full px-5 py-5 focus:outline-none rounded-md" placeholder="Salary"/>
            </div> */}
            <div className="input-type">
                <input type="date"  name="date" className="border w-full px-5 py-5 focus:outline-none rounded-md" placeholder="date"/>
            </div>


            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio"  name="status" value="Success" id="radioDefault1" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 check:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault1" className="inline-block text-gray-800">
                        Success
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio"  name="status" value="OnProccess" id="radioDefault2" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 check:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault3" className="inline-block text-gray-800">
                        On Proccess
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio"  name="status" value="Unsuccess" id="radioDefault2" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 check:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault2" className="inline-block text-gray-800">
                        Unsuccess
                    </label>
                </div>
            </div>
            <div>
            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500"> Add <span className="px-1"><BiPlus size={24}></BiPlus></span>
            </button>
            </div>
        </form>
    )
}