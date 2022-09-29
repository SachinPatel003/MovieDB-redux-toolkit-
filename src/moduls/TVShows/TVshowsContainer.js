// // import { Box } from "@mui/material";
// // import Loader from "../../assets/images/1.gif";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTvContent } from "./redux/action";
// import TVShows from "./TVshows";

// const TVshowsContainer = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTvContent());
//     // eslint-disable-next-line
//   }, []);

//   const data = useSelector((state) => state.TvReducer.products);
  
// //   const status = useSelector((state) => state.productStatus.status);

// //   if (status === "Loading") {
// //     return (
// //       <Box display="flex" justifyContent="center" className="loader">
// //         <img src={Loader} alt="NA..." />
// //       </Box>
// //     );
// //   }

//   return <TVShows data={data} />;
// };

// export default TVshowsContainer;

import TVShows from "./TVshows";
import React from "react";
import { useGettvshowQuery } from "../../store/API/TVshow";

const TVshowsContainer = () => {
  const { data, isLoading, error, isFetching, isSuccess } = useGettvshowQuery();
  return (
    <>
      {isLoading && <h1>Loading..</h1>}
      {isFetching && <h1>Fetching..</h1>}
      {error && <h1>Error..</h1>}
      {isSuccess && <TVShows data={data.results} />}
    </>
  );
};

export default TVshowsContainer;
