// import env from "./ENV"
// import axios from "axios"

// const getApiData = (parameters = {}, domain = env.domain) => axios.get(`${domain}/api/v1/data/?${parameters}`)
//   .then(function (response) {
//     // handle success
//     if (!Array.isArray(data) || !data.length) {
//       return []
//     }
//     return data
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
// })

// const fetchData = () => {
//     return (dispatch) => {
//         dispatch(getCategoriesRequest());

//         axios
//             .all([axios.get(API_URL_CATEGORIES), axios.get(API_URL_ALL_ITEMS)])
//             .then(
//                 axios.spread((result1, result2) => {
//                     const categories = result1.data;
//                     const allItems = result2.data;
//                     dispatch(getCategoriesSuccess(categories));
//                     dispatch(getAllItemsSuccess(allItems));
//                 })
//             )
//             .catch((error) => {
//                 const errMsg = error.message;
//                 dispatch(getCategoriesFailed(errMsg));
//             });
//     };
// };

// componentDidMount() {
//     fetch("https://stream-restaurant-menu-svc.herokuapp.com/category")
//         .then((response) => response.json())
//         .then((result) => {
//             this.setState({ categories: result });
//         });
// }

// useEffect(() => {
//     fetch("https://stream-restaurant-menu-svc.herokuapp.com/category")
//         .then((res) => res.json())
//         .then((res) => {
//             setCategories(res);
//         });
// }, []);
