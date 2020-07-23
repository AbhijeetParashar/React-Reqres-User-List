const dummyLoginCredials = {
  getUserList: getUserList,
};

function getUserList() {
  return [
    {
      userName: "george.bluth@reqres.in",
      password: "welcome",
    },
    {
      userName: "janet.weaver@reqres.in",
      password: "welcome",
    },
    {
      userName: "emma.wong@reqres.in",
      password: "welcome",
    },
    {
      userName: "eve.holt@reqres.in",
      password: "welcome",
    },
    {
      userName: "charles.morris@reqres.in",
      password: "welcome",
    },
    {
      userName: "tracey.ramos@reqres.in",
      password: "welcome",
    }
  ];
}

export default dummyLoginCredials;
