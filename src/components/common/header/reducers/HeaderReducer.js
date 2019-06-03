export const initialState = {
  menu: [
    {
      id: 1,
      label: 'Fale conosco',
      value: '0800 007 0017'
    },
    {
      id: 2,
      label: 'WhatsApp',
      value: '(41) 99871-8914'
    }
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
    // case 'changeTheme':
    //   return {
    //     ...state,
    //     theme: action.newTheme
    //   };
      
    default:
      return state;
  }
};