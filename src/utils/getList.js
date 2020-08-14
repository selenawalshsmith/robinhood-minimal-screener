/*
module.exports = {
  getToplist: function(){
    console.log("HelloWorld from utils/getList.js")
  }
}
*/
import axios from 'axios';
export default function getTopList() {
  const url = "midlands/tags/tag/100-most-popular/";
  axios(url)
  .then(function (response) {
    //console.log(response.data.instruments);
    return response.data.instruments;
  })
  .catch(function (error) {
    console.log(error);
  });
/*q
const url = "midlands/tags/tag/100-most-popular/"; // site that doesn’t send Access-Control-*
fetch(url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
*/
}
