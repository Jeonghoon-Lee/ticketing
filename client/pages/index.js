import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return <h1>{currentUser ? 'You are signed in' : 'You are NOT signed in'}</h1>;
};

// run during the server-side rendering
LandingPage.getInitialProps = async context => {
  console.log('LANDING PAGE');
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  return data;
  // using buildClient instead of the following code
  //
  // if (typeof window === 'undefined') {
  //   // we are on the server
  //   // request should be made to http://SERVICENAME.NAMESPACE.svc.cluster.local
  //   const { data } = await axios.get(
  //     'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
  //     {
  //       headers: req.headers,
  //       // {
  //       //   Host: 'ticketing.dev', // reference for ingress-nginx, it's part of header from client
  //       // },
  //     }
  //   );
  //   return data;
  // } else {
  //   // we are on the browser
  //   // requests can be made with a base url of ''
  //   const response = await axios.get('/api/users/currentuser');
  //   return response.data;
  // }
};

export default LandingPage;
