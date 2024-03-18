import { Carousel, Offcanvas } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePagination } from "./usePagination";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router";
import { filterationdata } from "./Datas";



const RealEstateProperties = (props) => {
  const [data, setdata] = useState([]);
  let {receivedData}=props
  useEffect(()=>{
    if(receivedData!=null){
      setdata(receivedData);
    }
    else{
       getdata();
    }
  },[receivedData])
  let [active, setactive] = useState("");
  let [search, setsearch] = useState("");
  let [anime, setanime] = useState("");
  let pricefilter = filterationdata.price;
  let [pincode, setpincode] = useState("");
  let [selectedprice, setselectedprice] = useState([]);
  const [Price, setPriceFiltered] = useState([]);
  const [statearry, setstatearry] = useState([]);
  const [districtarry, setdistrictarry] = useState([]);
  const [doorfacingarry, setdoorfacingarry] = useState([]);
  let convert = (price) => {
    let arry = [];
    if (price.indexOf("-") != -1) {
      let sep = price.indexOf("-");
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
  let pincodedata = async (pin) => {
    await axios
      .get(`https://backendapi.valuebuilders.in/api/pincode_data/${pin}/`)
      .then((response) => {
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
  let submitreq = async () => {
    try {
      if (Price.length > 0) amountfilter(Price);
      if (statearry.length > 0) statefilter(statearry);
      if (districtarry.length>0) districtfilter(districtarry);
      if (doorfacingarry.length>0) doorfacingfilter(doorfacingarry);
      if (pincode.length>0) pincodedata(pincode);
      setshow(false)
    } catch (err) {
      console.log(err);
    }
  };
  const itemsPerPage = 6;
  const { itemOffset, currentItems, pageCount, handlePageClick } =
  usePagination(data, itemsPerPage);
  
  useEffect(() => {
    // setactive("viewall");
    setanime("animate__fadeIn");
    
    const element = document.querySelector(".durationani");
    element.style.setProperty("--animate-duration", "4s");
    setTimeout(() => {
      setanime("");
    }, 2000);

  }, [currentItems]);
  let getdata = async () => {
    await axios
      .get(`https://backendapi.valuebuilders.in/api/property/`)
      .then((response) => {
        setdata(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // setdata()
        console.log(error);
      });
  };
  let searchfilter = async () => {
    let obj = { query: search };
    await axios
      .post(`https://backendapi.valuebuilders.in/api/data_search/`, obj)
      .then((response) => {
        setdata(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  let categorydata = (category) => {
    console.log("hiii");
    axios
      .get(`https://backendapi.valuebuilders.in/api/category/${category}/`)
      .then((response) => {
        setdata(response.data)
        console.log(response.data);
        console.log("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let subcategorydata = (category) => {
    console.log("hiii");
    axios
      .get(`https://backendapi.valuebuilders.in/api/sub_category/${category}/`)
      .then((response) => {
        console.log(response.data);
        setdata([])
        console.log("hellow from sub category");
        setdata(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let navigate = useNavigate();
  let [show, setshow] = useState(false);
  return (
    <div className="transi container mx-auto">
      <button className="flex my-2 float-right gap-2 align-items-center text-lg d-sm-none">
        {/* Filter */}
        <img
          loading="lazy"
          onClick={() => setshow(true)}
          className="w-[25px] h-[35px]  "
          src={require("../Asset/filter.png")}
          alt="filter"
        />
      </button>
      <Offcanvas show={show} className="transi" onHide={() => setshow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div
      className="w-[350px] my-4 h-fit transi"
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
            <option value="Tamil Nadu">Tamil Nadu</option>
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
          
        </Offcanvas.Body>
      </Offcanvas>

      {/* Computer screen */}
      <div
        style={{
          display:
            active == "building" ||
            active == "Villas" ||
            active == "Apartment" ||
            active == "House" ||
            active == "Commercial"
              ? "none"
              : "flex",
        }}
        className="flex container my-sm-4 justify-around mx-auto flex-wrap"
      >
        <p
          onClick={() => {
            setactive("viewall");
            getdata();
            sessionStorage.setItem("realestate", "viewall");
          }}
          style={{ color: active == "viewall" ? "green" : "" }}
          className="w-fit cursor-pointer p-2 hover:text-lime-500 fw-semibold poppins"
        >
          View All
        </p>
        <p
          onClick={() => {
            setactive("formland");
            categorydata("Formland");
            sessionStorage.setItem("realestate", "formland");
          }}
          style={{ color: active == "formland" ? "green" : "" }}
          className="w-fit cursor-pointer p-2 hover:text-lime-500 fw-semibold poppins"
        >
          Form Land
        </p>
        <p
          onClick={() => {
            setactive("plot");
            categorydata("Plot");
            sessionStorage.setItem("realestate", "plot");
          }}
          style={{ color: active == "plot" ? "green" : "" }}
          className="w-fit cursor-pointer p-2 hover:text-lime-500 fw-semibold poppins"
        >
          Plot
        </p>
        <p
          onClick={() => {
            setactive("resort");
            categorydata("Resort");
            sessionStorage.setItem("realestate", "resort");
          }}
          style={{ color: active == "resort" ? "green" : "" }}
          className="w-fit cursor-pointer p-2 hover:text-lime-500 fw-semibold poppins"
        >
          Resort
        </p>
        <p
          onClick={() => {
            setactive("building");
            categorydata("Buildings");
            sessionStorage.setItem("realestate", "building");
          }}
          style={{ color: active == "building" ? "green" : "" }}
          className="w-fit cursor-pointer p-2 hover:text-lime-500  fw-semibold poppins"
        >
          Buildings
        </p>
      </div>

      <div
        style={{
          display:
            active == "building" ||
            active == "Villas" ||
            active == "Apartment" ||
            active == "House" ||
            active == "Commercial"
              ? "flex"
              : "none",
        }}
        className="flex container my-4 justify-around mx-auto flex-wrap"
      >
        <p
          onClick={() => {
            setactive("viewall");
            getdata();
            sessionStorage.setItem("realestate", "viewall");
          }}
          style={{ color: active == "viewall" ? "green" : "" }}
          className="w-fit cursor-pointer p-2 hover:text-lime-500 fw-semibold poppins"
        >
          View All
        </p>
        <p
          onClick={() => {
            setactive("Apartment");
            subcategorydata("Apartment");
            sessionStorage.setItem("realestate", "Apartment");
          }}
          style={{ color: active == "Apartment" ? "green" : "" }}
          className="w-fit cursor-pointer p-2 hover:text-lime-500 fw-semibold poppins"
        >
          Apartment
        </p>
        <p
          onClick={() => {
            setactive("House");
            subcategorydata("House");
            sessionStorage.setItem("realestate", "House");
          }}
          style={{ color: active == "House" ? "green" : "" }}
          className="w-fit cursor-pointer p-2 hover:text-lime-500 fw-semibold poppins"
        >
          House
        </p>
        <p
          onClick={() => {
            setactive("Commercial");
            subcategorydata("Commercial");
            sessionStorage.setItem("realestate", "Commercial");
          }}
          style={{ color: active == "Commercial" ? "green" : "" }}
          className="w-fit cursor-pointer p-2 hover:text-lime-500 fw-semibold poppins"
        >
          Commercial
        </p>
        <p
          onClick={() => {
            setactive("Villas");
            subcategorydata("Villas");
            sessionStorage.setItem("realestate", "Villas");
          }}
          style={{ color: active == "Villas" ? "green" : "" }}
          className="w-fit cursor-pointer p-2 hover:text-lime-500  fw-semibold poppins"
        >
          Villas
        </p>
      </div>

      {/* search  bar */}
      <div className="w-fit ms-auto">
        <input
          className="border p-2 rounded mx-2"
          placeholder="search"
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={searchfilter} className="bgclr p-2 px-3 rounded">
          Search
        </button>
      </div>

      <div
        className={`${anime} animate__animated transi durationani flex  justify-around flex-wrap`}
      >
        {currentItems != undefined && currentItems != null
          ? currentItems.map((data, index) => {
              return (
                <div className="w-[20rem] xl:w-[22rem] rounded shadow m-2">
                  <Carousel className="h-[240px] my-carousel bg-slate-900 ">
                    {data.images != undefined && data.images != null
                      ? data.images.map((pic) => {
                          return (
                            <Carousel.Item  className="h-[240px]  align-items-center flex p-1" interval={1000}>
                              <img
                                className="rounded-lg w-fit h-full mx-auto"
                                src={pic.image}
                                alt="image5"
                              />
                            </Carousel.Item>
                          );
                        })
                      : ""}
                  </Carousel>
                  {/* COntent */}
                  <div className="mt-2 p-2 scroll-bar flex gap-2 flex-wrap overflow-y-scroll h-[300px]">
                    <p className="bg-slate-100 rounded p-2 w-fit">
                      <span className="textclr"> Property id </span> : {data.property_id}
                    </p>

                    <p className="bg-slate-100 rounded p-2 w-fit">
                      <span className="textclr"> Property </span> :
                      { data.sub_category!=undefined ? data.sub_category : data.category}
                    </p>
                    <p className="bg-slate-100 rounded p-2 w-fit">
                      <span className="textclr"> Price </span> : {data.price}
                    </p>
                    {
                      data.total_area!=undefined && data.total_area!=null ?
                      <p className="bg-slate-100 rounded  p-2 w-fit">
                        <span className="textclr"> Total Area </span>:{" "}
                        {data.total_area}
                      </p>
                     :
                      ""
                    }
                    {data.door_facing!=null ?
                      <p className="bg-slate-100 rounded  p-2 w-fit">
                        <span className="textclr"> Door facing </span>:{" "}
                        {data.door_facing}
                      </p>
                     :
                      ""}
                       { 
                      data.description!=null && data.description!=undefined ?
                        <p className="bg-slate-100 rounded  p-2 w-fit">
                          <span className="textclr"> Description </span>:{" "}
                          {data.description}
                        </p>
                       :
                        ""} 
                    <p className="bg-slate-100 rounded p-2 w-fit">
                      <span className="textclr"> Address </span> : {data.address_line1 +" "}
                      { data.address_line2!=undefined? data.address_line2:" "},
                      {" "+data.District +" "},
                      {" "+data.state+" "},
                      {" "+data.pincode+"."}
                    </p>
                   
                    
                    <div className="flex justify-around w-full">
                      <button className="p-2 bgclr border rounded">
                        Get Owner Details
                      </button>
                      <button
                        onClick={() => {
                          navigate(`/realestate/${data.property_id}`);
                        }}
                        className="p-2 fontclr bgclr border rounded"
                      >
                        View more{" "}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : "Loading ...."}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<<"
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  );
};

export default RealEstateProperties;
