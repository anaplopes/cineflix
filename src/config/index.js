const DOMINIO = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080'
      : 'https://app-comedyflix.herokuapp.com';

export default {
    DOMINIO,
};
