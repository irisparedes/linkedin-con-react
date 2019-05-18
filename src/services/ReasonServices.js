const url = 'https://randomuser.me/api/?results=50';

const fetchReasons = () => fetch(url).then(response => response.json());

export {fetchReasons};