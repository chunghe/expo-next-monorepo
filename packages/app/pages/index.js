import {View, Text} from 'react-native';
import {Header, Home} from '@shared/components';

export default function App(props) {
  return (
    <>
      <Header />
      <Home coins={props.coins} />
    </>
  );
}

export async function getServerSideProps(context) {
  const url = 'https://api.github.com/gists/1e93509eb9e78250b5dacc2da86c4eed';
  const res = await fetch(url);
  const json = await res.json();
  const coins = JSON.parse(json.files['coins.json'].content);

  if (!json) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {coins}, // will be passed to the page component as props
  };
}
