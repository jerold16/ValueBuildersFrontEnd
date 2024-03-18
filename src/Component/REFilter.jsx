import React, { useEffect, useState } from "react";
import { filterationdata } from "./Datas";
import axios from "axios";
import RealEstateProperties from "./RealEstateProperties";
import { useNavigate } from "react-router";
const REFilter = (props) => {
  let {show}=props
  let {setSharedData} =props 
  let [data,setdata]=useState([])
  let pricefilter = filterationdata.price;
  let [pincode, setpincode] = useState("");
  let [selectedprice, setselectedprice] = useState([]);
  const [Price, setPriceFiltered] = useState([]);
  const [statearry, setstatearry] = useState([]);
  const [districtarry, setdistrictarry] = useState([]);
  const [doorfacingarry, setdoorfacingarry] = useState([]);
  useEffect(()=>{
     console.log(data);
     setSharedData(data);
     sessionStorage.setItem("data",JSON.stringify(data))

  },[data])
  let convert = (price) => {
    let arry = [];
    if (price.indexOf("-") != -1) {
      let sep = price.indexOf("-");
      console.log(sep);
      let a = (price + "").slice(0, sep);
      let b = (price + "").slice(sep + 1);
      arry.push(a);
      arry.push(b);
      let newarry = arry.map((value) => {
        if (value.includes("L"))
          return Number(value.slice(0, value.indexOf("L"))) * 100000;
        else return Number(value.slice(0, value.indexOf("C"))) * 10000000;
      });
      return newarry;
    } else {
      let arry = [20000000, 999999999];
      return arry;
    }
  };
  console.log(data);
  let pincodedata = async (pin) => {
    await axios
      .get(`https://backendapi.valuebuilders.in/api/pincode_data/${pin}/`)
      .then((response) => {
        console.log(response.data);
        setdata((prev) => {
          // Check if response.data is already present in the array
          const isDataAlreadyPresent = prev.some((item) => item.Pid === response.data.Pid);
          if (!isDataAlreadyPresent) {
            // Append response.data to the array if not already present
            return [...prev, ...response.data];
          }
          // Return the previous state if data is already present
          return prev;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let amountfilter = async (price) => {
    let obj = {"Price":price};
    await axios.post(`https://backendapi.valuebuilders.in/api/price_filter/`, obj)
      .then((response) => {
        console.log(response.data);
        setdata((prev) => {
          // Check if response.data is already present in the array
          const isDataAlreadyPresent = prev.some((item) => item.Pid === response.data.Pid);
          if (!isDataAlreadyPresent) {
            // Append response.data to the array if not already present
            return [...prev, ...response.data];
          }
          // Return the previous state if data is already present
          return prev;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let statefilter = async (st) => {
    let obj = {'State':st}
    try{
      let response=await axios.post(`https://backendapi.valuebuilders.in/api/states_filter/`,
       obj)
       console.log(response.data);
        setdata((prev) => {
          // Check if response.data is already present in the array
          const isDataAlreadyPresent = prev.some((item) => item.Pid === response.data.Pid);
          if (!isDataAlreadyPresent) {
            // Append response.data to the array if not already present
            return [...prev, ...response.data];
          }
          // Return the previous state if data is already present
          return prev;
        });}
        catch(error) {
        console.log(error);
      };
  };
  let districtfilter = async (dist) => {
    let obj = { District: dist };
    console.log(obj);
    await axios
      .post(`https://backendapi.valuebuilders.in/api/districts_filter/`, obj)
      .then((response) => {
        console.log(response.data);
        setdata((prev) => {
          // Check if response.data is already present in the array
          const isDataAlreadyPresent = prev.some((item) => item.Pid === response.data.Pid);
          if (!isDataAlreadyPresent) {
            // Append response.data to the array if not already present
            return [...prev, ...response.data];
          }
          // Return the previous state if data is already present
          return prev;
        });
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Server responded with status code:', error.response.status);
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received from server:', error.request);
        } else {
          // Something else happened while setting up the request
          console.error('Error setting up request:', error.message);}
      });
  };
  let doorfacingfilter = (dr) => {
    console.log(doorfacingarry);
    let obj = { "door_facing": dr };
     axios
      .post(`https://backendapi.valuebuilders.in/api/doorfaceing_filter/`, obj)
      .then((response) => {
        console.log(response.data);
        console.log("door works");
        setdata((prev) => {
          // Check if response.data is already present in the array
          const isDataAlreadyPresent = prev.some((item) => item.Pid === response.data.Pid);
          if (!isDataAlreadyPresent) {
            // Append response.data to the array if not already present
            return [...prev, ...response.data];
          }
          // Return the previous state if data is already present
          return prev;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let navigate=useNavigate()
  let submitreq = async () => {
    setdata([])
    try {
      if (Price.length > 0) amountfilter(Price);
      if (statearry.length > 0) statefilter(statearry);
      if (districtarry.length>0) districtfilter(districtarry);
      if (doorfacingarry.length>0) doorfacingfilter(doorfacingarry);
      if (pincode.length>0) pincodedata(pincode);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="flex">
      <div
      style={{ display: show == "show" ? "block" : "none" }}
      className="w-[350px] my-4 d-md-block h-fit transi"
    >
      <div className="container  p-2">
        <p className="d-none d-sm-block fw-bold text-xl mb-1">Filter</p>
        <div className="flex flex-wrap align-items-center gap-2">
          <p className="p-2 bg-white m-0 fw-semibold">Price : </p>
          {pricefilter.map((price, index) => {
            return (
              <button
                onClick={() => {
                  let cnrvtprice = convert(price);
                  setselectedprice((prev) => {
                    if (prev.includes(price))
                      return prev.filter((p) => p != price);
                    else return [...prev, price];
                  });
                  setPriceFiltered((prevPrices) => {
                    // Check if the inner array already exists in the outer array
                    const existingIndex = prevPrices.findIndex((innerArray) =>
                      innerArray.every(
                        (price, index) => price === cnrvtprice[index]
                      )
                    );
                    if (existingIndex !== -1) {
                      // If the inner array exists, remove it
                      return prevPrices.filter(
                        (_, index) => index !== existingIndex
                      );
                    } else {
                      // If the inner array doesn't exist, add it
                      return [...prevPrices, cnrvtprice];
                    }
                  });
                }}
                style={{
                  backgroundColor: selectedprice.includes(price)
                    ? "rgb(191,202,2)"
                    : "whitesmoke",
                  color: selectedprice.includes(price) ? "white" : "black",
                }}
                className="border-1 rounded p-2"
              >
                {price}
              </button>
            );
          })}
        </div>

        {/* Place */}
        {/* <div className='flex gap-2 mt-2 flex-wrap align-items-center '>
          <p className='p-2 fw-semibold m-0'>Place : </p>
          {
          locationfilter.map((place)=>{
            return(
<button onClick={()=>{
   setFilteredLocation((preloc) => {
    if (preloc.includes(place)) {
      return preloc.filter((p) => p !== place);
    } else {
      return [...preloc, place];
    }
  });
        }} 
   style={{backgroundColor: filteredlocation.includes(place) ? "rgb(191,202,2)":"whitesmoke",
  color: filteredlocation.includes(place)? "white": "black"}} 
  className='bg-slate-50 focus-within:bg-blue-600 text-slate-900 focus-within:text-slate-50 border-1 rounded p-2'>
  {place}
  </button>
            )
          })
         }
         </div> */}
        {/* Place filter finished */}
        <div className="flex justify-between my-2">
          <p className="fw-semibold m-0 py-2">State :</p>
          <select
            id="state"
            onChange={(e) => {
              setstatearry((prev) => {
                if (prev.includes(e.target.value)) return [...prev];
                else
                  return e.target.value.length > 0
                    ? [...prev, e.target.value]
                    : [...prev];
              });
            }}
            className="border-1 w-3/5 bg-white p-2"
          >
            <option value="">State</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamilnadu">Tamil Nadu</option>
            <option value="Andra Pradhesh">Andra Pradesh</option>
          </select>
        </div>
        {/* State filter array added */}
        <div
          style={{ display: statearry.length > 0 ? "flex" : "none" }}
          className="bgclr rounded-3xl w-full p-2 flex-wrap"
        >
          {statearry.map((st) => {
            return (
              <div className="p-2 w-fit flex gap-2 m-1 rounded-full px-3 bg-slate-50">
                <p className="m-0 text-sm">{st}</p>
                <img
                  onClick={() => {
                    setstatearry((prev) => {
                      return prev.filter((p) => p != st);
                    });
                  }}
                  src={require("../Asset/close (2).png")}
                  alt="close"
                  className="w-[10px] cursor-pointer h-[10px] "
                />
              </div>
            );
          })}
        </div>
        {/* State finish */}
        <div className="flex justify-between my-2">
          <p className="fw-semibold m-0 py-2">District :</p>
          <select
            id="district"
            onChange={(e) => {
              setdistrictarry((prev) => {
                if (prev.includes(e.target.value)) return [...prev];
                else
                  return e.target.value.length > 0
                    ? [...prev, e.target.value]
                    : [...prev];
              });
            }}
            className="border-1 w-3/5 bg-white p-2"
          >
            <option value="">District</option>
            <option value="Tirunelveli">Tirunelveli</option>
          </select>
        </div>
        {/* District filter array added */}
        <div
          style={{ display: districtarry.length > 0 ? "flex" : "none" }}
          className="bgclr rounded-3xl w-full p-2 flex-wrap"
        >
          {districtarry.map((st) => {
            return (
              <div className="p-2 w-fit flex gap-2 m-1 rounded-full px-3 bg-slate-50">
                <p className="m-0 text-sm">{st}</p>
                <img
                  onClick={() => {
                    setdistrictarry((prev) => {
                      return prev.filter((p) => p != st);
                    });
                  }}
                  src={require("../Asset/close (2).png")}
                  alt="close"
                  className="w-[10px] cursor-pointer h-[10px] "
                />
              </div>
            );
          })}
        </div>
        {/* District */}
        <div className="flex justify-between my-2">
          <p className="fw-semibold m-0 py-2">Door Facing :</p>
          <select
            id="door"
            onChange={(e) => {
              setdoorfacingarry((prev) => {
                if (prev.includes(e.target.value)) return [...prev];
                else return [...prev, e.target.value];
              });
            }}
            className="border-1 w-3/5 bg-white p-2"
          >
            <option value="">Facing</option>
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="North">North</option>
            <option value="South">South</option>
          </select>
        </div>
        {/* District filter array added */}
        <div
          style={{ display: doorfacingarry.length > 0 ? "flex" : "none" }}
          className="bgclr flex-wrap rounded-3xl w-full p-2"
        >
          {doorfacingarry.map((st) => {
            return (
              <div className="p-2 w-fit flex gap-2 m-1 rounded-full px-3 bg-slate-50">
                <p className="m-0 text-sm">{st}</p>
                <img
                  onClick={() => {
                    setdoorfacingarry((prev) => {
                      return prev.filter((p) => p != st);
                    });
                  }}
                  src={require("../Asset/close (2).png")}
                  alt="close"
                  className="w-[10px] cursor-pointer h-[10px] "
                />
              </div>
            );
          })}
        </div>
        {/* Door Facing */}

        <div className="flex justify-between my-2">
          <p className="fw-semibold m-0 py-2">Pincode :</p>
          <input
            type="number"
            value={pincode}
            onChange={(e) => {
              const enterpincode = e.target.value;
              if (enterpincode.length <= 6) {
                setpincode(enterpincode);
              }
            }}
            className="border-1 w-3/5 bg-white p-2"
          />
        </div>
        {/* Pincode finish */}

        <button
          onClick={submitreq}
          className="p-2 bgclr my-3 rounded"
        >
          Show Result
        </button>
      </div>
    </div>

{/* Propertyies */}

    </div>
  );
};

export default REFilter;
