const getters = {
  sidebar: state => state.app.sidebar,
  nav: state => state.app.nav,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters