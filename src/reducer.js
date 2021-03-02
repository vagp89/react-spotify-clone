export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
  //remove after finished develooping..
  "BQDQHfveVCoLm5cHjO0IO4NGtF8iOv4X_uYdoguzXgXPU2_5CJi9RJfJluM9Y9olXcavVYP7dz3k99GuUwmGPww9NlwkQKNipCY7NWQ__mrRqP334PGt5TJlBGxovbLnfCp27FwBEz2ebR3Axtl-9d-qO6IdbdSXzuefKWze6sTQzSwlWofc",
};

const reducer = (state, action) => {
  console.log("here is the action", action);

//action -> type, [payload]
  switch(action.type){
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token
        };
      case "SET_PLAYLISTS":
        return{
          ...state,
          playlists:action.playlists
        }
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        }

     default:
       return state;
  }
}

export default reducer;
