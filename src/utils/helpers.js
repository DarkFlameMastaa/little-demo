import axios from 'axios';

function searchGit() {
  // return axios.get(`https://api.github.com/users/${uname}`)
  //   .then((getData) => ({
  //   data:getData.data
  // }))
  //   .catch(function (error) {
  //     alert(error);
  //   });
  let hoho= () => ({
    lolo:"jojo"
  });
  console.log(hoho());
  var single = a => a
  console.log(single('hello, world'));


  var add = (a, b) => a + b
  console.log(add(3, 8));

}

function getJson() {
  return axios.get(`https://raw.githubusercontent.com/DarkFlameMastaa/little-demo-data/master/card.json?${Math.random()}`)
    .then((getData) => ({
    data:getData.data
  }))
    .catch(function (error) {
      alert(error);
    });


}

export {searchGit};
export {getJson};
